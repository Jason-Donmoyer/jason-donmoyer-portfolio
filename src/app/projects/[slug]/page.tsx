import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = await params

    function getStatusStyle(status: string) {
        switch(status) {
            case 'complete': return 'bg-teal text-primary'
            case 'in-progress': return 'bg-accent text-surface'
            case 'planned': return 'bg-border text-primary'
            default: return ''
        }
    }

    const project = projects.find(p => p.slug === slug)
    if (!project) {
        notFound()
    }

    return (
        <main className="bg-surface min-h-screen py-16 px-8">
            <div className="max-w-4xl mx-auto flex flex-col gap-8">
                <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent w-fit"
                >
                    All Projects
                </Link>
            
                {/* Header */}
                <section className="p-8 bg-primary flex flex-col gap-4 rounded-2xl">
                    <span className={`px-3 py-1 text-xs rounded-full font-semibold w-fit ${getStatusStyle(project.status)}`}>
                        {project.status}
                    </span>
                    <h1 className="text-surface text-4xl font-bold">{project.title}</h1>
                    <p className="text-surface/70 text-lg leading-relaxed">{project.summary}</p>
                </section>

                {/* Stack */}
                <section className="bg-primary rounded-2xl p-8 flex flex-col gap-4">
                    <h2 className="text-surface text-xl font-semibold">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map(proj => (
                            <span 
                                key={proj}
                                className="px-3 py-1 text-xs text-surface border border-surface/20 rounded-full"
                            >
                                {proj}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Links */}
                <section className="flex gap-4">
                    {project.githubUrl && (
                        <a 
                        href={project.githubUrl} 
                        className="inline-flex 
                                   items-center 
                                   justify-center 
                                   px-6 
                                   py-3 
                                   border 
                                   border-primary 
                                   text-primary 
                                   rounded-xl 
                                   font-semibold
                                   hover:bg-primary
                                   hover:text-surface
                                   transition-colors"
                        >
                            Github
                        </a>
                    )}
                    {project.liveUrl && (
                        <a 
                        href={project.liveUrl} 
                        className="inline-flex
                                   items-center
                                   justify-center
                                   px-6
                                   py-3
                                   bg-accent
                                   text-surface
                                   rounded-xl
                                   font-semibold
                                   hover:bg-accent-hover
                                   transition-colors"
                        >
                            Live URL
                        </a>
                    )}
                </section>
            </div>
        </main>
    )
}