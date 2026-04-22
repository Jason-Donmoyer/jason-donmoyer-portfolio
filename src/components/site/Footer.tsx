'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-16 px-8 bg-primary">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-10">
                    <img className="w-20 h-20" src="/jd-app-icon-v3.svg" alt="JD logo-dark" />
                </div>
                <div className="flex gap-6 mb-4">
                    <Link className="cursor-pointer text-surface font-semibold hover:text-teal" href="/projects">Projects</Link>
                    <Link className="cursor-pointer text-surface font-semibold hover:text-teal" href="/services">Services</Link>
                    <Link className="cursor-pointer text-surface font-semibold hover:text-teal" href="/about">About</Link>
                    <Link className="cursor-pointer text-surface font-semibold hover:text-teal" href="/contact">Contact</Link>
                </div>
                <div className="flex gap-8 items-center ">
                    <a href="https://github.com/Jason-Donmoyer"><FaGithub size={20} className="text-surface hover:text-teal"></FaGithub></a>
                    <a href=""><FaLinkedin size={20} className="text-surface hover:text-teal"></FaLinkedin></a>
                </div>
                <div className="mt-4">
                    <p className="text-surface">&copy; Jason Donmoyer 2026</p>
                </div>
            </div>
        </footer>
    )
}