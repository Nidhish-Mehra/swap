import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import FormComponent from '@/components/Form'
import FAQ from '@/components/FAQs'


export const metadata = {
  title: 'FAQs',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default function FaqPage() {

  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex items-center justify-between pt-12 md:pt-0">
          <FormComponent />
          <h1 className="hidden pl-16 font-display text-5xl font-medium tracking-tight text-orange-400 [text-wrap:balance] sm:text-7xl md:block">
            Have some questions for us?
          </h1>
        </FadeIn>
      </Container>
      <FAQ />
      <Container className="mt-16">
        <StatList>
          <StatListItem
            value="Client-centric"
            label="Our clients our first priority."
          />
          <StatListItem
            value="Exemplary"
            label="World- Class Industrial Experience"
          />
          <StatListItem
            value="Expansive"
            label="Largest Network of Inventory Yards"
          />
        </StatList>
      </Container>

      {/* <Team /> */}
      <ContactSection />
    </>
  )
}
