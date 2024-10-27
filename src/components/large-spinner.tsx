import { CircularProgress } from "@nextui-org/react";

export default function LargeSpinner() {
  return (
    <CircularProgress
      classNames={{
        svg: "w-36 h-36 drop-shadow-md",
        indicator: "stroke-white",
        track: "stroke-white/10",
        value: "text-3xl font-semibold text-white",
      }}
      className="relative top-[50%] mx-auto -translate-y-[50%]"
      strokeWidth={4}
      aria-label="Loading..."
    />
  );
}
