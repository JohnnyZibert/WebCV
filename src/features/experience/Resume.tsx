import { useTranslations } from 'next-intl'

import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { IconArrowUpRight } from '@/shared/assets/icons/icons'
import { P16 } from '@/shared/ui/Typography'

export const Resume = () => {
  const t = useTranslations('Resume')

  return (
    <div className={'overflow-hidden'}>
      <AnimationOneByOne>
        <a
          href={'Zgirdan_Evgeniy_En.pdf'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={
              'relative py-2 px-2 group flex items-center gap-3 cursor-pointer my-10 mb-20 w-fit'
            }
          >
            <P16
              className={
                'text-green-600 dark:text-white group-hover:text-green-700  dark:group-hover:text-green-200 transition-all duration-300'
              }
            >
              {t('viewResume')}
            </P16>
            <IconArrowUpRight
              className={`dark:fill-white fill-green-600 group-hover:transform group-hover:translate-x-2 rotate-45
           group-hover:scale-110 dark:group-hover:fill-green-200 group-hover:fill-green-700 w-3 transition-all duration-300 `}
            />
            <div
              className={
                'h-[2px] absolute left-0 bottom-0 w-0 group-hover:w-full dark:bg-green-200 bg-green-700 transition-all duration-300'
              }
            />
          </div>
        </a>
      </AnimationOneByOne>
    </div>
  )
}
