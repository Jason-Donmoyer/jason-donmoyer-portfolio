import { projects } from '@/lib/projects'
import Link from 'next/link'

export default function Projects() {

    function getStatusStyle(status: string) {
        switch(status) {
            case 'complete': return 'bg-teal text-primary'
            case 'in-progress': return 'bg-accent text-surface'
            case 'planned': return 'bg-border text-primary'
            default: return ''
        }
    }

    return (
        <main>
            <section className="py-16 px-8 bg-surface">
            <h1 className="font-bold text-headline text-5xl text-center mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {projects.map(project => (
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
                        <h2 className="text-xl font-semibold text-surface">{project.title}</h2>
                        <div>
                            <span className={`px-3 py-1 text-xs rounded-full font-semibold ${getStatusStyle(project.status)}`}>
                                {project.status}
                            </span>
                        </div>
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
                        <Link 
                            href={`/projects/${project.slug}`} 
                            className="inline-flex items-center justify-center text-surface p-2 border border-surface rounded-full w-1/3 "
                        >
                            View Project
                        </Link>
                    </div>
                ))}
            </div>
        </section>
        </main>
    )
}