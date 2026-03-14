import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { ArrowRight, Linkedin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">Welcome</h1>
      </div>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <Avatar className="h-24 w-24 md:h-32 md:w-32">
                    <AvatarImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1705520863429.jfif-BcTX3qx1SLtjaZWFIC2O1Na6TcwvZX.jpeg"
                      alt="Christopher Accad"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl">CA</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <CardTitle className="text-2xl">Christopher Accad</CardTitle>
                  <CardDescription>
                    Biomedical Mechanical Engineering Student at the University of Ottawa
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  I'm a 5th year Biomedical Mechanical engineering student with experience in CAD design, programming,
                  and project management. I'm passionate about leveraging technology to solve complex problems in
                  healthcare and beyond.
                </p>
                <p className="mb-4">
                  My diverse skill set spans from 3D modeling and simulation to coding in multiple languages and
                  developing automation solutions. I enjoy working on multidisciplinary projects that combine
                  engineering principles with practical applications.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>SolidWorks</Badge>
                  <Badge>Python</Badge>
                  <Badge>CAD</Badge>
                  <Badge>Excel</Badge>
                  <Badge>Power BI</Badge>
                  <Badge>3D Printing</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>MATLAB</Badge>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button asChild>
                    <Link href="/experience">
                      View Experience <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Ottawa, Ontario</p>
                  <p>289-698-8456</p>
                  <p>Christopher@accad.org</p>
                  <div className="flex mt-4">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://www.linkedin.com/in/christopher-accad-22ba121b9/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Professional Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Computer Aided Design: Proficient in Solidworks, Creo and Auto-CAD</li>
                <li>Excel: High experience, comfortable creating Macros and performing Complex Data Analysis</li>
                <li>Microsoft 365 Products: Power Apps, Power Automate, Power BI and Sharepoint</li>
                <li>Programming: Python, C, Javascript, Matlab and R</li>
                <li>MIG Welding, 3D Printing, GUI design, Basic Computational Fluid Dynamics</li>
                <li>Fluent in English and French</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold">University of Ottawa</h3>
                <p className="text-muted-foreground">BASc. in Biomedical Mechanical Engineering</p>
                <p className="text-sm">September 2020 - April 2026 (Expected)</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Worked on team-based projects including a Democratised Loyalty points App, an Animatronic Hand and an
                  Arduino-based electrical Skateboard
                </li>
                <li>Member of uORocketry and Formula uOttawa Team in CAD design capacity</li>
                <li>Certified in MIG welding, lathing, 3D printing, Laser cutting and more</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>CAD Projects</CardTitle>
              <CardDescription>3D modeling and design work</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Explore my CAD designs including work with Solidworks, Creo, and Auto-CAD.</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/cad-projects">View Projects</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Software Projects</CardTitle>
              <CardDescription>Programming and development work</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Check out my software projects including web applications, automation tools, and more.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/software-projects">View Projects</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Group Projects</CardTitle>
              <CardDescription>Collaborative engineering work</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">See the collaborative projects I've worked on with teams at university.</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/group-projects">View Projects</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
