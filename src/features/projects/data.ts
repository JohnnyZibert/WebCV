import { useTranslations } from 'next-intl'

import {
  maxmodal1,
  maxmodal2,
  maxmodal3,
  portfolio1,
  portfolio2,
  portfolio3,
  prosv1,
  prosv2,
  prosv3,
  spartak1,
  spartak2,
  spartak3,
} from '@/shared/assets/images/images'

export const useProjectsData = () => {
  const t = useTranslations('Projects')

  return [
    {
      href: 'https://my-web-cv-kappa.vercel.app/',
      githubLink: 'https://github.com/JohnnyZibert/WebCV',
      projectName: t('webcv.name'),
      org: '',
      year: '',
      images: [portfolio1, portfolio2, portfolio3],
      description: t('webcv.description'),
      chips: [
        'React.js',
        'Typescript',
        'Next.js',
        'Tailwindcss',
        'Framer-motion',
        'Axios',
      ],
    },
    {
      href: 'https://spartak.com/',
      githubLink: '',
      projectName: t('spartak.name'),
      org: 'DEX technologies',
      year: '2024',
      images: [spartak1, spartak2, spartak3],
      description: t('spartak.description'),
      chips: [
        'React.js',
        'Next.js',
        'Typescript',
        'Redux toolkit',
        'React hook form',
        'Styled components',
        'i18n',
      ],
    },
    {
      href: 'https://prosv.ru/',
      githubLink: '',
      projectName: t('prosv.name'),
      org: 'aeroidea',
      year: '2022-2024',
      images: [prosv1, prosv2, prosv3],
      description: t('prosv.description'),
      chips: [
        'React.js',
        'Next.js',
        'Zustand',
        'Typescript',
        'Tanstack Query',
        'SCSS',
        'Storybook',
        'Jest',
        'React testing library',
      ],
    },
    {
      href: 'https://maxmodal.com/',
      githubLink: '',
      projectName: t('maxmodal.name'),
      org: 'DEX technologies',
      year: '2024',
      images: [maxmodal2, maxmodal1, maxmodal3],
      description: t('maxmodal.description'),
      chips: [
        'React.js',
        'Redux',
        'Typescript',
        'Styled components',
        'i18n',
        'antd v3',
        'react-helmet',
      ],
    },
  ]
}
