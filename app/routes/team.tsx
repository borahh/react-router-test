import type { Route } from "./+types/team";

export async function loader({params}: Route.LoaderArgs) {
  return {teamId: params.teamId};
}

export default function Team({loaderData}: Route.ComponentProps) {
  return <p>Team Page is here for team #{loaderData.teamId}</p>;
}