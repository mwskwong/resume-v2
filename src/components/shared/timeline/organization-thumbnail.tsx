import { Box, BoxProps, ButtonBase, SxProps, Theme } from "@mui/material";

import Image from "@/components/shared/image";

import { Thumbnail } from "./types";

interface Props extends BoxProps {
  images?: [Thumbnail] | [Thumbnail, Thumbnail];
}

export default function OrganizationThumbnail({ images, ...props }: Props) {
  const size = { width: 56, height: 56 };

  function getLinkSx(index: number): SxProps<Theme> {
    return {
      borderRadius: 1,
      gridColumnStart: 1,
      gridRowStart: 1,
      position: "relative",
      overflow: "hidden",
      ...size,
      clipPath:
        images?.length === 2
          ? index === 0
            ? "polygon(0 0, 100% 0, 0 100%)"
            : "polygon(100% 100%, 100% 0, 0 100%)"
          : undefined,
    };
  }

  return (
    <Box
      sx={{
        borderRadius: 1,
        display: "inline-grid",
        position: "relative",
        bgcolor: "white",
        ...size,
      }}
      {...props}
    >
      {images?.map(({ src, alt, url }, index) => (
        <ButtonBase
          key={index}
          component="a"
          href={url}
          target="_blank"
          sx={getLinkSx(index)}
        >
          <Image src={src} alt={alt} width={56} height={56} />
        </ButtonBase>
      ))}
    </Box>
  );
}
