'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-surface w-full flex gap-4 mt-0.5 p-4 justify-between items-center">
            <div>
                <img className="w-10 h-10" src="/jd-icon-v3.svg" alt="JD monogram" />
            </div>
            <div className="flex justify-between items-center gap-8">
                <div className="flex gap-6">
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/projects">Projects</Link>
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/services">Services</Link>
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/about">About</Link>
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/contact">Contact</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <a href=""><FaGithub size={20}></FaGithub></a>
                    <a href=""><FaLinkedin size={20}></FaLinkedin></a>
                </div>
                <button className="px-8 py-4 bg-primary rounded-lg text-surface cursor-pointer hover:bg-accent-hover">Hire Me</button>
            </div>
        </nav>
    )
}