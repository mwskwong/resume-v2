const loadFramerMotionFeatures = () =>
  import("./framerMotionFeatures").then((res) => res.default);

export default loadFramerMotionFeatures;
