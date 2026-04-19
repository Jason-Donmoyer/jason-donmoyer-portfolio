export type SkillsCategory = {
    category: string
    skills: string[]
    featured: boolean
}
  
export const skills: SkillsCategory[] = [
{
    category: "Frontend",
    skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Responsive UI",
    "Component-based architecture",
    "Tailwind CSS"
    ],
    featured: true
},
{
    category: "Backend",
    skills: [
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "REST API development",
    "Authentication",
    "Server-side architecture",
    "Business logic design"
    ],
    featured: true
},
{
    category: "Databases",
    skills: [
    "PostgreSQL",
    "Supabase",
    "MongoDB",
    "SQL",
    "Database schema design",
    "CRUD systems",
    "Data modeling"
    ],
    featured: true
},
{
    category: "Dev tools",
    skills: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "VS Code",
    "Docker",
    "Vercel",
    "Render",
    "Postman",
    "npm"
    ],
    featured: false
},
{
    category: "Automation / APIs",
    skills: [
    "Workflow automation",
    "API integrations",
    "Webhook handling",
    "Google Sheets API",
    "Stripe integration",
    "Slack API",
    "CSV/data processing",
    "Task scheduling",
    "Internal reporting workflows"
    ],
    featured: true
},
{
    category: "Product / systems thinking",
    skills: [
    "MVP scoping",
    "Feature prioritization",
    "Client requirements translation",
    "Systems design",
    "Reusable architecture",
    "Technical documentation",
    "Handoff planning",
    "Conversion-focused UX"
    ],
    featured: true
},
{
    category: "Domain expertise",
    skills: [
    "Small business websites",
    "Freelancer tools",
    "Internal business tools",
    "Dashboards and reporting",
    "Workflow optimization",
    "Service business operations",
    "Construction and trades workflows",
    "Solo-founder MVPs"
    ],
    featured: true
}
];