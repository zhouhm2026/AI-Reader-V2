/**
 * Cloudflare Pages Advanced Mode worker.
 * Handles SPA routing for /demo/:novelSlug/* routes.
 * Serves demo/index.html for SPA routes while passing static assets through.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Demo SPA routes: /demo/honglou/*, /demo/xiyouji/*
    if (/^\/demo\/(honglou|xiyouji)(\/|$)/.test(url.pathname)) {
      // Serve the demo SPA entry point
      const spaRequest = new Request(new URL('/demo/index.html', url.origin), request);
      return env.ASSETS.fetch(spaRequest);
    }

    // Everything else: serve static files normally
    return env.ASSETS.fetch(request);
  }
};
