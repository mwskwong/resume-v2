"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { FC, PropsWithChildren, useState } from "react";

// Workaround until Emotion supports Next.js /app dir properly
const EmotionRegistry: FC<PropsWithChildren> = ({ children }) => {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" ")
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  );
};

export default EmotionRegistry;
