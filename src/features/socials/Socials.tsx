import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconTelegram,
} from '@/shared/assets/icons/icons'
import { P14 } from '@/shared/ui/Typography'

export const Socials = () => {
  return (
    <div className={'flex gap-5 items-center'}>
      {socialNetworks.map(({ link, Icon }) => (
        <a key={link} href={link} target={'_blank'} rel="noreferrer">
          <Icon
            className={
              'w-7 transition  fill:text-black dark:fill-white hover:scale-125'
            }
          />
        </a>
      ))}
      <a
        href={'Zgirdan_Evgeniy_En.pdf'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <P14 className={'dark:!text-white'}> Download Resume</P14>
      </a>
    </div>
  )
}

const socialNetworks = [
  { Icon: IconGithub, link: 'https://github.com/JohnnyZibert' },
  {
    Icon: IconLinkedin,
    link: 'https://www.linkedin.com/in/evgeniy-zgirdan-a989b9261/',
  },
  {
    Icon: IconTelegram,
    link: 'https://t.me/EugeniuZg',
  },
  {
    Icon: IconPhone,
    link: 'tel:+37377841275',
  },
  {
    Icon: IconMail,
    link: 'mailto:zgirdan.evg@gmail.com',
  },
]
