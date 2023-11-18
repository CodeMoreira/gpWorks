import Link from "next/link"

interface IPrimaryButtonProps {
    text: string
    onClick?: () => void
    icon?: React.JSX.Element
    goTo?: string
}

export default function PrimaryButton({ onClick, text, icon, goTo }: IPrimaryButtonProps) {
    return (
        <Link target={goTo ? '_blank' : "_self"} href={goTo ?? "/success"} className="w-fit flex items-center gap-[12px] bg-secoundary text-primary font-semibold px-[24px] py-[8px] rounded-full" onClick={onClick}>
            {text}
            {icon}
        </Link>
    )
}
