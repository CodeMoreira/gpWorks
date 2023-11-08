'use client'

import Divder from '@/components/Divider'
import SecoundaryButton from '@/components/SecoundaryButton'
import Header from '@/components/Header'
import RenderSpline from '@/components/RenderSpline'
import Image from 'next/image'
import { AiOutlineArrowDown } from 'react-icons/ai';
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import { useLoading } from '@/hookes/useLoading'
import Logo from '@/assets/svgs/logo'
import Footer from '@/components/Footer'

export default function Home() {
  const { isLoading } = useLoading()

  return (
    <div className='w-screen h-screen flex justify-center relative overflow-x-hidden'>
      {isLoading &&
        <div className='w-full h-full fixed flex flex-col items-center justify-center z-[999] bg-primary'>
            <div className='w-[80px] h-[80px] relative flex items-center justify-center animate-pulse'>
              <Logo />
              <div className="loader absolute"/>
            </div>
            <h3 className="text-secoundary animate-pulse">Carregando...</h3>
        </div>}
      <Header />
      <main className='w-[1440px] desktop:w-full desktop:px-[24px] h-fit flex flex-col items-center gap-[56px]'>
        <section id="inicio" className='w-full h-[662px] flex tablet:flex-col-reverse items-center justify-between bg-[url("../assets/images/bolinhas.png")] bg-no-repeat bg-[length:1339px_519px] bg-center'>
          <div className='flex-[1] h-full flex flex-col items-center justify-center gap-[20px]'>
            <h1 className='text-secoundary'>CRIE, INOVE, IMPACTE COM NOSSO DESIGN DIGITAL.</h1>
            <p className='text-tertiary'>Da concepção à realidade digital: construímos sites que refletem sua visão única.</p>
            <div className='w-full flex gap-[16px] mt-[16px]'>
              <SecoundaryButton text='Saiba mais' goTo='#Serviços' icon={<AiOutlineArrowDown />} />
            </div>
          </div>
          <div className='flex-[1] h-[600px] flex flex-col items-center z-10 desktop2:w-[650px] desktop2:h-[420px] tablet:hidden'>
            <RenderSpline
              scene='https://prod.spline.design/jJ6Vzin4lKsBGE36/scene.splinecode'
              render={
                <Image
                  width={400}
                  height={10}
                  src={require('@/assets/images/sombra.png')}
                  alt='sombra do notebook.'
                  className='mx-[auto]'
                />
              }
            />
          </div>
        </section>

        {/* Criação */}
        <section className='flex gap-[12px] items-center'>
          <Image
            width={430}
            height={331}
            src={require('@/assets/images/devices.png')}
            alt='dispositivos.'
            className='w-[430px] h-auto desktop:h-[200px] tablet:hidden'
          />
          <div className='flex flex-col gap-[24px]'>
            <h2 className='text-secoundary'>Criação</h2>
            <p className='text-tertiary'>
              Já imaginou sua aplicação sendo desenvolvida com as melhores técnologias do mercado e estando disponivel em todas as plataformas? Com a gente você pode realizar isso e finalmente laver seu negócio para outro nível.
            </p>
            <p className='text-tertiary'>
              Aqui a satisfação e resultado do cliente é o nosso foco, por conta disso nós insistimos que nossos clientes estejam presentes em todas as fases do projeto para assim garantir a melhor qualidade.
            </p>
          </div>
        </section>
        {/* Criação */}

        <Divder />

        {/* Nossos serviços */}
        <section id='Serviços' className='w-full flex gap-[12px] justify-center'>
          <div className='w-full flex flex-col gap-[24px] desktop:items-center'>
            <h2 className='text-secoundary'>Nossos serviços</h2>
            <p className='text-tertiary'>
              Bem-vindo ao mundo da criação de websites personalizados! Apresentamos nossas opções de planos:
            </p>
            <div className="flex desktop:flex-wrap desktop:justify-center gap-[16px] items-center">
              <Card
                height='220px'
                title='Básico'
                description='Para aqueles que buscam simplicidade.'
                textColor='secoundary'
              />
              <Card
                height='288px'
                title='Pro'
                description='Perfeito para você que quer começar seu negócio do jeito certo.'
                textColor='primary'
                bgColor='secoundary'
                badge={{
                  text: 'Mais Popular',
                  textColor: 'secoundary',
                  bgColor: 'primary'
                }}
              />
              <Card
                height='220px'
                title='Premuium'
                description='Leve sua empresa para o próximo nível.'
                textColor='secoundary'
              />
            </div>
            <p className='text-tertiary'>
              Nossa equipe está pronta para transformar sua visão em realidade. Vamos construir algo incrível juntos!
            </p>
          </div>
          <Image
            width={292}
            height={396}
            src={require('@/assets/images/celular 1.png')}
            alt='celular saindo bolinhas laranjas.'
            className='desktop:hidden'
          />
        </section>
        {/* Nossos serviços */}

        <Divder />

        {/* Contato Enterprise */}
        <section id='Serviços' className='w-full px-[40px] flex gap-[12px] justify-center items-end relative tablet:px-[8px]'>
          <Image
            width={292}
            height={396}
            src={require('@/assets/images/celular 2.png')}
            alt='celular com image saindo bolinhas coloridas.'
            className='z-[2] tablet:hidden'
          />
          <Card
            width='100%'
            title='Contato Enterprise'
            description='Caso você tenha um projeto maior em mente entre em contato conosco e resolvemos isso para você! Aqui você terá os melhores profissionais organizando, projetando e desenvolvendo seu projeto da maneira mais moderna e otmizada possivel.'
            textColor='secoundary'
            bgColor='primary'
            customButton={<PrimaryButton text='Entrar em contato' onClick={() => {}} />}
            className='mb-[48px] z-[2]'
          />
          <div className='absolute w-full h-[170px] rounded-xl bg-secoundary left-0 z-[1] mb-[30px]'/>
        </section>
        {/* Contato Enterprise */}

        <Divder />

        {/* Sobre */}
        <section className='flex gap-[12px] justify-center'>
          <div className='flex flex-col gap-[24px]'>
            <h2 className='text-secoundary'>Um pouco sobre nós</h2>
            <p className='text-tertiary'>
              Nós unimos design criativo e funcionalidade digital para criar soluções de webdesign únicas. Com nossa experiência, combinamos estética inovadora com usabilidade eficaz, sempre comprometidos com a excelência.
            </p>
            <p className='text-tertiary'>
              Trabalhamos em colaboração com nossos clientes, transformando suas visões em experiências digitais envolventes que contam histórias e refletem identidades de marca. 
            </p>
            <p className='text-tertiary'>
              Seja uma startup, pequena empresa ou marca estabelecida, estamos aqui para superar expectativas e definir um novo padrão de presença online.
            </p>
          </div>
          <Image
            width={430}
            height={331}
            src={require('@/assets/images/livro.png')}
            alt='livro, lapis, xicará de café, fita, bloco de notas e alguns retalhos de papeis.'
            className='desktop2:hidden'
          />
        </section>
        {/* Sobre */}

        <Footer />
      </main>
    </div>
  )
}
