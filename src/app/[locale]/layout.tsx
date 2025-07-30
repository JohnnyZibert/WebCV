import './globals.css'

import { Metadata } from 'next'
import { Varela } from 'next/font/google'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

import { MouseSmokeEffect } from '@/features/mouseEffect/MouseEffect'
import { routing } from '@/i18n/routing'
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

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(COOKIES_KEYS.THEME)?.value || 'dark'
  const messages = await getMessages()
  const promise = new Promise((resolve) => {
    resolve(2)
  })
  promise.then(
    () => null,
    () => null
  )

  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={`laptop:overflow-x-hidden ${cookie}`}>
      <body
        className={`${inter.className} transition-all duration-500 dark:bg-[#1a1a1a] bg-[#f3f4f6] `}
      >
        <MouseSmokeEffect>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </MouseSmokeEffect>
      </body>
    </html>
  )
}
