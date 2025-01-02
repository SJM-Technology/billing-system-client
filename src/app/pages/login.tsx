import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { useSession, useSignIn } from "@/core/hooks/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInRequestData, SignInSchema } from "@/core/models/auth";
import { IconLoader2, IconLock } from "@tabler/icons-react";
import { Navigate } from "react-router-dom";

export default function Login() {

  const { data: loggedUser,  isPending: isSessionPending } = useSession();
  const { mutateAsync: SignInFn, isPending } = useSignIn();
  const { register, handleSubmit, reset, formState:{ errors }} = useForm<SignInRequestData>({
    mode: "all",
    criteriaMode: "firstError",
    resolver: zodResolver(SignInSchema)
});

const handleSignInSubmit = async (data: SignInRequestData) => {
    await SignInFn(data);
    reset();
};

if (!isSessionPending && loggedUser) return <Navigate to="/" replace />;

  return (
    <div className="flex justify-center items-center h-svh ">
      <Card className="w-[400px] shadow-md">
        <CardHeader>
            <CardTitle>Entrar</CardTitle>
            <CardDescription>Sistema de facturação <span className='font-bold'>Sacalinha Burguer</span></CardDescription>
        </CardHeader>
              <form onSubmit={handleSubmit(handleSignInSubmit)} className="flex flex-col gap-4">
            <CardContent>
                <div>
                  <Label htmlFor="email">Usuário</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Nome de usuário" 
                    {...register("email")}
                    className="focus-visible:ring-0" 
                    autoComplete="email" 
                    required
                  />
                  <div className="h-6 ">
                      {errors?.email && <p className="text-sm text-red-500">{errors?.email.message}</p>}
                  </div>
                </div>

                <div>
                  <Label>Senha</Label>
                  <Input 
                    type="password" 
                    placeholder="Senha" 
                    {...register("password")} 
                    className="focus-visible:ring-0"
                    autoComplete="off" 
                    required
                    />
                  <div className="h-6 ">
                      {errors?.password && <p className="text-sm text-red-500">{errors?.password.message}</p>}
                  </div>
                </div>
            </CardContent>
            <CardFooter className='flex justify-end'>
              <Button type='submit' className="relative group flex w-full justify-center rounded-md font-normal px-3 py-1.5 text-sm leading-6 text-white shadow-sm transition-all duration-150" >
              <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <div className="w-7 h-7 rounded-full hidden items-center justify-center bg-zinc-100/10 group-hover:flex">
                      <IconLock size={16} strokeWidth={1.2} className="text-zinc-300"/>
                  </div>
              </div>
              {isPending ? (
                  <div className="flex items-center">
                      <IconLoader2 size={22} className="animate-spin" />
                      <span>loading...</span>
                  </div>
              ): (<span>Sign in</span>)}
              </Button>
            </CardFooter>
        </form>
      </Card>
    </div>
  );
}
