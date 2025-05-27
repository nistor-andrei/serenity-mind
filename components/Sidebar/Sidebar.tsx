import { BarChart2, Book, Home, Settings } from "lucide-react";
import Image from "next/image";
import { SidebarLink } from "./Link";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-violet-900 p-4 flex flex-col justify-between border-r-1 border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-10 shrink-0">
          <Image src="/Logo.svg" alt="logo" width={40} height={40} />
          <span className="ml-3 text-xl font-semibold text-light-gray">
            SerenityMind
          </span>
        </div>

        <nav className="space-y-3 flex-grow overflow-y-auto">
          <SidebarLink
            href="/platform"
            icon={<Home size={20} />}
            label="Dashboard"
          />
          <SidebarLink
            href="/journal"
            icon={<Book size={20} />}
            label="Journal"
          />
          <SidebarLink
            href="/statistics"
            icon={<BarChart2 size={20} />}
            label="Statistics"
          />
          <SidebarLink
            href="/settings"
            icon={<Settings size={20} />}
            label="Settings"
          />
        </nav>
      </div>

      <div className="text-sm text-light-gray mt-4 shrink-0">
        © 2025 SerenityMind
      </div>
    </aside>
  );
};
