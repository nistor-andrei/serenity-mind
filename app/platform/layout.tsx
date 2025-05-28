import { Sidebar } from "components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-[--color-violet-900]">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pl-64">
          <div className="h-full px-6 py-6">{children}</div>
        </main>
      </div>
    </body>
  );
}
