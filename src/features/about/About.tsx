import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'
import { Button } from '@/shared/ui/button/Button'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P16 } from '@/shared/ui/Typography'

export const About = () => {
  return (
    <div className={'relative'}>
      <AnimateFromSide type={'right'}>
        <SectionHeader>About</SectionHeader>
        <div className={'space-y-3'}>
          <P16>
            In 2020, I began exploring user interface development, which quickly
            evolved into a deep passion for coding and web technologies. Since
            then, I’ve had the opportunity to build software for both a{' '}
            <a href={'https://aeroidea.ru/'} target={'_blank'} rel="noreferrer">
              <Button buttonType={'LINK'}>digital agency</Button>
            </a>{' '}
            and a{' '}
            <a target={'_blank'} href={'https://dex-it.ru/'} rel="noreferrer">
              <Button buttonType={'LINK'}>large company</Button>
            </a>
            , gaining valuable experience in creating intuitive, user-focused
            solutions.
          </P16>
          <P16>
            Today, my focus is on advancing my frontend development skills while
            finding a team that values collaboration, innovation, and growth.
          </P16>
          <P16 className={'dark:text-white text-gray-500 font-medium'}>
            <i>What does my dream team look like?</i>
          </P16>
          <P16>
            It’s made up of passionate, highly skilled professionals who thrive
            on innovation and consistently push the boundaries of frontend
            development. They value collaboration, support each other, and
            maintain open lines of communication that foster idea-sharing and
            collective problem-solving.
          </P16>
          <P16>
            This ideal team prioritizes continuous learning and personal
            development, embraces emerging technologies, and stays ahead of
            industry trends. Diversity is also a key value — different
            backgrounds and perspectives are seen as essential to creating
            outstanding user experiences.
          </P16>
          <P16>
            We work together on impactful, exciting projects that make a real
            difference in users’ lives. Above all, it’s a positive, creative,
            and inspiring environment where everyone’s contributions are
            recognized, and where we strive for excellence in delivering
            top-tier frontend solutions.
          </P16>
          <P16 className={'dark:text-white text-gray-500 font-medium'}>
            <i>Why am I looking for a new team?</i>
          </P16>
          <ul className={'list-disc text-gray-100 pl-2 space-y-2'}>
            <li>
              <P16>
                I chose to leave my previous role to focus on both personal and
                professional growth. I’m eager to broaden my expertise, take on
                new challenges, and continue evolving as a frontend developer.
              </P16>
            </li>
            <li>
              <P16>
                My decision was motivated by a lack of growth opportunities in
                my previous company. I'm now seeking a role where I can
                contribute meaningfully while being supported in my ambitions —
                ideally in a team working on innovative and purpose-driven
                projects.
              </P16>
            </li>
          </ul>
        </div>
      </AnimateFromSide>
    </div>
  )
}
