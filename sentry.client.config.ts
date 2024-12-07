import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f17976ae9c8ff673290e0d2b3d646e93@o4508427355750400.ingest.de.sentry.io/4508427372200016",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system", // Adjust color scheme based on user preference
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
