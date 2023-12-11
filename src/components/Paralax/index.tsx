import { ComponentProps, cloneElement } from "react"

interface IParalax extends ComponentProps<'div'> {
    speed: number
    children: React.JSX.Element
    pageCordinates: {
        x: number
        y: number
    } | null
}

export default function Paralax({ children, pageCordinates, speed, ...props }: IParalax) {
    const x = (pageCordinates?.x ?? 1) * speed / 100
    const y = (pageCordinates?.y ?? 1) * speed / 100

    return (
        <div
            {...props}
            style={{
                transform: `translateX(${x}px) translateY(${y}px)`
            }}
        >
            {children}
        </div>
    )
}