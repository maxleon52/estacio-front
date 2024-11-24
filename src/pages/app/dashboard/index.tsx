import { Building2 } from "lucide-react";

import CardCompoent from "./components/card";
import { ChartLongTerm } from "./components/chart-long-term";
import {
  fakeDataReceitasAReceber,
  fakeDataTotalReservados,
} from "./components/fake-data";

export function Dashboard() {
  return (
    <div className="grid w-full gap-11">
      <section className="grid grid-cols-[1fr_30%] gap-11">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-4 border">
            <h2 className="flex items-center gap-3 font-semibold">
              <Building2 />
              Total de Espaços Reservados
            </h2>
            <div className="grid grid-cols-4 gap-5">
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
            <div className="grid grid-cols-3 gap-5">
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
    </div>
  );
}
