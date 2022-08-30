/// <reference types="@welldone-software/why-did-you-render" />
if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  const React = require("react");

  whyDidYouRender(React, {
    trackAllPureComponents: true
  });
}

export { };