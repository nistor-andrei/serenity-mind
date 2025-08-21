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
import { TabsContent } from "@radix-ui/react-tabs";
import { Eye, EyeClosed } from "lucide-react";
import { ChangeEvent, useReducer, useState } from "react";
import useSWRMutation from "swr/mutation";
import { initialStateUser, userReducer, UserState } from "./utils";

type RegisterBody = {
  name: string;
  email: string;
  password: string;
  action: string;
};

const registerUser = async (url: string, { arg }: { arg: RegisterBody }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });

  if (!res.ok) throw new Error("Failed to register");

  return res.json();
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [state, dispatch] = useReducer(userReducer, initialStateUser);
  const { trigger } = useSWRMutation("/api/auth/register", registerUser);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const password = name === "password" ? value : state.password.value;
    const confirmPassword =
      name === "confirmPassword" ? value : state.confirmPassword.value;

    dispatch({
      type: "SET_VALUE",
      field: name as keyof UserState,
      value: value,
    });

    if (password !== confirmPassword) {
      dispatch({
        type: "SET_ERROR",
        field: "confirmPassword",
        error: "Password and Confirm password doesn't match",
      });
    } else {
      dispatch({
        type: "SET_ERROR",
        field: "confirmPassword",
        error: "",
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const body: RegisterBody = {
        name: state.name.value,
        email: state.email.value,
        password: state.password.value,
        action: "register",
      };
      await trigger(body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TabsContent value="register">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription className="mb-4">
            Sign up to start using SerenityMind.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 w-full">
          <form>
            <div className="grid gap-3 mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={state.name.value}
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-3 mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Your email"
                type="email"
                value={state.email.value}
                onChange={handleInputChange}
                autoComplete="email"
              />
            </div>
            <div className="grid gap-3 relative mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={state.password.value}
                autoComplete="new-password"
                onChange={handleInputChange}
              />
              <Button
                variant="ghost"
                className="absolute right-0 top-6 hover:bg-transparent"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </Button>
            </div>
            <div className="grid relative">
              <Label htmlFor="confirmPassword" className="mb-3">
                Confirm password
              </Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Your confirm password"
                value={state.confirmPassword.value}
                onChange={handleInputChange}
                autoComplete="new-password"
                className="mb-1"
              />
              <p className="text-red-500 text-sm mb-4">
                {state.confirmPassword.error}
              </p>
              <Button
                variant="ghost"
                className="absolute right-0 top-6 hover:bg-transparent"
                onClick={() => setConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <Eye /> : <EyeClosed />}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="mt-4">
          <Button className="w-full" onClick={handleSubmit}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
