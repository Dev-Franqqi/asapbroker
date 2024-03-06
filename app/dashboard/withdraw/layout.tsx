
import { Toaster } from "@/components/ui/sonner"





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster className="dark:text-white"/>

    </html>
  );
}
