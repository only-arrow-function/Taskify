//import BaseButton from "@/components/buttons/base-button"
//import LoginButton from "@/components/buttons/login-button"
import ColumnAddButton from "@/components/buttons/domain/column-add-button";
import DashboardDeleteButton from "@/components/buttons/domain/dashboard-delete-button";
import NewDashboardAddButton from "@/components/buttons/domain/new-dashboard-add-button";

const TemporaryEansu = () => {
  return (
    <>
      {/* <LoginButton isValidated={true} variant="secondary"/> */}
      {/* <BaseButton sizeVariant='quaternary' purpose='negative'>삭제</BaseButton> */}
      <ColumnAddButton sizeVariant="primary"/>
      <DashboardDeleteButton sizeVariant="tertiary"/>
      <NewDashboardAddButton sizeVariant="secondary"/>
    </>
  );
};

export default TemporaryEansu;
