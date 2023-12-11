import Logo from "@/assets/svgs/logo";
import Link from "next/link";
import Divder from '@/components/Divider';
import { links } from "../Header";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-screen flex justify-center">
            <div className="w-[1440px] desktop:w-full desktop:px-[24px] flex flex-col items-center py-[56px] gap-[16px]">
                <div className="w-full flex justify-between items-center">
                    <Logo />
                    <nav>
                        <ul className="flex gap-[16px]">
                            {Object.entries(links).map(([title, { hash: innerHash, page }]) => (
                                <li key={`footer-${innerHash}`}>
                                    <Link 
                                        className="hover:text-tertiary transition-all"
                                        href={
                                            innerHash
                                                ? `/#${innerHash}`
                                                : page ?? ''
                                        }
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <Divder />
                <span className="text-secoundary">©{currentYear == 2023 ? currentYear : `2023-${currentYear}`} | Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}
