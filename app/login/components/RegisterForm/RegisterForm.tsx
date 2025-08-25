"use client";
import { registerUserAction } from "@/app/actions/register";
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
import { ChangeEvent, useActionState, useReducer, useState } from "react";
import { initialStateUser, userReducer, UserState } from "./utils";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [state, dispatch] = useReducer(userReducer, initialStateUser);
  const [stateForm, formAction, pending] = useActionState(
    registerUserAction,
    initialStateUser
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: "SET_VALUE",
      field: name as keyof UserState,
      value: value,
    });
  };

  return (
    <TabsContent value="register">
      <Card className="w-full">
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription className="mb-4">
              Sign up to start using SerenityMind.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 w-full">
            <div className="grid gap-3 mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={state.name}
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
                value={state.email}
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
                value={state.password}
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
                value={state.confirmPassword}
                onChange={handleInputChange}
                autoComplete="new-password"
                className="mb-1"
              />
              <p className="text-red-500 text-sm mb-4">
                {state.confirmPassword}
              </p>
              <Button
                variant="ghost"
                className="absolute right-0 top-6 hover:bg-transparent"
                onClick={() => setConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <Eye /> : <EyeClosed />}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="w-full" type="submit">
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  );
};
