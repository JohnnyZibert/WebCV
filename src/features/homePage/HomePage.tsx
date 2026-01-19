'use client'

import { blocks } from '@/shared/consts/sidebarMenu'

export const HomePage = () => {
  return (
    <main className=" w-full hr:gap-10 pt-20">
      {blocks.map(({ id, Component }) => (
        <section key={id} id={id} className="content-block">
          <Component />
        </section>
      ))}
    </main>
  )
}
