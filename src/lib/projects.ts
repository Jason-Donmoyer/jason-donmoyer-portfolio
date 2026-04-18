export type Project = {
    title: string
    summary: string
    stack: string[]
    liveUrl?: string
    githubUrl?: string
    slug: string
    featured: boolean
    status: 'complete' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
    {
        title: "Landing Page + CMS",
        summary: "Built a full-stack plumbing business site with a custom admin CMS so the owner can manage content, leads, and services without touching code.",
        stack: ["Next.js", "Supabase", "Tailwind CSS", "Typescript"],
        liveUrl: "https://centerstateplumbingnj.com",
        githubUrl: "https://github.com/Jason-Donmoyer/centerstate-plumbing",
        slug: "landing-page",
        featured: true,
        status: "complete",
    }, 
    {
        title: "Website Performance & Accessibility Fix Pack",
        summary: "Demonstrate ability to audit and fix performance and accessibility issues.",
        stack: ["Javascript"],
        liveUrl: "",
        githubUrl: "",
        slug: "fix-pack",
        featured: true,
        status: "in-progress",
    },
    {
        title: "Business Ops Automator",
        summary: "Automate messy CSV or email data processing into clean reports.",
        stack: ["Python", "Pandas", "FastAPI", "Celery", "SQLite"],
        liveUrl: "",
        githubUrl: "",
        slug: "ops-automator",
        featured: true,
        status: "planned"
    },
    {
        title: "API Integration Connector Service",
        summary: "Create a service that connects teo APIs and processes data between them.",
        stack: ["FastAPI", "Redis queue", "Postgres", "React", "Tailwind"],
        liveUrl: "",
        githubUrl: "",
        slug: "api-integration",
        featured: false,
        status: "planned"
    },
    {
        title: "Client Ready Analytics Dashboard",
        summary: "Build a clean analytics dashboard that replaces spreadsheets.",
        stack: ["Python", "FastAPI", "Postgres", "React", "Chart.js", "Tailwind"],
        liveUrl: "",
        githubUrl: "",
        slug: "analytics-dashboard",
        featured: false,
        status: "planned"
    },
    {
        title: "Appointment + Payment Micro-App",
        summary: "Allow businesses to accept bookings and payments in one workflow.",
        stack: ["Next.js", "Stripe", "Supabase", "Tailwind"],
        liveUrl: "",
        githubUrl: "",
        slug: "booking-app",
        featured: true,
        status: "in-progress"
    },
    {
        title: "Browser Workflow Helper Extension",
        summary: "Build a browser extension that automates repetitive web tasks.",
        stack: ["Javascript", "Chrome Extension API"],
        liveUrl: "",
        githubUrl: "",
        slug: "chrome-ext",
        featured: false,
        status: "planned"
    },
    {
        title: "Streamlit Data Cleanup Tool",
        summary: "Create a tool that cleans messy data through a simple interface.",
        stack: ["Python", "Streamlit", "Pandas"],
        liveUrl: "",
        githubUrl: "",
        slug: "data-cleanup",
        featured: false,
        status: "planned"
    },
    {
        title: "Client Portal Mini-SaaS",
        summary: "Provide a client login portal for project updates and file delivery.",
        stack: ["Next.js", "FastAPI", "Postgres", "Clerk"],
        liveUrl: "",
        githubUrl: "",
        slug: "client-portal",
        featured: false,
        status: "planned"
    },
    {
        title: "CI/CD Template",
        summary: "Create a production ready development template.",
        stack: ["Github Actions", "Docker", "Jest"],
        liveUrl: "",
        githubUrl: "",
        slug: "cicd-template",
        featured: false,
        status: "planned"
    }
]