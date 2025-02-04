import { MainSidebar } from "@/components/common/main-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SidebarProvider defaultOpen={true}>
        <MainSidebar />
        {children}
      </SidebarProvider>
    </div>
  );
}
