import { Sidebar } from "components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-[--color-violet-900]">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 px-6 py-6">{children}</main>
      </div>
    </body>
  );
}
