'use client'
import Image from 'next/image'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { StatList, StatListItem } from '@/components/StatList'
import FormComponent from '@/components/Form'
import { FadeIn } from '@/components/FadeIn'
import { useState } from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline'
import usedEngines from '@/images/clients/logos/used_engine.webp'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    if (
      (name === 'number' && parseInt(value) < 9999999999) ||
      (name === 'number' && value === '')
    ) {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    } else if (name !== 'number') {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm(formData)
    console.log(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      router.push('/thankyou')
    } else {
      setErrors(validationErrors)
    }
  }

  const validateForm = (data) => {
    const errors = {}
    if (!data.name) {
      errors.name = 'Name is required'
    }
    if (!data.number) {
      errors.number = 'Mobile number is required'
    } else if (!/^\d{10}$/.test(data.number)) {
      errors.number = 'Mobile number should be 10 digits'
    }
    if (!data.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please provide valid email'
    }
    return errors
  }

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
          <span className="hidden text-sm sm:block">
            Give us a call right away if you can&apos;t find your part.
          </span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative rounded-b-lg bg-white p-6 text-black shadow-md sm:w-1/2 sm:rounded-b-none sm:rounded-r-lg"
      >
        <h2 className="mb-2 text-xl font-semibold">
          <span className="font-light">Get Quote for :- </span>{' '}
          {`${make} ${model} ${year}`}{' '}
          <span className="font-normal">({part})</span>
        </h2>
        <div className="col-span-12 mb-4 mt-8 sm:col-span-12">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="number"
            type="number"
            name="number"
            required
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {errors.number && <p className="text-xs pl-2 text-red-600">{errors.number}</p>}
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="mx-auto flex w-fit rounded-lg bg-orange-500 px-4 py-2 text-white transition duration-300 hover:bg-orange-600"
          >
            <span>Get Quote</span>
          </button>
        </div>
        <div className="bottom-2 right-2 mt-4 flex sm:absolute">
          This isn&apos;t your part?
          <Link href="/">
            <span className="ml-2 text-orange-400">Keep Searching.</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default function Search({ params }) {
  function capitalizeAfterSpace(input) {
    return input.replace(
      /(?:^|\s)([a-z])/g,
      (_, match) => ` ${match.toUpperCase()}`
    )
  }
  const part = capitalizeAfterSpace(
    decodeURIComponent(params.partdetails[0]).replace(/_/g, ' ')
  )
  const make = capitalizeAfterSpace(
    decodeURIComponent(params.partdetails[1]).replace(/_/g, ' ')
  )
  const model = capitalizeAfterSpace(
    decodeURIComponent(params.partdetails[2]).replace(/_/g, ' ')
  )
  const year = capitalizeAfterSpace(
    decodeURIComponent(params.partdetails[3]).replace(/_/g, ' ')
  )
  const size = capitalizeAfterSpace(
    decodeURIComponent(params.partdetails[4]).replace(/_/g, ' ')
  )
  return (
    <div>
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
    </div>
  )
}
