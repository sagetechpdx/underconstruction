import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageSteve from '@/images/team/portrait.png'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        title="Our values"
        invert
      >
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Transparency" invert>
          Unlike many other repair companies, our prices are clearly listed on our website. Nobody likes getting a surprise bill, so we are upfront about what a repair will cost BEFORE starting it.
          </GridListItem>
          <GridListItem title="You-centric" invert>
          We know your life is hectic and when your tech breaks down it throws a wrench in everything, which is why we offer more flexible hours than other companies and a complimentary pick-up and drop-off service. If Monday-Friday doesn’t work for you, just let us know and we’ll be happy to arrange a weekend pick-up or drop-off!
          </GridListItem>
          <GridListItem title="Empowerment" invert>
          We believe that fully understanding your technology puts you in control of your digital world. In an online landscape filled with bad actors and security threats, knowledge is your best defense. That’s why we go beyond just repairs—we take the time to educate you on using your devices safely, securely, and with confidence.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'Steve Harrington',
        role: 'Owner',
        image: { src: imageSteve },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe in putting our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Sick of being treated like just a number?">
        <p>
        When dealing with corporate tech support companies, you’re often treated as nothing more than a customer ID number. You may be bounced around to several different technicians who aren’t familiar with you or your situation. At Sage Tech, you will deal with the same industry-certified technician for the duration of your repair.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="100%" label="5-star reviews on Google" />
          <StatListItem value="100%" label="5-star reviews on Yelp" />
          <StatListItem value="$0" label="No diagnostic charge" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Check out our blog for helpful tech tips and news about Sage Tech"
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
