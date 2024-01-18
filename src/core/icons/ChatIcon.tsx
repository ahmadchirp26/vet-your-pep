import { cn } from "../lib/helper";

interface Props {
  className?: string;
}
export const ChatIcon = ({ className }: Props) => (
  <svg
    className={cn('w-4 h-4', className)}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9566 34.8984L20.9322 33.2496C21.6882 31.9716 22.0662 31.3308 22.6746 30.978C23.283 30.6234 24.048 30.6108 25.578 30.5838C27.8388 30.546 29.2554 30.4074 30.4434 29.9142C31.5353 29.4619 32.5275 28.799 33.3632 27.9632C34.199 27.1275 34.8619 26.1353 35.3142 25.0434C36 23.391 36 21.294 36 17.1V15.3L35.9982 13.4136C35.9964 12.645 35.055 12.2094 34.3746 12.5676C32.8442 13.3751 31.0955 13.6714 29.3845 13.4129C27.6736 13.1545 26.0904 12.3549 24.8668 11.1314C23.6433 9.90781 22.8437 8.3246 22.5853 6.61365C22.3268 4.90271 22.6231 3.15396 23.4306 1.6236C23.7906 0.945 23.3568 0.00360017 22.5864 0.00360017C21.9924 1.68057e-07 21.366 0 20.7 0H15.3C9.4086 0 6.462 0 4.2984 1.3266C3.08736 2.06827 2.06901 3.086 1.3266 4.2966C0 6.462 0 9.4104 0 15.3V17.1C0 21.294 2.14577e-07 23.391 0.684 25.0434C1.1365 26.1355 1.79972 27.1278 2.63577 27.9635C3.47182 28.7993 4.46433 29.4621 5.5566 29.9142C6.7446 30.4074 8.1612 30.5442 10.422 30.5838C11.952 30.6108 12.717 30.6234 13.3254 30.978C13.932 31.3308 14.3118 31.9698 15.0678 33.2496L16.0434 34.8984C16.9128 36.3672 19.0854 36.3672 19.9566 34.8984Z"
      fill="#265D5E"
    />
    <path
      d="M30.6002 10.8C33.5825 10.8 36.0002 8.38234 36.0002 5.4C36.0002 2.41766 33.5825 0 30.6002 0C27.6179 0 25.2002 2.41766 25.2002 5.4C25.2002 8.38234 27.6179 10.8 30.6002 10.8Z"
      fill="#265D5E"
    />
  </svg>
);