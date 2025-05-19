'use client';
import { Heading } from '@/components/atoms/heading';
import { Icon } from '@/components/atoms/icon';
import { PromptCard } from '@/components/molecules/prompt-card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const circleImages = {
    topLeft: '/images/image-1.png',
    topRight: '/images/image-2.png',
    bottomLeft: '/images/image-3.png',
    bottomRight: '/images/image-4.png'
  };
  const commonCircleClass = 'absolute hidden md:block pointer-events-none';
  const circleSize = 100;

  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 selection:bg-zinc-500 selection:text-white">
        <Image
          src={circleImages.topLeft}
          alt="Decorative circle top left"
          width={circleSize}
          height={circleSize}
          className={`${commonCircleClass} top-4 left-4 opacity-50 sm:top-10 sm:left-10 lg:top-20 lg:left-[350px]`}
        />
        <Image
          src={circleImages.topRight}
          alt="Decorative circle top right"
          width={circleSize}
          height={circleSize}
          className={`${commonCircleClass} top-4 right-4 opacity-50 sm:top-10 sm:right-10 lg:top-20 lg:right-[350px]`}
        />
        <Image
          src={circleImages.bottomLeft}
          alt="Decorative circle bottom left"
          width={circleSize}
          height={circleSize}
          className={`${commonCircleClass} bottom-4 left-4 opacity-50 sm:bottom-10 sm:left-10 lg:bottom-20 lg:left-[150px]`}
        />
        <Image
          src={circleImages.bottomRight}
          alt="Decorative circle bottom right"
          width={circleSize}
          height={circleSize}
          className={`${commonCircleClass} right-4 bottom-4 opacity-50 sm:right-10 sm:bottom-10 lg:right-[150px] lg:bottom-20`}
        />

        <main className="z-10 flex max-w-3xl flex-col items-center text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md"
            tabIndex={0}
          >
            <span className="font-bold">CREATE FOR FAST</span>
          </div>

          <h1 className="mb-5 font-sans text-4xl font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl md:mb-6 md:text-6xl">
            Transforma tus interacciones con IA con{' '}
            <span className="mask-text">prompts eficientes</span>
          </h1>

          <p className="mb-8 max-w-xl font-sans text-base leading-relaxed text-zinc-600 sm:text-lg md:mb-10 md:text-xl">
            Descubre una colección de prompts diseñados para potenciar la
            creatividad y eficiencia en la interacción con inteligencias
            artificiales.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/#images">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </main>
      </section>

      <section
        className="container mx-auto flex flex-col items-center justify-center gap-4"
        id="images"
      >
        <div className="mb-10 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Icon icon="/images/album-stamp.png" variant="lg" />
            <Heading variant="h2" type="title-lg">
              Imagenes
            </Heading>
          </div>

          <Heading
            variant="p"
            type="paragraph"
            className="w-[85%] text-center md:w-[50%] md:text-left"
          >
            Descubre una colección de prompts diseñados para potenciar la
            creatividad y eficiencia en la interacción con inteligencias
            artificiales.
          </Heading>
        </div>

        <div className="grid grid-cols-1 justify-start gap-4 px-6 md:grid-cols-3 md:px-0">
          <PromptCard
            image="https://placehold.co/600x400"
            title="Category 1"
            description="This is a prompt"
          />
          <PromptCard
            image="https://placehold.co/600x400"
            title="Category 1"
            description="This is a prompt"
          />
          <PromptCard
            image="https://placehold.co/600x400"
            title="Category 1"
            description="This is a prompt"
          />
          <PromptCard
            image="https://placehold.co/600x400"
            title="Category 1"
            description="This is a prompt"
          />
          <PromptCard
            image="https://placehold.co/600x400"
            title="Category 1"
            description="This is a prompt"
          />
        </div>
      </section>

      <section className="container mx-auto mt-[9rem] flex flex-col items-center justify-center gap-4">
        <div className="mb-10 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Icon icon="/images/pen-and-table.png" variant="lg" />
            <Heading variant="h2" type="title-lg">
              Textos
            </Heading>
          </div>

          <Heading
            variant="p"
            type="paragraph"
            className="w-[85%] text-center md:w-[50%] md:text-left"
          >
            Descubre una colección de prompts diseñados para potenciar la
            creatividad y eficiencia en la interacción con inteligencias
            artificiales.
          </Heading>
        </div>

        <div className="grid grid-cols-1 justify-start gap-4 px-6 md:grid-cols-3 md:px-0">
          <PromptCard title="Category 1" description="This is a prompt" />
          <PromptCard title="Category 1" description="This is a prompt" />
          <PromptCard title="Category 1" description="This is a prompt" />
          <PromptCard title="Category 1" description="This is a prompt" />
          <PromptCard title="Category 1" description="This is a prompt" />
        </div>
      </section>
    </main>
  );
}
