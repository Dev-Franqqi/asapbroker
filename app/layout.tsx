import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Opencontextprovider } from "./mycomps/contexts/Opencontext";
import Navbar from "./mycomps/Navbar";
import Wrapblur from "./mycomps/Wrapblur";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./mycomps/Footer";
import Link from "next/link";
import Whatsapp from '../public/pngwing.com.png'
import Image from "next/image";
export const metadata: Metadata = {
  title: "Elite Trading Hub", 
  description: "Elite Trading Hub is your premier destination for all things trading. Get access to top-notch trading tools, expert analysis, and a vibrant community of traders. Join us to elevate your trading experience and reach new heights in the world of trading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      
      {/* <script src="//code.tidio.co/cnxwxi4dj6anrldkxsxiqpoqtiiouj8m.js" async></script> */}
      <body className={inter.className + ' overflow-x-hidden'}>
        <Opencontextprovider>
          <Navbar />
          
        <Wrapblur>
        {children}
          <Footer />
        </Wrapblur>
        

        </Opencontextprovider>
        <div style={{ position: 'fixed', bottom: '40px', right: '20px', zIndex: '1000' }}>
          <Link href='https://wa.me/+17707568701' target="_blank">
  <Image src={Whatsapp} alt='' width='50' height='50' />
          </Link>
</div>

        
{/* <script src={'./mycomps/TawktoScript.js'} type="text/javascript">

</script> */}
  

       </body>
    </html>
  );
}
