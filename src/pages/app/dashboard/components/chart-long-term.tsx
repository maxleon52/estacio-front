"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [
  { month: "Reunião M", value: 186 },
  { month: "Auditório G", value: 305 },
  { month: "Sala 25", value: 237 },
  { month: "Auditório", value: 73 },
  { month: "Lab 01", value: 209 },
  { month: "Lab 02", value: 214 },
];

const chartConfig = {
  desktop: {
    label: "value",
    color: "#ADD8E6",
  },
} satisfies ChartConfig;

export function ChartLongTerm() {
  return (
    <Card className="flex h-full flex-col p-4">
      <CardContent className="h-full max-h-full p-0">
        <ChartContainer config={chartConfig} className="h-full w-full p-0">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="value" type="number" hide />
            {/* <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            /> */}
            <Bar
              dataKey="value"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="textes fill-[--color-label] font-semibold"
                fontSize={12}
              />
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground font-semibold"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
