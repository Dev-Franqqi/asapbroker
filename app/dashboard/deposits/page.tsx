'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import {  FaCopy, FaUpload } from 'react-icons/fa';
import { RxArrowLeft } from 'react-icons/rx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import useUser from '@/app/mycomps/hooks/useUser';
import { IUser } from '@/app/mycomps/contexts/Usercontext';
import {  db, storage } from '@/components/ui/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import Cookies from 'js-cookie';

// Type for the copied state
interface CopiedState {
  btc: boolean;
  eth: boolean;
  usdt: boolean;
}

export default function DepositPage() {
  const router = useRouter();
  const { user, setUser } = useUser(); // Assumes useUser returns { user: IUser, setUser: (user: IUser) => void }
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<CopiedState>({ btc: false, eth: false, usdt: false });
  const [file, setFile] = useState<File | null>(null);
  const [cryptoType, setCryptoType] = useState<string>('BTC');
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Hardcoded wallet addresses (replace with dynamic/secure addresses in production)
  const walletAddresses: Record<string, string> = {
    btc: 'bc1qgy3erss0hh3v9mttlt86y3gtm7dmnyu0cfaa3y',
    eth: '0xbC942961e8dA31E3C7975B1ce6DD90A441756723',
    usdt: 'TAqzp47KzG98HM3RMkytq9hrx4WXjywpZe',
  };

  useEffect(() => {
    if (user.uid) {
      setIsLoading(false);
      return;
    }

    const userCookie = Cookies.get('User');
    if (!userCookie) {
      router.push('/login');
      return;
    }

    let parsedUser: { uid?: string } | null = null;
    try {
      parsedUser = JSON.parse(userCookie);
    } catch (err) {
      setError('Invalid user data');
      console.log(err)
      router.push('/login');
      return;
    }

    if (!parsedUser?.uid) {
      setError('User UID missing');
      router.push('/login');
      return;
    }

    const getUserDocs = async () => {
      try {
        const usersRef = collection(db, 'UserInfo');
        const q = query(usersRef, where('uid', '==', parsedUser!.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0].data() as IUser;
          setUser(userDoc);
          Cookies.set('userDoc', JSON.stringify(userDoc), { expires: 1 });
        } else {
          setError('No user found.');
        }
      } catch (err) {
        setError('Error fetching user data.');
        console.error('Fetch user error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getUserDocs();
  }, [user, setUser, router]);

  // Copy wallet address to clipboard
  const copyToClipboard = (address: string, type: keyof CopiedState) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
    });
  };

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setUploadStatus('');
    } else {
      setUploadStatus('Please select a valid image file.');
    }
  };

  // Handle screenshot upload
  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    setUploadStatus('Uploading...');
    try {
      const userId = user.uid;
      const storageRef = ref(storage, `screenshots/${userId}/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // Save metadata to Firestore
      await addDoc(collection(db, 'Deposits'), {
        userId,
        cryptoType,
        screenshotURL: downloadURL,
        timestamp: new Date().toISOString(),
        status: 'pending',
      });

      setUploadStatus('Screenshot uploaded successfully!');
      setFile(null);
      setCryptoType('BTC');
    } catch (err) {
      console.error('Upload error:', err);
      setUploadStatus('Failed to upload screenshot. Please try again.');
    }
  };

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg flex justify-between items-center">
          <span>{error}</span>
          <button
            onClick={() => setError('')}
            className="text-red-700 dark:text-red-300 hover:text-red-900 dark:hover:text-red-100 font-semibold"
            aria-label="Dismiss error"
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }

  if (isLoading || !user.uid) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <Skeleton className="h-12 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
        <Skeleton className="h-96 w-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-gray-900 transition-colors duration-300">
  {/* Navbar */}
  <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-950 to-gray-900 text-white shadow-md shadow-gray-800">
    <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
      <div className="flex items-center gap-x-3">
        <button
          onClick={() => router.push('/dashboard')}
          className="p-2 rounded-md hover:bg-gray-800 transition-colors"
          aria-label="Back to dashboard"
        >
          <RxArrowLeft className="text-xl" />
        </button>
        <span className="font-bold text-lg tracking-tight">Deposit</span>
      </div>
    </div>
  </nav>

  {/* Main Content */}
  <main className="p-6 max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="bg-gray-800 rounded-xl shadow-md shadow-gray-800 border border-gray-700 p-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-white">
        Deposit Cryptocurrency
      </h1>
      <p className="text-sm text-gray-400 mt-2">
        Send BTC, ETH, or USDT to the wallet addresses below. Upload a screenshot of your payment confirmation to verify your deposit.
      </p>
    </div>

    {/* Wallet Addresses Section */}
    <div className="mt-6 bg-gray-800 rounded-xl shadow-md shadow-gray-800 border border-gray-700 p-6 animate-fade-in">
      <h2 className="text-lg font-semibold text-white mb-4">
        Wallet Addresses
      </h2>
      <div className="space-y-4">
        {(['btc', 'eth', 'usdt'] as const).map((type) => (
          <div key={type} className="flex items-center gap-x-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-200">
                {type.toUpperCase()} Address
              </label>
              <div className="mt-1 flex items-center gap-x-2">
                <Input
                  value={walletAddresses[type]}
                  readOnly
                  className="bg-gray-700 text-gray-200 border-gray-600 cursor-not-allowed"
                />
                <Button
                  onClick={() => copyToClipboard(walletAddresses[type], type)}
                  className="bg-gradient-to-r from-[#8670FD] to-[#6B54D3] text-white hover:from-[#9381FF] hover:to-[#7C66E4] transition-all duration-300"
                  aria-label={`Copy ${type.toUpperCase()} address`}
                >
                  {copied[type] ? 'Copied!' : <FaCopy />}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Screenshot Upload Section */}
    <div className="mt-6 bg-gray-800 rounded-xl shadow-md shadow-gray-800 border border-gray-700 p-6 animate-fade-in">
      <h2 className="text-lg font-semibold text-white mb-4">
        Upload Payment Confirmation
      </h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-200">
            Cryptocurrency
          </label>
          <select
            value={cryptoType}
            onChange={(e) => setCryptoType(e.target.value)}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-[#8670FD] focus:border-[#8670FD] sm:text-sm text-gray-200"
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-200">
            Payment Screenshot
          </label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-[#8670FD] focus:border-[#8670FD] sm:text-sm text-gray-200"
          />
          {file && (
            <p className="mt-2 text-sm text-gray-400">
              Selected: {file.name}
            </p>
          )}
        </div>
        <Button
          onClick={handleUpload}
          disabled={!file || uploadStatus === 'Uploading...'}
          className="w-full bg-gradient-to-r from-[#8670FD] to-[#6B54D3] text-white font-semibold py-3 rounded-lg hover:from-[#9381FF] hover:to-[#7C66E4] transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          aria-label="Upload screenshot"
        >
          <FaUpload className="mr-2" /> Upload Screenshot
        </Button>
        {uploadStatus && (
          <p
            className={`mt-2 text-sm ${
              uploadStatus.includes('success')
                ? 'text-[#8670FD]'
                : uploadStatus.includes('Uploading')
                ? 'text-gray-400'
                : 'text-red-400'
            }`}
          >
            {uploadStatus}
          </p>
        )}
      </div>
    </div>
  </main>
</div>
  );
}