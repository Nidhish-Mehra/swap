import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import FormComponent from '@/components/Form'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import gearStick from '@/images/gear-stick.jpeg'
import engineRepair from '@/images/engine-repair.jpeg'
import wheels from '@/images/wheels.jpeg'
import Image from 'next/image'
import Return from '@/images/warranty/return.svg'
import Certified from '@/images/warranty/certified.svg'
import WarrantyImage from '@/images/warranty/warranty.svg'
import Headphones from '@/images/warranty/headphone.svg'
import Shipped from '@/images/warranty/shipped.svg'

function Section({ title, image, children }) {
  return (
    <Container>
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-orange-400 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Customer Satisfaction Is Our Goal" image={{ src: wheels }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At Swap Motors, used engine warranty is restricted to only
          manufacturing defects of the following parts: block, heads, pistons,
          crankshafts, camshafts, rockers, and other internal components only.
          Swap Motors warranty doesn&apos;t cover any attached accessory parts
          such as
          <strong className="font-semibold text-orange-400">
            {' '}
            switches, sensors, cables, electronics, belts, hoses, water pumps,
            manifolds, wire harnesses, valve covers, gaskets, brackets, oil pan,
            flywheel, etc.
          </strong>
          At Swap Motors, used engine warranty is restricted to only
          manufacturing defects of the following parts: block, heads, pistons,
          crankshafts, camshafts, rockers, and other internal components only.
          Swap Motors warranty doesn&apos;t cover any attached accessory parts
          such as switches, sensors, cables, electronics, belts, hoses, water
          pumps, manifolds, wire harnesses, valve covers, gaskets, brackets, oil
          pan, flywheel, etc.
        </p>
        <p>
          Swap Motors is also not accountable for any charges associated with
          inappropriate engine installation and labor costs.
        </p>
        <p>
          Since our exhaustive used engines inventory is located at various
          supplier facilities, delivery time can vary, but it normally takes
          7-10 BUSINESS days (excluding weekends and holidays). Even though it
          is very rare but sometimes delivery time may be affected due to
          unusual circumstances that might require some additional time.
        </p>
        <p>
          Our shipping for used engines for sale is free to the commercial
          address within the central USA. Residential deliveries will result in
          a $150.00 additional shipping charge unless noted otherwise.
        </p>
        <p>
          All returned used engines or cancelled orders are subject to 25%
          handling and restocking fees, customer assumes all the shipping costs
          unless the replacement is authorized by Swap Motors during the
          warranty period. If an order gets cancelled after the payment has been
          processed and the order is still not shipped, the customer will bear
          the processing fees of the credit card.
        </p>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="" image={{ src: gearStick, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Customers are self-responsible for satisfying the terms of the
          payment. If the customer ignores the payment terms, they will be
          answerable for all of the charges associated with the collection. Our
          charges will include all collection costs and attorney fees.
        </p>
        <p>
          We are not liable for any refund which is associated with USED ENGINES
          or parts that were not diagnosed correctly. Swap Motors will not
          assume towing, shipping, transportation charges, or rental car costs.
          Any wrong information will automatically cancel your warranty.
        </p>
        <p>
          For your information! You are purchasing used engines from us. We make
          efficient and presentable engine parts for all vehicles but we
          don&apos;t guarantee engine appearance. The customer should inspect
          all the parts before signing on delivery.
        </p>
        <p>
          Used low mileage engine is the best in our knowledge. Swap Motors
          warranty doesn&apos;t apply to oil leaks/damage on engines due to
          seals, gaskets, and filters that have not been replaced.
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="" image={{ src: engineRepair, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          OEM auto parts are interchangeable within different makes and models.
          Swap Motors is using a VIN compatibility tool to assure that the
          ordered used engine for sale is an adequate and exact fit for your
          vehicle. All deposits made to us are non-refundable unless otherwise
          noted.
        </p>
        <p>
          Return or exchange of used engines are authorized by Swap Motors
          Shipped order if returned should be received in the same assembled
          condition as it was originally shipped to the customer. If in case
          received order is not in the same condition because of any reason, NO
          REFUND will be done from our side. Refunds are only authorized if the
          replacement is not available. If the engine was disassembled or
          altered in any way without Swap Motors written authorization, the
          warranty will be void. Our used engines are meticulously tested,
          visually inspected, and properly cleaned.
        </p>
        {/* <p>
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-orange-400">
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className="font-semibold text-orange-400">maintenance</strong>{' '}
          retainer.
        </p> */}
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-orange-400">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-orange-400/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="WARRANTY CANCELLATION"
        title="Warranty will be cancelled if"
      >
        {/* <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p> */}
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem className="flex" title="Faulty Installation">
            Used engine was not properly installed.
          </GridListItem>
          <GridListItem className="flex" title="Inappropriate usage">
            Used engine was used for racing.
          </GridListItem>
          <GridListItem className="flex" title="Lack of proper components">
            Used engine was used without proper lubrication or cooling
            regardless of the reason.
          </GridListItem>
          <GridListItem className="flex" title="Untimely installation">
            Purchased used engine is not installed within 30 days after
            delivery.
          </GridListItem>
          <GridListItem className="flex" title="">
            warranty will cover only a one-time claim per product purchased from
            us. Swap Motors warranty claim representative will work with you to
            ensure your experience is a complete success. We reserve the right
            to charge any applicable fees in connection with the processing of
            your warranty claim.
          </GridListItem>
          <GridListItem className="flex" title="">
            Swap Motors permits only original purchasers for any deal or
            purchase and guarantees that our sold used engine shall be free from
            knocking excessive oil consumption and cracks in the block. We
            follow the same Auto terms and conditions as other suppliers are
            following.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Limitations() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-orange-400/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Warranty Limitations"
        title="Swap Motors warranty applies to the used engines ONLY."
      >
        <p>Our warranty will not be applied if:</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem className="flex" title="1 ">
            Used engines &quot;Repair or Replacement&quot; required as a result
            of any accident or misuse.
          </GridListItem>
          <GridListItem className="flex" title="2 ">
            Repair or replacement of any used engine include specifically,
            without limitation, to all components of the cooling, fuel,
            electrical, engine control system and all ignition system
            components, belts, hoses and filters.
          </GridListItem>
          <GridListItem className="flex" title="3 ">
            Used engine was used for racing competition or related purposes.
          </GridListItem>
          <GridListItem className="flex" title="4 ">
            Used engine has been repaired or remodelled for few extents or parts
            and its part or accessory is not conforming to original manufacturer
            specifications has been installed.
          </GridListItem>
          <GridListItem className="flex" title="5 ">
            Used engine is damaged as a result of overheating or lack of
            lubrication.
          </GridListItem>
          <GridListItem className="flex" title="6 ">
            Used engine is returned with the heat tabs missing or melted.
          </GridListItem>
          <GridListItem className="flex" title="7 ">
            Swap Motors warranty does not apply for an initial installation.
            Swap Motors warranty claim must be submitted and authorized by Swap
            Motors. warranty technician prior to any work being performed.
          </GridListItem>
          <GridListItem className="flex" title="8 ">
            Buyer needs to submit all documentations within 5 business days,
            otherwise your claim will be denied, no exceptions. Vehicle use
            shall be immediately discontinued once the issue or problem has been
            identified, otherwise warranty will be void.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Warranty',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Warranty() {
  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex items-center justify-between pt-12 md:pt-0">
          <FormComponent />
          <h1 className="hidden pl-16 font-display text-5xl font-medium tracking-tight text-orange-400 [text-wrap:balance] sm:text-7xl md:block">
            Swap Motors Warranty
          </h1>
        </FadeIn>
      </Container>
      <Container className="mt-36 pt-0 sm:pt-32">
        <div className="grid grid-cols-1">
          <div className="flex py-6">
            <Image src={Return} alt="Return" className="mr-8" unoptimized />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Return and Replacements
              </p>
              We provide a no-cost warranty since we cover the shipping expenses
              for all authorized returns and replacements.
            </div>
          </div>

          <div className="flex py-6">
            <Image
              src={Certified}
              alt="Certified"
              className="mr-8"
              unoptimized
            />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Certified Professionals
              </p>
              Our ase-certified professionals have thoughtfully crafted a
              pre-installation guide to ensure the engine performs at its peak.
            </div>
          </div>

          <div className="flex py-6">
            <Image
              src={WarrantyImage}
              alt="Warranty"
              className="mr-8"
              unoptimized
            />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Replacement Warranty
              </p>
              6 months return and replacement warranty
            </div>
          </div>

          <div className="flex py-6">
            <Image
              src={Headphones}
              alt="Support"
              className="mr-8"
              unoptimized
            />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Dedicated Support
              </p>
              Lifetime Support (Our in-house warranty team works with you to
              troubleshoot the majority of frequent issues to prevent total
              engine failure).
            </div>
          </div>

          <div className="flex py-6">
            <Image src={Shipped} alt="Shipping" className="mr-8" unoptimized />
            <div>
              <p className="font-display font-medium text-orange-400 ">
                Express Shipping
              </p>
              we generally ship orders within 3-5 business days(excluding
              weekend and holidays). though it’s very rare, during some
              unavoidable circumstances, delivery might require some additional
              time.
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <div className="mt-12 flex justify-center border-t border-t-neutral-200 pt-36">
        <div className="max-w-5xl px-8 text-center">
          <h3 className="text-orange-400">What is a Used Engine?</h3>
          <p className="py-2">
            The term used engine shall mean, a used engine assembly (basic
            block, cylinder head, and internal components) supplied by Swap
            Motors. of the original manufacturer. All other accessories
            attached, left on the block are for convenience purposes only.
          </p>
          <p className="py-2">
            Subject to the limitations listed below, Swap Motors says they will
            either send a replacement engine of the same kind that is available
            at the time or refund the customer purchase price if the engine is
            defective and no replacement is available.
          </p>
          <p className="py-2">
            Swap Motors will not be responsible for any labour cost incurred by
            the customer unless prior agreement is made.
          </p>
        </div>
      </div>

      <Limitations />

      <Container className="mt-12 flex justify-start pt-36">
        <div>
          <h3 className="text-3xl text-orange-400">Limited Liability</h3>
          <p className="py-2">
            The Swap Motors liability is solely and exclusively limited to
            supplying low mileage used engines replacement whenever one is
            available or refunding customer with the purchase price. Swap
            Motors. doesn&apos;t accept any liability associated with labor
            costs, replacement of engine oil, transmission fluid, and
            antifreeze, or damage to other engine or parts or components towing
            charges, telephone calls, freight, lost profits, lost time,
            substitute transportation, or replacement vehicle or any other
            consequential damages. Swap Motors is not responsible for any
            failure resulting from improper installation, modification of the
            product faulty or incompatible parts and accessories, and/or
            abnormal use of operation. State and federal laws regulate odometer
            mileage for most used automobiles, but odometer mileage
            determinations for used engines and their parts are not practically
            possible.
          </p>
          <p className="py-2">
            Determination of mileage use for used engines cannot be done with
            certainty since the engines are often sold and/or transferred apart
            from the original vehicle in which they were originally installed.
            Therefore, all representations of mileage are estimates.
          </p>
          <p className="py-2">
            Swap Motors offers an extensive engine warranty regardless of the
            mileage, based upon our expertise and evaluation of our products.
          </p>
        </div>
      </Container>
      <Container className="mt-12 flex pt-36">
        <div>
          <h3 className="text-3xl text-orange-400">
            Used Engine Installation Procedure Requirements
          </h3>
          <p className="py-2 font-semibold">Please Read Before Installation</p>
          <p className="py-2">
            We need to follow few steps before installation and an operation of
            recycled or used engines. It is always required to perform certain
            inspections to change over accessories and make routine maintenance
            to assure uninterrupted service. Some used engine parts and
            components have been left attached for your convenience only. These
            accessories may save your time during installation; however, the
            professional installer is accountable for the parts and accessories
            exchange. All parts, change over accessories, wear and tear items
            are left on the engine block for your suitability and are not
            covered under warranty. For more queries and warranty-related
            questions, feel free to visit our website.
          </p>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
