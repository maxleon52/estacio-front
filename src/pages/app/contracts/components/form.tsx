import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Form() {
  return (
    <>
      <Link
        to={"/contratos"}
        className="mb-4 flex w-fit items-center gap-1 text-2xl font-semibold text-est-032335 transition-all hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Contratos
      </Link>

      <form className="grid w-full max-w-[700px] gap-4 rounded-lg bg-white p-4">
        <h2 className="text-xl font-semibold text-est-032335">Responsavel</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="name" className="text-est-0F97E6">
              Nome
            </label>
            <Input
              id="name"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="Seu Nome"
            />
          </div>

          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="email" className="text-est-0F97E6">
              E-mail
            </label>
            <Input
              id="email"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="seuemail@exemplo.com"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-est-032335">Empresa</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="razao" className="text-est-0F97E6">
              Razão Social
            </label>
            <Input
              id="razao"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="Razão Social da Empresa"
            />
          </div>

          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="nome-fantasia" className="text-est-0F97E6">
              Nome Fantasia
            </label>
            <Input
              id="nome-fantasia"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="Nome Fantasia da Empresa"
            />
          </div>

          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="cnpj" className="text-est-0F97E6">
              CNPJ
            </label>
            <Input
              id="cnpj"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="00.000.000/0000-00"
            />
          </div>

          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="endereco" className="text-est-0F97E6">
              Endereço
            </label>
            <Input
              id="endereco"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="Endereço da Empresa"
            />
          </div>

          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="tel" className="text-est-0F97E6">
              Telefone
            </label>
            <Input
              id="tel"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="(00) 00000-0000"
            />
          </div>

          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="email-company" className="text-est-0F97E6">
              E-mail
            </label>
            <Input
              id="email-company"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="contato@empresa.com"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-est-032335">Contrato</h2>

        <div className="grid gap-4">
          <div className="rounded-md bg-est-EDF4F7 p-2">
            <label htmlFor="espaco" className="text-est-0F97E6">
              Espaço
            </label>
            <Input
              id="espaco"
              className="border-none bg-transparent p-0 text-zinc-600"
              defaultValue="Espaço Alugado"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md bg-est-EDF4F7 p-2">
              <label htmlFor="endereco-espaco" className="text-est-0F97E6">
                Endereço do Espaço
              </label>
              <Input
                id="endereco-espaco"
                className="border-none bg-transparent p-0 text-zinc-600"
                defaultValue="Endereço do Espaço"
              />
            </div>
            <div className="rounded-md bg-est-EDF4F7 p-2">
              <label htmlFor="valor" className="text-est-0F97E6">
                Valor do Aluguel
              </label>
              <Input
                id="valor"
                className="border-none bg-transparent p-0 text-zinc-600"
                defaultValue="R$ 0,00"
              />
            </div>
          </div>
        </div>

        <footer className="flex justify-end">
          <Button type="button" className="w-[180px]">
            Salvar
          </Button>
        </footer>
      </form>
    </>
  );
}
