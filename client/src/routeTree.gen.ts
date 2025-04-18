/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as SupportImport } from "./routes/support";
import { Route as FeedbackImport } from "./routes/feedback";
import { Route as AboutImport } from "./routes/about";
import { Route as IndexImport } from "./routes/index";
import { Route as AuthenticatedSettingsImport } from "./routes/_authenticated/settings";
import { Route as AuthenticatedPantryImport } from "./routes/_authenticated/pantry";
import { Route as AuthenticatedHomeImport } from "./routes/_authenticated/home";
import { Route as AuthenticatedRecipeNewImport } from "./routes/_authenticated/recipe/new";
import { Route as AuthenticatedRecipeIdImport } from "./routes/_authenticated/recipe/$id";

// Create/Update Routes

const SupportRoute = SupportImport.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => rootRoute,
} as any);

const FeedbackRoute = FeedbackImport.update({
  id: "/feedback",
  path: "/feedback",
  getParentRoute: () => rootRoute,
} as any);

const AboutRoute = AboutImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedSettingsRoute = AuthenticatedSettingsImport.update({
  id: "/_authenticated/settings",
  path: "/settings",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedPantryRoute = AuthenticatedPantryImport.update({
  id: "/_authenticated/pantry",
  path: "/pantry",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedHomeRoute = AuthenticatedHomeImport.update({
  id: "/_authenticated/home",
  path: "/home",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedRecipeNewRoute = AuthenticatedRecipeNewImport.update({
  id: "/_authenticated/recipe/new",
  path: "/recipe/new",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedRecipeIdRoute = AuthenticatedRecipeIdImport.update({
  id: "/_authenticated/recipe/$id",
  path: "/recipe/$id",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/about": {
      id: "/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
    "/feedback": {
      id: "/feedback";
      path: "/feedback";
      fullPath: "/feedback";
      preLoaderRoute: typeof FeedbackImport;
      parentRoute: typeof rootRoute;
    };
    "/support": {
      id: "/support";
      path: "/support";
      fullPath: "/support";
      preLoaderRoute: typeof SupportImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/home": {
      id: "/_authenticated/home";
      path: "/home";
      fullPath: "/home";
      preLoaderRoute: typeof AuthenticatedHomeImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/pantry": {
      id: "/_authenticated/pantry";
      path: "/pantry";
      fullPath: "/pantry";
      preLoaderRoute: typeof AuthenticatedPantryImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/settings": {
      id: "/_authenticated/settings";
      path: "/settings";
      fullPath: "/settings";
      preLoaderRoute: typeof AuthenticatedSettingsImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/recipe/$id": {
      id: "/_authenticated/recipe/$id";
      path: "/recipe/$id";
      fullPath: "/recipe/$id";
      preLoaderRoute: typeof AuthenticatedRecipeIdImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/recipe/new": {
      id: "/_authenticated/recipe/new";
      path: "/recipe/new";
      fullPath: "/recipe/new";
      preLoaderRoute: typeof AuthenticatedRecipeNewImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/feedback": typeof FeedbackRoute;
  "/support": typeof SupportRoute;
  "/home": typeof AuthenticatedHomeRoute;
  "/pantry": typeof AuthenticatedPantryRoute;
  "/settings": typeof AuthenticatedSettingsRoute;
  "/recipe/$id": typeof AuthenticatedRecipeIdRoute;
  "/recipe/new": typeof AuthenticatedRecipeNewRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/feedback": typeof FeedbackRoute;
  "/support": typeof SupportRoute;
  "/home": typeof AuthenticatedHomeRoute;
  "/pantry": typeof AuthenticatedPantryRoute;
  "/settings": typeof AuthenticatedSettingsRoute;
  "/recipe/$id": typeof AuthenticatedRecipeIdRoute;
  "/recipe/new": typeof AuthenticatedRecipeNewRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/feedback": typeof FeedbackRoute;
  "/support": typeof SupportRoute;
  "/_authenticated/home": typeof AuthenticatedHomeRoute;
  "/_authenticated/pantry": typeof AuthenticatedPantryRoute;
  "/_authenticated/settings": typeof AuthenticatedSettingsRoute;
  "/_authenticated/recipe/$id": typeof AuthenticatedRecipeIdRoute;
  "/_authenticated/recipe/new": typeof AuthenticatedRecipeNewRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/about"
    | "/feedback"
    | "/support"
    | "/home"
    | "/pantry"
    | "/settings"
    | "/recipe/$id"
    | "/recipe/new";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | "/about"
    | "/feedback"
    | "/support"
    | "/home"
    | "/pantry"
    | "/settings"
    | "/recipe/$id"
    | "/recipe/new";
  id:
    | "__root__"
    | "/"
    | "/about"
    | "/feedback"
    | "/support"
    | "/_authenticated/home"
    | "/_authenticated/pantry"
    | "/_authenticated/settings"
    | "/_authenticated/recipe/$id"
    | "/_authenticated/recipe/new";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AboutRoute: typeof AboutRoute;
  FeedbackRoute: typeof FeedbackRoute;
  SupportRoute: typeof SupportRoute;
  AuthenticatedHomeRoute: typeof AuthenticatedHomeRoute;
  AuthenticatedPantryRoute: typeof AuthenticatedPantryRoute;
  AuthenticatedSettingsRoute: typeof AuthenticatedSettingsRoute;
  AuthenticatedRecipeIdRoute: typeof AuthenticatedRecipeIdRoute;
  AuthenticatedRecipeNewRoute: typeof AuthenticatedRecipeNewRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  FeedbackRoute: FeedbackRoute,
  SupportRoute: SupportRoute,
  AuthenticatedHomeRoute: AuthenticatedHomeRoute,
  AuthenticatedPantryRoute: AuthenticatedPantryRoute,
  AuthenticatedSettingsRoute: AuthenticatedSettingsRoute,
  AuthenticatedRecipeIdRoute: AuthenticatedRecipeIdRoute,
  AuthenticatedRecipeNewRoute: AuthenticatedRecipeNewRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/feedback",
        "/support",
        "/_authenticated/home",
        "/_authenticated/pantry",
        "/_authenticated/settings",
        "/_authenticated/recipe/$id",
        "/_authenticated/recipe/new"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/feedback": {
      "filePath": "feedback.tsx"
    },
    "/support": {
      "filePath": "support.tsx"
    },
    "/_authenticated/home": {
      "filePath": "_authenticated/home.tsx"
    },
    "/_authenticated/pantry": {
      "filePath": "_authenticated/pantry.tsx"
    },
    "/_authenticated/settings": {
      "filePath": "_authenticated/settings.tsx"
    },
    "/_authenticated/recipe/$id": {
      "filePath": "_authenticated/recipe/$id.tsx"
    },
    "/_authenticated/recipe/new": {
      "filePath": "_authenticated/recipe/new.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
