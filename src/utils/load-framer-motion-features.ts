export default function loadFramerMotionFeatures() {
  return import("./framer-motion-features").then((res) => res.default);
}
