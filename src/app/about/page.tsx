import Link from 'next/link'

export default function About() {
    return (
        <main className="bg-primary min-h-screen">

            {/* Hero */}
            <section className="py-24 px-8 border-b border-surface/10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-surface mb-4">Jason Donmoyer</h1>
                    <h2 className="text-2xl text-accent font-semibold mb-4">Built in the Field. Refined in Software.</h2>
                    <p className="text-surface/70 text-lg leading-relaxed">I bring real-world project experience, hands-on problem solving, and modern development skills together to build software that solves practical business problems.</p>
                </div>
            </section>

            {/* My Story */}
            <section className="py-16 px-8 border-b border-surface/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-surface mb-6">My Story</h2>
                    <p className="text-surface/70 text-lg leading-relaxed">Before software, I spent more than two decades managing and executing complex construction projects in the plumbing and mechanical trades. That meant solving problems under pressure, coordinating teams, reading plans, working with deadlines, budgets, and real-world constraints.

                    Over time, I realized the same mindset that drives successful field projects also applies to building software: understand the problem clearly, create efficient systems, communicate well, and deliver reliable results.

                    Today I use that experience alongside modern development tools to build websites, internal tools, automation systems, and SaaS products that help businesses operate more efficiently and grow with confidence.</p>
                </div>
            </section>

            {/* What Makes Me Different */}
            <section className="py-16 px-8 border-b border-surface/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-surface mb-8">What Makes Me Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-surface/10 p-6 bg-secondary">
                            <h3 className="text-lg font-semibold text-accent mb-2">Real Business Perspective</h3>
                            <p className="text-surface/70">I understand how businesses actually operate — scheduling, estimating, operations, bottlenecks, customer communication, and profit margins.</p>
                        </div>
                        <div className="rounded-2xl border border-surface/10 p-6 bg-secondary">
                            <h3 className="text-lg font-semibold text-accent mb-2">Builder Mentality</h3>
                            <p className="text-surface/70">I focus on solutions that work in practice, not just ideas that look good in theory.</p>
                        </div>
                        <div className="rounded-2xl border border-surface/10 p-6 bg-secondary">
                            <h3 className="text-lg font-semibold text-accent mb-2">Clear Communication</h3>
                            <p className="text-surface/70">Years of managing projects and clients taught me how to communicate timelines, expectations, and priorities clearly.</p>
                        </div>
                        <div className="rounded-2xl border border-surface/10 p-6 bg-secondary">
                            <h3 className="text-lg font-semibold text-accent mb-2">Problem Solver First</h3>
                            <p className="text-surface/70">Technology is the tool. Solving the right problem is always the priority.</p>
                        </div>
                    </div>
                </div>  
            </section>

            {/* Skills */}
            <section className="py-16 px-8 border-b border-surface/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-surface mb-6">Skills & Expertise</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <li className="text-surface/70 flex items-center gap-2">
                            <span className="text-accent">→</span>Small business websites that generate leads
                        </li>
                        <li className="text-surface/70 flex items-center gap-2">
                            <span className="text-accent">→</span>Internal tools that save time and reduce manual work
                        </li>
                        <li className="text-surface/70 flex items-center gap-2">
                            <span className="text-accent">→</span>Automation systems and API integrations
                        </li>
                        <li className="text-surface/70 flex items-center gap-2">
                            <span className="text-accent">→</span>Dashboards, reporting, and workflow improvements
                        </li>
                        <li className="text-surface/70 flex items-center gap-2">
                            <span className="text-accent">→</span>MVP builds for founders and service businesses
                        </li>
                        <li className="text-surface/70 flex items-center gap-2">
                            <span className="text-accent">→</span>Construction and trades industry software solutions
                        </li>
                    </ul>
                </div> 
            </section>

            {/* Why It MAtters */}
            <section className="py-16 px-8 border-b border-surface/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-surface mb-6">Why It Matters</h2>
                    <p className="text-surface/70 text-lg leading-relaxed">Anyone can learn syntax. Experience solving expensive, time-sensitive real-world problems is harder to teach. I bring both technical skills and practical judgment to every project.</p>
                </div>
            </section>

            {/* CTA Button */}
            <section className="py-16 px-8">
                <div className="max-w-4xl mx-auto">
                    <Link 
                        href='/contact'
                        className="px-6 py-3 bg-accent text-surface rounded-xl font-semibold hover:bg-accent-hover"
                    >
                        Contact Me
                    </Link>
                </div>
            </section>
        </main>
    )
}