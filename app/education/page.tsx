"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

// Course type definition
type Course = {
  code: string
  name: string
  category: string
  units?: number // Most courses are 3 units, some might be different
}

// Courses organized by category with unit values
const courses: Record<string, Course[]> = {
  Mathematics: [
    { code: "MAT 1320", name: "Calculus I", category: "Mathematics", units: 3 },
    { code: "MAT 1322", name: "Calculus II", category: "Mathematics", units: 3 },
    { code: "MAT 1339", name: "Introduction to Calculus and Vectors", category: "Mathematics", units: 3 },
    { code: "MAT 1341", name: "Introduction to Linear Algebra", category: "Mathematics", units: 3 },
    { code: "MAT 2322", name: "Calculus III for Engineers", category: "Mathematics", units: 3 },
    { code: "MAT 2377", name: "Probability and Statistics for Engineers", category: "Mathematics", units: 3 },
    {
      code: "MAT 2384",
      name: "Ordinary Differential Equations and Numerical Methods",
      category: "Mathematics",
      units: 3,
    },
    { code: "MAT 3320", name: "Mathematics for Engineers", category: "Mathematics", units: 3 },
  ],
  "Engineering Fundamentals": [
    { code: "GNG 1103", name: "Engineering Design", category: "Engineering Fundamentals", units: 3 },
    { code: "GNG 1105", name: "Engineering Mechanics", category: "Engineering Fundamentals", units: 3 },
    {
      code: "GNG 1106",
      name: "Fundamentals of Engineering Computation",
      category: "Engineering Fundamentals",
      units: 3,
    },
    {
      code: "GNG 2101",
      name: "Introduction to Product Development and Management",
      category: "Engineering Fundamentals",
      units: 3,
    },
    { code: "GNG 4170", name: "Engineering Law", category: "Engineering Fundamentals", units: 3 },
  ],
  "Mechanical Engineering": [
    { code: "MCG 1100", name: "Introduction to Mechanical Engineering", category: "Mechanical Engineering", units: 3 },
    {
      code: "MCG 2101",
      name: "Introduction to Design of Mechanical Systems",
      category: "Mechanical Engineering",
      units: 3,
    },
    { code: "MCG 2108", name: "Dynamics", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 2130", name: "Thermodynamics I", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 2131", name: "Thermodynamics II", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 2142", name: "Biological and Engineering Materials II", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 2360", name: "Engineering Materials I", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 3110", name: "Heat Transfer", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 3130", name: "Dynamics of Machinery", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 3131", name: "Machine Design", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 3143", name: "Biofluid Mechanics", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 3305", name: "Biomedical System Dynamics", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 3307", name: "Control Systems", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 3340", name: "Fluid Mechanics I", category: "Mechanical Engineering", units: 3 },
    {
      code: "MCG 3141",
      name: "Advanced Strength of Materials and Applications to Biomechanical Systems",
      category: "Mechanical Engineering",
      units: 3,
    },
    { code: "MCG 4126", name: "Energy Conversion", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 4128", name: "Basic Nuclear Engineering", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 4152", name: "Artificial Organs", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 4328", name: "Manufacturing", category: "Mechanical Engineering", units: 3 },
    { code: "MCG4151", name: "Design of Artifical Joint Prostheses and Implants", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 4308", name: "Mechanical Vibration Analysis", category: "Mechanical Engineering", units: 3 },
    { code: "MCG 4340", name: "Mechanical Engineering Lab", category: "Mechanical Engineering", units: 3 },
  ],
  "Electronics & Computing": [
    {
      code: "ELG 2336",
      name: "Electric Circuits and Machines for Mechanical Engineering",
      category: "Electronics & Computing",
      units: 3,
    },
    { code: "ELG 3336", name: "Electronics for Mechanical Engineers", category: "Electronics & Computing", units: 3 },
    { code: "ITI 1100", name: "Digital Systems I", category: "Electronics & Computing", units: 3 },
    { code: "ITI 1120", name: "Introduction to Computing I", category: "Electronics & Computing", units: 3 },
    { code: "CEG 2136", name: "Computer Architecture I", category: "Electronics & Computing", units: 3 },
  ],
  Sciences: [
    { code: "CHM 1311", name: "Principles of Chemistry", category: "Sciences", units: 3 },
    { code: "PHY 1122", name: "Fundamentals of Physics II", category: "Sciences", units: 3 },
    { code: "ANP 1106", name: "Human Anatomy and Physiology II", category: "Sciences", units: 3 },
    { code: "CVG 2140", name: "Mechanics of Materials I", category: "Sciences", units: 3 },
  ],
  "Humanities & Social Sciences": [
    { code: "ECO 1104", name: "Introduction to Microeconomics", category: "Humanities & Social Sciences", units: 3 },
    { code: "ECO 1102", name: "Introduction to Macroeconomics", category: "Humanities & Social Sciences", units: 3 },
    { code: "ENG 1112", name: "Technical Report Writing", category: "Humanities & Social Sciences", units: 3 },
    { code: "PHI 1101", name: "Reasoning and Critical Thinking", category: "Humanities & Social Sciences", units: 3 },
    {
      code: "PHI 2394",
      name: "Scientific Thought and Social Values",
      category: "Humanities & Social Sciences",
      units: 3,
    },
    { code: "PHI 2396", name: "Bioethics", category: "Humanities & Social Sciences", units: 3 },
  ],
}

// Category colors for the progress bar
const categoryColors: Record<string, string> = {
  Mathematics: "#ef4444", // red-500
  "Engineering Fundamentals": "#f59e0b", // amber-500
  "Mechanical Engineering": "#1C651B", // emerald-500
  "Electronics & Computing": "#8b5cf6", // violet-500
  Sciences: "#000080", // cyan-500
  "Humanities & Social Sciences": "#14b8a6", // teal-500
}

export default function EducationPage() {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)

  // Calculate units and percentages for each category
  const categoryStats = Object.entries(courses).map(([category, categoryCourses]) => {
    const totalUnits = categoryCourses.reduce((sum, course) => sum + (course.units || 3), 0)
    const percentage = (totalUnits / 117) * 100 // 117 total completed units
    return {
      category,
      units: totalUnits,
      percentage: Math.round(percentage * 10) / 10, // Round to 1 decimal place
      color: categoryColors[category],
    }
  })

  const totalCompletedUnits = 117
  const totalRequiredUnits = 132
  const overallProgress = (totalCompletedUnits / totalRequiredUnits) * 100

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <SidebarTrigger className="md:hidden mr-2" />
        <h1 className="text-3xl font-bold">Education</h1>
      </div>

      <div className="mb-12">
        <Card>
          <CardHeader>
            {/* First Row: University and Degree Headers */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <CardTitle className="text-2xl mb-2">University of Ottawa</CardTitle>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <p className="text-lg font-medium">BASc Biomedical Mechanical Engineering</p>
                  <p className="text-muted-foreground">September 2020 - April 2026 (Expected)</p>
                </div>
              </div>
            </div>

            {/* Second Row: Progress Bar on Left, Legend on Right */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Progress Bar Section */}
              <div className="flex-1">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Degree Progress</span>
                    <span>
                      {totalCompletedUnits}/{totalRequiredUnits} Units
                    </span>
                  </div>

                  {/* Segmented Progress Bar */}
                  <div className="relative">
                    <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full flex">
                        {categoryStats.map((stat, index) => {
                          const widthPercentage = (stat.units / totalRequiredUnits) * 100
                          return (
                            <div
                              key={stat.category}
                              className="h-full transition-all duration-200 cursor-pointer relative"
                              style={{
                                width: `${widthPercentage}%`,
                                backgroundColor: stat.color,
                                opacity: hoveredSegment === null || hoveredSegment === stat.category ? 1 : 0.5,
                              }}
                              onMouseEnter={() => setHoveredSegment(stat.category)}
                              onMouseLeave={() => setHoveredSegment(null)}
                              title={`${stat.category}: ${stat.units} units (${stat.percentage}% of completed coursework)`}
                            />
                          )
                        })}
                        {/* Remaining units (gray) */}
                        <div
                          className="h-full bg-gray-200"
                          style={{
                            width: `${((totalRequiredUnits - totalCompletedUnits) / totalRequiredUnits) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Hover tooltip */}
                    {hoveredSegment && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                        {hoveredSegment}: {categoryStats.find((s) => s.category === hoveredSegment)?.percentage}% of
                        completed coursework
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground text-right">{Math.round(overallProgress)}% Complete</p>
                </div>
              </div>

              {/* Legend Section */}
              <div className="w-full md:w-64">
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {categoryStats.map((stat) => (
                    <div key={stat.category} className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: stat.color }} />
                      <span className="truncate" title={stat.category}>
                        {stat.category.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Course Overview</h2>
        <Tabs defaultValue="Mathematics" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-4">
            {Object.keys(courses).map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(courses).map(([category, categoryCourses]) => (
            <TabsContent key={category} value={category}>
              <Card>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryCourses.map((course) => (
                      <div
                        key={course.code}
                        className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{course.code}</h3>
                            <p className="text-sm text-muted-foreground">{course.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Additional Certifications & Training</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>MIG Welding Certification</li>
              <li>3D Printing and Additive Manufacturing</li>
              <li>Lathe Operation and Safety</li>
              <li>Laser Cutting Certification</li>
              <li>Machine Shop Safety Training</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
