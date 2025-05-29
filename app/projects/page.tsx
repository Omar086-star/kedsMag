import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Our Projects</h1>
            <p className="text-xl text-blue-100">
              Explore the humanitarian initiatives we're implementing around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="relief">Relief</TabsTrigger>
                <TabsTrigger value="psychological">Psychological</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <select className="rounded-md border border-gray-300 px-3 py-1.5 text-sm">
                <option>Most Recent</option>
                <option>Highest Funded</option>
                <option>Most Urgent</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Emergency Relief in Lebanon"
              category="Relief"
              image="/images/katra-flower-card.jpg"
              description="Providing essential supplies and medical aid to families affected by the recent crisis."
              progress={75}
              goal={50000}
              raised={37500}
            />
            <ProjectCard
              title="Children's Trauma Therapy"
              category="Psychological Support"
              image="/images/katra-flower-card.jpg"
              description="Specialized therapy sessions for children who have experienced conflict and displacement."
              progress={60}
              goal={30000}
              raised={18000}
            />
            <ProjectCard
              title="Women's Empowerment Program"
              category="Development"
              image="/images/katra-flower-card.jpg"
              description="Skills training and microfinance opportunities for women in underserved communities."
              progress={40}
              goal={25000}
              raised={10000}
            />
            <ProjectCard
              title="Clean Water Initiative"
              category="Development"
              image="/images/katra-flower-card.jpg"
              description="Installing water purification systems in rural communities to provide access to clean drinking water."
              progress={85}
              goal={20000}
              raised={17000}
            />
            <ProjectCard
              title="Emergency Food Distribution"
              category="Relief"
              image="/images/katra-flower-card.jpg"
              description="Distributing food packages to families facing acute food insecurity in conflict zones."
              progress={50}
              goal={40000}
              raised={20000}
            />
            <ProjectCard
              title="Community Mental Health Centers"
              category="Psychological Support"
              image="/images/katra-flower-card.jpg"
              description="Establishing mental health centers to provide counseling and support services in refugee camps."
              progress={30}
              goal={60000}
              raised={18000}
            />
            <ProjectCard
              title="Youth Education Program"
              category="Development"
              image="/images/katra-flower-card.jpg"
              description="Providing educational resources and scholarships to help young people continue their studies."
              progress={65}
              goal={35000}
              raised={22750}
            />
            <ProjectCard
              title="Medical Aid for Refugees"
              category="Relief"
              image="/images/katra-flower-card.jpg"
              description="Delivering essential medical supplies and services to refugee communities with limited healthcare access."
              progress={45}
              goal={45000}
              raised={20250}
            />
            <ProjectCard
              title="Grief Counseling Services"
              category="Psychological Support"
              image="/images/katra-flower-card.jpg"
              description="Offering specialized grief counseling to individuals who have lost loved ones in humanitarian crises."
              progress={25}
              goal={15000}
              raised={3750}
            />
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next</span>
              </Button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}
