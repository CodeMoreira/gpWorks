import Link from "next/link"

interface IPrimaryButtonProps {
    text: string
    onClick: () => void
    icon?: React.JSX.Element
}

export default function PrimaryButton({ onClick, text, icon }: IPrimaryButtonProps) {
    return (
        <Link target="_blank" href={process.env.NEXT_PUBLIC_WHATSAPP_LINK as string} className="w-fit flex items-center gap-[12px] bg-secoundary text-primary font-semibold px-[24px] py-[8px] rounded-full" onClick={onClick}>
            {text}
            {icon}
        </Link>
    )
}
