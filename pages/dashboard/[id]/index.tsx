import { GetServerSideProps } from 'next';
import ColumnList from '@/components/card/column/column-list';

interface Props {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
};

export default function index({ id }: Props) {
  return (
    <>
      <ColumnList id={id} />
    </>
  );
} // 레이아웃을 _app.tsx 로 옮겼습니다. 이유 : edit 중첩 페이지에 동일한 레이아웃을 적용하기 위해
