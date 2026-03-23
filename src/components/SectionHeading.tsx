import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  /** Lucide アイコン（装飾・読み上げ除外） */
  icon: LucideIcon;
  children: ReactNode;
};

/** セクション見出し：白黒ライン系アイコン + タイトル */
const SectionHeading = ({ icon: Icon, children }: Props) => (
  <h2 className="section-heading flex flex-wrap items-center gap-3">
    <Icon
      className="shrink-0 size-[1.25rem] text-blue-700 md:size-[1.35rem]"
      strokeWidth={2.5}
      aria-hidden
    />
    <span>{children}</span>
  </h2>
);

export default SectionHeading;
