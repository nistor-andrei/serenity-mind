"use client";
import { fetchWithAuth } from "@/service/apiService";
import { Button } from "@components/shadcn/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const Logout = () => {
  const navigation = useRouter();
  const handleLogout = async () => {
    try {
      const res = await fetchWithAuth<{ message: string }>(
        "/api/auth/logout",
        "POST"
      );
      toast.success(res.message);
      navigation.push("/login");
    } catch {
      toast.error("Something happened");
    }
  };
  return (
    <Button variant="ghost" onClick={handleLogout} className="cursor-pointer">
      <LogOut />
      Logout
    </Button>
  );
};
