'use client'

import Link from 'next/link'

export default function AboutPreview() {
    return (
        <section className="py-16 px-8 bg-primary">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
                <h2 className="text-3xl text-surface font-bold">About</h2>
                <p className="text-surface/70 text-lg leading-relaxed">I spent more than 25 years solving real-world systems and project workflow problems in the construction industry. Today I apply that same systems mindset to software development, building automation tools, SaaS products, and practical applications designed to solve real operational problems.</p>
                <Link 
                    href="/about" 
                    className="px-6 
                               py-3
                              bg-accent
                              text-surface 
                              rounded-xl 
                              font-semibold
                              hover:bg-accent-hover"
                >
                    About
                </Link>
            </div>
        </section>
    )
}