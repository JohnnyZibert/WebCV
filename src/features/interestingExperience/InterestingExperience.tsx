import { useTranslations } from 'next-intl'

import { Resume } from '@/features/experience/Resume'
import { useIntExpData } from '@/features/interestingExperience/data'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { H3, P14 } from '@/shared/ui/Typography'

export const InterestingExperience = () => {
  const { wrapperRef, getProps } = useAnimateInTurn()
  const t = useTranslations('Interesting_exp')
  const intExpData = useIntExpData()
  return (
    <AnimationOneByOne>
      <section className="mt-4 laptop:mt-20 relative">
        <SectionHeader>{t('title')}</SectionHeader>
        <div className="flex flex-col gap-4" ref={wrapperRef}>
          <H3>{t('intro')}</H3>

          <ol className="list-disc text-gray-100">
            {intExpData.map((item, index) => (
              <li {...getProps(index)} key={index}>
                <P14 className="text-gray-100 mt-2">{item}</P14>
              </li>
            ))}
          </ol>

          <H3>{t('conclusion')}</H3>
        </div>
        <Resume />
      </section>
    </AnimationOneByOne>
  )
}
