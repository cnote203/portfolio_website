"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

type TimelineSegment = {
  startDate: Date
  endDate: Date | null // null represents "today"
  type: "full-time" | "part-time" | "unemployed"
  label: string
}

export function WorkTimeline() {
  // Initialize with current date to avoid undefined during first render
  const [currentDate, setCurrentDate] = useState(new Date())

  // Define the timeline segments
  const timelineData: TimelineSegment[] = [
    {
      startDate: new Date(2022, 4, 1), // May 2022
      endDate: new Date(2022, 8, 30), // September 2022
      type: "full-time",
      label: "May - Sep 2022",
    },
    {
      startDate: new Date(2022, 9, 1), // October 2022
      endDate: new Date(2023, 3, 30), // April 2023
      type: "unemployed",
      label: "Oct 2022 - Apr 2023",
    },
    {
      startDate: new Date(2023, 5, 1), // June 2023
      endDate: new Date(2023, 7, 31), // August 2023
      type: "full-time",
      label: "Jun - Aug 2023",
    },
    {
      startDate: new Date(2023, 8, 1), // September 2023
      endDate: new Date(2024, 3, 30), // April 2024
      type: "part-time",
      label: "Sep 2023 - Apr 2024",
    },
    {
      startDate: new Date(2024, 4, 1), // May 2024
      endDate: new Date(2024, 7, 31), // August 2024
      type: "full-time",
      label: "May - Aug 2024",
    },
    {
      startDate: new Date(2024, 8, 1), // September 2024
      endDate: new Date(2025, 3, 1), // April 2025
      type: "part-time",
      label: "Sep 2024 - April 2025",
    },
    {
      startDate: new Date(2025, 4, 1), // May 2025
      endDate: new Date(2025, 8, 1), // Sept 2025
      type: "full-time",
      label: "May 2025 - Sep 2025",
    },
    {
      startDate: new Date(2025, 9, 1), // October 2025
      endDate: null, //Present
      type: "part-time",
      label: "Oct 2025 - Present",
    },
  ]

  // Calculate the total time span of the timeline (in milliseconds)
  const startDate = timelineData[0]?.startDate || new Date(2022, 4, 1)
  const endDate = currentDate
  const totalTimeSpan = endDate.getTime() - startDate.getTime()

  // Function to get the color for each segment type
  const getSegmentColor = (type: TimelineSegment["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-emerald-500"
      case "part-time":
        return "bg-blue-500"
      case "unemployed":
        return "bg-gray-300"
      default:
        return "bg-gray-300"
    }
  }

  // Function to calculate the height percentage for each segment
  const calculateHeight = (segment: TimelineSegment) => {
    if (!segment || !segment.startDate) return 0

    const segmentStart = segment.startDate.getTime()
    const segmentEnd = segment.endDate ? segment.endDate.getTime() : currentDate.getTime()
    const segmentDuration = segmentEnd - segmentStart

    if (totalTimeSpan <= 0) return 0
    return (segmentDuration / totalTimeSpan) * 100
  }

  // Simplified function to calculate cumulative height for label positioning
  const calculateCumulativeHeight = (index: number) => {
    if (index === 0) return 0

    let cumulativeHeight = 0
    for (let i = 0; i < index; i++) {
      cumulativeHeight += calculateHeight(timelineData[i])
    }
    return cumulativeHeight
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Work Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2 justify-end">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs">FT</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs">PT</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="text-xs">N/A</span>
            </div>
          </div>

          <div className="flex">
            {/* Timeline bar */}
            <div className="w-8 h-[400px] flex flex-col rounded-md overflow-hidden">
              {timelineData.map((segment, index) => (
                <div
                  key={index}
                  className={`w-full relative group ${getSegmentColor(segment.type)}`}
                  style={{ height: `${calculateHeight(segment)}%` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity"></div>
                </div>
              ))}
            </div>

            {/* Timeline labels */}
            <div className="ml-2 flex flex-col h-[400px] text-xs text-muted-foreground">
              {timelineData.map((segment, index) => {
                // Calculate position for each label
                const topPosition = `${calculateCumulativeHeight(index)}%`
                const isFirst = index === 0
                const isLast = index === timelineData.length - 1

                return (
                  <div
                    key={index}
                    className="absolute flex items-center"
                    style={{
                      top: topPosition,
                      transform: isFirst ? "translateY(0)" : isLast ? "translateY(-100%)" : "translateY(-50%)",
                    }}
                  >
                    <div className="w-2 h-[1px] bg-gray-300 mr-1"></div>
                    <span className="whitespace-nowrap">{segment.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Simple start and end date labels */}
          <div className="flex flex-col justify-between text-xs text-muted-foreground ml-10">
            <div>May 2022</div>
            <div>Present</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
