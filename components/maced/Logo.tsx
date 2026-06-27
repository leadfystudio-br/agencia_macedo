import Image from "next/image";
import Link from "next/link";

export const MACED_LOGO_SRC = "/macedo-logo-agencia.png";

const LOGO_ASPECT = 494 / 453;

type MacedLogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

const sizes = {
  header: { height: 50, className: "h-[50px] w-auto" },
  footer: { height: 44, className: "h-11 w-auto" },
} as const;

export function MacedLogo({ className = "", variant = "header" }: MacedLogoProps) {
  const { height, className: sizeClass } = sizes[variant];
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={MACED_LOGO_SRC}
        alt="Agência Macedo"
        width={width}
        height={height}
        className={`${sizeClass} object-contain object-left`}
        style={{ width: "auto" }}
        priority={variant === "header"}
        unoptimized
      />
    </Link>
  );
}
