import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import FormComponent from '@/components/Form'
import { List, ListItem } from '@/components/List'

export const metadata = {
  title: 'Policy',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

export default async function Blog() {
  let articles = await loadMDXMetadata('blog')

  return (
    <>
      <Container formContainer={true} className="mt-12 sm:mt-40">
        <FadeIn className="flex items-center justify-between pt-12 md:pt-0">
          <FormComponent />
          <h1 className="hidden pl-16 font-display text-5xl font-medium tracking-tight text-orange-400 [text-wrap:balance] sm:text-7xl md:block">
            Swap Motors Policy
          </h1>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Privacy Statement</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      &quot;Swap Motors&quot; maintains excellent data privacy
                      to sustain good customer relation for future aspect. We
                      and our associates do respect your concerns about personal
                      information and keep 100% control or check, where
                      dissemination of any information can&apos;t be possible.
                      At Swap Motors &quot;we&quot;, &quot;our&quot;, and
                      &quot;us&quot; are references to the entity answerable for
                      the handling your personal information. This notice
                      applies to the personal information that are collected
                      through our websites, mobile applications, social media
                      pages and offline collection methods.&quot;Swap
                      Motors.&quot; maintains excellent data privacy to sustain
                      good customer relation for future aspect. We and our
                      associates do respect your concerns about personal
                      information and keep 100% control or check, where
                      dissemination of any information can&apos;t be possible.
                      At Swap Motors &quot;we&quot;, &quot;our&quot;, and
                      &quot;us&quot; are references to the entity answerable for
                      the handling your personal information. This notice
                      applies to the personal information that are collected
                      through our websites, mobile applications, social media
                      pages and offline collection methods.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      Swap Motors Notice describes what types of information it
                      collects, how can we use this personal information, with
                      whom can we share this information and how can we keep
                      information privacy, what are those precautionary measures
                      that we take to safeguard personal information, your
                      rights regarding the execution of your personal
                      information and finally how one can approach to us
                      regarding privacy practices.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      Services that Swap Motors provides is linked to
                      third-party websites or contain third-party cookies that
                      are not owned or controlled by us. Please go through once
                      the privacy practices of these third-party websites and
                      familiarize with them. Before using any service
                      acknowledge yourself appropriately and understand the
                      terms of notice carefully. You can also review Swap
                      Motors. notice before submitting your information and
                      using the services.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>
                        The kinds of personal information we may collect through
                        the Services are:
                      </p>
                    </h2>
                    <ul>
                      <li className="mt-6 text-base text-neutral-600">
                        - Information that we collect are Name, Phone and Fax
                        number, Email and Postal address for you or for others
                        (e.g. principals in your business).
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - Collected information used to create your online
                        account which includes username, password, security
                        question and answer.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - We collect and store the information that you and
                        other users provide while interacting service
                        representatives.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - We also collect information of purchase and customer
                        service history.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - Payment information includes Name, billing address,
                        Payment Card Details (i.e., card number, expiration date
                        and security code) and bank account information.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - We also fetch out data like location data such as data
                        derived from your IP address, country and zip code.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - We also capture browser details such as type, version,
                        language operating system and interface (referrer URL).
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - Correspondence-related information such as emails,
                        texts, letters, or responses to surveys and
                        questionnaires.
                      </li>
                      <li className="mt-3 text-base text-neutral-600">
                        - Other personal information through &quot;Contact
                        Us&quot; feature, which may include your first name,
                        last name, mobile number, e-mail, your favourite store
                        location and your messages. Please note the
                        above-mentioned personal information is voluntary from
                        your side. If you choose not to provide us with certain
                        information, we may not be able to offer you certain
                        products and services and you may also not be able to
                        access those services.
                      </li>
                    </ul>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>HOW DO WE USE PERSONAL INFORMATION</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      - Information that we collect are Name, Phone and Fax
                      number, Email and Postal address for you or for others
                      (e.g. principals in your business).
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - Collected information used to create your online account
                      which includes username, password, security question and
                      answer.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - We collect and store the information that you and other
                      users provide while interacting service representatives.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - We also collect information of purchase and customer
                      service history.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - Payment information includes Name, billing address,
                      Payment Card Details (i.e., card number, expiration date
                      and security code) and bank account information.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - We also fetch out data like location data such as data
                      derived from your IP address, country and zip code.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - We also capture browser details such as type, version,
                      language operating system and interface (referrer URL).
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - Correspondence-related information such as emails,
                      texts, letters, or responses to surveys and
                      questionnaires.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      - Other personal information through &quot;Contact
                      Us&quot; feature, which may include your first name, last
                      name, mobile number, e-mail, your favourite store location
                      and your messages. Please note the above-mentioned
                      personal information is voluntary from your side. If you
                      choose not to provide us with certain information, we may
                      not be able to offer you certain products and services and
                      you may also not be able to access those services.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>HOW DO WE SHARE PERSONAL INFORMATION</p>
                    </h2>
                    <strong className="mt-6 text-base text-neutral-600">
                      We may share your personal information to (internal and
                      external) recipients for the processing purposes described
                      above.
                    </strong>
                    <p className="mt-6 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Within Swap Motors :{' '}
                      </strong>{' '}
                      Depending on the requirements, our Swap Motors internal
                      department may use your personal information for various
                      uses like IT department may have access to use data, our
                      sales departments may have access to account and order
                      data, legal department and the finance department for
                      internal auditing.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Sharing with Other Users :{' '}
                      </strong>{' '}
                      The service may allow users to connect and communicate
                      with others, such as through a message board. If you use
                      any communication features, other users of the service may
                      be able to view your profile information and your
                      communications that you post to the service.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Service Providers :{' '}
                      </strong>{' '}
                      We work with third parties and allow them to help us,
                      operate and improve the services like hosting providers,
                      e-commerce service providers and analytics service
                      providers. Services provided includes maintaining
                      accounts, customer service, processing or fulfilling
                      orders and transactions, verifying customer information,
                      processing payments, financing, marketing services and
                      analytic services or similar services on behalf of Swap
                      Motors.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Insolvency and Business Transitions :{' '}
                      </strong>{' '}
                      Whenever we file for bankruptcy or get involved in a
                      business transition such as a merger or joint venture with
                      another company, or if we purchase, sell, or reorganize
                      all or a part of the Service or our business or assets or
                      the business or assets of our affiliates, your personal
                      information may be disclosed, including to prospective or
                      actual purchasers in connection with one of these
                      transactions.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Regulators, authorities and other third parties :{' '}
                      </strong>{' '}
                      We may also provide your personal information to
                      governmental agencies and regulators like tax authorities,
                      government authorities and independent external advisors
                      like lawyers, accountants, auditors in accordance with
                      applicable law.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Cookies and similar technologies</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      Like other companies, &quot;Swap Motors&quot; uses
                      cookies and similar technologies to personalize and
                      enhance your experience with our services. We and
                      third-parties (partner) including Google Analytics may use
                      cookies, tracking pixels, web beacons, web bugs, scripts,
                      tags and other similar technology to record information
                      about user activities on our websites as well as
                      third-party websites.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>DATA TRANSFERS</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      Under data protection law, including EU-U.S. Privacy
                      Shield and Standard Contractual Clauses approved by the
                      European Commission, we may transfer the collected
                      personal information and store such information outside
                      the country in which the information was provided. These
                      countries may have different data protection laws but
                      necessary measures will be taken by us to ensure that such
                      transfers are adequately protected.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>HOW DO WE PROTECT PERSONAL INFORMATION</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      We keep administrative, technical and physical safeguards,
                      consistent with legal requirements that protect
                      information against unlawful or unauthorized destruction,
                      loss, alteration, use, disclosure and access to the
                      personal information that are provided to us through the
                      Service.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>YOUR RIGHTS</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      You have rights to update your personal information
                      associated with your account. You can make changes in the
                      &quot;My Profile&quot; or &quot;Settings&quot; portions of
                      the Service. Apart from that you may challenge the data
                      accuracy or completeness in our records. If you feel like
                      personal information in our records is incomplete, we will
                      ask you to update the personal information as required or
                      needed and transmit the updated information to third
                      parties with the access to your personal information.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      If you would like to cancel your account go to &quot;My
                      Profile&quot; or &quot;Settings&quot;. You can also
                      contact us using the &quot;Contact Us&quot; feature within
                      the Service.
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      To the extent provided by the law of your jurisdiction,
                      you may also have the following rights:
                      <ul className="pl-4">
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to withdraw your consent :{' '}
                          </strong>{' '}
                          You can withdraw your consent by clicking on the
                          withdraw option in relevant communication or by
                          contacting relationship manager (for existing
                          customers). Such a withdrawal will not affect the
                          lawfulness of the processing prior to the consent
                          withdrawal.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request access to your personal data :{' '}
                          </strong>{' '}
                          The access to your personal information includes the
                          purposes of the processing, the categories of personal
                          data concerned, and the recipients or categories of
                          recipients to whom the personal data have been or will
                          be disclosed. You also have the right to obtain a copy
                          of the personal data undergoing processing free of
                          charge.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request rectification :{' '}
                          </strong>{' '}
                          You have the right to obtain the rectification from us
                          of inaccurate personal data.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request erasure (right to be forgotten) :{' '}
                          </strong>{' '}
                          Where provided by applicable data protection law, you
                          have the right to obtain from us the erasure of
                          personal data concerning you and we are obliged to
                          erase such data.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request restriction of processing :{' '}
                          </strong>{' '}
                          Where provided by applicable data protection law, you
                          have the right to obtain from us restriction of
                          processing of your personal information and we are
                          obliged to restrict such processing.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to request data portability :{' '}
                          </strong>{' '}
                          You have the right to receive your provided data in a
                          structured, commonly used and machine-readable format
                          and also have the right to transmit those personal
                          data to another entity without interference from us.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">
                            Right to object :{' '}
                          </strong>{' '}
                          Under applicable data protection law, you have the
                          right to object any time to the processing of your
                          data by us. Such right to object especially applies if
                          we collect and process your data for direct marketing
                          purposes. To exercise your rights, please contact us
                          by using the contact information at the end of this
                          Notice. Additionally, under European Union General
                          Data Protection Regulation (GDPR), you also have the
                          right to lodge a complaint with the competent data
                          protection.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Data Retention</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      We retain your personal information till the time you
                      avail services from us. Once you have terminated the
                      contractual relationship with us or you have deleted your
                      Account, we will remove your personal data from our
                      systems and records (unless we need or have a right to
                      keep your information to comply with legal or regulatory
                      obligations like taxation purposes or to meet our
                      legitimate interests).
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
          <FadeIn>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex">
                  <div className="pt-10 lg:w-full lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-orange-400">
                      <p>Additional Information</p>
                    </h2>
                    <p className="mt-6 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Right to object :{' '}
                      </strong>{' '}
                      The service is proposed for users over the age of 18 and
                      is not directed to children under 13. We don&apos;t
                      collect personal information from children under 13. If in
                      case any information reached to us without parental
                      consent, please contact us by using the &quot;contact
                      us&quot; at the end of this Notice, and we will take steps
                      to remove or terminate that information.
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        California Residents :{' '}
                      </strong>{' '}
                      <ul className="pl-4">
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">a : </strong>{' '}
                          California residents can contact with us by using the
                          contact information at the end of this Notice.
                          California Civil Code Section 1798.83 permits
                          California residents to request and obtain services
                          from us, once a year free of charge, a list of the
                          third parties to whom we have disclosed personal
                          information (as defined under that statute) of that
                          California resident, for direct marketing purposes in
                          the preceding calendar year and the categories of that
                          kind of personal information that was disclosed to
                          them.
                        </li>
                        <li className="mt-3 text-base text-neutral-600">
                          <strong className="text-orange-400">b : </strong> Swap
                          Motors. Service is not intended for anyone under the
                          age of 18, if you are a California resident under age
                          18 and feels like your information has become
                          publicly-available through the service and you are
                          unable to remove it, you may request removal by
                          contacting us at: support@swapengines.com. While
                          requesting for removal, you must be specific about the
                          information, and URL for each page where the
                          information is located.
                        </li>
                      </ul>
                    </p>
                    <p className="mt-6 text-base text-neutral-600">
                      <strong className="text-orange-400">
                        Modification of this Notice :{' '}
                      </strong>
                      Occasionally we post changes to this Notice, where we
                      revise the &quot;Last updated date&quot; at the top of
                      this Notice in order to notify you of changes. We always
                      suggest you to check the service time to time to inform
                      yourself of any changes or any of other policies. If you
                      don&apos;t agree to any update, please do not use the
                      service.
                    </p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
