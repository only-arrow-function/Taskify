import { Color } from '@/components/chips/color-type';
import SideMenuDashBoard from '@/components/side-menu/side-menu-dash-boards';

const mockData: {
  id: number;
  title: string;
  color: Color;
  createdByMe: boolean;
  userId: number;
}[] = [
  {
    id: 0,
    title: 'test1',
    color: 'green',
    createdByMe: true,
    userId: 0,
  },
  {
    id: 1,
    title: 'test2',
    color: 'purple',
    createdByMe: true,
    userId: 1,
  },
  {
    id: 2,
    title: 'test3',
    color: 'orange',
    createdByMe: true,
    userId: 3,
  },
  {
    id: 3,
    title: 'test4',
    color: 'blue',
    createdByMe: false,
    userId: 4,
  },
  {
    id: 4,
    title: 'test5',
    color: 'pink',
    createdByMe: false,
    userId: 5,
  },
];

const SideMenuDashBoardsList = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      {mockData.map((data) => {
        return (
          <SideMenuDashBoard
            key={data.id}
            id={data.id}
            title={data.title}
            color={data.color}
            createdByMe={data.createdByMe}
            userId={data.userId}
          />
        );
      })}
    </div>
  );
};

export default SideMenuDashBoardsList;
