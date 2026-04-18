export type Service = {
    title: string
    shortDescription: string
    description: string
    tech: string[]
}
  
  export const services: Service[] = [
    // SEO keywords: web app development, custom dashboard development, analytics dashboard, React dashboard, client portal development, business dashboard, admin dashboard, Python API development
    {
      title: "Web apps and dashboards",
      shortDescription: "Build responsive web apps and dashboards that turn data, workflows, and customer activity into a clear interface your team or clients can use every day.",
      description: 
        "Build responsive web apps and dashboards that turn data, workflows, and customer activity into a clear interface your `team or clients can use every day. I focus on fast front ends, reliable APIs, and decision-ready reporting so you can launch sooner and reduce manual status updates. Common outcomes include analytics dashboards, client portals, reporting hubs, and lightweight SaaS-style interfaces.",
      tech: [
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "Vercel",
        "GitHub Actions",
        "Google Analytics Data API"
      ],
    },
  
    // SEO keywords: workflow automation, Python automation, business process automation, API integration developer, Google Sheets automation, Slack automation, operations automation, no-code replacement
    {
      title: "Workflow automation",
      shortDescription: "Automate repetitive work across email, spreadsheets, forms, CRMs, and internal systems so your team spends less time copying data and chasing follow-ups.",
      description:
        "Automate repetitive work across email, spreadsheets, forms, CRMs, and internal systems so your team spends less time copying data and chasing follow-ups. I design reliable workflows with validation, logging, and alerts so the automation stays useful after launch instead of becoming a fragile one-off script. Good fits include approval flows, order routing, reporting pipelines, notifications, and cross-tool syncs.",
      tech: [
        "Python",
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "Docker",
        "Render",
        "GitHub Actions",
        "Google Sheets API",
        "Slack API"
      ],
    },
  
    // SEO keywords: SaaS MVP development, startup MVP developer, Next.js SaaS, Python backend developer, subscription app development, product prototype, Stripe integration, user authentication
    {
      title: "SaaS MVP development",
      shortDescription: "Turn a product idea into a working SaaS MVP with the core features needed to test demand, onboard users, and learn from real usage.",
      description:
        "Turn a product idea into a working SaaS MVP with the core features needed to test demand, onboard users, and learn from real usage. I prioritize lean architecture, secure authentication, billing-ready foundations, and a release plan that gets the first version live quickly without overbuilding. This is a strong fit for founder-led products, niche B2B tools, and paid pilot launches.",
      tech: [
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Supabase Auth",
        "Vercel",
        "GitHub Actions",
        "Stripe"
      ],
    },
  
    // SEO keywords: internal business tools, custom admin panel, operations software, internal dashboard, CRM workflow tool, business automation app, role-based access, process management software
    {
      title: "Internal business tools",
      shortDescription: "Build internal tools that give your team one place to manage repetitive operations, approvals, records, and reporting.",
      description:
        "Build internal tools that give your team one place to manage repetitive operations, approvals, records, and reporting. I focus on practical UX, role-based access, and integrations with the systems you already use so the tool improves operations instead of creating more admin work. Common use cases include admin panels, CRM-style dashboards, inventory workflows, scheduling tools, and back-office portals.",
      tech: [
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "Render",
        "GitHub Actions",
        "Google Workspace APIs"
      ],
    }
  ]