'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import PrimaryButton from '@/components/PrimaryButton'
import Script from 'next/script'

export default function Success() {
    useEffect(() => {
        window.open("https://api.whatsapp.com/send/?phone=5511953636909&text=Ol%C3%A1+eu+gostaria+de+saber+mais+sobre+o+que+a+GP+oferece.&type=phone_number&app_absent=0", "_blank");
    }, [])

    return (
        <div className='w-screen h-screen flex justify-center overflow-x-hidden'>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-M4M9GQN86D" />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-M4M9GQN86D');
                `}
            </Script>
            <Header />
            <main className='w-[1440px] desktop:w-full desktop:px-[24px] h-fit flex flex-col items-center'>
                <section className='w-full h-[700px] flex flex-col items-center justify-center'>
                    <div className='w-full max-w-[500px] flex flex-col items-center p-[16px] gap-[16px] border-solid border-[1px] border-tertiary rounded-lg'>
                        <h3 className='text-secoundary text-center'>Envie uma mensagem!</h3>
                        <p className='text-tertiary text-center'>Fale conosco e tire suas dúvidas.</p>
                        <p className='text-tertiary text-center'>Que tal também agendar uma reunião e falar um pouco mais sobre você e seu projeto? Vamos juntos criar sua imagem digital!</p>
                        <PrimaryButton text='Enviar mensagem' goTo={"https://api.whatsapp.com/send/?phone=5511953636909&text=Ol%C3%A1+eu+gostaria+de+saber+mais+sobre+o+que+a+GP+oferece.&type=phone_number&app_absent=0"} />
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    )
}
