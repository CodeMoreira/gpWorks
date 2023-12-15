import useOnScreen from "@/hooks/useOnScreen"
import { ComponentProps, useEffect, useRef, useState } from "react"
import './animations.css'

type animations = 'reveal' | 'fromTop' | 'fromRight' | 'fromLeft' 

interface IScrollTrigger {
    children: React.JSX.Element
    className?: ComponentProps<'div'>['className']
    animations: animations[]
    time?: `${number}ms` | `${number}s`
    delay?: {
        time: number
        styleBeforeAnimation?: ComponentProps<'div'>['style']
    }
}

export default function ScrollTrigger({ 
    children,
    className,
    animations,
    time = '1s',
    delay = { time: 0, styleBeforeAnimation: {}}
}: IScrollTrigger) {  
    const [play, setPlay] = useState(false)
    const element = useRef<HTMLDivElement>(null)
    const isElementVisible = useOnScreen(element)
    const delayInMs = delay.time * 1000

    const classes = animations.map(animation => `${animation} ${time} linear`).toString()

    useEffect(() => {
        if (isElementVisible) {
            if (delay) {
                const delayAnimation = setTimeout(() => {
                    setPlay(true)
                }, delayInMs);
    
                return () => {
                    clearTimeout(delayAnimation)
                }
            } else {
                setPlay(true)
            }
        } else {
            setPlay(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, isElementVisible])

    return (
        <div ref={element} className={`${className} transition-all`} style={play ? {} : delay.styleBeforeAnimation}>
            {play && (
                <div style={{ animation: classes }} className="w-full h-full">
                    {children}
                </div>
            )}
        </div>
    )
}
