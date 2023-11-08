import Logo from "@/assets/svgs/logo";
import Link from "next/link";
import Divder from '@/components/Divider';

export default function Footer() {
    return (
        <footer className="w-screen flex justify-center bg-secoundary">
            <div className="w-[1440px] flex flex-col items-center py-[56px] gap-[56px]">
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-[26px] w-[440px]">
                        <Logo color="primary" />
                        <p className="text-primary">GP é uma empresa focada em colocar seu negócio no meio digital, desenvolvendo desde o design até a disponibilização do seu website online.</p>
                    </div>
                    <div className="flex flex-col gap-[26px] w-[440px]">
                        <h2 className="text-primary">Links</h2>
                        <nav>
                            <ul className="flex flex-col gap-[16px]">
                                <li><Link className="text-primary" href="#inicio">Inicio</Link></li>
                                <li><Link className="text-primary" href="#Serviços">Serviços</Link></li>
                                <li><Link className="text-primary" href="#Sobre">Sobre</Link></li>
                                <li><Link className="text-primary" target="_blank" href={process.env.NEXT_PUBLIC_WHATSAPP_LINK as string}>Contato</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Divder />
                <span className="text-primary">©{new Date().getFullYear()} | Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}
