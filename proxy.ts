import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  // Skip api routes, Next internals and all static files
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
