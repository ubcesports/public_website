export type ExecDisplayGroup = "president" | "board" | "central_director" | "game_director" | "executive";

export type ExecSocialPlatform = "instagram" | "x" | "twitch" | "youtube" | "tiktok" | "linkedin";

export type ExecSocialLink = {
  platform: ExecSocialPlatform;
  url: string;
};

export type ExecProfile = {
  fullName: string;
  profileImage: string | null;
  title: string;
  displayGroup: ExecDisplayGroup;
  socials: ExecSocialLink[];
};

export const EXEC_GROUP_ORDER: ExecDisplayGroup[] = [
  "president",
  "board",
  "executive",
  "central_director",
  "game_director",
];

export const EXEC_GROUP_LABELS: Record<ExecDisplayGroup, string> = {
  president: "Presidents & VPs",
  board: "Board of Directors",
  executive: "Executives",
  central_director: "Central Directors",
  game_director: "Game Directors",
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

type RawExecSocialLink = {
  platform: ExecSocialPlatform;
  url: string;
};

type RawExecProfile = {
  full_name: string;
  profile_image: string | null;
  title: string;
  display_group: ExecDisplayGroup;
  socials: RawExecSocialLink[] | null;
};

// The backend docs describe the response as "execs, grouped by display group" without
// pinning down the exact shape, so we accept either a flat array or a pre-grouped object.
type RawExecProfilesResponse = {
  execs: RawExecProfile[] | Partial<Record<ExecDisplayGroup, RawExecProfile[]>>;
};

function normalizeExecs(raw: RawExecProfilesResponse["execs"]): RawExecProfile[] {
  if (Array.isArray(raw)) return raw;
  return Object.values(raw).flatMap((group) => group ?? []);
}

export async function getExecProfiles(): Promise<ExecProfile[]> {
  const res = await fetch(`${API_BASE_URL}/exec-profiles`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to load exec profiles: ${res.status}`);
  }

  const data: RawExecProfilesResponse = await res.json();

  return normalizeExecs(data.execs).map((exec) => ({
    fullName: exec.full_name,
    profileImage: exec.profile_image,
    title: exec.title,
    displayGroup: exec.display_group,
    socials: exec.socials ?? [],
  }));
}

export function groupExecsByDisplayGroup(
  execs: ExecProfile[],
): Partial<Record<ExecDisplayGroup, ExecProfile[]>> {
  const groups: Partial<Record<ExecDisplayGroup, ExecProfile[]>> = {};

  for (const exec of execs) {
    (groups[exec.displayGroup] ??= []).push(exec);
  }

  return groups;
}
