import useOnScreen from "@/hooks/useOnScreen"
import { ComponentProps, useRef } from "react"
import './animations.css'

type animations = 'reveal' | 'fromTop' | 'fromRight' | 'fromLeft' 

interface IScrollTrigger {
    children: React.JSX.Element
    className?: ComponentProps<'div'>['className']
    animations: animations[]
    time?: `${number}ms` | `${number}s`
}

export default function ScrollTrigger({ animations, time = '1s', children, className }: IScrollTrigger) {
    const element = useRef<HTMLDivElement>(null)
    const isElementVisible = useOnScreen(element)
    
    const classes = animations.map(animation => `${animation} ${time} linear`).toString()

    return (
        <div ref={element} style={{ animation: isElementVisible ? classes : '' }} className={className}>
            {children}
        </div>
    )
}
