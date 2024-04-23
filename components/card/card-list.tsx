import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import CardListLayout from '@/components/card/card-list-layout';
import TaskCard from '@/components/card/task-card';
import { useCards } from '@/hooks/swr/card/use-card';

interface CardListProps {
  id: string;
  title: string;
}
const CardList = (props: CardListProps) => {
  const { data } = useCards(props.id);

  return (
    <CardListLayout>
      <CardListHeader title={props.title} count={Number(data?.totalCount)} />
      <AddCard />
      {data?.cards.map((data) => {
        return (
          <TaskCard
            key={data.id}
            id={data.id}
            title={data.title}
            dueDate={data.dueDate}
            tags={data.tags}
            assignee={data.assignee}
            imageUrl={data?.imageUrl}
          />
        );
      })}
    </CardListLayout>
  );
};

export default CardList;
