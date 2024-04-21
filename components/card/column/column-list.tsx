import { useRouter } from 'next/router';
import CardList from '@/components/card/card-list';
import ColumnListLayout from '@/components/card/column/column-list-layout';
import { useColumns } from '@/hooks/swr/column/use-column';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

const ColumnList = () => {
  const router = useRouter();
  const { data, isLoading, error } = useColumns(router.query.id);

  const columnData = data ? data.data : '';
  if (!data || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <ColumnListLayout>
      {columnData &&
        columnData.map((data) => {
          return <CardList key={data.id} id={data.id} title={data.title} />;
        })}
    </ColumnListLayout>
  );
};

export default ColumnList;
