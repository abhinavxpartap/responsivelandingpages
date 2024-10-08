import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from './components/Navbar'
// import Barrier from './components/Barrier'
// import Footer from './components/Footer'
import { GlobalContextProvider } from './Newpage/Context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PRACTICE 1',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        {/* <Footer/> */}
        {children}</body>
    </html>
  )
}
