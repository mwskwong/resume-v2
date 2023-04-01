const getRubikMedium = async () => {
  const response = await fetch(
    new URL(
      "@fontsource/rubik/files/rubik-latin-500-normal.woff",
      import.meta.url
    )
  );
  const rubikMedium = await response.arrayBuffer();

  return rubikMedium;
};

export default getRubikMedium;