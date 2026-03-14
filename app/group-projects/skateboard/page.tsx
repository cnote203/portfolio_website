import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function SkateboardProjectPage() {
  const project = {
    title: "Arduino-based Electric Skateboard",
    description: "A DIY electric skateboard with Arduino control and Bluetooth connectivity",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZe4GfS8hBNwl7790D7HklnXun2Chz.png",
    specs: {
      speed: "32 km/h",
      range: "10 km",
      cost: "$300",
      control: "Bluetooth via Smartphone",
    },
    components: [
      { name: "Deck", details: "Custom longboard deck selected for stability" },
      { name: "Motors", details: "High-torque DC motor with custom mount" },
      { name: "Batteries", details: "Dual Turnigy LiPo battery packs" },
      { name: "Controller", details: "Arduino UNO with Bluetooth module" },
      { name: "Wheels", details: "90mm diameter wheels with custom pulley system" },
    ],
  }

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
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[400px] w-full bg-white rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt="Electric Skateboard"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Arduino</Badge>
                <Badge variant="secondary">Electronics</Badge>
                <Badge variant="secondary">Power Systems</Badge>
                <Badge variant="secondary">Bluetooth</Badge>
                <Badge variant="secondary">3D Printing</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                {Object.entries(project.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="font-medium capitalize">{key}:</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Project Overview</TabsTrigger>
            <TabsTrigger value="development">Technical Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <p>
                    This project was developed based on research into the C'monboard project and similar DIY electric
                    skateboard designs. The objective was to create a cost-effective electric skateboard with smartphone
                    control capabilities.
                  </p>
                  <p>
                    I designed a control system using an Arduino UNO with Bluetooth connectivity for smartphone
                    integration, providing precise control over acceleration and real-time battery monitoring. The final
                    design achieved 32 km/h maximum speed with a 10 km range, while maintaining a total cost under $300.
                  </p>
                  <h3 className="text-lg font-medium mt-4">Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {project.components.map((component, index) => (
                      <div key={index} className="flex flex-col">
                        <h4 className="font-semibold text-sm">{component.name}</h4>
                        <p className="text-sm text-muted-foreground">{component.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="development" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-medium mb-2">Development Process</h3>
                  <p>The development followed a systematic approach with the following key phases:</p>

                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      <span className="font-medium">Research:</span> Analyzed existing designs with focus on the
                      C'monboard project to establish performance targets.
                    </li>
                    <li>
                      <span className="font-medium">Component Selection:</span> Tested multiple motor configurations to
                      identify optimal motor-battery combination for power and thermal stability.
                    </li>
                    <li>
                      <span className="font-medium">Control System:</span> Implemented Arduino-based control with
                      variable acceleration curve algorithm and Bluetooth communication protocols.
                    </li>
                    <li>
                      <span className="font-medium">Mechanical Design:</span> Created motor mounts in SolidWorks and
                      produced using additive manufacturing, requiring five iterations for optimal results.
                    </li>
                    <li>
                      <span className="font-medium">Testing:</span> Identified and resolved control system instabilities
                      through software modifications and performance testing.
                    </li>
                  </ul>

                  <h3 className="text-lg font-medium mt-4 mb-2">Technical Challenges</h3>
                  <p>
                    Primary challenges included thermal management of the motor system, optimizing power delivery while
                    maintaining battery life, and developing a responsive control algorithm that prevented sudden torque
                    application. The final design achieved 85% efficiency in the drivetrain system and demonstrated the
                    viability of Arduino-based control systems for small electric vehicles.
                  </p>

                  <h3 className="text-lg font-medium mt-4 mb-2">Applications</h3>
                  <p>
                    This project provided practical experience in power systems engineering, embedded control systems,
                    and mechanical design. The methodologies employed could be applied to similar small-scale electric
                    vehicle development projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
