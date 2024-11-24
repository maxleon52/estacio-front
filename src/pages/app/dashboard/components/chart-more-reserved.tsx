import { EllipsisVertical } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "Janeiro", contrato: 186, avulso: 80 },
  { month: "Fevereiro", contrato: 305, avulso: 200 },
  { month: "Março", contrato: 237, avulso: 120 },
  { month: "Abril", contrato: 73, avulso: 190 },
  { month: "Maio", contrato: 209, avulso: 130 },
  { month: "Junho", contrato: 214, avulso: 140 },
];

const chartConfig = {
  contrato: {
    label: "Contrato",
    color: "#ADD8E6",
  },
  avulso: {
    label: "Avulso",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartMoreReserved() {
  return (
    <Card className="flex h-full flex-col gap-4 p-4">
      <CardHeader className="flex flex-col p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Últimos 6 meses</CardTitle>
          <Popover>
            <PopoverTrigger>
              <EllipsisVertical />{" "}
            </PopoverTrigger>
            <PopoverContent className="w-fit" side="right">
              Ver todos
            </PopoverContent>
          </Popover>
        </div>
        <CardDescription className="text-4xl font-medium text-est-032335">
          12,4 mil{" "}
          <small className="text-sm text-est-30819C">
            +10,7% no último mês
          </small>
        </CardDescription>
      </CardHeader>

      <CardContent className="h-full max-h-full p-0">
        <ChartContainer config={chartConfig} className="h-full w-full p-0">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="contrato" fill="var(--color-contrato)" radius={4} />
            <Bar dataKey="avulso" fill="var(--color-avulso)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
