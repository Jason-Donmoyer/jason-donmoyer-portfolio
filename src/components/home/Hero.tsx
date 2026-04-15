'use client'

import Link from 'next/link'


export default function Hero() {
    return (
        <section className="bg-primary py-24 px-8 flex flex-col gap-6 items-center text-center">
            <h1 className="font-heading font-bold text-5xl text-surface max-w-3xl leading-tight">I build practical software, automation tools, and SaaS products</h1>
            <p className="text-surface text-lg max-w-2xl">tools that solve workflow problems, reduce friction, and create leverage</p>
            <div className="flex gap-4 mt-2">
                <Link href="" className="px-6 py-3 bg-accent text-surface rounded-xl font-semibold hover:bg-accent-hover">View Projects</Link>
                <Link href="" className="px-6 py-3 border border-surface text-surface rounded-xl font-semibold hover:bg-secondary">Contact Me</Link>
            </div>
            <div className="flex gap-3 mt-4 flex-wrap justify-center">
                {["Next.js,", "Node.js", "Python", "SaaS", "Automation", "Full-Stack"].map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm border border-border rounded-full bg-secondary text-surface">
                        {tag}
                    </span>
                ))}
            </div>
        </section>
    )
   
}