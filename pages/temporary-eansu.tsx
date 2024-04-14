//import BaseButton from "@/components/buttons/base-button"
//import LoginButton from "@/components/buttons/login-button"
import DomainButton from "@/components/buttons/domain-button";

const TemporaryEansu = () => {
  return (
    <>
      {/* <LoginButton isValidated={true} variant="secondary"/> */}
      {/* <BaseButton sizeVariant='quaternary' purpose='negative'>삭제</BaseButton> */}
      <DomainButton sizeVariant="primary" purpose="dashboard-add">새로운 대시보드</DomainButton>
    </>
  );
};

export default TemporaryEansu;
