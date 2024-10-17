import React from 'react'

import {
    Bar,
    BarChart,
    Label,
    Rectangle,
    ReferenceLine,
    XAxis,
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
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components//ui/chart"

  
  
function Governance() {
  return (
    <div>
              <Card className="lg:max-w-md">
  <CardHeader className="space-y-0 pb-2">
    <CardDescription>Governance Activity</CardDescription>
    <CardTitle className="text-4xl tabular-nums">
      12,584{" "}
      <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
        votes cast
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ChartContainer
      config={{
        votes: {
          label: "Votes Cast",
          color: "hsl(var(--chart-1))",
        },
      }}
    >
      <BarChart
        accessibilityLayer
        margin={{
          left: -4,
          right: -4,
        }}
        data={[
          { date: "2024-01-01", votes: 1000 },
          { date: "2024-01-02", votes: 1200 },
          { date: "2024-01-03", votes: 1500 },
          { date: "2024-01-04", votes: 1800 },
          { date: "2024-01-05", votes: 1700 },
          { date: "2024-01-06", votes: 1400 },
          { date: "2024-01-07", votes: 1984 },
        ]}
      >
        <Bar
          dataKey="votes"
          fill="var(--color-votes)"
          radius={5}
          fillOpacity={0.6}
          activeBar={<Rectangle fillOpacity={0.8} />}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={4}
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString("en-US", {
              weekday: "short",
            })
          }
        />
        <ChartTooltip
          defaultIndex={2}
          content={
            <ChartTooltipContent
              hideIndicator
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }
            />
          }
          cursor={false}
        />
        <ReferenceLine
          y={1500}
          stroke="hsl(var(--muted-foreground))"
          strokeDasharray="3 3"
          strokeWidth={1}
        >
          <Label
            position="insideBottomLeft"
            value="Average Votes"
            offset={10}
            fill="hsl(var(--foreground))"
          />
          <Label
            position="insideTopLeft"
            value="12,343"
            className="text-lg"
            fill="hsl(var(--foreground))"
            offset={10}
            startOffset={100}
          />
        </ReferenceLine>
      </BarChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex-col items-start gap-1">
    <CardDescription>
      In the past 7 days, a total of{" "}
      <span className="font-medium text-foreground">53,305</span> votes have
      been cast.
    </CardDescription>
    <CardDescription>
      You need{" "}
      <span className="font-medium text-foreground">12,584</span> more votes to
      reach your monthly goal.
    </CardDescription>
  </CardFooter>
</Card>
    </div>
  )
}

export default Governance