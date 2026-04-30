import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  variant?: "up" | "fade" | "scale";
}

const Reveal = ({ children, delay = 0, className, as: Tag = "div", variant = "up" }: Props) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const base =
    variant === "up"
      ? "opacity-0 translate-y-6"
      : variant === "scale"
      ? "opacity-0 scale-95"
      : "opacity-0";
  const active = "opacity-100 translate-y-0 scale-100";
  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        inView ? active : base,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
