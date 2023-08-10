'use client'
import Image from 'next/image'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { StatList, StatListItem } from '@/components/StatList'
import FormComponent from '@/components/Form'
import { FadeIn } from '@/components/FadeIn'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline'
import usedEngines from '@/images/clients/logos/used_engine.webp'
import Link from 'next/link'

const CarPartCard = ({
  part,
  make,
  model,
  year,
  size,
  availability,
  price,
  warranty,
}) => {
  return (
    <div className="w-full sm:flex">
      <div className="rounded-t-lg bg-white bg-opacity-10 p-6 text-white shadow-md backdrop-blur-md backdrop-filter sm:w-1/2 sm:rounded-l-lg sm:rounded-t-none">
        <h2 className="mb-2 text-xl font-semibold">
          {`${make} ${model} ${year}`}{' '}
          <span className="font-normal">({part})</span>
        </h2>
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="grid w-full grid-cols-12">
            <p className="col-span-6 mb-1 text-gray-400">Size: </p>
            <span className="col-span-6 font-semibold text-white">{size}</span>
            <p className="col-span-6 mb-1 text-gray-400">Availability: </p>{' '}
            <span className="col-span-6 font-semibold text-white">
              {availability}
            </span>
            <p className="col-span-6 mb-1 text-gray-400">Price: </p>
            <span className="col-span-6 font-semibold text-white">{price}</span>
            <p className="col-span-6 mb-2 text-gray-400">Warranty:</p>{' '}
            <span className="col-span-6 font-semibold text-white">
              {warranty}
            </span>
            <p className="col-span-6 mb-2 text-gray-400">Shipping:</p>{' '}
            <span className="col-span-6 font-semibold text-white">Free</span>
          </div>
          <Image
            className="rounded-lg border border-orange-400"
            src={usedEngines}
            alt="UsedEngines"
          />
        </div>
        <p className="pt-4 text-orange-400">
          This part is available with us. Please call to get a free quote or
          fill up this form.
        </p>
        <div className="mt-4 flex items-end justify-between">
          <a
            href="tel:+1234567890"
            className="flex w-fit rounded-lg bg-orange-500 px-4 py-2 text-white transition duration-300 hover:bg-orange-600"
          >
            <PhoneIcon className="animate-phone-ring h-6" />
            <span className="ml-2">Call Now</span>
          </a>
          <span className="text-sm hidden sm:block">
            Give us a call right away if you can&apos;t find your part.
          </span>
        </div>
      </div>
      <div className="relative rounded-b-lg bg-white p-6 text-black shadow-md sm:w-1/2 sm:rounded-b-none sm:rounded-r-lg">
        <h2 className="mb-2 text-xl font-semibold">
          <span className="font-light">Get Quote for :- </span>{' '}
          {`${make} ${model} ${year}`}{' '}
          <span className="font-normal">({part})</span>
        </h2>
        <div className="col-span-12 mb-4 mt-8 sm:col-span-12">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="model"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="model"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="model"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mt-4">
          <a
            href="tel:+1234567890"
            className="mx-auto flex w-fit rounded-lg bg-orange-500 px-4 py-2 text-white transition duration-300 hover:bg-orange-600"
          >
            <span>Get Quote</span>
          </a>
        </div>
        <div className="sm:absolute bottom-2 right-2 mt-4 flex">
          This isn&apos;t your part?
          <Link href="/">
            <span className="ml-2 text-orange-400">Keep Searching.</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Search() {
  const searchParams = useSearchParams()
  const part = searchParams.get('part')
  const make = searchParams.get('make')
  const model = searchParams.get('model')
  const year = searchParams.get('year')
  const size = searchParams.get('size')
  return (
    <>
      <Container className="mt-12 sm:mt-40">
        <FadeIn className="items-center justify-between pt-12 sm:flex md:pt-0">
          <CarPartCard
            part={part}
            make={make}
            model={model}
            year={year}
            size={size}
            availability={'Out of stock'}
            price={'Get a Quote'}
            warranty={'60 months'}
          />
          {/* <FormComponent /> */}
        </FadeIn>
      </Container>
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
      <ContactSection />
    </>
  )
}
