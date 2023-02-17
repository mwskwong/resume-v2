import { SvgIconProps } from "@mui/material";
import { ComponentType } from "react";

import { Contact } from "@/types";

interface ContactUiTemplate {
  id: keyof Contact;
  Icon: ComponentType<SvgIconProps>;
  title: string;
  url: string;
}

export default ContactUiTemplate;
