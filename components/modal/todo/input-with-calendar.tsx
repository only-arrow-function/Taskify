import { ChangeEvent } from 'react';
import { formatInputDate } from '@/lib/format-date';

const InputWithCalendar = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="text-grayscale-80 font-medium sm:text-lg">{label}</h3>
      <div className="relative min-w-44 h-[42px] px-4 bg-white rounded-md border border-grayscale-40 sm:h-[48px]">
        <label htmlFor="calendar" className="absolute inset-x-4 inset-y-0 flex items-center gap-[10px] bg-white">
          <svg
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`flex-shrink-0 size-5 sm:size-[22px] ${value ? 'text-grayscale-80' : 'text-grayscale-50'}`}
          >
            <path
              d="M3.98077 16.1256C3.60193 16.1256 3.28125 15.9943 3.01875 15.7318C2.75625 15.4693 2.625 15.1486 2.625 14.7698V4.73137C2.625 4.35252 2.75625 4.03184 3.01875 3.76934C3.28125 3.50684 3.60193 3.37559 3.98077 3.37559H5.01924V2.36596C5.01924 2.20155 5.07429 2.06429 5.18439 1.95419C5.29448 1.84411 5.43174 1.78906 5.59616 1.78906C5.76058 1.78906 5.89783 1.84411 6.00793 1.95419C6.11802 2.06429 6.17306 2.20155 6.17306 2.36596V3.37559H11.8557V2.35154C11.8557 2.19193 11.9096 2.05828 12.0173 1.95059C12.125 1.84291 12.2586 1.78906 12.4182 1.78906C12.5778 1.78906 12.7115 1.84291 12.8192 1.95059C12.9269 2.05828 12.9807 2.19193 12.9807 2.35154V3.37559H14.0192C14.398 3.37559 14.7187 3.50684 14.9812 3.76934C15.2437 4.03184 15.375 4.35252 15.375 4.73137V14.7698C15.375 15.1486 15.2437 15.4693 14.9812 15.7318C14.7187 15.9943 14.398 16.1256 14.0192 16.1256H3.98077ZM3.98077 15.0006H14.0192C14.0769 15.0006 14.1298 14.9765 14.1779 14.9285C14.2259 14.8804 14.25 14.8275 14.25 14.7698V7.73137H3.74998V14.7698C3.74998 14.8275 3.77402 14.8804 3.82209 14.9285C3.87018 14.9765 3.92308 15.0006 3.98077 15.0006ZM3.74998 6.60639H14.25V4.73137C14.25 4.67367 14.2259 4.62078 14.1779 4.57269C14.1298 4.52461 14.0769 4.50058 14.0192 4.50058H3.98077C3.92308 4.50058 3.87018 4.52461 3.82209 4.57269C3.77402 4.62078 3.74998 4.67367 3.74998 4.73137V6.60639Z"
              fill="currentColor"
            />
          </svg>
          {value ? (
            <span className="flex-shrink-0 text-sm text-grayscale-80 sm:text-base">{formatInputDate(value)}</span>
          ) : (
            <span className="flex-shrink-0 text-sm text-grayscale-50 sm:text-base">날짜를 선택해 주세요</span>
          )}
        </label>
        <input className="size-full" id="calendar" value={value} type="datetime-local" onChange={onChange} />
      </div>
    </div>
  );
};

export default InputWithCalendar;
