import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Skeleton } from "@/app/components/ui/skeleton";
import { useSession } from "@/core/hooks/auth";
import { useInitials } from "@/core/hooks/useInitials";

export default function AccountProfile() {
    const { data: loggedUser } = useSession();
    return (
        <div className="mx-auto container px-6 py-4">
            <section className="flex gap-4">
                <div className="flex-1">
                    {loggedUser ? (
                        <>
                            <span className="text-lg font-medium">{loggedUser.name}</span>
                            <span className="text-neutral-400 text-sm block">{loggedUser.email}</span>
                        </>
                    ) : (
                        <>
                            <Skeleton className="w-1/2 h-4 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                            <Skeleton className="w-1/4 h-3 mt-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                        </>
                    )}
                </div>
                {loggedUser ? (
                    <Avatar className="w-28 h-28 text-4xl text-neutral-400 dark:text-neutral-500">
                        <AvatarImage src={loggedUser?.avatarUrl} />
                        <AvatarFallback className="bg-neutral-200 text-neutral-500 select-none">
                            {useInitials(loggedUser.name)}
                        </AvatarFallback>
                    </Avatar>
                ) : (
                    <div className="w-28 h-28 rounded-full bg-neutral-100 dark:bg-neutral-800">
                        <Skeleton className="w-full h-full rounded-full bg-neutral-200 dark:bg-neutral-700" />
                    </div>
                )}
            </section>
        </div>
    );
}
