import Link from "next/link"

interface IPrimaryButtonProps {
    width?: `${number}px`
    text: string
    onClick?: () => void
    goTo: string
    icon?: React.JSX.Element
    color?: MyCustomColors
    rounded?: 'full' | 'md'
    newTab?: boolean
}

export default function SecoundaryButton({ newTab, width, goTo, color = 'secoundary', rounded = 'full', text, icon }: IPrimaryButtonProps) {
    const hover = color == 'secoundary' ? 'tertiary' : 'secoundary'
    return (
        <Link target={newTab ? '_blank' : "_self"} href={goTo} className={`w-[${width ?? 'fit-content'}] flex items-center justify-center font-semibold gap-[12px] border-2 border-${color} text-${color} hover:border-${hover} hover:text-${hover} transition-all px-[24px] py-[8px] rounded-${rounded}`}>
            {text}
            {icon}
        </Link>
    )
}
