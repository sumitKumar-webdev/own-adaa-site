type StitchArrowProps = {
  className?: string;
  path: string;
  tailPath: string;
  headPath: string;
  width?: number;
  height?: number;
};

export function StitchArrow({
  className = "",
  path,
  tailPath,
  headPath,
  width = 220,
  height = 140,
}: StitchArrowProps) {
  return (
    <svg
      className={`pointer-events-none absolute overflow-visible ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d={path}
        className="fill-none stroke-[#111] stroke-[2] [stroke-linecap:round] [stroke-dasharray:8_10]"
      />
      <path
        d={tailPath}
        className="fill-none stroke-[#111] stroke-[2] [stroke-linecap:round]"
      />
      <path
        d={headPath}
        className="fill-none stroke-[#111] stroke-[2] [stroke-linecap:round] [stroke-linejoin:round]"
      />
    </svg>
  );
}