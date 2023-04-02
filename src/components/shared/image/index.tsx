import { styled } from "@mui/material";
import NextImage from "next/image";
import { ComponentProps } from "react";

const Image = styled(NextImage)``;

export type ImageProps = ComponentProps<typeof Image>;

export default Image;
