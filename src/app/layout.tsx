import './globals.css'

import { Metadata } from 'next'
import { Varela } from 'next/font/google'
import { cookies } from 'next/headers'

import { MouseSmokeEffect } from '@/features/mouseEffect/MouseEffect'
import { imgMy } from '@/shared/assets/images/images'
import { COOKIES_KEYS } from '@/shared/consts/localeStogrageConsts'

const inter = Varela({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Evgeniy Zgirdan',
  description: 'React.js and Next.js Frontend developer',
  openGraph: {
    title: 'Evgeniy Zgirdan',
    description: 'React.js and Next.js Frontend developer',
    images: imgMy.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookie = cookies().get(COOKIES_KEYS.THEME)?.value || 'dark'
  const promise = new Promise((resolve) => {
    resolve(2)
  })
  promise.then(
    () => null,
    () => null
  )

  return (
    <html lang={'en'} className={`laptop:overflow-x-hidden ${cookie}`}>
      <link rel="icon" href="/sa16.svg" sizes="16x16x" type={'image/svg'} />
      <body
        className={`${inter.className} transition-all duration-500 dark:bg-[#1a1a1a] bg-[#f3f4f6] `}
      >
        <MouseSmokeEffect>{children}</MouseSmokeEffect>
      </body>
    </html>
  )
}
