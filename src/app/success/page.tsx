'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import PrimaryButton from '@/components/PrimaryButton'

export default function Success() {
    useEffect(() => {
        window.open(process.env.NEXT_PUBLIC_WHATSAPP_LINK, "_blank");
    }, [])

    return (
        <div className='w-screen h-screen flex justify-center overflow-x-hidden'>
            <Header />
            <main className='w-[1440px] desktop:w-full desktop:px-[24px] h-fit flex flex-col items-center'>
                <section className='w-full h-[700px] flex flex-col items-center justify-center'>
                    <div className='w-full max-w-[500px] flex flex-col items-center p-[16px] gap-[16px] border-solid border-[1px] border-tertiary rounded-lg'>
                        <h3 className='text-secoundary text-center'>Envie uma mensagem!</h3>
                        <p className='text-tertiary text-center'>Fale conosco e tire suas dúvidas.</p>
                        <p className='text-tertiary text-center'>Que tal também agendar uma reunião e falar um pouco mais sobre você e seu projeto? Vamos juntos criar sua imagem digital!</p>
                        <PrimaryButton text='Enviar mensagem' goTo={process.env.NEXT_PUBLIC_WHATSAPP_LINK} />
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    )
}
