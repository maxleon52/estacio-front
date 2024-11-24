import {
  Building2,
  ChevronRight,
  FilePenLine,
  MessagesSquare,
  RefreshCcw,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import CardCompoent from "./components/card";
import { ChartLongTerm } from "./components/chart-long-term";
import { ChartMoreReserved } from "./components/chart-more-reserved";
import {
  fakeDataComments,
  fakeDataContratos,
  fakeDataReceitasAReceber,
  fakeDataTotalReservados,
} from "./components/fake-data";

export function Dashboard() {
  return (
    <div className="grid w-full gap-11">
      <section className="grid grid-cols-2 gap-11 2xl:grid-cols-[1fr_30%]">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-4 border">
            <h2 className="flex items-center gap-3 font-semibold">
              <Building2 />
              Total de Espaços Reservados
            </h2>
            <div className="grid grid-cols-2 gap-5 2xl:grid-cols-4">
              {fakeDataTotalReservados.map((i) => (
                <CardCompoent
                  key={i.id}
                  title={i.title}
                  qtd={i.qtd}
                  porcent={i.porcent}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border">
            <h2 className="flex items-center gap-3 font-semibold">
              <Building2 />
              Total de Espaços Reservados
            </h2>
            <div className="grid gap-5 2xl:grid-cols-3">
              {fakeDataReceitasAReceber.map((i) => (
                <CardCompoent
                  key={i.id}
                  title={i.title}
                  qtd={i.qtd}
                  porcent={i.porcent}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="flex items-center gap-3 font-semibold">
            <Building2 />
            Contratos de longo prazo
          </h2>
          <div className="h-full">
            <ChartLongTerm />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-11">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-3 font-semibold">
              <FilePenLine />
              Contratos
            </h2>
            <Card>
              <CardContent className="px-4 py-2 text-est-032335">
                {fakeDataContratos.map((i) => (
                  <div
                    key={i.id}
                    className="flex items-center justify-between border-b border-b-est-0F97E6/20 py-4 font-medium last:border-b-0"
                  >
                    <strong className="flex items-center gap-2 rounded-md bg-est-EDF4F7 px-2 py-1 font-medium">
                      <div className={cn("size-2 rounded-full", i.color)} />{" "}
                      {i.title}
                    </strong>
                    <span className="flex items-center gap-1 font-semibold">
                      {i.qtd} <ChevronRight />
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-3 font-semibold">
              <MessagesSquare />
              Últimos comentários
            </h2>
            <Card>
              <CardContent className="px-4 text-est-032335">
                {fakeDataComments.map((i) => (
                  <div
                    key={i.id}
                    className="flex flex-col gap-1 border-b border-b-est-0F97E6/20 p-4 font-medium last:border-b-0 last:pb-0"
                  >
                    <strong className="text-lg">{i.name}</strong>
                    <p className="text-base">{i.comment}</p>
                    <span className="justc flex items-center gap-1 text-xs text-est-30819C">
                      <Star className="size-4" />
                      {i.starsQtd}
                    </span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant={"outline"} className="w-full">
                  Ver todos
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-3 font-semibold">
              <RefreshCcw />
              Espaços mais reservados
            </h2>
            <ChartMoreReserved />
          </div>
        </div>
      </section>
    </div>
  );
}
