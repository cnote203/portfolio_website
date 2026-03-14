import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"

export default function ValveDetailPage() {
  const project = {
    title: "Artificial Pulmonary Valve",
    description: "Design and simulation of a bi-leaflet artificial heart valve using SolidWorks and flow analysis.",
    tools: ["SolidWorks", "Flow Simulation", "3D Printing", "CAD Modeling", "Biomedical Design"],
    images: {
      main: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XtoHPeofAdJGYlHNMA1wpjawJf86GU.png",
    },
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-8">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[300px] w-full bg-white rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.images.main || "/placeholder.svg"}
                  alt="Artificial Heart Valve 3D Model"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-muted-foreground mb-4">
          During my time at The Ottawa Hospital, I participated in a project to design and simulate an artificial
          pulmonary valve. This project was part of the hospital's ongoing research into heart valve replacements.
        </p>
        <p className="text-muted-foreground mb-4">
          My role involved using SolidWorks to create a 3D model of a bi-leaflet heart valve and running flow
          simulations to analyze its performance. The design needed to allow proper blood flow while minimizing
          turbulence and stress on the valve components.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Design Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="mb-4">
              The design process began with studying existing heart valve designs and understanding the requirements for
              pulmonary valve replacements. I worked with a team of biomedical engineers and physicians to establish the
              design parameters.
            </p>
            <p className="mb-4">
              Using SolidWorks, I created a 3D model of a bi-leaflet valve with a circular housing. The design focused
              on optimizing the opening and closing mechanisms to ensure smooth blood flow while maintaining structural
              integrity under pressure.
            </p>
            <p className="mb-4">
              Flow simulations were conducted to analyze how blood would move through the valve during both open and
              closed states. These simulations helped identify potential issues with turbulence or stagnation that could
              lead to blood clotting.
            </p>
            <p className="mb-4">
              The final design was 3D printed as a prototype for further testing and evaluation. This project provided
              valuable experience in biomedical design and the application of CAD software for medical device
              development.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
