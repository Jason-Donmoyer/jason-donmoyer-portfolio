import { LayoutDashboard, Workflow, Rocket, Wrench } from 'lucide-react'
import { services }from '../../lib/services'

const icons = [LayoutDashboard, Workflow, Rocket, Wrench]

export default function ServicesPreview() {
    return (
        <section className="py-16 px-8 bg-primary">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-surface text-center mb-4">Services Offered</h2>
                <p className="text-center text-surface/70 mb-12 max-w-xl mx-auto">I help businesses and founders ship practical software, automate workflows, and turn ideas into usable products.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const Icon = icons[index]
                        return (
                            <div 
                                key={service.title}
                                className="rounded-2xl
                                           border
                                           border-surface/10
                                           p-6
                                           bg-secondary
                                           flex
                                           flex-col
                                           gap-3
                                           hover:border-accent
                                           transition-colors"
                            >
                                <Icon className="text-accent" size={28} />
                                <h3 className="text-lg font-semibold text-surface">{service.title}</h3>
                                <p className="text-surface/70 text-sm leading-relaxed">{service.shortDescription}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}