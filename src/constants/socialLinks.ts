import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import type { SocialLink } from "../types";
import type { SocialProfileId } from "../site/social.ts";
import { socialProfiles } from "../site/social.ts";

const icons: Record<SocialProfileId, SocialLink["icon"]> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export const socialLinks: SocialLink[] = socialProfiles.map((p) => ({
  icon: icons[p.id],
  href: p.href,
  label: p.label,
}));
