import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-teal-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
            Have a question?
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
              Submit
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
              On-site service area
              </h3>
              <p className="font-thin text-white"> 
                If you are outside the service area, give us a call or email and we can arrange a drop-off or a remote support session.
              </p>
              <Offices
                invert
                className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
