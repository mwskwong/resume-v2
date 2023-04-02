import { FC } from "react";

import Image from "@/components/shared/image";
import cx from "@/utils/cx";

import ListItemThumbnailProps from "./list-item-thumbnail-props";

const ListItemThumbnail: FC<ListItemThumbnailProps> = ({
  square,
  sx,
  ...props
}) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    width={square ? 56 : 100}
    height={56}
    sx={cx(
      {
        borderRadius: 1,
        mr: 2,
        aspectRatio: square ? "1" : "100 / 56",
      },
      sx
    )}
    {...props}
  />
);

export default ListItemThumbnail;
