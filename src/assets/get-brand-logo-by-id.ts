import { Brand } from "@/types";

import edps from "./images/edps.jpg";
import ha from "./images/ha.png";
import hku from "./images/hku.jpeg";
import hkust from "./images/hkust.jpeg";
import publicHealthHku from "./images/public_health_hku.jpg";
import tecpal from "./images/tecpal.jpeg";
import ubc from "./images/ubc.jpeg";
import versitech from "./images/versitech.png";

const logos = {
  hku,
  hkust,
  ubc,
  tecpal,
  edps,
  ha,
  publicHealthHku,
  engineeringHku: hku,
  versitech,
};

const getBrandLogoById = (id: Brand["id"]) => {
  if (id in logos) {
    return logos[id as keyof typeof logos];
  }
};

export default getBrandLogoById;
