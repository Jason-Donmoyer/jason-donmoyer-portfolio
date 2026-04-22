import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
    return (
        <main className="bg-surface">
            <section className="py-24 px-8 max-w-4xl mx-auto">
                <h1 className="text-primary font-bold text-4xl mb-4">Contact Me</h1>
                <h2 className="text-primary mb-4 font-semibold text-lg">Have a project in mind or need a developer who can turn ideas into practical, reliable solutions? Let’s talk.</h2>
                <div className="flex flex-col gap-4 text-primary">
                    <p>Whether you need a custom web application, internal business tool, workflow automation, dashboard, or MVP built from the ground up, I can help bring it to life with a clear process and a focus on results.</p>
                    <p>I work with businesses, founders, and teams who value thoughtful execution, strong communication, and software that solves real problems.</p>
                    <p>Tell me what you're building, where you're stuck, or what you'd like to improve — and let’s explore the best way to make it happen.</p>
                </div>
            </section>
            
            <section className="py-8 px-8 max-w-4xl mx-auto flex flex-col items-center md:flex-row justify-center gap-8">
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
                </section>
        </main>
    )
}