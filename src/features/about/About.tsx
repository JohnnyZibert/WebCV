import { useTranslations } from 'next-intl'

import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'
import { Button } from '@/shared/ui/button/Button'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P16 } from '@/shared/ui/Typography'

export const About = () => {
  const t = useTranslations('About')

  return (
    <div className={'relative'}>
      <AnimateFromSide type={'right'}>
        <SectionHeader>{t('title')}</SectionHeader>
        <div className={'space-y-3'}>
          <P16>
            {t('first')}{' '}
            <a href={'https://aeroidea.ru/'} target={'_blank'} rel="noreferrer">
              <Button buttonType={'LINK'}>{t('agency')}</Button>
            </a>{' '}
            {t('and')}{' '}
            <a target={'_blank'} href={'https://dex-it.ru/'} rel="noreferrer">
              <Button buttonType={'LINK'}>{t('company')}</Button>
            </a>{' '}
            {t('afterCompanies')}
          </P16>

          <P16>{t('focus')}</P16>

          <P16 className={'dark:text-white text-gray-500 font-medium'}>
            <i>{t('dreamTeamTitle')}</i>
          </P16>

          <P16>{t('dreamTeam1')}</P16>
          <P16>{t('dreamTeam2')}</P16>
          <P16>{t('dreamTeam3')}</P16>

          <P16 className={'dark:text-white text-gray-500 font-medium'}>
            <i>{t('whyChangeTitle')}</i>
          </P16>

          <ul className={'list-disc text-gray-100 pl-2 space-y-2'}>
            <li>
              <P16>{t('reason1')}</P16>
            </li>
            <li>
              <P16>{t('reason2')}</P16>
            </li>
          </ul>
        </div>
      </AnimateFromSide>
    </div>
  )
}
