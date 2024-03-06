"use client"
import { ChangeEvent, useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Logo from "../../../public/elitlogo.png"
import { getDocs } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { query } from "firebase/firestore"
import { where } from "firebase/firestore"
import Image from "next/image"
import { Person } from "../page"
import { db } from "@/components/ui/firebase"
import { B } from "../page"
import { Button } from "@/components/ui/button"
import { getAuth, signOut } from "firebase/auth";
export default function Settings(){
    const router = useRouter()
    const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);

    const [darkMode,setdarkMode] = useState(false)
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState<Person>()
    const handleLogout = ()=>{
        const auth = getAuth();
signOut(auth).then(() => {
  Cookies.remove('User')
  router.push('/')
}).catch((error) => {
  
});
    }
    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const dataUrl = reader.result as string;
            setPhotoDataUrl(dataUrl);
            localStorage.setItem('uploadedPhoto', dataUrl); // Store in local storage
          };
          reader.readAsDataURL(file);
        }
      };
      
      
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }
    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setdarkMode(true)
          }
        }
        else{
          setdarkMode(false)
        }
        
          const userCookie = Cookies.get('User');
          if(userCookie){
              const cookieValue:B  = JSON.parse(userCookie)
              const q = query(
                  collection(db,"UserInfo"),
                  where("uid","==",`${cookieValue.uid}`)
              )
              if(!loading ){
                  return
              }
              else{
                  
                  getDocs(q).then(snapshot=>{
                      setUser(snapshot.docs[0].data() as Person)
                      getDocs(q).then(snapshot=>{
                          setUser(snapshot.docs[0].data() as Person)
                              
                          console.log(user)
                      })
                  })
              }
              }
              
              
          
          else{
              router.push('/login')
          }
  
          if(user){
          setLoading(false)
          }

          const storedPhoto = localStorage.getItem('uploadedPhoto');
          if (storedPhoto) {
            setPhotoDataUrl(storedPhoto);
          }
      
      },[user,loading,router])

    return(

        <>

        {loading?<div>Loading...</div>:  <div className={darkMode?'dark bg-[#0d0f29] h-screen text-white':'text-neutral-800'}>
        <nav className="pt-3 px-2 flex justify-between">


<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push('/dashboard')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>


<Image src={Logo} alt="" />

{!darkMode &&  <svg
onClick={setToDarkMode}
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-6 h-6 mt-1 "
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
/>
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}
</nav>

<main className="p-4 pt-10">

<div className="flex gap-x-2">
{photoDataUrl && (
        
          <Image src={photoDataUrl} width={50} height={50} className="rounded-full" alt="Uploaded" />
      
      )}
<input type="file" accept="image/*" onChange={handleFileUpload} />

</div>

<p className="mt-5 text-sm">Full Name</p>

<div className="w-full p-2 pt-3 font-medium h-14 border dark:border-gray-600 rounded-md">
    {`${user?.firstname} ${user?.lastname}`}

</div>
<p className="mt-5 text-sm">Email</p>

<div className="w-full p-2 pt-3 font-medium h-14 border dark:border-gray-600 rounded-md">
    {`${user?.email}`}

</div>
<p className="mt-5 text-sm">Country</p>

<div className="w-full p-2 pt-3 font-medium h-14 border dark:border-gray-600 rounded-md">
    {`${user?.country}`}

</div>
<p className="mt-5 text-sm">UID</p>

<div className="w-full p-2 pt-3 font-medium h-14 border dark:border-gray-600 rounded-md">
    {`${user?.uid}`}

</div>


<Button onClick={handleLogout} className="bg-red-500 text-white text-semibold mt-2">Log out</Button>
   

  





</main>
    
    


          

        </div>
        }
       
        
        
        </>
    )
}