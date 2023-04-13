import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: {
    width: number;
    height: number;
  };
  disableBackground?: boolean;
  rounded?: boolean;
}

export default function Icon({
  size,
  disableBackground,
  rounded,
  ...props
}: Props) {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={disableBackground ? size.width : "100%"}
      height={disableBackground ? size.height : "100%"}
      {...props}
    >
      <path
        fill="#1a2027"
        d="M992.91,995.9H232.45C107.21,995.9,5.31,899.36,5.31,780.71V65.4a25.78,25.78,0,1,1,51.56,0V780.71c0,90.23,78.77,163.63,175.58,163.63H992.91a25.78,25.78,0,1,1,0,51.56Z"
      />
      <path
        fill="#006edb"
        d="M853.59,819.41l-7.08-7.34h0L189.67,131.33C126.44,70.2,130.08,163,130.08,163l-.35-.93V758.94c1.71,31.77,16.57,116.08,128,116.08,21,0,32,.6,35.79,1.62H823.62C897,876.64,868.68,836.32,853.59,819.41Z"
      />
      <path
        fill="#006edb"
        d="M905.72,28.53H781.07c-10.58,1.41-27.05,6.94-44.39,25.8-.73.79-1.38,1.41-2,2L602.79,200.46h0c-28.92,31.61-60,0-60,0L408.45,54.34h0c-17.34-18.87-33.81-24.4-44.39-25.8a38,38,0,0,0-11.79,0H249.4c-31.49,0-16.08,22.56-6.16,34.07L517.09,356.27c1.44,1.36,3,2.87,4.65,4.67,35.56,38.13,69.83,19.5,85,7.48L911.14,64l-5.42,5.16S948,28.53,905.72,28.53Z"
      />
      <path
        fill="#1a2027"
        d="M1012.87,820.88V696.23c-1.41-10.58-6.94-27.05-25.8-44.39-.79-.73-1.41-1.38-2-2L840.94,517.94h0c-31.61-28.92,0-60,0-60L987.06,323.61h0c18.87-17.34,24.4-33.81,25.8-44.39a38,38,0,0,0,0-11.79V164.55c0-31.49-22.56-16.08-34.07-6.16L685.13,432.24c-1.36,1.44-2.87,3-4.67,4.65-38.13,35.56-19.5,69.83-7.48,85L977.36,826.29l-5.16-5.42S1012.87,863.16,1012.87,820.88Z"
      />
    </svg>
  );

  if (disableBackground) {
    return icon;
  }

  return (
    <div
      style={{
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20%",
        borderRadius: rounded ? "25%" : undefined,
        ...size,
      }}
    >
      {icon}
    </div>
  );
}
