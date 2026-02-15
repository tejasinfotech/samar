import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Industrial Minerals & Wooden Products',
  description: 'Premium supplier of industrial minerals, wooden boxes, and quality pallets',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
