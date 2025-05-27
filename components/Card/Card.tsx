import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <section className={clsx("p-4 bg-white shadow rounded-xl", className)}>
      {children}
    </section>
  );
};
