export interface IBadgeProps {
    text: string
    bgColor: MyCustomColors
    textColor: MyCustomColors
}

export default function Badge({ text, bgColor, textColor }: IBadgeProps) {
    return (
        <span className={`bg-${bgColor} text-${textColor} px-[16px] py-[4px] rounded-full`}>
            {text}
        </span>
    )
}
