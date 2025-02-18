import Image from 'next/image'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { Button } from '@/components/Button'
import { ArrowRightIcon } from '@heroicons/react/20/solid'







const features = [
  {
    name: 'Step 1',
    description:
      'Click on the button above to download remote support client',
    href: '#',
    icon: ArrowRightIcon,
  },
  {
    name: 'Step 2',
    description:
      'Click on the file in the bottom left of your screen named "RustSupportClient.zip"',
    href: '#',
    icon: ArrowRightIcon,
  },
  {
    name: 'Step 3',
    description:
      'Double-click on the file named "RustSupportClient.exe"',
    href: '#',
    icon: ArrowRightIcon,
  },
  {
    name: 'Step 4',
    description:
      'Provide the technician with the ID and Password (hover the mouse over the asterisks to show password)',
    href: '#',
    icon: ArrowRightIcon,
  },
]

export function RemoteSupport() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
            Remote Support
          </p>
          <p className="mt-6 text-lg/8">
          If our technician is requesting to connect to your PC, please click the button to download our support client then follow the instructions below:
          </p>
        
          <Button className="bg-teal-900 mt-6" href="/files/RustSupportClient.zip" download="RustSupportClient.zip">
            Download remote support client
            </Button>

        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold ">
                  <feature.icon aria-hidden="true" className="size-5 flex-none " />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold ">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}











export const metadata = {
  title: 'Remote Support',
  description:
    'We believe in putting our clients at the center of everything we do.',
}

export default async function Remote() {

  return (
    <>

      <Container className="mt-16">

    <RemoteSupport />
      </Container>
    </>
  )
}
