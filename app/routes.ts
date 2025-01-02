import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("teams/:teamId", "routes/team.tsx"),
    route("dashboard", "routes/dashboard.tsx", [
        index("routes/dashboard/home.tsx"),
        route("settings", "routes/dashboard/settings.tsx")
    ])
] satisfies RouteConfig;
