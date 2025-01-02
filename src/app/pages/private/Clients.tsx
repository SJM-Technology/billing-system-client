import { Button } from "@/app/components/ui/button";
import { useFindClients } from "@/core/hooks/Client";
import { IconUserSquareRounded } from "@tabler/icons-react";

export default function Clients() {
    const { data: clients, isPending } = useFindClients();
    
    return (
        <div>
            <div className="px-6 mb-5 flex items-center justify-between">
                <h1 className="text-lg font-semibold">Lista de Clientes</h1>
                <div>
                    <Button type="button" className="gap-1.5">
                        <IconUserSquareRounded size={20} stroke={1.5} />
                        <span>Novo Cliente</span>
                    </Button>
                </div>
            </div>
            <div>
                {isPending ? 
                    <div>Carregando...</div>
                : clients && (
                    clients.length === 0 ? <div>Nenhum Cliente encontrado.</div> 
                    : clients.map(client => (
                        <div key={client.id}>
                            <span>Nome: {client.nome}</span>
                            <span>E-mail: {client.email}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
