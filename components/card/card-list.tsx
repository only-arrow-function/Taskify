import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import { TaskCardProp } from '@/components/card/card-type';
import TaskCard from '@/components/card/task-card';

const mockData: TaskCardProp[] = [
  {
    id: 0,
    title: 'test1',
    dueDate: '2024-04-17',
    tags: ['test', 'test2'],
    assignee: {
      nickname: 'test',
      id: 0,
    },
    imageUrl: '/pubilc',
  },
  {
    id: 1,
    title: 'test2',
    dueDate: '2024-04-17',
    tags: ['test', 'test2'],
    assignee: {
      profileImageUrl: '22',
      nickname: 'test',
      id: 1,
    },
    imageUrl: '/pubilc',
  },
  {
    id: 2,
    title: 'test3',
    dueDate: '2024-04-17',
    tags: ['test', 'test2'],
    assignee: {
      nickname: 'test',
      id: 2,
    },
    imageUrl: '/pubilc',
  },
  {
    id: 3,
    title: 'test4',
    dueDate: '2024-04-17',
    tags: ['test', 'test2'],
    assignee: {
      nickname: 'test',
      id: 3,
    },
  },
  {
    id: 4,
    title: 'test5',
    dueDate: '2024-04-17',
    tags: ['test', 'test2'],
    assignee: {
      nickname: 'test',
      id: 4,
    },
  },
];
const CardList = () => {
  return (
    <div className="w-full xl:w-[350px] flex flex-col gap-[10px] sm:gap-[16px] p-[12px] sm:p-[20px] border-b-2 border-b-grayscale-30 xl:border-r-2 xl:border-b-0 xl:border-r-grayscale-30">
      <CardListHeader title="test" count={mockData.length} />
      <AddCard />
      {mockData.map((data) => {
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
    </div>
  );
};

export default CardList;
