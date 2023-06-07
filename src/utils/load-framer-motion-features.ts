const loadFramerMotionFeatures = () =>
  import(/* webpackExports: ["domMax"] */ "framer-motion").then(
    (res) => res.domMax
  );

export default loadFramerMotionFeatures;
