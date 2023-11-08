import { HTMLAttributes } from "react"
import Badge, { IBadgeProps } from "../Badge"
import SecoundaryButton from "../SecoundaryButton"

interface ICardProps {
    width?: `${number}px` | `${number}%`
    height?: `${number}px`
    title: string
    description: string
    badge?: IBadgeProps
    bgColor?: MyCustomColors
    textColor: MyCustomColors
    customButton?: React.JSX.Element
    className?: HTMLAttributes<HTMLDivElement>['className']
}

export default function Card({ width = '310px', height, title, description, badge, bgColor, textColor, customButton, className }: ICardProps) {
    const handleClick = () => {}

    return (
        <div style={{ width, height: height ?? 'fit-content' }} className={`${className} flex flex-col justify-between gap-[12px] border-2 text-${textColor} p-[24px] rounded-lg ${bgColor && `bg-${bgColor}`} p-[16px]`}>
            <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                    <h3>{title}</h3>
                    {badge && <Badge {...badge}/>}
                </div>
                <p>{description}</p>
            </div>
            {customButton ? customButton : (
                <SecoundaryButton text='Entrar em contato' color={textColor} rounded="md" onClick={handleClick} newTab goTo={process.env.NEXT_PUBLIC_WHATSAPP_LINK as string} />
            )}
        </div>
    )
}
