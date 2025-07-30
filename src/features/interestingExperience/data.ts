import { useTranslations } from 'next-intl'

export const useIntExpData = () => {
  const t = useTranslations('Interesting_exp.list')

  return [t('maxmodal'), t('launch'), t('prosv')]
}
