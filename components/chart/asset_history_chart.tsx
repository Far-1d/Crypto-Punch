"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis,Bar, BarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn/chart"

const chartData = [
  { date: "2024-04-01", price: 222, volume: 150 },
  { date: "2024-04-02", price: 97, volume: 180 },
  { date: "2024-04-03", price: 167, volume: 120 },
  { date: "2024-04-04", price: 242, volume: 260 },
  { date: "2024-04-05", price: 373, volume: 290 },
  { date: "2024-04-06", price: 301, volume: 340 },
  { date: "2024-04-07", price: 245, volume: 180 },
  { date: "2024-04-08", price: 409, volume: 320 },
  { date: "2024-04-09", price: 59, volume: 110 },
  { date: "2024-04-10", price: 261, volume: 190 },
  { date: "2024-04-11", price: 327, volume: 350 },
  { date: "2024-04-12", price: 292, volume: 210 },
  { date: "2024-04-13", price: 342, volume: 380 },
  { date: "2024-04-14", price: 137, volume: 220 },
  { date: "2024-04-15", price: 120, volume: 170 },
  { date: "2024-04-16", price: 138, volume: 190 },
  { date: "2024-04-17", price: 446, volume: 360 },
  { date: "2024-04-18", price: 364, volume: 410 },
  { date: "2024-04-19", price: 243, volume: 180 },
  { date: "2024-04-20", price: 89, volume: 150 },
  { date: "2024-04-21", price: 137, volume: 200 },
  { date: "2024-04-22", price: 224, volume: 170 },
  { date: "2024-04-23", price: 138, volume: 230 },
  { date: "2024-04-24", price: 387, volume: 290 },
  { date: "2024-04-25", price: 215, volume: 250 },
  { date: "2024-04-26", price: 75, volume: 130 },
  { date: "2024-04-27", price: 383, volume: 420 },
  { date: "2024-04-28", price: 122, volume: 180 },
  { date: "2024-04-29", price: 315, volume: 240 },
  { date: "2024-04-30", price: 454, volume: 380 },
  { date: "2024-05-01", price: 165, volume: 220 },
  { date: "2024-05-02", price: 293, volume: 310 },
  { date: "2024-05-03", price: 247, volume: 190 },
  { date: "2024-05-04", price: 385, volume: 420 },
  { date: "2024-05-05", price: 481, volume: 390 },
  { date: "2024-05-06", price: 498, volume: 520 },
  { date: "2024-05-07", price: 388, volume: 300 },
  { date: "2024-05-08", price: 149, volume: 210 },
  { date: "2024-05-09", price: 227, volume: 180 },
  { date: "2024-05-10", price: 293, volume: 330 },
  { date: "2024-05-11", price: 335, volume: 270 },
  { date: "2024-05-12", price: 197, volume: 240 },
  { date: "2024-05-13", price: 197, volume: 160 },
  { date: "2024-05-14", price: 448, volume: 490 },
  { date: "2024-05-15", price: 473, volume: 380 },
  { date: "2024-05-16", price: 338, volume: 400 },
  { date: "2024-05-17", price: 499, volume: 420 },
  { date: "2024-05-18", price: 315, volume: 350 },
  { date: "2024-05-19", price: 235, volume: 180 },
  { date: "2024-05-20", price: 177, volume: 230 },
  { date: "2024-05-21", price: 82, volume: 140 },
  { date: "2024-05-22", price: 81, volume: 120 },
  { date: "2024-05-23", price: 252, volume: 290 },
  { date: "2024-05-24", price: 294, volume: 220 },
  { date: "2024-05-25", price: 201, volume: 250 },
  { date: "2024-05-26", price: 213, volume: 170 },
  { date: "2024-05-27", price: 420, volume: 460 },
  { date: "2024-05-28", price: 233, volume: 190 },
  { date: "2024-05-29", price: 78, volume: 130 },
  { date: "2024-05-30", price: 340, volume: 280 },
  { date: "2024-05-31", price: 178, volume: 230 },
  { date: "2024-06-01", price: 178, volume: 200 },
  { date: "2024-06-02", price: 470, volume: 410 },
  { date: "2024-06-03", price: 103, volume: 160 },
  { date: "2024-06-04", price: 439, volume: 380 },
  { date: "2024-06-05", price: 88, volume: 140 },
  { date: "2024-06-06", price: 294, volume: 250 },
  { date: "2024-06-07", price: 323, volume: 370 },
  { date: "2024-06-08", price: 385, volume: 320 },
  { date: "2024-06-09", price: 438, volume: 480 },
  { date: "2024-06-10", price: 155, volume: 200 },
  { date: "2024-06-11", price: 92, volume: 150 },
  { date: "2024-06-12", price: 492, volume: 420 },
  { date: "2024-06-13", price: 81, volume: 130 },
  { date: "2024-06-14", price: 426, volume: 380 },
  { date: "2024-06-15", price: 307, volume: 350 },
  { date: "2024-06-16", price: 371, volume: 310 },
  { date: "2024-06-17", price: 475, volume: 520 },
  { date: "2024-06-18", price: 107, volume: 170 },
  { date: "2024-06-19", price: 341, volume: 290 },
  { date: "2024-06-20", price: 408, volume: 450 },
  { date: "2024-06-21", price: 169, volume: 210 },
  { date: "2024-06-22", price: 317, volume: 270 },
  { date: "2024-06-23", price: 480, volume: 530 },
  { date: "2024-06-24", price: 132, volume: 180 },
  { date: "2024-06-25", price: 141, volume: 190 },
  { date: "2024-06-26", price: 434, volume: 380 },
  { date: "2024-06-27", price: 448, volume: 490 },
  { date: "2024-06-28", price: 149, volume: 200 },
  { date: "2024-06-29", price: 103, volume: 160 },
  { date: "2024-06-30", price: 446, volume: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
  volume: {
    label: "Volume",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("volume")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card className="mt-6">
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full px-2"
        >
            <AreaChart data={filteredData}>
                <defs>
                <linearGradient id="fillprice" x1="0" y1="0" x2="0" y2="1">
                    <stop
                    offset="5%"
                    stopColor="var(--color-price)"
                    stopOpacity={0.8}
                    />
                    <stop
                    offset="95%"
                    stopColor="var(--color-price)"
                    stopOpacity={0.1}
                    />
                </linearGradient>
                <linearGradient id="fillvolume" x1="0" y1="0" x2="0" y2="1">
                    <stop
                    offset="5%"
                    stopColor="var(--color-volume)"
                    stopOpacity={0.8}
                    />
                    <stop
                    offset="95%"
                    stopColor="var(--color-volume)"
                    stopOpacity={0.1}
                    />
                </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    })
                }}
                />
                <ChartTooltip
                cursor={false}
                content={
                    <ChartTooltipContent
                    labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        })
                    }}
                    indicator="dot"
                    />
                }
                />
                <Area
                dataKey="price"
                type="natural"
                fill="url(#fillprice)"
                stroke="var(--color-price)"
                stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
        </ChartContainer>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[40px] w-full translate-y-[-104px]"
        >
            <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                left: 12,
                right: 12,
                }}
            >
                <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
