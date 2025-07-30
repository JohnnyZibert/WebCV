'use client'

import React, { useEffect, useState } from 'react'

import { getThemeFromCookie } from '@/shared/helpers/getThemeFromCookie'
import { setThemeToCookie } from '@/shared/helpers/setThemeToCookie'
import { ITheme } from '@/shared/lib/types/common'
import { Switch } from '@/widgets/providers/theme/Switch'

import { useListenerTheme } from './useListenerTheme'

export const ThemeSwitcherButton = () => {
  const theme = useListenerTheme()

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const handleSwitchTheme = () => {
    if (typeof window === 'undefined') return

    const currentTheme = getThemeFromCookie() as ITheme

    if (currentTheme === 'dark') {
      setThemeToCookie('light')
    } else if (currentTheme === 'light') {
      setThemeToCookie('dark')
    } else {
      const prefersDark = window.matchMedia?.(
        '(prefers-color-scheme: dark)'
      ).matches
      setThemeToCookie(prefersDark ? 'light' : 'dark')
    }
  }

  if (!hasMounted) return null // важно для предотвращения hydration mismatch

  return (
    <Switch
      isDarkMode={theme === 'dark'}
      handleSwitchTheme={handleSwitchTheme}
    />
  )
}
