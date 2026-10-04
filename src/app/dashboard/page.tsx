import DashboardTemplate from "@/components/templates/dashboardtemplates";
import SalesDashboard from "@/components/organisms/salesdashboard";

export default function DashboardPage() {
  return (
    <DashboardTemplate>
      <SalesDashboard />
    </DashboardTemplate>
  );
}