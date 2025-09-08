// Temporarily disable Sentry for development
console.log('Sentry instrumentation disabled for development');

// Or comment out all the Sentry code:
/*
import * as Sentry from "@sentry/node";
import { ENV } from "./src/config/env.js";

Sentry.init({
  dsn: ENV.SENTRY_DSN,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  environment: ENV.NODE_ENV || "development",
  includeLocalVariables: true,
  sendDefaultPii: true,
});
*/