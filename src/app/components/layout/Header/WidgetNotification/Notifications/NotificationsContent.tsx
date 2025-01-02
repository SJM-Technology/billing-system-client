import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

type NotificationsContentProps = {
    text: string
    isRead: boolean
    created_at: string    
}

export const NotificationsContent = ({ text, isRead, created_at }: NotificationsContentProps) => {
    return (
        <div className="flex-1 flex flex-col gap-1">
            <p className={`text-sm leading-relaxed line-clamp-2 text-zinc-900 ${!isRead && "font-semibold"}`}>
                {isRead ? text : text.split("Recebeu").map((message, index)=> (
                    <span key={index} className={`${index === 0 ? "text-sacalinha-first": ""}`}>
                        {index === 1 && "Recebeu"}{message}
                    </span>
                ))}
            </p>
            <div className="text-xxs flex items-center gap-1 font-medium text-slate-400">
                <span>Avaliação</span>
                <span className="w-1 h-1 flex rounded-full bg-slate-400"></span>
                <span className="first-letter:uppercase">{formatDistance(new Date(created_at),new Date(),{ addSuffix: true, locale: ptBR })}</span>
            </div>
        </div>
    );
};