"use client";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/shadcn/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { createUser } from "@/lib/api/auth";
import { TabsContent } from "@radix-ui/react-tabs";
import { Eye, EyeClosed } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import useSWRMutation from "swr/mutation";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { trigger, isMutating } = useSWRMutation(
    "/api/auth/register",
    createUser
  );
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const result = await trigger(userData);
      if (result?.message) {
        toast.success(result.message);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <TabsContent value="register">
      <Card className="w-full">
        <form>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription className="mb-4">
              Sign up to start using SerenityMind.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid  w-full">
            <div className="grid  mb-4">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                autoComplete="username"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid  mb-4">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Your email"
                type="email"
                autoComplete="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid  relative mb-4">
              <Label htmlFor="password" className="mb-2">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                autoComplete="new-password"
                value={userData.password}
                onChange={handleChange}
              />
              <Button
                variant="ghost"
                className="absolute right-0 top-6 hover:bg-transparent"
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="mt-4">
            <Button
              className="w-full cursor-pointer"
              disabled={isMutating}
              onClick={handleSubmit}
            >
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  );
};
