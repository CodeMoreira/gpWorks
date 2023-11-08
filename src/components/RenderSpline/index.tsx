import { useLoading } from "@/hookes/useLoading";
import Spline from "@splinetool/react-spline";
import { useState } from 'react';

interface IRenderSplinerProps {
    scene: string;
    onLoadEnd?: () => void;
    render?: React.JSX.Element
}

export default function RenderSpline({ scene, onLoadEnd, render }: IRenderSplinerProps) {
    const { isLoading, setIsLoading } = useLoading()

    function toggleLoading() {
        setTimeout(() => {
            setIsLoading(false)
            onLoadEnd?.()
        }, 500)
    }

    return (
        <div className={`w-full h-full relative`}>
            <div className={`w-full h-full ${isLoading ? 'opacity-0' : 'fadeIn'}`}>
                <Spline className="w-full h-full" onLoad={toggleLoading} scene={scene} />
                {render}
            </div>
        </div>
    )
}
