import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://867296219d9f1b8819ceea5d6362af87@o4508348677226496.ingest.us.sentry.io/4508348714254336",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});