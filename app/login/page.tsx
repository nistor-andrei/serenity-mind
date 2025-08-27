import { Tabs, TabsList, TabsTrigger } from "@/components/shadcn/ui/tabs";
import Image from "next/image";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full md:max-w-4xl h-200 md:h-150">
        <div className="hidden md:flex items-center justify-center bg-[var(--light-violet)] w-full md:w-1/2 p-8">
          <Image
            src="/meditate.png"
            alt="Meditate Illustration"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
          <Tabs defaultValue="login" className="w-full">
            <TabsList>
              <TabsTrigger value="login" className="cursor-pointer">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="cursor-pointer">
                Register
              </TabsTrigger>
            </TabsList>
            <RegisterForm />
            <LoginForm />
          </Tabs>
        </div>
      </div>
    </div>
  );
}
