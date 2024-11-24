import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDownToLine,
  CalendarClock,
  CalendarIcon,
  CircleDollarSign,
  Copy,
  QrCode,
  SearchIcon,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
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

interface Contract {
  id: string;
  logo: string;
  title: string;
  address: string;
  duration: string;
  startDate: string;
  endDate: string;
  amount: number;
  status: "ativo" | "renovação" | "pendente";
  paymentStatus: "pago" | "pendente" | "atrasado";
}

const data: Contract[] = [
  {
    id: "1",
    logo: "/placeholder.svg?height=40&width=40",
    title: "Salão de Festas",
    address: "R. Minas Gerais, 200 - Savassi",
    duration: "18 meses",
    startDate: "30/11/2024",
    endDate: "01/06/2026",
    amount: 1420.0,
    status: "ativo",
    paymentStatus: "pendente",
  },
  {
    id: "2",
    logo: "/placeholder.svg?height=40&width=40",
    title: "Auditório Principal",
    address: "R. Rio Grande do Norte, 300 - Funcionários",
    duration: "12 meses",
    startDate: "21/01/2024",
    endDate: "20/01/2025",
    amount: 1562.0,
    status: "renovação",
    paymentStatus: "pago",
  },
  {
    id: "3",
    logo: "/placeholder.svg?height=40&width=40",
    title: "Sala de Reuniões",
    address: "Av. Afonso Pena, 500 - Centro",
    duration: "6 meses",
    startDate: "01/02/2024",
    endDate: "01/08/2024",
    amount: 800.0,
    status: "ativo",
    paymentStatus: "pago",
  },
  {
    id: "4",
    logo: "/placeholder.svg?height=40&width=40",
    title: "Espaço Gourmet",
    address: "R. dos Três Irmãos, 100 - Funcionários",
    duration: "24 meses",
    startDate: "15/03/2024",
    endDate: "15/03/2026",
    amount: 1200.0,
    status: "renovação",
    paymentStatus: "pendente",
  },
  {
    id: "5",
    logo: "/placeholder.svg?height=40&width=40",
    title: "Estúdio de Gravação",
    address: "R. da Bahia, 200 - Savassi",
    duration: "12 meses",
    startDate: "10/04/2024",
    endDate: "10/04/2025",
    amount: 1500.0,
    status: "ativo",
    paymentStatus: "atrasado",
  },
  {
    id: "6",
    logo: "/placeholder.svg?height=40&width=40",
    title: "Auditório de Eventos",
    address: "R. São Paulo, 300 - Centro",
    duration: "18 meses",
    startDate: "01/05/2024",
    endDate: "01/11/2025",
    amount: 2000.0,
    status: "pendente",
    paymentStatus: "pendente",
  },
  {
    id: "7",
    logo: "/placeholder.svg?height=40&width=40",
    title: "Sala de Aula",
    address: "R. Rio de Janeiro, 400 - Funcionários",
    duration: "12 meses",
    startDate: "01/06/2024",
    endDate: "01/06/2025",
    amount: 900.0,
    status: "ativo",
    paymentStatus: "pago",
  },
  // Add more sample data as needed
];

export function Invoices() {
  const [currentDate, setCurrentDate] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns: ColumnDef<Contract>[] = [
    {
      accessorKey: "title",
      header: "Title",
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
        <CircleDollarSign className="size-8" />
        <h1>Resumo financeiro</h1>
      </header>
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative min-w-[200px] flex-1">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            placeholder="Procurar"
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
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

        <Button className="ml-auto">Aplicar filtro</Button>
      </div>

      <div className="space-y-4">
        {table
          .getFilteredRowModel()
          .rows.slice(
            pagination.pageIndex * pagination.pageSize,
            (pagination.pageIndex + 1) * pagination.pageSize,
          )
          .map((row) => {
            const contract = row.original;
            return (
              <Card key={contract.id} className="p-6 text-est-0F97E6">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-3 divide-y-2 divide-est-0F97E6/20">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {contract.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {contract.address}
                        </p>
                      </div>
                      <Badge
                        className={cn(
                          contract.paymentStatus === "pago"
                            ? "bg-emerald-200 text-emerald-700"
                            : contract.paymentStatus === "pendente"
                              ? "bg-orange-200 text-orange-700"
                              : "bg-red-200 text-red-700",
                        )}
                      >
                        {contract.paymentStatus}
                      </Badge>
                    </div>

                    <div className="flex items-baseline justify-between pt-4">
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-est-30819C">
                        <div>
                          <p>Vencimento</p>
                          <div className="flex items-center gap-1 font-medium text-est-032335">
                            <p className="flex w-fit items-center gap-1 rounded-md bg-est-EDF4F7 px-2 py-1">
                              <CalendarClock className="size-3 text-est-30819C" />
                              {contract.startDate}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p>Pagamento</p>
                          <div className="flex items-center gap-1 font-medium text-est-032335">
                            <p className="w-fit rounded-md bg-est-EDF4F7 px-2 py-1">
                              <small className="text-est-30819C">R$</small>{" "}
                              {contract.amount.toFixed(2)}{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-5">
                        <div className="flex flex-col">
                          <span>Boleto</span>
                          <div className="flex gap-2">
                            <Button variant="link" className="p-0">
                              Boleto
                              <ArrowDownToLine className="h-4 w-4" />
                            </Button>
                            <Button variant="link" className="p-0">
                              Linha digitável
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span>PIX</span>
                          <div className="flex gap-2">
                            <Button variant="link" className="p-0">
                              QR code
                              <QrCode className="h-4 w-4" />
                            </Button>
                            <Button variant="link" className="p-0">
                              Copia e cola
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
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
