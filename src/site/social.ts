export const socialProfiles = [
  { id: "github", href: "https://github.com/yukim0359", label: "GitHub" },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/yuki-maeda-6a50b0373/",
    label: "Linkedin",
  },
  { id: "twitter", href: "https://x.com/my_u_03", label: "Twitter" },
  {
    id: "instagram",
    href: "https://www.instagram.com/yukim0359/",
    label: "Instagram",
  },
] as const;

export type SocialProfileId = (typeof socialProfiles)[number]["id"];
