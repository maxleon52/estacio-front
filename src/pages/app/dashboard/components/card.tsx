import { EllipsisVertical } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  title: string;
  qtd: number;
  porcent: string;
}
export default function CardCompoent({ porcent, qtd, title }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{title}</CardTitle>
        <Popover>
          <PopoverTrigger>
            <EllipsisVertical />{" "}
          </PopoverTrigger>
          <PopoverContent className="w-fit" side="right">
            Ver todos
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent className="pb-2 text-4xl font-semibold">
        <p>{qtd}</p>
      </CardContent>
      <CardFooter className="text-sm text-est-30819C">
        <p>{porcent}</p>
      </CardFooter>
    </Card>
  );
}
