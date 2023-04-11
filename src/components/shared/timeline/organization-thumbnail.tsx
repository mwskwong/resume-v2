import { Box, BoxProps, ButtonBase } from "@mui/material";

import Image from "@/components/shared/image";
import cx from "@/utils/cx";

import { Thumbnail } from "./types";

interface Props extends BoxProps {
  images?: [Thumbnail] | [Thumbnail, Thumbnail];
}

export default function OrganizationThumbnail({ images, ...props }: Props) {
  const size = { width: 56, height: 56 };
  const linkSx = { borderRadius: 1, gridColumnStart: 1, gridRowStart: 1 };
  const imgSx = {
    display: "block",
    borderRadius: 1,
    objectPosition: "left center",
    ...size,
  };

  return (
    <Box
      sx={{
        borderRadius: 1,
        display: "inline-grid",
        position: "relative",
        bgcolor: "white",
        ...size,
      }}
      data-cy="thumbnail"
      {...props}
    >
      {images ? (
        images.length === 1 ? (
          <ButtonBase
            component="a"
            href={images[0].url}
            target="_blank"
            sx={linkSx}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              // TODO: check if EDPS logo works
              {...size}
              sx={imgSx}
            />
          </ButtonBase>
        ) : (
          <>
            <ButtonBase
              component="a"
              href={images[0].url}
              target="_blank"
              sx={cx(linkSx, { clipPath: "polygon(0 0, 100% 0, 0 100%)" })}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                // TODO: check if EDPS logo works
                {...size}
                sx={imgSx}
              />
            </ButtonBase>
            <ButtonBase
              component="a"
              href={images[1].url}
              target="_blank"
              sx={cx(linkSx, {
                clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
              })}
            >
              <Image
                src={images[1].src}
                alt={images[1].alt}
                // TODO: check if EDPS logo works
                {...size}
                sx={imgSx}
              />
            </ButtonBase>
          </>
        )
      ) : null}
    </Box>
  );
}
