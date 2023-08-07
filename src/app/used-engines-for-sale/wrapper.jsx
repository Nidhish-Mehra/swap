import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import FormComponent from '@/components/Form'
import { MDXComponents } from '@/components/MDXComponents'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import Image from 'next/image'

export default async function CaseStudies({ children, _segments }) {
  let id = _segments.at(-2)
  let allBrands = await loadMDXMetadata('used-engines-for-sale')
  let brand = allBrands.find((brand) => brand.id === id)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <Container className="mt-12 sm:mt-40">
            <FadeIn className="flex items-center justify-between pt-12 md:pt-0">
              <div>
                <h1 className="hidden font-display text-5xl font-medium tracking-tight text-orange-400 [text-wrap:balance] sm:text-7xl md:block">
                  {brand?.title}
                </h1>
                <p className="text-neutral-200">{brand?.description}</p>
              </div>
              <FormComponent />
            </FadeIn>
          </Container>
        </header>
      </article>

      <ContactSection />
    </>
  )
}
