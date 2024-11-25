import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Building2,
  CalendarIcon,
  FilePenLine,
  SearchIcon,
  Trash2,
} from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface ISpaces {
  id: string;
  img: string;
  name: string;
  address: string;
  amount: number;
  status: "ativo" | "inativo";
}

const data: ISpaces[] = [
  {
    id: "1",
    img: "/placeholder.svg?height=40&width=40",
    name: "Salão de Festas",
    address: "R. Minas Gerais, 200 - Savassi",
    amount: 1420.0,
    status: "ativo",
  },
  {
    id: "2",
    img: "/placeholder.svg?height=40&width=40",
    name: "Sala de Reuniões",
    address: "Av. Afonso Pena, 1000 - Centro",
    amount: 800.0,
    status: "ativo",
  },
  {
    id: "3",
    img: "/placeholder.svg?height=40&width=40",
    name: "Auditório",
    address: "R. da Bahia, 500 - Lourdes",
    amount: 2500.0,
    status: "inativo",
  },
  {
    id: "4",
    img: "/placeholder.svg?height=40&width=40",
    name: "Espaço Gourmet",
    address: "R. dos Inconfidentes, 300 - Funcionários",
    amount: 1200.0,
    status: "ativo",
  },
  {
    id: "5",
    img: "/placeholder.svg?height=40&width=40",
    name: "Sala de Treinamento",
    address: "R. dos Tamoios, 150 - Santa Efigênia",
    amount: 950.0,
    status: "ativo",
  },
];

export function Spaces() {
  const [currentDate, setCurrentDate] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns: ColumnDef<ISpaces>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
      pagination,
    },
    onPaginationChange: setPagination,
  });

  return (
    <div className="space-y-4">
      <header className="flex items-center gap-2 text-4xl font-bold text-primary">
        <Building2 className="size-8" />
        <h1>Espaços</h1>
      </header>
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative min-w-[200px] flex-1">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            placeholder="Procurar"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="pl-9"
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"calendar"}
              className={cn(
                "w-[240px] justify-start pl-3 text-left font-normal",
              )}
            >
              {currentDate ? (
                new Date(currentDate).toLocaleDateString("pt-BR")
              ) : (
                <>Escolher data </>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={new Date(currentDate)}
              onSelect={(value) => setCurrentDate(String(value))}
              // disabled={(date) =>
              //   date > new Date() || date < new Date("1900-01-01")
              // }
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paid">Pago</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="late">Atrasado</SelectItem>
          </SelectContent>
        </Select>

        <Button className="ml-auto">Novo espaço</Button>
      </div>

      <div className="space-y-4">
        {table
          .getFilteredRowModel()
          .rows.slice(
            pagination.pageIndex * pagination.pageSize,
            (pagination.pageIndex + 1) * pagination.pageSize,
          )
          .map((row) => {
            const space = row.original;
            return (
              <div key={space.id} className="group grid grid-cols-[1fr_auto]">
                <Card className="p-6 text-est-0F97E6 group-hover:rounded-r-none">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold">{space.name}</h3>
                      </div>

                      <div className="flex items-baseline justify-between pt-4">
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-est-30819C">
                          <div>
                            <p>Endereço</p>
                            <div className="flex items-center gap-1 font-medium text-est-032335">
                              <p className="flex w-fit items-center gap-1 rounded-md bg-est-EDF4F7 px-2 py-1">
                                {space.address}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p>Valor</p>
                            <div className="flex items-center gap-1 font-medium text-est-032335">
                              <p className="w-fit rounded-md bg-est-EDF4F7 px-2 py-1">
                                <small className="text-est-30819C">R$</small>{" "}
                                {space.amount.toFixed(2)}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="grid w-[0px] overflow-hidden transition-all group-hover:w-[100px]">
                  <div className="flex items-center justify-center text-est-032335 hover:cursor-pointer hover:bg-primary hover:text-white">
                    <FilePenLine className="mr-1 size-4" /> Editar
                  </div>
                  <div className="hover: flex items-center justify-center text-est-032335 hover:cursor-pointer hover:bg-destructive hover:text-white">
                    <Trash2 className="mr-1 size-4" /> Excluir
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex justify-between">
        <Button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: Math.max(prev.pageIndex - 1, 0),
            }))
          }
          disabled={pagination.pageIndex === 0}
        >
          Anterior
        </Button>
        <Button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: prev.pageIndex + 1,
            }))
          }
          disabled={
            pagination.pageIndex >=
            Math.ceil(
              table.getFilteredRowModel().rows.length / pagination.pageSize,
            ) -
              1
          }
        >
          Próxima
        </Button>
      </div>
    </div>
  );
}
