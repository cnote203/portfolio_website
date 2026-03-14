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
                  <CardTitle>Student Data Engineer</CardTitle>
                  <CardDescription>Department of National Defence, Digital Product Delivery Centre</CardDescription>
                </div>
                <Badge>Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">May 2025 - Present | Reliability Security Clearance</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Leveraging AWS services, Power BI and Azure DevOps to develop applications and Digital tools for
                  military at civilian personel at National Defence
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Power BI</Badge>
                <Badge variant="outline">Azure DevOps</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Student Risk Analyst</CardTitle>
                  <CardDescription>Transport Canada, Transportation of Dangerous Goods</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                May 2024 - April 2025 | Reliability Security Clearance
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developing an automated Risk Metric Dashboard using the databricks eBIDA Platform</li>
                <li>
                  Aiding the development of a quantitative risk assessment by road application for the transport of
                  hydrogen
                </li>
                <li>
                  Working with geospatial data frames to compute risk pertaining to surrounding infrastructure should an
                  incident occur
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Risk Analysis</Badge>
                <Badge variant="outline">Data Visualization</Badge>
                <Badge variant="outline">Geospatial Data</Badge>
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
                January 2024 - April 2024 | Reliability Security Clearance
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a dynamic Sharepoint site for the Integrity Services Branch</li>
                <li>
                  Implemented Power Automate cloud flows and developed Power Applications for directors and employees
                </li>
                <li>Created an Automated PTO Cloud flow and a dynamic Search Query Tool</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">SharePoint</Badge>
                <Badge variant="outline">Power Automate</Badge>
                <Badge variant="outline">Power Apps</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student IT Automation Specialist</CardTitle>
              <CardDescription>Indigenous Services Canada</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                May 2023 - December 2023 | Reliability Security Clearance
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed an automated device tracking system using Power Automate for perfect asset tracking</li>
                <li>Created the "Excel Clinic" to foster cross-departmental collaboration and drive efficiency</li>
                <li>Reduced response time for technical inquiries from 6.2 days to 3.0 days</li>
                <li>
                  Developed an IT Help desk Power agent and designed a front desk web application for walk-in
                  appointments
                </li>
                <li>Used Auto-CAD to plan out board room installations when working with the Audio Visual Team</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Automation</Badge>
                <Badge variant="outline">Excel</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Auto-CAD</Badge>
                <Badge variant="outline">Web Development</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biomedical Engineering Student</CardTitle>
              <CardDescription>The Ottawa Hospital, Biomedical Engineering Department</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">May 2022 - September 2022</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Implemented a cutting-edge ranked capital development project using Power BI</li>
                <li>Streamlined data queries and developed presentations for quarterly budget determinations</li>
                <li>Reduced wait times for Preventative Maintenance by nearly 30%</li>
                <li>Saved an estimated $150,000 year over year</li>
                <li>Participated in 3D printing lab, working with physicians and engineers</li>
                <li>Aided in designing and printing an artificial pulmonary valve using Solidworks Flow Simulations</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Power BI</Badge>
                <Badge variant="outline">3D Printing</Badge>
                <Badge variant="outline">Solidworks</Badge>
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
