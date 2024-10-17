"use client"

import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
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



function BitcoinChart() {
  return (
    <>
    <Card className="lg:max-w-md">
  <CardHeader className="space-y-0 pb-2">
    <CardDescription>Bitcoin Price History</CardDescription>
    <CardTitle className="text-4xl tabular-nums">
      $27,500{" "}
      <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
        current price
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ChartContainer
      config={{
        price: {
          label: "Price",
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
          { date: "2024-01-01", price: 26500 },
          { date: "2024-01-02", price: 27000 },
          { date: "2024-01-03", price: 27200 },
          { date: "2024-01-04", price: 26900 },
          { date: "2024-01-05", price: 27500 },
          { date: "2024-01-06", price: 27600 },
          { date: "2024-01-07", price: 27500 },
        ]}
      >
        <Bar
          dataKey="price"
          fill="hsl(var(--color-bitcoin))" // Use a color representing Bitcoin
          radius={5}
          fillOpacity={0.7}
          activeBar={<Rectangle fillOpacity={0.9} />}
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
          y={27000}
          stroke="hsl(var(--muted-foreground))"
          strokeDasharray="3 3"
          strokeWidth={1}
        >
          <Label
            position="insideBottomLeft"
            value="Average Price"
            offset={10}
            fill="hsl(var(--foreground))"
          />
          <Label
            position="insideTopLeft"
            value="$27,000"
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
      In the past week, Bitcoin's price fluctuated with a total change of{" "}
      <span className="font-medium text-foreground">+1,100</span> USD.
    </CardDescription>
    <CardDescription>
      You need{" "}
      <span className="font-medium text-foreground">$500</span> to reach your target price.
    </CardDescription>
  </CardFooter>
</Card>
    </>
  )
}

export default BitcoinChart