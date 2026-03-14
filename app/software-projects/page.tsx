import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, Github } from 'lucide-react'
import Image from "next/image"

export default function SoftwareProjectsPage() {
  const projects = [
    {
      title: "Dialect",
      description: "Interactive geography-based word game challenging players to identify countries through cultural idioms.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RLmAVGORhiiqx6MTA2BdoOM7ZJp5ho.png",
      tools: ["JavaScript", "HTML5", "CSS3", "Game Design", "Cultural Research", "Geospatial Algorithms"],
      details:
        "Developed a sophisticated Wordle-inspired game featuring 10 levels of cultural idioms from around the world. Players have 4 attempts to guess the correct country based on unique regional expressions. The game incorporates advanced features including real-time distance calculations using the Haversine formula, intelligent country alias recognition, progressive hint systems, and responsive design. Each level includes carefully researched authentic idioms with cultural explanations, creating an educational gaming experience that combines geography, linguistics, and cultural awareness.",
      github: "https://github.com/cnote203/dialect-minigame", // You can add the actual demo URL here
      featured: true,
    },
    {
      title: "Cupid's Adventure",
      description: "Interactive Valentine's Day game with three mini-games leading to a proposal.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-heart-2779422_1280-Q4PY8sNKG8NPMKPB31K2hoHi3Gysph.png",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      details:
        "Designed and developed a Valentine's Day themed game featuring three mini-games: Find the Queen, Appa Dodge, and Connections. The game culminates in an interactive proposal screen, creating a memorable Valentine's experience. Built with Next.js and TypeScript, featuring smooth animations and responsive design.",
      github: "https://github.com/cnote203/valentines_day",
      demo: "https://v0-valentines-invite-f2ht6d.vercel.app/",
      featured: true,
    },
    {
      title: "Excel Automation Suite",
      description: "VBA and Python tools for automating Excel tasks at Indigenous Services Canada.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mcshNJxqMFWhl16W3SRMJO3FEfOn0u.png",
      tools: ["VBA", "Python", "Pandas", "Excel Automation"],
      details:
        "Developed a comprehensive suite of automation tools as part of the 'Excel Clinic' initiative at Indigenous Services Canada. These tools helped slash the time for formatting budget documents and decreased response time for technical inquiries from 6.2 days to 3.0 days. The suite includes data cleaning macros, report generation scripts, and data analysis tools. Originally made using Sharepoint, re-done using Vercel",
      demo: "https://v0-excel-macro-automation-site.vercel.app/",
    },
    {
      title: "Automated Risk Metric Dashboard",
      description: "Dashboard for Transport Canada using databricks eBIDA Platform.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ujg7hPDgyXClSbrULcaknlczpt68Kd.png",
      tools: ["Python", "Databricks", "Data Visualization"],
      details:
        "Developed an automated Risk Metric Dashboard using the databricks eBIDA Platform for Transport Canada's Transportation of Dangerous Goods division. The dashboard provides real-time risk assessments for hydrogen transport.",
    },
    {
      title: "Geospatial Risk Assessment Tool",
      description: "Tool for computing risk related to hydrogen transport infrastructure.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4OGEANrGML1AeJrWWxWEuFwrn5PZLC.png",
      tools: ["Python", "GeoPandas", "Data Analysis"],
      details:
        "Created a quantitative risk assessment tool for road applications in the transport of hydrogen. The tool works with geospatial data frames to compute risk pertaining to surrounding infrastructure should an incident occur.",
    },
  ]

  // Function to determine background color based on project title
  const getBackgroundColor = (title: string) => {
    if (title === "Excel Automation Suite") return "bg-[rgb(8,116,76)]"
    if (title === "Cupid's Adventure") return "bg-[rgba(255,230,242,1)]"
    if (title === "Dialect") return "bg-[rgba(240,248,255,1)]"
    return "bg-white"
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">Software Projects</h1>
      </div>

      <p className="mb-8 text-lg">
        Explore my software development projects spanning various languages and technologies. These projects demonstrate
        my programming skills, problem-solving abilities, and creativity in developing solutions.
      </p>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="md:w-64 flex-shrink-0">
                  <div
                    className={`relative h-48 w-full rounded-lg flex items-center justify-center border ${getBackgroundColor(project.title)}`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain p-4"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-pink-500 hover:bg-pink-600">
                          <Heart className="h-3 w-3 mr-1 fill-current" /> Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
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

                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> View Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="outline" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
