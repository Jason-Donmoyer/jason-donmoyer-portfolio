import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function ContactCTA() {
    return (
        <section className="py-16 px-8 bg-surface">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
                <h2 className="text-3xl text-primary font-bold">Contact</h2>
                <p className="text-primary/70 text-lg">Have a project in mind or want to work together? Let's talk.</p>
                <div className="flex gap-6 font-semibold">
                    <a 
                        href="mailto:j.donmoyer523@gmail.com" 
                        className="flex items-center gap-2 hover:text-accent"
                    >
                        <Mail size={20} />
                        <span>Email</span>
                    </a>
                    <a 
                        href="https://github.com/Jason-Donmoyer"
                        className="flex items-center gap-2 hover:text-accent"
                    >
                        <FaGithub size={20}></FaGithub>
                        <span>Github</span>
                    </a>
                    <a 
                        href="" 
                        className="flex items-center gap-2 hover:text-accent"
                    >
                        <FaLinkedin size={20}></FaLinkedin>
                        <span>LinkedIn</span>     
                    </a>
                </div>
            </div>
        </section>
    )
}