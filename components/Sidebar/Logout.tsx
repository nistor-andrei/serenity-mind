"use client";
import { handleLogout } from "@/services/authServices";
import { Button } from "@components/shadcn/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const Logout = () => {
  const navigation = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => handleLogout(navigation, toast)}
      className="cursor-pointer"
    >
      <LogOut />
      Logout
    </Button>
  );
};
