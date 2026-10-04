export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Sales Dashboard</h1>
      {children}
    </main>
  );
}