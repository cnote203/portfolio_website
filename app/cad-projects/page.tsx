import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CADProjectsPage() {
  const projects = [
    {
      title: "Artificial Pulmonary Valve",
      description: "Designed and simulated an artificial pulmonary valve using Solidworks Flow Simulation.",
      tools: ["Solidworks", "Flow Simulation", "3D Printing"],
      details:
        "Worked with physicians and engineers at The Ottawa Hospital to design and print an artificial pulmonary valve. Used Solidworks Flow Simulation to optimize the valve design for proper blood flow dynamics.",
      hasDetailPage: true,
      detailPath: "/cad-projects/valve",
    },
    {
      title: "Forklift Design Project",
      description: "Comprehensive 3D modeling and assembly of an industrial forklift using SolidWorks.",
      tools: ["Solidworks", "3D Modeling", "Assembly Design", "Mechanical Design"],
      details:
        "Designed and developed a detailed 3D model of an industrial forklift, incorporating complex mechanical systems including the mast, hydraulics, and chassis. Implemented industry safety standards and performed stability analysis to ensure optimal load-bearing capacity.",
      hasDetailPage: true,
      detailPath: "/cad-projects/forklift",
    },
    {
      title: "4-Cylinder Crankshaft Animation",
      description: "Educational animation showcasing Solidworks' animation capabilities.",
      tools: ["Solidworks", "Animation", "Motion Study", "Assembly Design"],
      details:
        "Designed and animated a 4-cylinder crankshaft assembly to demonstrate the power of Solidworks' Animation tools. The project showcases complex mechanical interactions and motion studies in a clear, educational format.",
      hasDetailPage: true,
      detailPath: "/cad-projects/piston",
    },
    {
      title: "Board Room Installation Planning",
      description: "Auto-CAD plans for board room installations at Indigenous Services Canada.",
      tools: ["Auto-CAD", "Space Planning"],
      details:
        "Used Auto-CAD to plan out board room installations when working with the Audio Visual Team at Indigenous Services Canada. Created detailed floor plans and equipment layouts to optimize space usage and functionality.",
      hasDetailPage: false,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">CAD Projects</h1>
      </div>

      <p className="mb-8 text-lg">
        Explore my Computer-Aided Design projects created using Solidworks, Creo, and Auto-CAD. These projects showcase
        my skills in 3D modeling, simulation, and technical design.
      </p>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <p className="text-sm leading-relaxed">{project.details}</p>
                </div>

                {/* Skills and Actions */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {project.hasDetailPage && (
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href={project.detailPath}>
                          View Details <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
