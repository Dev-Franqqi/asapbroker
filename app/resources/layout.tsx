

import Navs from "./Navs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navs />
        {children}
        
{/* <script src={'./mycomps/TawktoScript.js'} type="text/javascript">

</script> */}

       </body>
    </html>
  );
}
