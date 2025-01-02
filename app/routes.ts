import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("teams/:teamId", "routes/team.tsx"),
    route("dashboard", "routes/dashboard.tsx", [
        index("routes/dashboard/home.tsx"),
        route("settings", "routes/dashboard/settings.tsx")
    ]),
    layout("layouts/marketing.layout.tsx", [
        route("contact", "routes/contact.tsx"), // /contact route
      ]),
] satisfies RouteConfig;
