'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          Oops! That page doesn't exist.
        </h1>
        <p className="text-zinc-400 mb-8">
          The page you're looking for couldn't be found.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  )
} 