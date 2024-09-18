import path from "node:path";

import { logger } from "#utils/index.js";

import type { FallbackRoutes } from "../../types.js";

export const getFallbackEnvs = ({
  fallbacks,
  buildId,
}: {
  fallbacks: FallbackRoutes;
  buildId: string;
}) => {
  let data = fallbacks.data;

  if (data?.endsWith(".json")) {
    data = path.posix.join("/_next/data", buildId, data);
  }

  let envCount = 0;

  const envs = (
    [
      ["DOCUMENT", fallbacks.document],
      ["IMAGE", fallbacks.image],
      ["AUDIO", fallbacks.audio],
      ["VIDEO", fallbacks.video],
      ["FONT", fallbacks.font],
      ["DATA", data],
    ] as const
  ).reduce((prev, cur) => {
    if (cur[1]) {
      envCount++;
      prev[`__PWA_FALLBACK_${cur[0]}__`] = cur[1];
    }
    return prev;
  }, {} as Record<string, string>);

  if (envCount === 0) return;

  logger.info(
    "This app will fallback to these precached routes when fetching from the cache and the network fails:"
  );

  if (envs.__PWA_FALLBACK_DOCUMENT__) {
    logger.info(`  Documents (pages): ${envs.__PWA_FALLBACK_DOCUMENT__}`);
  }
  if (envs.__PWA_FALLBACK_IMAGE__) {
    logger.info(`  Images: ${envs.__PWA_FALLBACK_IMAGE__}`);
  }
  if (envs.__PWA_FALLBACK_AUDIO__) {
    logger.info(`  Audio: ${envs.__PWA_FALLBACK_AUDIO__}`);
  }
  if (envs.__PWA_FALLBACK_VIDEO__) {
    logger.info(`  Videos: ${envs.__PWA_FALLBACK_VIDEO__}`);
  }
  if (envs.__PWA_FALLBACK_FONT__) {
    logger.info(`  Fonts: ${envs.__PWA_FALLBACK_FONT__}`);
  }
  if (envs.__PWA_FALLBACK_DATA__) {
    logger.info(
      `  Data (/_next/data/**/*.json): ${envs.__PWA_FALLBACK_DATA__}`
    );
  }

  return envs;
};
