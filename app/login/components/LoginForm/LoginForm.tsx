"use client";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { TabsContent } from "@/components/shadcn/ui/tabs";
import { loginUser } from "@/lib/api/auth";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import useSWRMutation from "swr/mutation";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { trigger, isMutating } = useSWRMutation("/api/auth/login", loginUser);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, ok } = await trigger(user);
      if (ok) {
        toast.success(data.message);
        router.replace("/platform");
        router.refresh();
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    }
  };

  return (
    <TabsContent value="login">
      <Card className="w-full">
        <form onSubmit={handleLogin}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login here to continue</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 w-full mt-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Your email"
                type="email"
                autoComplete="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                autoComplete="current-password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <Button
                variant="ghost"
                className="absolute right-0 top-6 hover:bg-transparent"
                onClick={(ev) => {
                  ev.preventDefault();
                  setShowPassword((prev) => !prev);
                }}
                type="button"
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="mt-4">
            <Button
              className="w-full cursor-pointer"
              disabled={isMutating}
              type="submit"
            >
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  );
};
