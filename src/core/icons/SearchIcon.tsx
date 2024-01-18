import { cn } from "../lib/helper";

interface Props {
  className?: string;
}
export const SearchIcon = ({ className }: Props) => (
  <svg
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-5 h-5", className)}
  >
    <path
      d="M15.0745 28.149C22.2955 28.149 28.149 22.2955 28.149 15.0745C28.149 7.85353 22.2955 2 15.0745 2C7.85353 2 2 7.85353 2 15.0745C2 22.2955 7.85353 28.149 15.0745 28.149Z"
      stroke="#79CD00"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M19.4251 9.95469C18.8544 9.38251 18.1762 8.92876 17.4296 8.61952C16.6829 8.31028 15.8825 8.15164 15.0744 8.15272C14.2662 8.15164 13.4658 8.31028 12.7192 8.61952C11.9725 8.92876 11.2944 9.38251 10.7236 9.95469M24.4742 24.4743L30.9999 31"
      stroke="#79CD00"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
