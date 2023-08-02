import config from "@config/site";

export const getMediumFeed = async () =>
  await fetch(config.mediumApiUrl);
