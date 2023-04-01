const loadFramerMotionFeatures = () =>
  import("./framer-motion-features").then((res) => res.default);

export default loadFramerMotionFeatures;
