import { withAuth } from "next-auth/middleware";

export default withAuth();

export const config = {
  // A list of protected routes that we don't want unauthenticated users to access
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
