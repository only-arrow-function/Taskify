import { TaskCardProp } from '@/components/card/card-type';
import TaskCard from '@/components/card/task-card';
import AddCard from './add-card';
import CardListHeader from './card-list-header';

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
    <div className="w-full xl:w-[350px] flex flex-col gap-[10px] sm:gap-[16px]">
      <CardListHeader />
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
