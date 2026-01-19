'use client'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

import { navBarBlocks } from '@/shared/consts/sidebarMenu'
import { scrollToEl } from '@/shared/helpers/scrollTo'
import { P14 } from '@/shared/ui/Typography'

import { useNavScroll } from './useNavScroll'

export const Navbar = () => {
  const activeId = useNavScroll('content-block', navBarBlocks[0].id)
  const t = useTranslations('Menu')

  return (
    <nav>
      <ul className={'space-y-3'}>
        {navBarBlocks.map(({ id }) => (
          <MenuItem key={id} active={activeId === id} id={id}>
            {t(id)}
          </MenuItem>
        ))}
      </ul>
    </nav>
  )
}

const MenuItem = ({
  id,
  active,
  children,
}: {
  id: string
  active: boolean
  children: ReactNode
}) => {
  return (
    <li
      className={`flex items-center transition gap-2 ${
        active ? '' : 'group opacity-50 scale-y-90'
      }`}
    >
      <div
        className={`animated-bar dark:bg-white bg-green-600  ${
          active ? 'active' : 'group-hover:w-[60px]'
        }`}
      />
      <button
        onClick={() => scrollToEl(id)}
        className={active ? '!text-mainGreen' : ''}
      >
        <P14
          className={'text-green-600 dark:text-white font-semibold uppercase'}
        >
          {children}
        </P14>
      </button>
    </li>
  )
}
