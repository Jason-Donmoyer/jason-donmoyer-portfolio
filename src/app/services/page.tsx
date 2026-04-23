import { services } from '@/lib/services'

export default function Services() {
    return (
        <main className="bg-primary min-h-screen">
            <section className="py-24 px-8 border-b border-surface/10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-surface mb-4">Services Offered</h1>
                    <h2 className="text-2xl text-accent font-semibold mb-4">I help businesses and founders ship practical software, automate workflows, and turn ideas into usable products.</h2>
                </div>
            </section>
            <section className="py-16 px-8">
                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    {services.map(service => (
                        <div 
                            key={service.title}
                            className="rounded-2xl border border-surface/10 p-8 bg-secondary flex flex-col gap-6"    
                        >
                            <h2 className="text-2xl font-bold text-surface">{service.title}</h2>
                            <p className="text-surface/70 leading-relaxed">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {service.tech.map(t => (
                                    <span 
                                        key={t}
                                        className="px-3 py-1 text-xs text-surface border border-surface/20 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}