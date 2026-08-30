import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { WorkContributionGraph } from "@/components/work-contribution-graph"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">Work Experience</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Engineering Procurement Officer</CardTitle>
                  <CardDescription>National Defence — DSTARS 6, ADM(Mat)</CardDescription>
                </div>
                <Badge>Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">July 2026 - Present | Enhanced Reliability Security Clearance</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Reviewed vendor CAD documentation and engineering submissions for CAF support vehicle programs using CATIA,
                  verifying compliance with technical specifications, procurement requirements, and applicable defence standards.
                  Drafted procurement specifications and engineering requirements for 10 capital equipment programs,
                  ranging from $100,000 to $2M budgets, and produced technical compliance reports.
                </li>
                <li>
                  Conducted 3 on-site facility inspections of defence manufacturing and deployment environments, directly
                  informing procurement documentation with first-hand technical observations of armoured vehicle and
                  ammunition magazine production
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Procurement</Badge>
                <Badge variant="outline">Engineering Specifications</Badge>
                <Badge variant="outline">Technical Documentation</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Data Analyst CO-OP</CardTitle>
                  <CardDescription>Canadian Armed Forces</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                May 2025 - June 2026 | Enhanced Reliability Security Clearance
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Delivered data applications and digital tools actively used by 500+ military and civilian DND personnel,
                  built across AWS Services, Power BI, and Azure DevOps
                </li>
                <li>
                  Architected AWS-based data pipelines supporting 3 active flight and ground test programs, automating
                  ingestion and transformation of aerospace test data to eliminate manual handling and improve cross-team
                  data reliability for tens of GBs per ingestion cycle
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Power BI</Badge>
                <Badge variant="outline">Azure DevOps</Badge>
                <Badge variant="outline">Data Pipelines</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Risk Analyst CO-OP</CardTitle>
                  <CardDescription>Transport Canada</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                May 2024 - May 2025 | Enhanced Reliability Security Clearance
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Engineered an automated Risk Metric dashboard modeling three hydrogen and crude oil transport hazard
                  scenarios — Fireball, BLEVE, and Vapour Cloud Explosion — by replacing manual data retrieval with robust
                  automated source connections, reducing analyst reporting time by ~15%
                </li>
                <li>
                  Applied fluid dynamics, heat transfer principles, and geospatial analysis to model hazard zones and
                  infrastructure impact corridors across a trans-provincial corridor spanning Edmonton to Vancouver,
                  focused on crude oil and hydrogen transport risk
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Risk Analysis</Badge>
                <Badge variant="outline">Fluid Dynamics</Badge>
                <Badge variant="outline">Geospatial Analysis</Badge>
                <Badge variant="outline">Data Visualization</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assistant Project Manager</CardTitle>
              <CardDescription>Employment and Social Development Canada</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                January 2024 - May 2024 | Enhanced Reliability Security Clearance
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Designed and deployed a modernized SharePoint environment for the Integrity Services Branch, replacing
                  a legacy system with a feature-current platform serving branch management and improving document
                  traceability and access control
                </li>
                <li>
                  Conducted stakeholder and requirements analysis across branch operations, consolidating 5+ operational
                  workflows into structured, access-controlled information subsystems — improving process traceability and
                  reducing operational handoff ambiguity
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">SharePoint</Badge>
                <Badge variant="outline">Requirements Analysis</Badge>
                <Badge variant="outline">Process Optimization</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IT Automation CO-OP</CardTitle>
              <CardDescription>Indigenous Services Canada</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                May 2023 - January 2024 | Enhanced Reliability Security Clearance
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Built a Python-based automated device tracking system processing 100+ daily deployment tickets,
                  eliminating manual tracking errors and ensuring real-time asset visibility at scale
                </li>
                <li>
                  Founded the &quot;Excel Clinic&quot; to foster cross-departmental collaboration by leveraging Excel&apos;s and Python&apos;s
                  automation capabilities, slashing the time for formatting budget documents and decreasing the response time
                  for technical inquiries from 6.2 days to 3.0 days
                </li>
                <li>
                  Deployed a Power Platform help desk agent as a front-desk web application, streamlining scheduling for
                  an average of 25 daily walk-in appointments and reducing front-desk administrative load; additionally
                  used AutoCAD to support boardroom equipment layout planning
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Automation</Badge>
                <Badge variant="outline">Power Platform</Badge>
                <Badge variant="outline">AutoCAD</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biomedical Engineering CO-OP</CardTitle>
              <CardDescription>The Ottawa Hospital, Biomedical Engineering Department</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">May 2022 - September 2022</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Designed and implemented a ranked capital development program employing Power BI to automate data
                  queries and streamline preventative maintenance schedules across medical assets — reducing infant
                  incubator maintenance wait-time by 30%
                </li>
                <li>
                  Collaborated with physicians and engineers to design and fabricate a patient-specific artificial pulmonary
                  valve using SolidWorks&apos; flow simulation and 3D printing
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Power BI</Badge>
                <Badge variant="outline">3D Printing</Badge>
                <Badge variant="outline">SolidWorks</Badge>
                <Badge variant="outline">Flow Simulation</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <WorkContributionGraph />
        </div>
      </div>
    </div>
  )
}
