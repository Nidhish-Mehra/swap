import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PhoneIcon } from '@heroicons/react/24/outline'

export default function Thankyou() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="pb-44 sm:pb-0 sm:pt-0 pt-20 flex max-w-xl flex-col items-center text-center sm:mb-20">
        <p className="font-display text-4xl font-semibold text-orange-400 sm:mt-36 sm:text-5xl">
          Thank you for your interest.
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-orange-400">
          We will get back to you soon.
        </h1>
        <p className="mt-28 text-sm text-neutral-100">
          Can&apos;t wait to hear from us?
        </p>
        <a
          href="tel:+1234567890"
          className="mr-4 flex w-fit rounded-lg bg-orange-500 px-4 py-2 text-white transition duration-300 hover:bg-orange-600"
        >
          <PhoneIcon className="animate-phone-ring h-6" />
          <span className="ml-2">Give us a call.</span>
        </a>
      </FadeIn>
    </Container>
  )
}
