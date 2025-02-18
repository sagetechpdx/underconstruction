import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoWindows from '@/images/brands/windows.png'
import logoApple from '@/images/brands/Apple.png'
import logoDell from '@/images/brands/Dell.png'
import logoHP from '@/images/brands/HP.png'
import logoSamsung from '@/images/brands/Samsung.png'
import logoLenovo from '@/images/brands/Lenovo.png'
import logoAsus from '@/images/brands/Asus.png'
import logoAcer from '@/images/brands/Acer.png'


import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'


const clients = [
  ['Microsoft Windows', logoWindows],
  ['Apple', logoApple],
  ['Dell', logoDell],
  ['HP', logoHP],
  ['Samsung', logoSamsung],
  ['Lenovo', logoLenovo],
  ['Asus', logoAsus],
  ['Acer', logoAcer],
]

function Clients() {
  return (
    <div className="mt-24 mx-auto lg:max-w-7xl rounded-4xl bg-dark py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-lg tracking-wider text-gold sm:text-left">
          Some of the many brands we service
          </h2>
          <div className="h-px flex-auto" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-10 lg:gap-y-0 lg:grid-cols-8"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} width={100} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="What people say about us"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Don’t just take our word for it - hear from some of our satisfied users! Check out some of our testimonials below to see what others are saying about Sage Tech.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-gold" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We provide tech support and repair for all of your devices!"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Our services are not just limited to what you see here. If you have a question 	about whether or not we provide a service, give us a call or send an email!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Mac & PC Hardware Repair/Upgrades">
            Is your computer running slowly or not running at all? Is your computer infected with viruses or malware? We will diagnose the problem and perform the necessary hardware or software repairs.
            </ListItem>
            <ListItem title="Software Installation and Troubleshooting">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="Networking Setup and Support">
            Do you have Wi-Fi enabled devices that need to connect to the Internet? We can set up a new modem, router, access point, or troubleshoot problems in your existing network!
            </ListItem>
            <ListItem title="Data Recovery">
            Have you lost files because of a hardware or software failure? We can reunite you with your lost data!
            </ListItem>
            <ListItem title="Virus and Malware Removal">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
            <ListItem title="Custom-built PCs">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (

    <>  
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-7xl">
          We take the stress out of tech support.
          </h1>
          <p className="mt-6 text-xl">
          Transparency and honesty are at the heart of what we do. From the initial quote to the final fix, we ensure our clients know exactly what to expect with no hidden costs or surprises. Our straightforward approach has earned us a reputation for reliability and trustworthiness, making us the go-to choice for residential and small business customers alike.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'John Doe', logo: logoHP }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
