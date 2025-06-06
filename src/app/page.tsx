'use client';

import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { Discord, Telegram } from '@/components/atoms/icons';

export default function Home() {
  const [email, setEmail] = useState('');

  const circleImages = {
    topLeft: '/images/image-1.png',
    topRight: '/images/image-2.png',
    bottomLeft: '/images/image-3.png',
    bottomRight: '/images/image-4.png'
  };
  const commonCircleClass = 'absolute hidden md:block pointer-events-none';
  const circleSize = 100;

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail((e.target as HTMLFormElement).email.value);
  };

  return (
    <main>
      <section className="relative flex min-h-[calc(100dvh-60px)] items-center justify-center overflow-hidden p-4 selection:bg-zinc-500 selection:text-white">
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
            className="mb-4 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md"
            tabIndex={0}
          >
            <span className="font-bold">Prueba PromptBot ahora</span>
          </div>
          <h1 className="mb-5 font-sans text-4xl font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl md:mb-6 md:text-6xl">
            Transforma tus interacciones con IA con{' '}
            <span className="mask-text">prompts eficientes</span>
          </h1>

          <p className="mb-8 max-w-xl font-sans text-base leading-relaxed text-zinc-600 sm:text-lg md:mb-10 md:text-xl">
            Descubre una nueva manera de crear prompts de forma facil, efectiva
            y sencilla.
          </p>

          {!email && (
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <form
                className="flex gap-2 rounded-full border border-zinc-900"
                onSubmit={handleSendEmail}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Unete a la waitlist"
                  className="focus:shadow-outline focus-visible:shadow-outline w-full border-none px-6 py-3 text-[14px] text-zinc-900 placeholder:text-zinc-800 focus-within:outline-none focus:border-none focus:ring-0 focus-visible:border-none focus-visible:ring-0"
                />
                <Button variant="primary" type="submit">
                  Unirme
                </Button>
              </form>
            </div>
          )}

          {email && (
            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="font-bold text-zinc-900">Pruebalo ahora</p>
              <div className="flex flex-col gap-4 md:flex-row">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link discord-link"
                >
                  <button>
                    Probar en Discord
                    <Discord />
                  </button>
                </a>

                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link telegram-link"
                >
                  <button>
                    Probar en Telegram
                    <Telegram />
                  </button>
                </a>
              </div>
            </div>
          )}
        </main>
      </section>
    </main>
  );
}
