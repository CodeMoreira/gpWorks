import Logo from "@/assets/svgs/logo";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";
import SecoundaryButton from "../SecoundaryButton";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { colors } from "../../../tailwind.config";

export const links: Record<string, { hash?: string; page?: string}> = {
    Inicio: {
        hash: 'inicio'
    },
    Serviços: {
        hash: 'servicos'
    },
    Portfólio: {
        hash: 'portfolio'
    },
    // Sobre: {
    //     hash: 'sobre'
    // },
    Contato: {
        page: '/success'
    },
}

export default function Header() {
    const pathname = usePathname()
    const params = useParams()
    const [hash, setHash] = useState('')

    useEffect(() => {
        const currentHash = window.location.hash.replace("#", "")
        setHash(currentHash)
    }, [params])

    return (
        <header className="w-[calc(100%-15px)] flex justify-center fixed z-10 desktop:w-full bg-primary">
            <div className="w-[1440px] h-[64px] desktop:w-full desktop:px-[24px] flex items-center tablet:justify-between">
                <nav className="w-full tablet:hidden">
                    <ul className="flex gap-[16px]">
                        {Object.entries(links).map(([title, { hash: innerHash, page }]) => {
                            const hashMatch = innerHash === hash
                            const pageMatch = page === pathname

                            return (
                                <li key={`header-${innerHash}`}>
                                    <Link 
                                        style={{ 
                                            color: hashMatch || pageMatch ? colors.tertiary : colors.secoundary,
                                            fontWeight:  hashMatch || pageMatch ? 'bold' : '400',
                                        }}
                                        className="hover:!text-tertiary transition-all"
                                        href={
                                            innerHash
                                                ? `#${innerHash}`
                                                : page ?? ''
                                        }
                                    >
                                        {title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <Logo />
                <div className="w-full flex justify-end tablet:w-fit">
                    <SecoundaryButton text='Fale conosco' icon={<AiOutlineArrowRight />} goTo="/success" />
                </div>
            </div>
        </header>
    )
}
