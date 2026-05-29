import { cn } from "@/lib/utils";

const LogoCircle = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("text-background w-[34rem]", className)}
      viewBox="0 0 340 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M229.999 0C357.024 0 460 102.976 460 230.001C460 357.027 357.024 460 229.999 460C102.974 459.999 0.000197344 357.026 0 230.001C0 102.976 102.974 0.000505142 229.999 0ZM144.198 238.198V360.477H253.86C287.626 360.477 314.999 333.104 314.999 299.338C314.999 265.571 287.626 238.198 253.86 238.198H144.198ZM144.198 211.038H247.067C277.081 211.038 301.411 186.707 301.412 156.694C301.412 126.68 277.081 102.347 247.067 102.347H144.198V211.038Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LogoCircle;
