"use client";

import { EllipsisVertical } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#ADD8E6",
  },
} satisfies ChartConfig;

export function ChartLongTerm() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="text-est-032335">Últimos 6 meses</CardTitle>
          <Popover>
            <PopoverTrigger>
              <EllipsisVertical />{" "}
            </PopoverTrigger>
            <PopoverContent className="w-fit" side="right">
              Ver todos
            </PopoverContent>
          </Popover>
        </div>
        <CardDescription className="text-est-032335">
          12,4 mil{" "}
          <small className="text-est-30819C">+10,7% no último mês</small>
        </CardDescription>
      </CardHeader>

      <CardContent className="h-full max-h-full flex-1">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            className=""
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
