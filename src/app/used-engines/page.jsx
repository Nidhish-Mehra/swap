import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import FormComponent from '@/components/Form'
import FAQ from '@/components/FAQs'
import certifiedEngines from '@/images/certifiedEngines.png'


export const metadata = {
  title: 'Used Engines',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {

  return (
    <>
      <Container className="mt-12 sm:mt-40">
        <FadeIn className="flex items-center justify-between pt-12 md:pt-0">
          <h1 className="hidden font-display text-5xl font-medium tracking-tight text-orange-400 [text-wrap:balance] sm:text-7xl md:block">
            Best USED ENGINES 3-5 Years Nationwide Warranty
          </h1>
          <FormComponent />
        </FadeIn>
      </Container>
      <FAQ />
      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
      >
        Whether you are a dealer, customer, service station, or a weekend
        automotive hobbyist, we are stocked with engines for sale for most
        &quot;makes and models&quot;, &quot;foreign and domestic&quot; which is difficult to find
        anywhere else in the United States. We have set the benchmark in the
        auto industry by offering quality auto parts at competitive prices on
        used engines with warranty Our specialized range of Swap Motorsludes but
        not limited to model BMW, Audi, Honda, Chevrolet, Mercedes, Nissan,
        Ford, Jaguar, Toyota, Mitsubishi, Subaru, Saab, Porsche, Fiat, Volvo,
        and much more. For more details, a list of used engines of various make
        is incorporated below.
      </Testimonial> */}
      {/* <Clients /> */}
      <ContactSection />
    </>
  )
}
