import Logo from "@/assets/svgs/logo";
import PrimaryButton from "../PrimaryButton";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-screen flex justify-center fixed z-20">
            <div className="w-[1440px] flex items-center bg-primary py-[8px]">
                <div className="w-full">
                    <Logo />
                </div>
                <nav>
                    <ul className="flex gap-[16px]">
                        <li><Link href="#inicio">Inicio</Link></li>
                        <li><Link href="#Serviços">Serviços</Link></li>
                        <li><Link href="#Sobre">Sobre</Link></li>
                        <li><Link target="_blank" href={process.env.NEXT_PUBLIC_WHATSAPP_LINK as string}>Contato</Link></li>
                    </ul>
                </nav>
                <div className="w-full flex justify-end">
                    <PrimaryButton text='Fale conosco' onClick={() => {}} icon={<AiOutlineArrowRight />} />
                </div>
            </div>
        </header>
    )
}
