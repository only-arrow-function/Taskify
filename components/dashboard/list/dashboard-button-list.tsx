import NewDashboardAddButton from '@/components/buttons/domain/new-dashboard-add-button';

const DashboardButtonList = () => {
  return (
    <section className="w-[80vw] my-6 ml-6 sm:w-[67vw] md:my-10 sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
      <ul>
        <li>
          <NewDashboardAddButton />
        </li>
      </ul>
    </section>
  );
};

export default DashboardButtonList;
