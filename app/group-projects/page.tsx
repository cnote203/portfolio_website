import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Users, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GroupProjectsPage() {
  const projects = [
    {
      title: "Loyalty+ Points App",
      description: "A mobile application for managing and sharing loyalty points.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3eCgf0bLS8t1WCydVbAfwt4R6hAMbl.png",
      type: "image",
      team: "University Project Team",
      tools: ["JavaScript", "React Native", "Database Design"],
      details:
        "Worked with a team to develop a mobile application that allows users to democratize loyalty points across groups. The app enables sharing, transferring, and collective usage of points from various loyalty programs.",
      hasDetailPage: false,
    },
    {
      title: "Animatronic Claw",
      description: "A mechanical hand that mimics human hand movements.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m7Q1YuABdMEdAaM03gDgmiksXg3Poq.png",
      type: "image",
      team: "Biomedical Engineering Team",
      tools: ["CAD", "Arduino", "Servo Motors", "3D Printing"],
      details:
        "Collaborated on designing and building an animatronic claw. Used CAD for designing the components, Arduino for control, and 3D printing for fabrication.",
      hasDetailPage: false,
    },
    {
      title: "Arduino-based Electric Skateboard",
      description: "A DIY electric skateboard controlled by Arduino and Bluetooth.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZe4GfS8hBNwl7790D7HklnXun2Chz.png",
      type: "image",
      team: "Engineering Design Team",
      tools: ["Arduino", "Electronics", "CAD", "Power Systems", "Bluetooth"],
      details:
        "Designed and built an electric skateboard utilizing Arduino control systems and Bluetooth connectivity. Implemented a dual-battery configuration to optimize range and power delivery. The completed prototype achieved 32 km/h maximum speed with 10 km range, demonstrating practical application of power systems engineering and control theory within budget constraints.",
      link: "/group-projects/skateboard",
      hasDetailPage: true,
    },
    {
      title: "EntroCAD",
      description: "Co-founded and served as chief designer for a CAD entertainment company.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rZWpCjbQIhA9M1uGBe57lTqeEk8VFy.png",
      type: "image",
      team: "Design & Social Media Team",
      tools: ["CAD Design", "Content Creation", "Social Media Management", "Creative Direction"],
      details:
        "Co-founded and led design efforts for EntroCAD, a creative platform showcasing innovative CAD designs through social media. As chief designer from May 2022 to July 2023, I designed and edited content that helped establish the group's distinctive style, particularly notable in our early works through to the Nintendo Switch video series. The project successfully merged technical CAD expertise with creative storytelling.",
      link: "https://www.instagram.com/entrocad/",
      hasDetailPage: true,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">Group Projects</h1>
      </div>

      <p className="mb-8 text-lg">
        Explore the collaborative projects I've worked on with teams at the University of Ottawa and beyond. These
        projects showcase my teamwork, communication, and multidisciplinary engineering skills.
      </p>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="md:w-64 flex-shrink-0">
                  {project.image ? (
                    <div className="relative h-48 w-full bg-white rounded-lg flex items-center justify-center border">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-gray-100 rounded-lg flex items-center justify-center border">
                      <Users className="h-10 w-10 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Users className="mr-2 h-4 w-4" />
                      <span>{project.team}</span>
                    </div>
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
                          {project.link.startsWith("http") ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          ) : (
                            <Link href={project.link}>
                              View Details <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          )}
                        </Button>
                      </div>
                    )}
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
