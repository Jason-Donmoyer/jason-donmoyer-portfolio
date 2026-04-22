'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-surface w-full flex gap-4 mt-0.5 p-4 justify-between items-center">
            <div>
                <img className="w-10 h-10" src="/jd-icon-v3.svg" alt="JD monogram" />
            </div>
            <div className="md:hidden"><Menu size={30} onClick={() => setMobileMenu(true)} /></div>
            {mobileMenu && (
                <div className="absolute top-0 left-0 w-full bg-surface px-6 py-6 flex flex-col gap-6 shadow-md md:hidden">
                    <X size={30} onClick={() => setMobileMenu(false)} />
                    <div className="flex flex-col gap-6">
                        <Link onClick={() => setMobileMenu(false)} className="cursor-pointer text-copy font-semibold" href="/projects">Projects</Link>
                        <Link onClick={() => setMobileMenu(false)} className="cursor-pointer text-copy font-semibold" href="/services">Services</Link>
                        <Link onClick={() => setMobileMenu(false)} className="cursor-pointer text-copy font-semibold" href="/about">About</Link>
                        <Link onClick={() => setMobileMenu(false)} className="cursor-pointer text-copy font-semibold" href="/contact">Contact</Link> 
                        <Link onClick={() => setMobileMenu(false)} className="cursor-pointer text-copy font-semibold" href="/">Home</Link> 
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="https://github.com/Jason-Donmoyer"><FaGithub size={30} onClick={() => setMobileMenu(false)}></FaGithub></a>
                        <a href=""><FaLinkedin size={30} onClick={() => setMobileMenu(false)}></FaLinkedin></a>
                    </div>
                    <button className="px-8 py-4 bg-primary rounded-lg text-surface cursor-pointer hover:bg-accent-hover">Hire Me</button>
                </div>
            )}
            <div className="hidden md:flex justify-between items-center gap-8">
                <div className="flex gap-6">
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/projects">Projects</Link>
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/services">Services</Link>
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/about">About</Link>
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/contact">Contact</Link>
                    <Link className="cursor-pointer text-copy font-semibold hover:text-accent-hover" href="/">Home</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <a href="https://github.com/Jason-Donmoyer"><FaGithub size={20}></FaGithub></a>
                    <a href=""><FaLinkedin size={20}></FaLinkedin></a>
                </div>
                <button className="px-8 py-4 bg-primary rounded-lg text-surface cursor-pointer hover:bg-accent-hover">Hire Me</button>
            </div>
        </nav>
    )
}