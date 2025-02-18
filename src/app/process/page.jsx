
import { PageIntro } from '@/components/PageIntro'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'



export default function Example() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <PageIntro eyebrow="Our process" title="Simple, Transparent, Hassle-Free">
        <p>
        We strive to provide excellent communication at each and every step of the repair process!
        </p>
      </PageIntro>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl/8 font-semibold tracking-tight">
                <p>
                "Steve is the nicest guy! He responded immediately to my search, stayed in communication by providing updates along the way, was prompt and friendly,  and the personal pick up and delivery is amazing!"
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
               src="/blank.png"
                  className="mt-1 size-10 flex-none rounded-full "
                />
                <div className="text-sm/6">
                  <div className="font-semibold">Karin</div>
                  <div >Portland, OR</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base/7 lg:col-span-7">
            <ul role="list" className="mt-8 max-w-xl space-y-8">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold ">1. Appointment Scheduling</strong> The first step is to schedule either an on-site appointment, a remote support session, or a time to drop off the device.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold ">2. Free Estimate & Diagnosis</strong> We will determine the cause of the problem and give you an estimate of the cost. You don’t pay a cent if you decide not to have the repair done.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold ">3. Repair & Updates</strong> Once approved, we begin the repair. Whether it’s a hardware fix, software troubleshooting, or a complex board-level repair, we keep you updated throughout the process.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold">4. Quality Check & Testing</strong> Before returning your device, we run thorough tests to ensure everything is working perfectly. If applicable, we also provide recommendations for keeping your device running smoothly.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold ">5. Pick-Up or Delivery
                  </strong> Once your device is repaired, you can pick it up at your convenience, or we can arrange a drop-off. We’ll review the repairs with you and answer any questions you have.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold ">6. Post-repair</strong> We stand by our work and provide a 60-day warranty on all services. If you have any questions or concerns after the repair, we’re just a call or email away.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
















export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}
