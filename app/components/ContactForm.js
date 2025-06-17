'use client'

import { useState } from 'react'

const ContactForm = () => {
  // Form state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic client-side validation (HTML `required` attributes take care of main checks)
    if (firstName.trim() && lastName.trim() && email.trim()) {
      setIsSubmitted(true)
      /* Reset the form */
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      // Hide thank-you message after a delay
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* Contact form */}
        <div className="w-full">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Connect With Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* First / Last name row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name*"
                required
                className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name*"
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
              required
              className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
            />

            {/* Phone */}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number (optional)"
              pattern="[+]?\d{1,4}?[\s.-]?\(?\d{1,3}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}"
              className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl w-max ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 hover:from-amber-400 hover:to-orange-400 hover:shadow-amber-500/25'
              }`}
            >
              {isSubmitted ? 'Thank you!' : 'Connect'}
            </button>

            {isSubmitted && (
              <p className="text-green-400 text-sm font-medium animate-pulse">Thanks for reaching out! We'll be in touch.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 