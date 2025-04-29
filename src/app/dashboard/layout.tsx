import CHeaderDashboard from "@/components/header/dashboard/CHeaderDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CHeaderDashboard />
      {children}
    </>
  );
}
