import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://happybirthdayynono-one.vercel.app/'),
  title: 'Happy Birthday Nabil! 🎂',
  description: 'A special birthday message for Nabil 🤍',
  openGraph: {
    title: 'Happy Birthday Nabil! 🎂',
    description: 'A special birthday message for Nabil 🤍',
    url: 'https://happybirthdayynono-one.vercel.app/',
    siteName: 'Birthday Gift',
    type: 'website',
    images: [
      {
        url: 'https://happybirthdayynono-one.vercel.app//images/og-cat.jpg',
        secureUrl: 'https://happybirthdayynono-one.vercel.app//images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Happy Birthday Nabil Cat 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday Nabil! 🎂',
    description: 'A special birthday message for Nabil 🤍',
    images: ['https://happybirthdayynono-one.vercel.app//images/og-cat.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}