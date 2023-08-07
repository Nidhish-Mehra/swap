import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import FormComponent from '@/components/Form'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import Image from 'next/image'
import BMW from '@/images/clients/logos/13.png'

export default async function BrandLayout({ children, _segments }) {
  let id = _segments.at(-2)
  let allBrands = await loadMDXMetadata('used-engines')
  let brand = allBrands.find((brand) => brand.id === id)
  let moreBrands = allBrands.filter((brand) => brand.id !== id).slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <Container className="mt-12 sm:mt-40">
            <FadeIn className="flex items-center justify-between pt-12 md:pt-0">
              <div>
                <h1 className="hidden font-display text-5xl font-medium tracking-tight text-orange-400 [text-wrap:balance] sm:text-7xl md:block">
                  {brand.title}
                </h1>
                <p className="text-neutral-200">{brand.description}</p>
              </div>
              <FormComponent />
            </FadeIn>
          </Container>
          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-orange-400 sm:mx-0 sm:grid-cols-4">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <Image src={brand.imageLogo} alt="BMW" unoptimized />
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Brand</dt>
                      <dd>{brand.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Product</dt>
                      <dd>{brand.product}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd>{brand.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>
      {/* {moreBrands.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More case studies"
          pages={moreBrands}
        />
      )} */}

      <ContactSection />
    </>
  )
}
