import RenameDashboard from "@/components/dashboard/edit/rename-dashboard"
import ReturnDashboardPage from "@/components/dashboard/edit/return-dashboard-page"

const index = () => {
  return (
    <main className="flex flex-col px-[15px] py-[15px] gap-[10px]">
      <ReturnDashboardPage/>
      <RenameDashboard/>
    </main>
  )
}

export default index