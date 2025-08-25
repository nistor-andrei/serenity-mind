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
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TabsContent value="login">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login here to continue</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 w-full">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Your email" type="email" />
          </div>
          <div className="grid gap-3 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
            />
            <Button
              variant="ghost"
              className="absolute right-0 top-6 hover:bg-transparent"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
