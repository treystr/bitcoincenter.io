'use client'

import { useState, useMemo } from 'react'
import { parsePhoneNumberFromString, getCountries, getCountryCallingCode } from 'libphonenumber-js'
import metadata from 'libphonenumber-js/metadata.full.json'

const ContactForm = () => {
  // Form state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneCountryIso, setPhoneCountryIso] = useState('US') // default USA (ISO)
  const [phoneNational, setPhoneNational] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [comment, setComment] = useState('')
  const [errors, setErrors] = useState({})

  // Dynamically build full country list from libphonenumber-js metadata
  const countryOptions = useMemo(
    () =>
      getCountries().map((iso) => {
        const code = `+${getCountryCallingCode(iso, metadata)}`
        return { iso, code, label: `${iso} (${code})` }
      }),
    []
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Reset previous errors
    setErrors({})

    // Trim inputs
    const fName = firstName.trim()
    const lName = lastName.trim()
    const emailVal = email.trim()
    const commentVal = comment.trim()
    const phoneNat = phoneNational.trim()

    const validationErrors = {}

    // Required fields
    if (!fName) validationErrors.firstName = 'First name is required.'
    if (!lName) validationErrors.lastName = 'Last name is required.'

    // Email validation
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (!emailVal) validationErrors.email = 'Email is required.'
    else if (!emailRegex.test(emailVal)) validationErrors.email = 'Invalid email format.'

    // Comment length validation
    if (commentVal.length > 500)
      validationErrors.comment = 'Comment must be 500 characters or less.'

    // Phone validation (optional)
    let formattedPhone = ''
    if (phoneNat) {
      const isoRegion = phoneCountryIso || 'US'

      const phoneNumber = parsePhoneNumberFromString(phoneNat, isoRegion)

      if (!phoneNumber || !phoneNumber.isValid()) {
        validationErrors.phone = 'Invalid phone number format.'
      } else {
        formattedPhone = phoneNumber.format('E.164') // Ensure E.164
      }
    }

    // If any validation errors, stop submission
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare form data for Google Forms
      const formData = new FormData()

      // TODO: Replace the entry IDs with actual Google Form field IDs
      formData.append('entry.663930969', fName) // First Name
      formData.append('entry.45070816', lName) // Last Name
      formData.append('entry.61581310', emailVal) // Email
      formData.append('entry.1270135495', formattedPhone || '') // Phone (E.164 or empty)
      formData.append('entry.1078034784', commentVal) // Comment

      // For debugging: log data before submission
      console.log('Submitting form data', {
        firstName: fName,
        lastName: lName,
        email: emailVal,
        phone: formattedPhone,
        comment: commentVal,
      })

      await fetch(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })

      console.log('Google Form submission completed (response will be opaque in no-cors mode).')

      setIsSubmitted(true)

      // Reset form fields after success
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhoneNational('')
      setPhoneCountryIso('US')
      setComment('')
    } catch (error) {
      // Silently fail (no-cors prevents detailed error), but provide feedback
      setErrors({ submit: 'There was an issue submitting the form. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Contact form */}
        <div className="w-full">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-10 text-center tracking-tight">Learn More About the Bitcoin Academic Center</h2>
          <p className="text-lg text-slate-200 mb-8 text-center">Please fill out the form below to learn more about the Bitcoin Academic Center.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto">
            {/* First / Last name row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name*"
                autoComplete="given-name"
                required
                className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name*"
                autoComplete="family-name"
                required
                className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address*"
              autoComplete="email"
              required
              className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
            />

            {/* Phone (combined select + input) */}
            <div className="flex w-full bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl overflow-hidden focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all duration-300">
              <select
                value={phoneCountryIso}
                onChange={(e) => setPhoneCountryIso(e.target.value)}
                autoComplete="tel-country-code"
                className="w-24 sm:w-32 shrink-0 bg-transparent px-4 py-4 text-white border-r border-amber-500 focus:outline-none"
              >
                {countryOptions.map((country) => (
                  <option
                    key={country.iso}
                    value={country.iso}
                    className="bg-slate-700 text-white"
                  >
                    {country.label}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                inputMode="tel"
                value={phoneNational}
                onChange={(e) => setPhoneNational(e.target.value)}
                placeholder="Phone Number (optional)"
                autoComplete="tel-national"
                className="flex-1 min-w-0 bg-transparent px-4 py-4 text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Comment */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment (optional, max 500 characters)"
              maxLength={500}
              rows={4}
              autoComplete="off"
              className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitted || isSubmitting}
              className={`self-end px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl w-max ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 hover:from-amber-400 hover:to-orange-400 hover:shadow-amber-500/25'
              }`}
            >
              {isSubmitting ? 'Submitting...' : isSubmitted ? 'Thanks for your interest. We\'ll be in touch!' : 'Submit'}
            </button>

            {/* Validation / submission feedback */}
            {Object.values(errors).length > 0 && (
              <ul className="text-red-400 text-sm list-disc pl-5 space-y-1">
                {Object.entries(errors).map(([key, msg]) => (
                  <li key={key}>{msg}</li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 