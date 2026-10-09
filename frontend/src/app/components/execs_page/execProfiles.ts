export type ExecDisplayGroup =
  "president" | "board" | "central_director" | "game_director" | "executive";

export type ExecSocialPlatform = "instagram" | "x" | "twitch" | "youtube" | "tiktok" | "linkedin";

export type ExecSocialLink = {
  platform: ExecSocialPlatform;
  url: string;
};

export type ExecProfile = {
  fullName: string;
  avatarUrl: string | null;
  title: string;
  displayGroup: ExecDisplayGroup;
  socials: ExecSocialLink[];
};

export type GroupedExecs = Partial<Record<ExecDisplayGroup, ExecProfile[]>>;

// Each section gets one header bar, and each display group inside it gets its own panel.
export const EXEC_SECTIONS: { label: string; groups: ExecDisplayGroup[] }[] = [
  { label: "PRESIDENTS & VPs", groups: ["president", "board"] },
  { label: "CENTRAL DIRECTORS", groups: ["central_director"] },
  { label: "GAME DIRECTORS", groups: ["game_director"] },
  { label: "EXECUTIVES", groups: ["executive"] },
];

export const SOCIAL_PLATFORM_ORDER: ExecSocialPlatform[] = [
  "instagram",
  "x",
  "twitch",
  "youtube",
  "tiktok",
  "linkedin",
];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

type RawExecProfile = {
  full_name: string;
  avatar_url: string | null;
  title: string;
  display_group: ExecDisplayGroup;
  social_links: ExecSocialLink[] | null;
};

// Groups with no members are left out of `execs`, and it's `{}` when there are no execs at all.
// Each group's array is already sorted by display_order.
type GetExecProfilesResponse = {
  execs: Partial<Record<ExecDisplayGroup, RawExecProfile[]>>;
};

const isSafeUrl = (url: string) => {
  try {
    return ["https:", "http:"].includes(new URL(url).protocol);
  } catch {
    return false;
  }
};

const toExecProfile = (exec: RawExecProfile): ExecProfile => ({
  fullName: exec.full_name,
  avatarUrl: exec.avatar_url,
  title: exec.title,
  displayGroup: exec.display_group,
  // The backend doesn't validate platform or url, and returns links in no fixed order
  socials: (exec.social_links ?? [])
    .filter((link) => SOCIAL_PLATFORM_ORDER.includes(link.platform) && isSafeUrl(link.url))
    .sort(
      (a, b) =>
        SOCIAL_PLATFORM_ORDER.indexOf(a.platform) - SOCIAL_PLATFORM_ORDER.indexOf(b.platform),
    ),
});

export async function getExecProfiles(): Promise<GroupedExecs> {
  const res = await fetch(`${API_BASE_URL}/exec-profiles`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to load exec profiles: ${res.status}`);
  }

  const data: GetExecProfilesResponse = await res.json();

  const grouped: GroupedExecs = {};
  for (const [group, execs] of Object.entries(data.execs ?? {})) {
    grouped[group as ExecDisplayGroup] = (execs ?? []).map(toExecProfile);
  }
  return grouped;
}
