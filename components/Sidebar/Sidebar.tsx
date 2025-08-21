import { BarChart2, Book, Home, Settings } from "lucide-react";
import Image from "next/image";
import { SidebarLink } from "./Link";

export const Sidebar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-violet-900 p-4 flex flex-col justify-between border-r-1 border-gray-200">
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
          href="/platform/journal"
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

      <div className="text-sm text-light-gray mt-4 shrink-0">
        © {currentYear} SerenityMind
      </div>
    </aside>
  );
};
