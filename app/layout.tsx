import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import LayoutFooter from "@/components/footer";
import LayoutHeader from "@/components/header";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sample UI',
  description: 'Developed by Issah Muniru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={`bg-white  ${montserrat.className}`}>
        <LayoutHeader/>
        <main>{children}</main>
        <LayoutFooter/>
      </body>
    </html>
  )
}
