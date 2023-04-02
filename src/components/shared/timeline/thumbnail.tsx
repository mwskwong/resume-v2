import { Box, ButtonBase } from "@mui/material";
import { FC } from "react";

import Image from "@/components/shared/image";
import cx from "@/utils/cx";

import ThumbnailProps from "./thumbnail-props";

const Thumbnail: FC<ThumbnailProps> = ({ images }) => {
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
    >
      {images &&
        (Array.isArray(images) ? (
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
                height={size.height}
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
                height={size.height}
                sx={imgSx}
              />
            </ButtonBase>
          </>
        ) : (
          <ButtonBase
            component="a"
            href={images.url}
            target="_blank"
            sx={linkSx}
          >
            <Image
              src={images.src}
              alt={images.alt}
              height={size.height}
              sx={imgSx}
            />
          </ButtonBase>
        ))}
    </Box>
  );
};

export default Thumbnail;
