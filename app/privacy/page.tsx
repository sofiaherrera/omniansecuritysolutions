'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-dark-100">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-display font-bold text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert">
            <p className="text-zinc-300 text-lg">
              We do not collect any personal data other than what you submit via the contact form or email. 
              We do not use cookies, analytics tools, or trackers. Your privacy is protected and respected.
            </p>
            <div className="mt-12">
              <Link
                href="/"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Return Home
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 