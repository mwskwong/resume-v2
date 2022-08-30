/// <reference types="@welldone-software/why-did-you-render" />
if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  const React = require("react");
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true
  });
}

export { };