import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowRight,
  CalendarClock,
  FilePenLine,
  SearchIcon,
  Trash2,
} from "lucide-react";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

const color = {
  pago: "emerald",
  pendente: "orange",
  atrasado: "red",
};

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

export function Contracts() {
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
        <FilePenLine className="size-8" />
        <h1>Contratos</h1>
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
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Data" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="week">Esta semana</SelectItem>
            <SelectItem value="month">Este mês</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Status de pagamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paid">Pago</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="late">Atrasado</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Status do contrato" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Ativo</SelectItem>
            <SelectItem value="renewal">Renovação</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
          </SelectContent>
        </Select>
        <Button className="ml-auto">Aplicar filtro</Button>
        <Badge variant="outline" className="ml-2">
          {table.getFilteredRowModel().rows.length} contratos
        </Badge>
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
              <div
                key={contract.id}
                className="group grid grid-cols-[1fr_auto]"
              >
                <Card className="p-6 text-est-0F97E6 group-hover:rounded-r-none">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>
                        {contract.title.split(" ")[0].charAt(0)}
                        {contract.title.split(" ").pop()?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

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
                          variant={
                            contract.status === "ativo" ? "success" : "warning"
                          }
                        >
                          {contract.status === "ativo" ? "Ativo" : "Renovar"}
                        </Badge>
                      </div>

                      <div className="flex items-end justify-between">
                        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-est-30819C">
                          <div>
                            <p>Vigência do contrato</p>
                            <div className="flex items-center gap-1 font-medium text-est-032335">
                              <p className="flex w-fit items-center gap-1 rounded-md bg-est-EDF4F7 px-2 py-1">
                                <CalendarClock className="size-3 text-est-30819C" />
                                {contract.duration}
                              </p>
                              {contract.startDate} → {contract.endDate}
                            </div>
                          </div>
                          <div>
                            <p>Pagamento</p>
                            <div className="flex items-center gap-1 font-medium text-est-032335">
                              <p className="w-fit rounded-md bg-est-EDF4F7 px-2 py-1">
                                <small className="text-est-30819C">R$</small>{" "}
                                {contract.amount.toFixed(2)}{" "}
                              </p>
                              mensal
                            </div>
                          </div>
                          <div>
                            <p>Boleto</p>
                            <p
                              className={cn(
                                "w-fit rounded-md px-2 py-1",
                                `bg-${color[contract.paymentStatus]}-200`,
                                contract.paymentStatus === "pago"
                                  ? "text-emerald-700"
                                  : contract.paymentStatus === "pendente"
                                    ? "text-orange-700"
                                    : "text-red-700",
                              )}
                            >
                              {contract.paymentStatus}
                            </p>
                          </div>
                        </div>
                        <Button variant="link">
                          Mais detalhes
                          <ArrowRight className="h-4 w-4" />
                        </Button>
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
