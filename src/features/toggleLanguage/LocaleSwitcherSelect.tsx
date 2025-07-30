'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'

import { usePathname, useRouter } from '@/i18n/navigation'

export const ToggleSwitch = () => {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const toggleLang = () => {
    const newLocale = params.locale === 'en' ? 'ru' : 'en'

    startTransition(() => {
      router.push(pathname, { locale: newLocale })
    })
  }

  return (
    <div className="flex items-center gap-3 mt-4 ">
      <span
        className={`text-sm font-semibold transition-colors ${
          params.locale === 'ru'
            ? 'text-green-600'
            : 'dark:text-white text-gray-50'
        }`}
      >
        RU
      </span>

      <div
        role="button"
        tabIndex={0}
        aria-label="Toggle language"
        onClick={toggleLang}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleLang()
          }
        }}
        className="w-12 h-6 bg-gray-50 rounded-full relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <motion.div
          className="w-5 h-5 rounded-full bg-green-600 absolute top-0.5 "
          layout
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
          animate={{
            x: params.locale === 'ru' ? 4 : 24, // 24px — ширина тоггла минус бегунок
          }}
        />
      </div>

      <span
        className={`text-sm font-semibold transition-colors ${
          params.locale === 'en'
            ? 'text-green-600'
            : 'dark:text-white text-gray-50'
        }`}
      >
        EN
      </span>
    </div>
  )
}
