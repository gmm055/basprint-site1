"use client";

import { useState } from "react";

type Review = {
  name: string;
  text: string;
};

export default function Home() {
  const [dark, setDark] = useState(false);

  const services: string[] = [
    "Кружки с печатью",
    "Флаера и лифлеты",
    "Наклейки и стикеры",
    "Шопперы и текстиль",
    "Печати и штампы",
    "Визитки премиум",
    "Коробки и упаковка",
    "Меню и каталоги",
  ];

  const advantages: string[] = [
    "Быстрые сроки",
    "Качественная печать",
    "Удобный заказ",
    "Помощь с макетом",
  ];

  const steps: string[] = [
    "Вы пишете или звоните",
    "Уточняем задачу и детали",
    "Выполняем заказ",
    "Выдаём готовую продукцию",
  ];

  const reviews: Review[] = [
    {
      name: "Жанеля",
      text: "Быстро ответили, хорошая цена, приятный продавец.",
    },
    {
      name: "Нурсулу Идигеева",
      text: "Отличная полиграфия! Нашла через 2ГИС, всё сделали оперативно и именно так, как я хотела.",
    },
    {
      name: "Aray Y",
      text: "Уже год работаем с компанией, всегда качественно и в срок. Рекомендую!",
    },
  ];

  const mainClassName = dark
    ? "min-h-screen bg-slate-950 text-white transition-colors duration-300"
    : "min-h-screen bg-white text-slate-900 transition-colors duration-300";

  const sectionCardClass = dark
    ? "rounded-3xl border border-slate-800 bg-slate-900"
    : "rounded-3xl border border-slate-200 bg-white";

  const simpleCardClass = dark
    ? "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm"
    : "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";

  const buttonPrimaryClass = dark
    ? "rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
    : "rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90";

  const buttonSecondaryClass = dark
    ? "rounded-2xl border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-900"
    : "rounded-2xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50";

  const mutedTextClass = dark ? "text-slate-300" : "text-slate-600";
  const badgeClass = dark
    ? "inline-flex rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
    : "inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600";

  return (
    <main className={mainClassName}>
      <header
        className={
          dark
            ? "sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur"
            : "sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold">Basprint</div>
            <div className={dark ? "text-xs text-slate-400" : "text-xs text-slate-500"}>
              Сила в надежности в масштабе
            </div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:opacity-70">
              О компании
            </a>
            <a href="#services" className="hover:opacity-70">
              Услуги
            </a>
            <a href="#steps" className="hover:opacity-70">
              Как мы работаем
            </a>
            <a href="#reviews" className="hover:opacity-70">
              Отзывы
            </a>
            <a href="#contacts" className="hover:opacity-70">
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={
                dark
                  ? "rounded-xl border border-slate-700 px-3 py-2 text-sm transition hover:bg-slate-900"
                  : "rounded-xl border border-slate-300 px-3 py-2 text-sm transition hover:bg-slate-50"
              }
              aria-label="Переключить тему"
              type="button"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className={
                dark
                  ? "rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:opacity-90"
                  : "rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              }
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className={badgeClass}>
            Basprint · Полиграфия для бизнеса и частных клиентов
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Печать, которая продаёт и усиливает ваш бренд
          </h1>

          <p className={`mt-5 max-w-2xl text-lg ${mutedTextClass}`}>
            Визитки, флаера, упаковка и сувенирная продукция — быстро,
            качественно и с вниманием к деталям. Работаем с компаниями и
            частными клиентами.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className={buttonPrimaryClass}
            >
              Заказать в WhatsApp
            </a>

            <a href="#services" className={buttonSecondaryClass}>
              Смотреть услуги
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          {advantages.map((item) => (
            <div key={item} className={simpleCardClass}>
              <div className="font-medium">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <div className={`${sectionCardClass} p-8`}>
          <h2 className="text-3xl font-bold">О компании</h2>
          <p className={`mt-4 max-w-3xl ${mutedTextClass}`}>
            Basprint — полиграфическая компания, на которую можно положиться.
            Работаем с частными клиентами и бизнесом, выполняем заказы разного
            масштаба и сложности, помогаем с макетами и стараемся сделать
            процесс заказа максимально удобным.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <h2 className="text-3xl font-bold">Популярные услуги</h2>
          <p className={`mt-2 ${mutedTextClass}`}>
            Самые востребованные направления Basprint.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              key={item}
              className={
                dark
                  ? "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  : "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              }
            >
              <div
                className={
                  dark
                    ? "mb-4 h-10 w-10 rounded-xl bg-slate-800"
                    : "mb-4 h-10 w-10 rounded-xl bg-slate-200"
                }
              />
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className={`mt-2 text-sm ${mutedTextClass}`}>
                Удобное оформление заказа и быстрый переход в WhatsApp.
              </p>

              <a
                href={`https://wa.me/77024056954?text=${encodeURIComponent(
                  `Здравствуйте! Хочу заказать в Basprint: ${item}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-medium hover:opacity-70"
              >
                Заказать →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="steps" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Как мы работаем</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className={simpleCardClass}>
              <div className={dark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                Шаг {index + 1}
              </div>
              <div className="mt-2 font-medium">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <h2 className="text-3xl font-bold">Отзывы клиентов</h2>
          <p className={`mt-2 ${mutedTextClass}`}>
            Реальные отзывы клиентов Basprint.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className={simpleCardClass}>
              <div className="mb-3 text-yellow-500">★★★★★</div>
              <p className={`text-sm ${mutedTextClass}`}>{review.text}</p>
              <div className="mt-4 font-medium">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div
          className={
            dark
              ? "rounded-3xl bg-white px-8 py-10 text-slate-900"
              : "rounded-3xl bg-slate-900 px-8 py-10 text-white"
          }
        >
          <h2 className="text-3xl font-bold">Готовы оформить заказ?</h2>
          <p
            className={
              dark
                ? "mt-3 max-w-2xl text-slate-700"
                : "mt-3 max-w-2xl text-slate-300"
            }
          >
            Напишите нам в WhatsApp, и мы быстро подскажем по срокам, стоимости
            и лучшему решению под вашу задачу.
          </p>

          <a
            href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
            target="_blank"
            rel="noreferrer"
            className={
              dark
                ? "mt-6 inline-block rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90"
                : "mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
            }
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-6xl px-6 py-12">
        <div className={`${sectionCardClass} grid gap-6 p-8 md:grid-cols-2`}>
          <div>
            <h2 className="text-3xl font-bold">Контакты</h2>
            <div className={`mt-4 space-y-2 ${mutedTextClass}`}>
              <p>Телефон: +7 702 405 6954</p>
              <p>Адрес: пр. Кабанбай батыра 48/1</p>
              <p>Пн–Пт: 09:00–18:30</p>
              <p>Перерыв: 13:00–14:00</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a href="tel:+77024056954" className={buttonSecondaryClass}>
              Позвонить
            </a>
            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className={buttonPrimaryClass}
            >
              Написать в WhatsApp
            </a>
            <a
              href="https://2gis.kz/astana/firm/70000001018134048?m=71.412984%2C51.11341%2F16"
              target="_blank"
              rel="noreferrer"
              className={buttonSecondaryClass}
            >
              Открыть в 2ГИС
            </a>
          </div>
        </div>
      </section>

      <footer
        className={
          dark
            ? "border-t border-slate-800 py-8"
            : "border-t border-slate-200 py-8"
        }
      >
        <div className={dark ? "mx-auto max-w-6xl px-6 text-sm text-slate-400" : "mx-auto max-w-6xl px-6 text-sm text-slate-500"}>
          © Basprint — Полиграфия для бизнеса и частных клиентов
        </div>
      </footer>
    </main>
  );
}