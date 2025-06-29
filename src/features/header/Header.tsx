import Image from 'next/image'
import Link from 'next/link'

import { Socials } from '@/features/socials/Socials'
import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'
import myPhoto from '@/shared/assets/images/me.jpg'
import { H1, H2, P16 } from '@/shared/ui/Typography'
import { ThemeSwitcherButton } from '@/widgets/providers/theme/ThemeSwitcherButton'

import { Navbar } from './navbar/Navbar'

export const Header = () => {
  return (
    <header
      className={
        'laptop:sticky top-0 pt-20 z-10 laptop:h-screen h-fit flex flex-col justify-between'
      }
    >
      <AnimateFromSide type={'left'}>
        <div className={'items-center z-10'}>
          <div className={'w-full flex justify-center mb-4'}>
            <Image
              src={myPhoto.src}
              alt={'me'}
              height={250}
              width={250}
              className={'rounded-lg shadow-lg p-3 bg-white'}
            />
          </div>
          <Link href={'/'}>
            <H1>Evgeniy Zgirdan</H1>
          </Link>
          <H2 className={'mt-3 font-semibold'}>Frontend developer</H2>
          <P16 className={'mt-1 max-w-[300px] text-black !dark:text-gray-200'}>
            I create visually appealing and intuitive user interfaces for web
            applications.
          </P16>
          <div className={'mt-16 hidden laptop:block'}>
            <Navbar />
          </div>
          <ThemeSwitcherButton />
        </div>
      </AnimateFromSide>
      <AnimateFromSide type={'left'}>
        <div className={'mt-auto laptop:pb-20 pt-12'}>
          <Socials />
        </div>
      </AnimateFromSide>
    </header>
  )
}
