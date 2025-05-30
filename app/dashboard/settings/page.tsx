"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getDocs, collection, query, where } from "firebase/firestore";
import Image from "next/image";
import { Person, B } from "../page";
import { db } from "@/components/ui/firebase";
import { Button } from "@/components/ui/button";
import { getAuth, signOut } from "firebase/auth";
import Loadingcomp from "@/app/mycomps/Loading";
import Logo from "@/public/elitlogo.png";

export default function Settings() {
  const router = useRouter();
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<Person | undefined>();

  const setToDarkMode = () => {
    setDarkMode(true);
    Cookies.set("dark", "true");
  };

  const setLightMode = () => {
    setDarkMode(false);
    Cookies.set("dark", "false");
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Cookies.remove("User");
        router.push("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setPhotoDataUrl(dataUrl);
        localStorage.setItem("uploadedPhoto", dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const dark = Cookies.get("dark");
    if (dark) {
      setDarkMode(dark === "true");
    }

    const userCookie = Cookies.get("User");
    if (userCookie) {
      const cookieValue: B = JSON.parse(userCookie);
      const q = query(collection(db, "UserInfo"), where("uid", "==", cookieValue.uid));
      if (!loading) return;
      getDocs(q).then((snapshot) => {
        if (snapshot.docs.length > 0) {
          setUser(snapshot.docs[0].data() as Person);
          setLoading(false);
        }
      });
    } else {
      router.push("/login");
    }

    const storedPhoto = localStorage.getItem("uploadedPhoto");
    if (storedPhoto) {
      setPhotoDataUrl(storedPhoto);
    }
  }, [loading, router]);

  return (
    <>
      {loading ? (
        <Loadingcomp />
      ) : (
        <div className="bg-gray-900 min-h-screen text-white">
          <nav className="pt-4 px-4 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => router.push("/dashboard")}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#8670D6] cursor-pointer"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              <Image src={Logo} alt="Elitetradinghub" width={24} height={24} className="object-contain" />
              <header className="text-sm font-bold text-white">ELITE TRADING HUB</header>
            </div>
            {/* Dark mode toggle (commented out as in original) */}
            {/* {!darkMode && (
              <svg
                onClick={setToDarkMode}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#8670D6]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
            {darkMode && (
              <svg
                onClick={setLightMode}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#8670D6]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )} */}
          </nav>

          <section className="py-12 flex flex-col items-center">
            <div className="container mx-auto px-4 max-w-md">
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8">Settings</h1>
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-[#8670D6]/20">
                <div className="flex flex-col items-center mb-6">
                  {photoDataUrl ? (
                    <Image
                      src={photoDataUrl}
                      width={80}
                      height={80}
                      className="rounded-full border border-[#8670D6]/30 mb-4"
                      alt="Profile"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                      <span className="text-gray-400 text-sm">No Photo</span>
                    </div>
                  )}
                  <label
                    htmlFor="photo-upload"
                    className="bg-[#8670D6] text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#8670D6]/80 cursor-pointer"
                  >
                    Upload Photo
                  </label>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Full Name</p>
                    <div className="w-full p-3 bg-gray-700 rounded-md text-white font-medium">
                      {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email</p>
                    <div className="w-full p-3 bg-gray-700 rounded-md text-white font-medium">
                      {user ? user.email : "Loading..."}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Phone</p>
                    <div className="w-full p-3 bg-gray-700 rounded-md text-white font-medium">
                      {user ? user.phone : "Loading..."}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Country</p>
                    <div className="w-full p-3 bg-gray-700 rounded-md text-white font-medium">
                      {user ? user.country : "Loading..."}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">UID</p>
                    <div className="w-full p-3 bg-gray-700 rounded-md text-white font-medium">
                      {user ? user.uid : "Loading..."}
                    </div>
                  </div>
                  <Button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600"
                  >
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}