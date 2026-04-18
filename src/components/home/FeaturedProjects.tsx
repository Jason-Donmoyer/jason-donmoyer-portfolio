import { projects } from '../../lib/projects'

export default function FeaturedProjects() {
    return (
        <section className="py-16 px-8 bg-surface">
            <h2 className="text-3xl font-bold text-headline text-center mb-10">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {projects.filter(project => project.featured).map(project => (
                    <div key={project.title} 
                         className="rounded-2xl
                                    border
                                    border-border 
                                    p-6 
                                    bg-primary 
                                    hover:shadow-md 
                                    transition-shadow 
                                    flex 
                                    flex-col 
                                    gap-4">
                        <h3 className="text-xl font-semibold text-surface">{project.title}</h3>
                        <p className="text-surface text-sm">{project.summary}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(tech => (
                                <span key={tech} className="px-3 
                                                            py-1 
                                                            text-xs
                                                             bg-accent 
                                                             rounded-full
                                                            text-surface">{
                                    tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-auto">
                            {project.liveUrl && (
                                <a href={project.liveUrl} className="px-4 
                                                                     py-2 
                                                                     font-semibold 
                                                                     border 
                                                                     border-surface 
                                                                     text-surface 
                                                                     rounded-lg 
                                                                     hover:bg-secondary"
                                    >
                                    Project URL
                                    </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} className="px-4 
                                                                       py-2 
                                                                       font-semibold 
                                                                       border 
                                                                       border-surface 
                                                                       text-surface 
                                                                       rounded-lg 
                                                                       hover:bg-secondary"
                                >
                                    Github URL
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}