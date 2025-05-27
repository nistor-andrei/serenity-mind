"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

export const SidebarLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 px-3 py-2 rounded-xl text-light-gray transition",
        isActive && "bg-light-violet"
      )}
    >
      <span className={clsx(isActive && "color-violet")}>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};
