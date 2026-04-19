import { skills } from '../../lib/skills'

export default function SkillsGrid() {
    return (
        <section className="py-16 px-8 bg-surface">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-primary text-center mb-12">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.filter(skill => skill.featured).map(skill => (
                        <div 
                            key={skill.category}
                            className="rounded-2xl border border-primary/10 p-6 bg-white flex flex-col gap-4"
                        >
                            <h3 className="text-lg font-semibold text-accent">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.skills.map(tech => (
                                    <span 
                                        key={tech}
                                        className="px-3 py-1 text-sm text-primary/80 border border-primary/20 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}