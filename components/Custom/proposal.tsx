"use client"

import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,

} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components//ui/card"
import {
  ChartContainer,
} from "@/components//ui/chart"


function Proposals() {
  return (
    <>
          <Card className="lg:max-w-md">
  <CardHeader className="space-y-0 pb-2">
    <CardDescription>Proposals Created</CardDescription>
    <CardTitle className="text-4xl tabular-nums">
      45/60{" "}
      <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
        proposals
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ChartContainer
      config={{
        proposals: {
          label: "Proposals Created",
          color: "hsl(var(--chart-1))",
        },
      }}
    >
      <RadialBarChart
        margin={{
          left: -10,
          right: -10,
          top: -10,
          bottom: -10,
        }}
        data={[
          {
            activity: "proposals",
            value: (45 / 60) * 100,
            fill: "var(--color-proposals)",
          },
        ]}
        innerRadius="20%"
        barSize={24}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="value"
          tick={false}
        />
        <RadialBar dataKey="value" background cornerRadius={5} />
      </RadialBarChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex-col items-start gap-1">
    <CardDescription>
      You have created{" "}
      <span className="font-medium text-foreground">45/60</span> proposals this
      month.
    </CardDescription>
    <CardDescription>
      Keep up the good work to reach your monthly goal.
    </CardDescription>
  </CardFooter>
</Card>
    </>
  )
}

export default Proposals