import EditDashboard from "@/components/dashboard/edit/edit-dashboard"
import ReturnDashboardPage from "@/components/dashboard/edit/return-dashboard-page"
import InviteTable from "@/components/tables/invite-table"
import MembersTable from "@/components/tables/members-table"

const index = () => {
  return (
    <main className="flex flex-col px-[15px] py-[15px] gap-[10px]">
      <ReturnDashboardPage/>
      <EditDashboard/>
      <MembersTable/>
      <InviteTable/>
    </main>
  )
}

export default index