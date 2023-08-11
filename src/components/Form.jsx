'use client'

import { formData } from '@/lib/formData'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const FormComponent = () => {
  const years = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
    2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
    1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
  ]

  const router = useRouter()
  const [formSelections, setFormSelections] = useState({
    part: '',
    make: '',
    model: '',
    year: '',
    size: '',
  })

  return (
    <div className="w-full max-w-xl">
      <form className="mb-4 grid grid-cols-12 gap-1 rounded bg-white px-8 pb-8 pt-6 shadow-md sm:min-w-[450px] sm:gap-4">
        <div className="col-span-12">
          <p className="mt-2 text-sm text-neutral-600">
            Fill the form to get your{' '}
            <span className="text-orange-400">Free Quote</span>
          </p>
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          <select
            name="part"
            id="id_part"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            required=""
            defaultValue=""
            onChange={(e) => {
              setFormSelections((prev) => ({
                ...prev,
                part: e.target.value,
                make: '',
                model: '',
                year: '',
                size: '',
              }))
            }}
          >
            <option value="">- Select Part -</option>
            {Object.keys(formData).map((part) => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          <select
            name="make"
            id="id_make"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            required=""
            defaultValue=""
            disabled={formSelections.part === ''}
            data-gtm-form-interact-field-id="0"
            onChange={(e) => {
              setFormSelections((prev) => ({
                ...prev,
                make: e.target.value,
                model: '',
                year: '',
                size: '',
              }))
            }}
          >
            <option value="">- Select Make -</option>
            {Object.keys(formData[formSelections.part] || {}).map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          {Object.keys(
            formData[formSelections.part]?.[formSelections.make] || {}
          ).length === 0 ? (
            <input
              disabled={formSelections.make === ''}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
              onChange={(e) => {
                setFormSelections((prev) => ({
                  ...prev,
                  model: e.target.value,
                  year: '',
                  size: '',
                }))
              }}
              placeholder="Model"
            />
          ) : (
            <select
              name="model"
              id="id_model"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
              required=""
              defaultValue=""
              disabled={formSelections.make === ''}
              data-gtm-form-interact-field-id="0"
              onChange={(e) => {
                setFormSelections((prev) => ({
                  ...prev,
                  model: e.target.value,
                  year: '',
                  size: '',
                }))
              }}
            >
              <option value="">- Select model -</option>
              {Object.keys(
                formData[formSelections.part]?.[formSelections.make] || {}
              ).map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* <div className="col-span-12 mb-4 sm:col-span-12">
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            id="model"
            type="text"
            placeholder="Model"
          />
        </div> */}
        <div className="col-span-12 mb-4 sm:col-span-12">
          {Object.keys(
            formData[formSelections.part]?.[formSelections.make]?.[
              formSelections.model
            ] || {}
          ).length === 0 ? (
            <input
              disabled={formSelections.model === ''}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
              onChange={(e) => {
                setFormSelections((prev) => ({
                  ...prev,
                  year: e.target.value,
                  size: '',
                }))
              }}
              placeholder="Engine Year"
            />
          ) : (
            <select
              name="year"
              id="id_year"
              disabled={formSelections.model === ''}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
              required=""
              onChange={(e) => {
                setFormSelections((prev) => ({
                  ...prev,
                  year: e.target.value,
                  size: '',
                }))
              }}
              defaultValue="Not Selected"
            >
              <option value="Not Selected">- Select Engine Year -</option>
              {Object.keys(
                formData[formSelections.part]?.[formSelections.make]?.[
                  formSelections.model
                ] || {}
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="col-span-12 mb-4 sm:col-span-12">
          <input
            disabled={formSelections.year === ''}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
            onChange={(e) => {
              setFormSelections((prev) => ({
                ...prev,
                size: e.target.value,
              }))
            }}
            placeholder="Select Option"
          />
          {/* {(
            formData[formSelections.part]?.[formSelections.make]?.[
              formSelections.model
            ]?.[formSelections.year] || []
          ).length === 0 ? (
            <input
              disabled={formSelections.year === ''}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
              onChange={(e) => {
                setFormSelections((prev) => ({
                  ...prev,
                  size: e.target.value,
                }))
              }}
              placeholder="Select Option"
            />
          ) : (
            <select
              name="size"
              id="id_size"
              disabled={formSelections.year === ''}
              onChange={(e) => {
                setFormSelections((prev) => ({
                  ...prev,
                  size: e.target.value,
                }))
              }}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-orange-400 focus:outline-none"
              defaultValue=""
            >
              <option value="">- Select Option -</option>
              {(
                formData[formSelections.part]?.[formSelections.make]?.[
                  formSelections.model
                ]?.[formSelections.year] || []
              ).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )} */}
        </div>
        <div className="col-span-12 flex items-center justify-between">
          <button
            onClick={() => {
              router.push(
                `/search/${formSelections.part.replace(
                  / /g,
                  '_'
                )}/${formSelections.make.replace(
                  / /g,
                  '_'
                )}/${formSelections.model.replace(
                  / /g,
                  '_'
                )}/${formSelections.year.replace(
                  / /g,
                  '_'
                )}/${formSelections.size.replace(/ /g, '_')}`
              )
            }}
            // href={{ pathname: '/search', query: formSelections }}
            disabled={
              formSelections.make === '' ||
              formSelections.model === '' ||
              formSelections.part === '' ||
              formSelections.size === '' ||
              formSelections.year === ''
            }
            className="focus:shadow-outline w-full rounded bg-orange-400 px-4 py-2 text-center font-bold text-white hover:bg-orange-700 focus:outline-none"
            type="button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
