import { ComponentProps, HTMLAttributes } from "react"
import Badge, { IBadgeProps } from "../Badge"
import SecoundaryButton from "../SecoundaryButton"

interface ICardProps {
    title: string
    icon: React.JSX.Element
    description: string[]
    className?: ComponentProps<'div'>['className']
}

export default function Card({ title, icon, description, className }: ICardProps) {

    return (
        <div className={`flex flex-col items-center w-full h-full border-details border-[2px] rounded-xl p-[32px] gap-4 justify-between ${className}`}>
            <h3 className="text-center">{title}</h3>
            {icon}
            {description.map(desc => (
                <p key={desc} className="text-center text-text">{desc}</p>
            ))}
        </div>
    )
}
