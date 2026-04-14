"use client";

import { useState } from "react";

type Product = {
  name: string;
  category: string;
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState("Все");

  const categories = ["Все", "Полиграфия", "Сувениры", "Текстиль"];

  const products: Product[] = [
    { name: "Визитки", category: "Полиграфия" },
    { name: "Флаера", category: "Полиграфия" },
    { name: "Наклейки", category: "Полиграфия" },
    { name: "Меню", category: "Полиграфия" },
    { name: "Открытки", category: "Полиграфия" },
    { name: "Блокноты", category: "Полиграфия" },

    { name: "Кружки", category: "Сувениры" },
    { name: "Магниты", category: "Сувениры" },
    { name: "Термосы", category: "Сувениры" },

    { name: "Шопперы", category: "Текстиль" },
    { name: "Бейсболки", category: "Текстиль" },
  ];

  const filtered =
    category === "Все"
      ? products
      : products.filter((p) => p.category === category);

  const pageClass = dark
    ? "min-h-screen bg-slate-950 text-white transition-colors duration-300"
    : "min-h-screen bg-white text-slate-900 transition-colors duration-300";

  const headerClass = dark
    ? "sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur"
    : "sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur";

  const mutedTextClass = dark ? "text-slate-300" : "text-slate-600";

  const cardClass = dark
    ? "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    : "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md";

  const secondaryButtonClass = dark
    ? "rounded-2xl border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-900"
    : "rounded-2xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50";

  const primaryButtonClass = dark
    ? "rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
    : "rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90";

  return (
    <main className={pageClass}>
      <header className={headerClass}>
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
            <a href="#catalog" className="hover:opacity-70">
              Каталог
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
          <div
            className={
              dark
                ? "inline-flex rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                : "inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
            }
          >
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
              className={primaryButtonClass}
            >
              Заказать в WhatsApp
            </a>

            <a href="#catalog" className={secondaryButtonClass}>
              Смотреть каталог
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-6">
        <div
          className={
            dark
              ? "rounded-3xl border border-slate-800 bg-slate-900 p-8"
              : "rounded-3xl border border-slate-200 bg-white p-8"
          }
        >
          <h2 className="text-3xl font-bold">О компании</h2>
          <p className={`mt-4 max-w-3xl ${mutedTextClass}`}>
            Basprint — полиграфическая компания, на которую можно положиться.
            Работаем с бизнесом и частными клиентами, выполняем заказы разного
            масштаба, помогаем с макетами и делаем процесс заказа максимально
            удобным.
          </p>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <h2 className="text-3xl font-bold">Каталог</h2>
          <p className={`mt-2 ${mutedTextClass}`}>
            Выберите категорию и быстро перейдите к заказу через WhatsApp.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => {
            const active = category === c;

            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={
                  active
                    ? dark
                      ? "rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900"
                      : "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                    : dark
                    ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium transition hover:bg-slate-900"
                    : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-50"
                }
                type="button"
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.name} className={cardClass}>
              <div
                className={
                  dark
                    ? "mb-4 h-36 rounded-2xl bg-slate-800"
                    : "mb-4 h-36 rounded-2xl bg-slate-100"
                }
              />
              <div
                className={
                  dark
                    ? "mb-2 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    : "mb-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                }
              >
                {item.category}
              </div>

              <h3 className="text-xl font-semibold">{item.name}</h3>

              <p className={`mt-2 text-sm ${mutedTextClass}`}>
                Удобное оформление заказа, быстрая связь и понятный процесс.
              </p>

              <a
                href={`https://wa.me/77024056954?text=${encodeURIComponent(
                  `Здравствуйте! Хочу заказать в Basprint: ${item.name}`
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
            Напишите нам в WhatsApp, и мы быстро подскажем по срокам,
            стоимости и лучшему решению под вашу задачу.
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
        <div
          className={
            dark
              ? "grid gap-6 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:grid-cols-2"
              : "grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-2"
          }
        >
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
            <a href="tel:+77024056954" className={secondaryButtonClass}>
              Позвонить
            </a>
            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className={primaryButtonClass}
            >
              Написать в WhatsApp
            </a>
            <a
              href="https://2gis.kz/astana/firm/70000001018134048?m=71.412984%2C51.11341%2F16"
              target="_blank"
              rel="noreferrer"
              className={secondaryButtonClass}
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
        <div
          className={
            dark
              ? "mx-auto max-w-6xl px-6 text-sm text-slate-400"
              : "mx-auto max-w-6xl px-6 text-sm text-slate-500"
          }
        >
          © Basprint — Полиграфия для бизнеса и частных клиентов
        </div>
      </footer>
    </main>
  );
}