"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

type EmploymentType = "full-time" | "part-time" | "unemployed" | "na" | "future"

type EmploymentPeriod = {
  startDate: Date
  endDate: Date | null // null represents "today"
  type: EmploymentType
  employer?: string // Add employer information
}

export function WorkContributionGraph() {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Update current date on component mount
  useEffect(() => {
    setCurrentDate(new Date())
  }, [])

  // Define employment periods with employer acronyms
  const employmentPeriods: EmploymentPeriod[] = [
    {
      startDate: new Date(2022, 4, 1), // May 2022
      endDate: new Date(2022, 8, 30), // September 2022
      type: "full-time",
      employer: "TOH", // The Ottawa Hospital
    },
    {
      startDate: new Date(2022, 9, 1), // October 2022
      endDate: new Date(2023, 3, 30), // April 2023
      type: "unemployed",
    },
    {
      startDate: new Date(2023, 5, 1), // June 2023
      endDate: new Date(2023, 7, 31), // August 2023
      type: "full-time",
      employer: "ISC", // Indigenous Services Canada
    },
    {
      startDate: new Date(2023, 8, 1), // September 2023
      endDate: new Date(2023, 11, 30), // December 2023
      type: "part-time",
      employer: "ISC", // Indigenous Services Canada
    },
    {
      startDate: new Date(2024, 0, 1), // January 2024
      endDate: new Date(2024, 3, 30), // April 2024
      type: "part-time",
      employer: "ESDC", // Employment and Social Development Canada
    },
    {
      startDate: new Date(2024, 4, 1), // May 2024
      endDate: new Date(2024, 7, 30), // August 30, 2024
      type: "full-time",
      employer: "TC", // Transport Canada
    },
    {
      startDate: new Date(2024, 8, 1), // September 1, 2024
      endDate: new Date(2025, 3, 30), // April 30, 2025
      type: "part-time",
      employer: "TC", // Transport Canada
    },
    {
      startDate: new Date(2025, 4, 1), // May 1, 2025
      endDate: new Date(2025, 8, 1), // Sept 1, 2025
      type: "full-time",
      employer: "CAF", // Canadian Armed Forces
    },
    {
      startDate: new Date(2025, 9, 1), // Oct 1, 2025
      endDate: new Date(2025, 11, 1), // December 1, 2025
      type: "part-time",
      employer: "CAF", // Canadian Armed Forces
    },
    {
      startDate: new Date(2026, 0, 1), // Jan 1, 2026
      endDate: null, // Present
      type: "part-time",
      employer: "DND", // Canadian Armed Forces
    },
  ]

  // Get the last known employment status
  const getLastKnownEmploymentStatus = (): { type: EmploymentType; employer?: string } => {
    // Sort periods by end date (null/today is considered latest)
    const sortedPeriods = [...employmentPeriods].sort((a, b) => {
      const aEnd = a.endDate ? a.endDate.getTime() : Number.MAX_SAFE_INTEGER
      const bEnd = b.endDate ? b.endDate.getTime() : Number.MAX_SAFE_INTEGER
      return bEnd - aEnd
    })

    // Return the most recent employment status
    if (sortedPeriods.length > 0) {
      return {
        type: sortedPeriods[0].type,
        employer: sortedPeriods[0].employer,
      }
    }

    return { type: "unemployed" }
  }

  // Function to determine employment status and employer for a given week
  const getEmploymentInfoForWeek = (weekStart: Date): { type: EmploymentType; employer?: string } => {
    // If date is before May 2022, return "unemployed"
    if (weekStart < new Date(2022, 4, 1)) {
      return { type: "unemployed" }
    }

    // If date is in the future, return "future"
    if (weekStart > currentDate) {
      return { type: "future" }
    }

    // Check if the week falls within any defined employment period
    for (const period of employmentPeriods) {
      const periodStart = period.startDate
      const periodEnd = period.endDate || currentDate

      // Check if the week overlaps with this employment period
      if (weekStart >= periodStart && weekStart <= periodEnd) {
        return { type: period.type, employer: period.employer }
      }
    }

    // If we're here, the date is after our last defined period but before current date
    // Use the last known employment status
    return getLastKnownEmploymentStatus()
  }

  // Function to get color based on employment type
  const getColorForType = (type: EmploymentType): string => {
    switch (type) {
      case "full-time":
        return "bg-emerald-500"
      case "part-time":
        return "bg-blue-500"
      case "unemployed":
        return "bg-gray-300"
      case "future":
        return "bg-black/70"
      case "na":
        return "bg-gray-100"
    }
  }

  // Function to format the week tooltip
  const formatWeekTooltip = (date: Date, employmentInfo: { type: EmploymentType; employer?: string }): string => {
    if (employmentInfo.type === "future") {
      return `${date.toLocaleString("default", { month: "long", year: "numeric" })}, Week ${getWeekOfMonth(date)} - Future`
    }

    if (employmentInfo.type === "na") {
      return `${date.toLocaleString("default", { month: "long", year: "numeric" })}, Week ${getWeekOfMonth(date)} - N/A`
    }

    const month = date.toLocaleString("default", { month: "long" })
    const year = date.getFullYear()
    const weekOfMonth = getWeekOfMonth(date)

    // Include employer acronym if available
    const employerText = employmentInfo.employer ? ` - ${employmentInfo.employer}` : ""
    const statusText =
      employmentInfo.type === "full-time"
        ? "Full-time"
        : employmentInfo.type === "part-time"
          ? "Part-time"
          : "Unemployed"

    return `${month} ${year}, Week ${weekOfMonth}: ${statusText}${employerText}`
  }

  // Helper function to calculate week of month
  const getWeekOfMonth = (date: Date): number => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
    const dayOfMonth = date.getDate()
    return Math.ceil((dayOfMonth + firstDayOfMonth.getDay()) / 7)
  }

  // Generate weeks for 5 years (2022 to 2026)
  const generateWeeks = () => {
    const years = [2022, 2023, 2024, 2025, 2026]
    const weeksPerYear = 52

    return years.map((year) => {
      const weeks = []

      for (let week = 0; week < weeksPerYear; week++) {
        // Create a date for the start of this week
        // For simplicity, we'll use Jan 1 + (week * 7) days for each year
        const weekStart = new Date(year, 0, 1 + week * 7)

        // Get employment info for this week
        const employmentInfo = getEmploymentInfoForWeek(weekStart)

        weeks.push({
          date: weekStart,
          type: employmentInfo.type,
          tooltip: formatWeekTooltip(weekStart, employmentInfo),
        })
      }

      return {
        year,
        weeks,
      }
    })
  }

  const yearsData = generateWeeks()

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="text-lg">Work Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between">
            {yearsData.map((yearData) => (
              <div key={yearData.year} className="flex flex-col items-center">
                <div className="text-sm font-medium mb-2">{yearData.year}</div>
                <div className="grid grid-cols-1 gap-1">
                  {yearData.weeks.map((week, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${getColorForType(week.type)} hover:ring-2 hover:ring-offset-1 hover:ring-black/20 transition-all cursor-help`}
                      title={week.tooltip}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend at the bottom */}
          <div className="flex justify-center gap-4 pt-2 border-t">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
              <span className="text-xs">FT</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
              <span className="text-xs">PT</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-gray-300"></div>
              <span className="text-xs">N/A</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-black/70"></div>
              <span className="text-xs">Future</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
