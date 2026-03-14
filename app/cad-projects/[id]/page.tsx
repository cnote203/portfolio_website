import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ZoomIn, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch project details based on ID
  // For now, we'll hardcode the forklift project details

  const project = {
    title: "Forklift Design Project",
    description: "Comprehensive 3D modeling and assembly of an industrial forklift using SolidWorks.",
    tools: ["Solidworks", "3D Modeling", "Assembly Design", "Mechanical Design"],
    mediaType: "video", // Changed from image to video
    images: {
      main: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DemoVidForklift-SYlhBZNgnANCb7ASpLMXarhHamW1SP.mp4", // Updated to video URL
      exploded:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/machine%20parts%20drawing.PNG-d7UJv0PQLpFr46MvotDEGa6CUmPXv7.png",
      assembly:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BalloonAssembly.PNG-UkdQTl15BU9EtAYtmatmsqANpQCHNo.png",
    },
    github: "https://github.com/cnote203/ForkliftSW", // Added GitHub repository URL
  }

  const partsList = [
    { id: 1, name: "Body", material: "STEEL", qty: 1 },
    { id: 2, name: "Seat", material: "FABRIC", qty: 1 },
    { id: 3, name: "Steering Wheel", material: "PLASTIC", qty: 1 },
    { id: 4, name: "Rear Light", material: "GLASS", qty: 2 },
    { id: 5, name: "Steering Rod", material: "STEEL", qty: 1 },
    { id: 6, name: "Cylinder1", material: "STEEL", qty: 2 },
    { id: 7, name: "Push Rod1", material: "STEEL", qty: 2 },
    { id: 8, name: "Hub", material: "ALUMINIUM", qty: 2 },
    { id: 9, name: "Rear Hub Link", material: "STEEL", qty: 2 },
    { id: 10, name: "Air Intake", material: "STEEL", qty: 1 },
    { id: 11, name: "Frame1", material: "STEEL", qty: 1 },
    { id: 12, name: "Frame2", material: "STEEL", qty: 1 },
    { id: 13, name: "Frame3", material: "STEEL", qty: 1 },
    { id: 14, name: "Fork", material: "HSS", qty: 2 },
    { id: 15, name: "Cylinder2", material: "STEEL", qty: 2 },
    { id: 16, name: "Push Rod2", material: "STEEL", qty: 2 },
    { id: 17, name: "Tyre", material: "RUBBER", qty: 4 },
    { id: 18, name: "Wheel Rim", material: "STEEL", qty: 4 },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>3D Model Demo</CardTitle>
            </CardHeader>
            <CardContent>
              {project.mediaType === "video" ? (
                <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden">
                  <video className="w-full h-full object-cover" controls autoPlay loop muted>
                    <source src={project.images.main} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative h-[400px] w-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src={project.images.main || "/placeholder.svg"}
                    alt="Forklift 3D Model"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className="flex gap-2 mt-4">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <p className="text-muted-foreground mb-4">
                This project demonstrates advanced SolidWorks modeling techniques including assembly constraints, motion
                studies, and mechanical system design. The video showcases the fully animated 3D model with working
                hydraulics and steering mechanisms.
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Files
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="technical-drawings">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="technical-drawings">Technical Drawings</TabsTrigger>
            <TabsTrigger value="parts-list">Parts List</TabsTrigger>
          </TabsList>

          <TabsContent value="technical-drawings" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exploded View</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[300px] w-full bg-white rounded-lg overflow-hidden group">
                    <Image
                      src={project.images.exploded || "/placeholder.svg"}
                      alt="Exploded View Drawing"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button variant="secondary" size="icon">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assembly Drawing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[300px] w-full bg-white rounded-lg overflow-hidden group">
                    <Image
                      src={project.images.assembly || "/placeholder.svg"}
                      alt="Assembly Drawing"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button variant="secondary" size="icon">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="parts-list" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Bill of Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 gap-4 p-4 bg-muted font-medium">
                    <div>Item No.</div>
                    <div>Part Name</div>
                    <div>Material</div>
                    <div>Quantity</div>
                  </div>
                  <div className="divide-y">
                    {partsList.map((part) => (
                      <div key={part.id} className="grid grid-cols-4 gap-4 p-4">
                        <div>{part.id}</div>
                        <div>{part.name}</div>
                        <div>{part.material}</div>
                        <div>{part.qty}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
