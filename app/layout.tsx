import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://savvydentalimplants.com'),  // TODO: Update to your actual domain

  title: {
    default: 'Essex Dental | Find Elite Dental Implant Specialists',
    template: '%s | Essex Dental',
  },

  description:
    'Connecting patients with verified dental implant specialists for permanent tooth replacement solutions across the UK.',

  keywords: [
    'dental implants',
    'dental implant specialist',
    'tooth replacement',
    'dental implants UK',
    'implant dentist',
    'full arch implants',
    'all-on-4 implants',
  ],

  authors: [{ name: 'Essex Dental' }],
  creator: 'Essex Dental',
  publisher: 'Essex Dental',

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },

  openGraph: {
    type: 'website',
    url: 'https://savvydentalimplants.com',  // TODO: Update to your actual domain
    title: 'Essex Dental | Elite Dental Implant Specialist Network',
    description:
      'Find verified dental implant specialists across the UK. Permanent solutions. Trusted experts.',
    siteName: 'Essex Dental',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Essex Dental Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Essex Dental | Dental Implant Specialists',
    description:
      'Connecting patients with the top dental implant specialists across the UK.',
    images: ['/icon-512x512.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
