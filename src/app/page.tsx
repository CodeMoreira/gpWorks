'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai';
import PrimaryButton from '@/components/PrimaryButton'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import Paralax from '@/components/Paralax'
import Card from '@/components/Card';
import Layout from '@/assets/svgs/layput';
import Gear from '@/assets/svgs/gear';
import Graph from '@/assets/svgs/graph';
import ScrollTrigger from '@/components/ScrollTrigger';

const partners = [
  {
    name: 'Stark',
    src: require('@/assets/images/stark.png'),
    height: '32px'
  },
  {
    name: 'FTD',
    src: require('@/assets/images/ftd.png')
  },
  {
    name: 'Petrobras',
    src: require('@/assets/images/petrobras.png')
  },
  {
    name: 'Selique Tech',
    src: require('@/assets/images/selique-tech.png')
  },
  {
    name: 'Forja dev',
    src: require('@/assets/images/forja-dev.png')
  },
  {
    name: 'JLX',
    src: require('@/assets/images/jlx.png')
  },
]

export default function Home() {
  const partnersContainer = useRef<HTMLDivElement>(null)
  const [pageCordinates, setPageCordinates] = useState<{x: number, y: number} | null>(null)

  useEffect(() => {
    if (partnersContainer.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scrollContent = Array.from(partnersContainer.current.children)
      scrollContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        partnersContainer.current?.appendChild(duplicatedItem)
      })
    }
  }, [partnersContainer])

  useEffect(() => {
      document.addEventListener('mousemove', e => {
        setPageCordinates({
          x: e.pageX,
          y: e.pageY
        })
      })
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
      <main className='h-fit flex flex-col w-[1440px] items-center pt-[calc(64px+24px)] desktop:w-full desktop:px-[24px]'>

        {/* inicio */}
        <section id='inicio' className='w-full flex items-center gap-[56px]'>
          <div className='w-full fadeInLeft flex flex-col gap-[24px]'>
            <div>
              <span className='text-tertiary font-bold'>AGÊNCIA</span>
              <h1>CRIE, INOVE, IMPACTE COM NOSSO DESIGN DIGITAL.</h1>
            </div>
            <p className="text-text">Da concepção à realidade digital: construímos sites que refletem sua visão única.</p>
            <PrimaryButton text='Faça um orçamento' icon={<AiOutlineArrowRight />} goTo="/success" />
          </div>
          <div className='w-[70%] flex items-center relative tablet:hidden'>
            <Paralax
              pageCordinates={pageCordinates}
              speed={2}
              className='w-full'
            >
              <Image
                loading="lazy"
                src={require('@/assets/images/notebook.png')}
                title='notebook'
                alt='notebook'
                className='fadeInRight w-full'
              />
            </Paralax>
            <Paralax
              pageCordinates={pageCordinates}
              speed={6}
              className='w-[35%] absolute top-[-10%] left-0'
            >
              <Image
                loading="lazy"
                src={require('@/assets/images/Ellipse 1.png')}
                title='bolinha'
                alt='bolinha'
                className='fadeInRight w-full'
              />
            </Paralax>
            <Paralax
              pageCordinates={pageCordinates}
              speed={3}
              className='w-[20%] absolute top-[55%] right-[-2%]'
            >
              <Image
                loading="lazy"
                src={require('@/assets/images/Ellipse 2.png')}
                title='bolinha'
                alt='bolinha'
                className='fadeInRight w-full'
              />
            </Paralax>
            <Paralax
              pageCordinates={pageCordinates}
              speed={1}
              className='w-[7%] absolute top-[40%] left-0'
            >
              <Image
                loading="lazy"
                src={require('@/assets/images/Ellipse 3.png')}
                title='bolinha'
                alt='bolinha'
                className='fadeInRight w-full'
              />
            </Paralax>
            <Paralax
              pageCordinates={pageCordinates}
              speed={1}
              className='w-[10%] absolute top-[5%] right-0'
            >
              <Image
                loading="lazy"
                src={require('@/assets/images/Ellipse 4.png')}
                title='bolinha'
                alt='bolinha'
                className='fadeInRight w-full'
              />
            </Paralax>
            <Paralax
              pageCordinates={pageCordinates}
              speed={1}
              className='w-[12%] absolute top-[80%] left-[12%]'
            >
              <Image
                loading="lazy"
                src={require('@/assets/images/Ellipse 4.png')}
                title='bolinha'
                alt='bolinha'
                className='fadeInRight w-full'
              />
            </Paralax>
          </div>
        </section>

        {/* Parceiros */}
        <section id='servicos' className='partners_wrapper'>
          <div ref={partnersContainer} className="partners_container">
            {partners.map(({ src, name, height = '64px' }) => (
              <Image
                key={name}
                loading="lazy"
                src={src}
                title={name}
                alt={name}
                style={{
                  width: 'auto',
                  height
                }}
              />
            ))}
          </div>
        </section>

        {/* Nossos serviços */}
        <section className='w-full flex flex-col items-center gap-6'>
          <div className="flex flex-col items-center">
            <span className="text-text">GP Works</span>
            <h2>Nossos Serviços</h2>
          </div>
          <p className='text-center text-text'>Aprenda um pouco mais sobre os serviços que oferecemos para <strong>turbinar seu negocio</strong>!</p>
          <div className='w-full flex flex-wrap gap-[40px] justify-center'>
            <ScrollTrigger animations={['reveal', 'fromLeft']} className='min-w-[312px] max-w-[500px] flex-1 h-[355px]'>
              <Card
                title="Web Design"
                icon={<Layout />}
                description={[
                  'Criamos os melhores designs para seu negócio visando sempre pela elegância e pela taxa de conversão.',
                  'Além de bonito seu website também rende mais!'
                ]}
              />
            </ScrollTrigger>
            <ScrollTrigger animations={['reveal']} className='min-w-[312px] max-w-[500px] flex-1 h-[355px]'>
              <Card
                title="Desenvolvimento web"
                icon={<Gear />}
                description={[
                  'Desenvolvemos seu website com as ferramentas mais modernas e com o melhores profissionais.',
                  'O melhor produto para a melhor empresa!'
                ]}
              />
            </ScrollTrigger>
            <ScrollTrigger animations={['reveal', 'fromRight']} className='min-w-[312px] max-w-[500px] flex-1 h-[355px]'>
              <Card
                title="Negócios"
                icon={<Graph />}
                description={[
                  'Consultoria de um profissional especializado em negócios e descubra como você pode melhorar ainda mais seu negócos.',
                  'Melhore seu negócio com nossa ajuda!'
                ]}
              />
            </ScrollTrigger>
          </div>
          <p className='text-center text-text'>Esses são alguns exemplos dos <strong>diversos serviços que oferecemos</strong>, clique no botão abaixo e <strong>descubra todos os serviços que oferecemos</strong>!</p>
          <PrimaryButton text='Ver todos os serviços' goTo="/success" />
        </section>

        {/* Metricas */}
        <section className='flex w-full gap-[40px] items-center tablet:flex-col tablet:text-center tablet:gap-[8px]'>
          <ScrollTrigger animations={['reveal', 'fromLeft']} className='w-[800px] tablet:hidden'>
            <Image
              loading="lazy"
              src={require('@/assets/images/metricas.png')}
              title='metricas'
              alt='metricas'
              className="w-full"
            />
          </ScrollTrigger>
          <div className='w-full h-full flex flex-col gap-[24px]'>
            <div className="w-full">
              <span className="text-text">Melhor desempenho</span>
              <h2>Seu Website bem avalidado pelo Google</h2>
            </div>
            <p className='text-text'>Quanto maior for a <strong>nota</strong> do seu site no Google ou em outros motores de busca, mais essas ferramentas vão <strong>recomendar o seu site</strong>, ou seja, você <strong>aumentará</strong> o fluxo de pessoas acessando seu website.</p>
            <p className='text-text'>Utilizando <strong>estratégias e técnicas</strong> de otimização seu website pode <strong>aumentar</strong> o fluxo de pessoas em <strong>até 200%</strong>.</p>
          </div>
          <ScrollTrigger animations={['reveal']} className='hidden tablet:block tablet:w-full'>
            <Image
              loading="lazy"
              src={require('@/assets/images/metricas2.png')}
              title='metricas'
              alt='metricas'
              className="w-full"
            />
          </ScrollTrigger>
        </section>

        {/* Google */}
        <section className='flex w-full gap-[40px] items-center tablet:flex-col tablet:text-center tablet:gap-[8px]'>
          <div className='w-full h-full flex flex-col gap-[24px] tablet:items-center'>
            <div className="w-full">
              <span className="text-text">Google</span>
              <h2>Subindo no raking</h2>
            </div>
            <p className='text-text'>Quer estar entre os primeiros resultados das pequisas do Google? A gente te ajuda!</p>
            <p className='text-text'>Com o uso das ferramentas mais modernas nós ajudamos o seu website alcançar os melhores resultados e subir no ranking de pesquisa do Google!</p>
            <p className='text-text'>Não perca tempo, fale conosco e venha aumentar seus ganhos também!</p>
            <PrimaryButton text='Entrar em contato' goTo="/success" />
          </div>
          <ScrollTrigger animations={['reveal', 'fromRight']} className='w-[800px] tablet:hidden'>
            <Image
              loading="lazy"
              src={require('@/assets/images/google.png')}
              title='raking do Google'
              alt='raking do Google'
              className="w-full"
            />
          </ScrollTrigger>
        </section>

        {/* Portfólio */}

        <Footer />
      </main>
    </div>
  )
}
