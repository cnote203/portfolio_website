import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function PistonDetailPage() {
  const project = {
    title: "4-Cylinder Crankshaft Animation",
    description: "Educational animation showcasing Solidworks' animation capabilities.",
    tools: ["Solidworks", "Animation", "Motion Study", "Assembly Design"],
    mediaType: "video",
    images: {
      main: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp%20%285%29%20%281%29%20%281%29-vPD3vW7A8jDWIkTABOGlYMMpojFhCU.mp4",
    },
    files: [
      {
        name: "Crankshaft.SLDPRT",
        displayName: "Crankshaft",
        size: "1.1 MB",
        preview:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crankshaft-DB0oFSh13Qz0VFq5oCP9yDZbTV9RTZ.png",
      },
      {
        name: "ConnectingRod.SLDPRT",
        displayName: "Connecting Rod",
        size: "0.9 MB",
        preview:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ConnectingRod-0JqmQkhzJ03tWYmc0L5FTsun8yHh0z.png",
      },
      {
        name: "ConnectingRodCap.SLDPRT",
        displayName: "Connecting Rod Cap",
        size: "0.4 MB",
        preview:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ConectingRodCap-1fdcWGuLcfuxdOUeQJDsRp5T5CVvz6.png",
      },
      {
        name: "CylinderHead.SLDPRT",
        displayName: "Cylinder Head",
        size: "0.8 MB",
        preview:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CylinderHead-bk2SjSlFfTxcDWwVOZgPlKG7x9D5zS.png",
      },
      {
        name: "PistonPin.SLDPRT",
        displayName: "Piston Pin",
        size: "0.3 MB",
        preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PistonPin-MXwy6wyTYHopjSbwny0uqdX5TAj9qc.png",
      },
      {
        name: "PistonRing.SLDPRT",
        displayName: "Piston Ring",
        size: "0.2 MB",
        preview:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PistonRing-qIeO58jXo9H1b2m6gBsTWMjNj8nmgp.png",
      },
    ],
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Animation Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden">
                <video className="w-full h-full object-cover" controls autoPlay loop muted>
                  <source src={project.images.main} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
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
                This project demonstrates advanced SolidWorks modeling and animation techniques, including assembly
                constraints, motion studies, and mechanical system design. The animation showcases the synchronized
                movement of pistons, connecting rods, and crankshaft in a 4-cylinder configuration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SolidWorks Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {project.files.map((file) => (
              <div key={file.name} className="border rounded-lg overflow-hidden bg-white">
                <div className="relative h-[140px]">
                  <Image
                    src={file.preview || "/placeholder.svg"}
                    alt={file.displayName}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-medium truncate mb-1" title={file.name}>
                    {file.displayName}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{file.size}</p>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <Download className="h-3 w-3 mr-1" /> Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
