import type { Metadata } from "next";


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
      
      {/* <script src="//code.tidio.co/2p8xztwcpzlaiirgh0ujroghjx24uba7.js" async></script>      */}
      <script src="//code.tidio.co/cnxwxi4dj6anrldkxsxiqpoqtiiouj8m.js" async></script>
      <body>
       
        {children}
        

        
{/* <script src={'./mycomps/TawktoScript.js'} type="text/javascript">

</script> */}

       </body>
    </html>
  );
}
