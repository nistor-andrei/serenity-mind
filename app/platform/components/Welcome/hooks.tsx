import { Moon, Sun, Sunrise } from "lucide-react";

export const useGetTimeBasedContent = () => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  if (hour >= 5 && hour < 12) {
    return {
      icon: <Sunrise className="w-6 h-6 text-orange-500" />,
      greeting: "Morning",
    };
  } else if (hour >= 12 && hour < 18) {
    return {
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      greeting: "Good afternoon",
    };
  } else {
    return {
      icon: <Moon className="w-6 h-6 text-blue-400" />,
      greeting: "Good night",
    };
  }
};
