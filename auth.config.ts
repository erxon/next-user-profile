import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
    signOut: "/login"
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }){
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith("/welcome");
      if (isOnHome) {
        if (isLoggedIn){ 
          return true
        };
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/welcome", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
