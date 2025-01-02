import { Button } from "@/app/components/ui/button";
import { Loader } from "@/app/components/basic/Loader";
import { Link } from "react-router-dom";
import { Notification } from "./Notifications";
import { IconBellOff, IconStar } from "@tabler/icons-react";

type WidgetNotificationContentProps = {
    notifications?: any[];
    isPending: boolean;
    isError: boolean;
    isRead: boolean;
    refetch: () => void;
}
export const WidgetNotificationContent = ({ notifications, isPending, isError, isRead, refetch }: WidgetNotificationContentProps) => {
    return (
        <div className="w-[380px] max-w-[400px] rounded overflow-hidden bg-white dark:bg-neutral-950">
            <div className="py-4 px-6 flex items-center justify-between bg-white dark:bg-neutral-900">
                <span className="font-bold tracking-wide">Notificações</span>
                <button type="button" disabled={isRead} onClick={() => console.log("Marcar como lida")} className="text-xs font-bold text-sacalinha-first hover:text-green-600 disabled:text-zinc-400 disabled:cursor-not-allowed">
                    MARCAR TODAS COMO VISTAS
                </button>
            </div>

            <div>
                <div className="px-5 py-2 text-sm text-neutral-500 dark:text-neutral-400 bg-green-100 dark:bg-neutral-800">
                    Recentes
                </div>
                <div className="max-h-[385px] overflow-y-auto divide-y-2 divide-neutral-200 scroll-vertical">
                    {!notifications ? (
                        <div className="h-40 w-full flex flex-col gap-2 items-center justify-center text-xs">
                            {isPending ?
                                <>
                                    <Loader className="w-10 h-10 border-2" />
                                    <span>A carregar as notificações...</span>
                                </>
                                : isError &&
                                <>
                                    <IconBellOff size={52} stroke={1.5} className="text-sacalinha-first" />
                                    <p>Erro na conexão com o servidor</p>
                                    <Button type="button" variant="outline" onClick={refetch} className="text-xs px-2 py-1 h-8 text-neutral-500 hover:border-sacalinha-first/30">
                                        Tente Novamente
                                    </Button>
                                </>
                            }
                        </div>
                    ) : notifications.length === 0 ? (
                        <div className="h-40 w-full flex flex-col gap-2 items-center justify-center">
                            <IconBellOff size={42} className="w-10 h-10" strokeWidth={1.5} />
                            <p className="text-sm text-zinc-900">Nenhuma notificação recente</p>
                        </div>
                    ) : (
                        notifications.map((notification, index) => (
                            <Notification.Root key={index}>
                                <Notification.Icon icon={IconStar} isRead={!!notification.read_at} />
                                <Notification.Content
                                    text={notification.message}
                                    isRead={!!notification.read_at}
                                    created_at={notification.created_at}
                                />
                            </Notification.Root>
                        ))
                    )}
                </div>
            </div>

            <div className="flex items-center justify-center border-t border-neutral-300 dark:border-neutral-800">
                <Link to="/all-notifications"
                    className="w-full h-full px-4 py-2.5 line-clamp-1 text-center text-nowrap text-sm text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                    Ver todas as notificações
                </Link>
            </div>
        </div>
    );
};
