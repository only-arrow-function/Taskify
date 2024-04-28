import Image from 'next/image';
import Card from '@/components/card/card';
import { TaskCardProp } from '@/components/card/card-type';
import TagChip from '@/components/chips/tag-chip';
import ModalTodoDetail from '@/components/modal/modal-todo-detail';
import ProfileBadge from '@/components/profile/profile-badge';
import useToggle from '@/hooks/use-toggle';
import calenderImg from '@/public/icon/calendar.svg';

const TaskCard = (prop: TaskCardProp) => {
  const { isToggle, handleCloseToggle, handleOpenToggle } = useToggle();
  return (
    <>
      {isToggle && <ModalTodoDetail onCloseModal={handleCloseToggle} columnData={prop.columnData} cardId={prop.id} />}
      <Card onClick={handleOpenToggle}>
        <div className="flex gap-[20px] items-center justify-between">
          {prop.imageUrl && (
            <div className="relative w-[100px] h-[53px] hidden xl:hidden sm:block">
              <Image src={prop.imageUrl} alt="img" fill className="object-cover rounded-[4px]" />
            </div>
          )}
          <div className="flex flex-col w-full gap-[6px] justify-between p-[6px] sm:p-[9px]">
            {prop.imageUrl && (
              <div className="relative w-full h-[150px] sm:hidden xl:block">
                <Image src={prop.imageUrl} alt="test" fill className="object-cover rounded-[4px]" />
              </div>
            )}
            <h3 className="text-[14px] font-[500] sm:text-[16px]">{prop.title}</h3>
            <div className="flex justify-start items-center gap-[6px] sm:hidden xl:flex">
              {prop.tags &&
                prop.tags.map((data, idx) => {
                  return <TagChip key={idx} tag={data} />;
                })}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[6px] justify-start items-center">
                <div className="hidden justify-start items-center gap-[6px] xl:hidden sm:flex sm:gap-[6px] sm:mr-2">
                  <div className="flex gap-[6px]">
                    {prop.tags &&
                      prop.tags.map((data, idx) => {
                        return <TagChip key={idx} tag={data} />;
                      })}
                  </div>
                </div>
                <div className="relative w-[14px] h-[14px]">
                  <Image src={calenderImg} alt="calenderImg" fill />
                </div>
                <h4 className="mt-1 text-[10px] font-[500] sm:text-[12px] text-grayscale-60">{prop.dueDate}</h4>
              </div>
              <div>
                <ProfileBadge styles="font-[600] text-[10px] sm:text-[12px] w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]">
                  {prop.assignee.nickname[0]}
                </ProfileBadge>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TaskCard;
