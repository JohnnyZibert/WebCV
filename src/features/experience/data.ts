import { useTranslations } from 'next-intl'

export const useExperienceData = () => {
  const t = useTranslations('Experience')
  return [
    {
      date: t('dex.date'),
      organization: 'DEX technologies',
      href: 'https://dex-it.ru/',
      position: t('dex.position'),
      description: t.raw('dex.description'),
      chips: [
        'React',
        'Next.js',
        'Zustand',
        'TanStack Query',
        'Ant Design',
        'SCSS',
        'Redux',
        'TypeScript',
        'Chart js',
        'MUI',
        'i18n',
      ],
    },
    {
      date: t('aeroidea.date'),
      organization: 'Aeroidea',
      href: 'https://aeroidea.ru/',
      position: t('aeroidea.position'),
      description: t.raw('aeroidea.description'),
      chips: [
        'Next.js',
        'Zustand',
        'TanStack Query',
        'SCSS',
        'TypeScript',
        'Storybook',
        'Jest',
        'React testing library',
      ],
    },
  ]
}
