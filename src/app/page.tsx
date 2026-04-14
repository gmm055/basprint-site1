"use client";

import { useEffect, useState } from "react";

type Product = {
  name: string;
  category: string;
  description: string;
  tag?: string;
};

type Review = {
  name: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

const products: Product[] = [
  {
    name: "Кружки",
    category: "Сувениры",
    description: "Печать на кружках для подарков, брендинга и корпоративных задач.",
    tag: "Популярно",
  },
  {
    name: "Бутылки",
    category: "Сувениры",
    description: "Стильные бутылки с нанесением логотипа или индивидуального дизайна.",
  },
  {
    name: "Термосы",
    category: "Сувениры",
    description: "Практичные термосы с персонализированной печатью.",
  },
  {
    name: "Лифлеты",
    category: "Полиграфия",
    description: "Информативные материалы для бизнеса, рекламы и мероприятий.",
  },
  {
    name: "Флаера",
    category: "Полиграфия",
    description: "Яркие флаера для продвижения, акций и офлайн-рекламы.",
    tag: "Частый заказ",
  },
  {
    name: "Конверты с нанесением",
    category: "Полиграфия",
    description: "Фирменные конверты с печатью для деловой и корпоративной переписки.",
  },
  {
    name: "Открытки",
    category: "Полиграфия",
    description: "Поздравительные, рекламные и брендированные открытки.",
  },
  {
    name: "Меню",
    category: "Полиграфия",
    description: "Меню стандартных и нестандартных размеров для кафе и ресторанов.",
  },
  {
    name: "Книги",
    category: "Полиграфия",
    description: "Печать книг и многостраничной продукции с аккуратной сборкой.",
  },
  {
    name: "Наклейки",
    category: "Полиграфия",
    description: "Наклейки и стикеры разных форматов для упаковки и рекламы.",
    tag: "Для бизнеса",
  },
  {
    name: "Бейсболки",
    category: "Текстиль",
    description: "Нанесение логотипов и надписей на бейсболки.",
  },
  {
    name: "Шопперы",
    category: "Текстиль",
    description: "Печать на шопперах для брендов, мероприятий и мерча.",
    tag: "Тренд",
  },
  {
    name: "Нанесение на футболки",
    category: "Текстиль",
    description: "Печать и брендирование футболок для бизнеса и мероприятий.",
    tag: "Популярно",
  },
  {
    name: "Твёрдый переплёт",
    category: "Полиграфия",
    description: "Изделия в твёрдом переплёте для презентабельной подачи.",
  },
  {
    name: "Коробки",
    category: "Полиграфия",
    description: "Коробки с индивидуальным оформлением и фирменной печатью.",
    tag: "Для бренда",
  },
  {
    name: "Блокноты",
    category: "Полиграфия",
    description: "Брендированные блокноты для офиса, подарков и продаж.",
  },
  {
    name: "Папки",
    category: "Полиграфия",
    description: "Фирменные папки для деловой документации и презентаций.",
  },
  {
    name: "Магниты",
    category: "Сувениры",
    description: "Магниты с логотипом, изображением или рекламной подачей.",
  },
  {
    name: "Календари",
    category: "Полиграфия",
    description: "Настольные и настенные календари под фирменный стиль.",
  },
  {
    name: "Штампы",
    category: "Бизнес",
    description: "Штампы для бизнеса, офиса и документов с удобным заказом.",
  },
  {
    name: "Печати",
    category: "Бизнес",
    description: "Изготовление печатей с быстрыми сроками и понятным процессом.",
    tag: "Срочно",
  },
];

const reviews: Review[] = [
  {
    name: "Жанеля",
    text: "Быстро ответили, хорошая цена, приятный продавец.",
  },
  {
    name: "Нурсулу Идигеева",
    text: "Отличная полиграфия! Нашла через 2ГИС, оперативно всё сделали и именно так, как я хотела.",
  },
  {
    name: "Aray Y",
    text: "Уже около года работаем с компанией. Всегда качественно, в срок и с вниманием к деталям.",
  },
];

const faqs: Faq[] = [
  {
    question: "Сколько занимает печать?",
    answer:
      "Срок зависит от тиража и типа продукции. По большинству заказов быстро подскажем сроки сразу в WhatsApp.",
  },
  {
    question: "Можно ли срочно?",
    answer:
      "Да, по многим позициям можно сделать срочный заказ. Лучше сразу написать, что заказ срочный.",
  },
  {
    question: "Делаете ли вы дизайн макетов?",
    answer:
      "Да. Если у вас нет готового макета, можем помочь с дизайном. Базовый дизайн начинается от 5000 тг.",
  },
  {
    question: "Работаете ли вы с компаниями?",
    answer:
      "Да, работаем и с компаниями, и с частными клиентами. Можно обсудить документы, счета и корпоративные задачи.",
  },
];

const categories = ["Все", "Полиграфия", "Сувениры", "Текстиль", "Бизнес"];

const advantages = [
  "Быстрые сроки",
  "Качественная печать",
  "Удобный заказ",
  "Помощь с макетом",
];

const steps = [
  "Вы пишете или звоните",
  "Уточняем задачу и детали",
  "Выполняем заказ",
  "Выдаём готовую продукцию",
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 60);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState("Все");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const filteredProducts =
    category === "Все"
      ? products
      : products.filter((product) => product.category === category);

  const pageClass = dark
    ? "min-h-screen bg-slate-950 text-white transition-colors duration-300"
    : "min-h-screen bg-white text-slate-900 transition-colors duration-300";

  const headerClass = dark
    ? "sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur"
    : "sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur";

  const mutedTextClass = dark ? "text-slate-300" : "text-slate-600";

  const sectionCardClass = dark
    ? "rounded-[28px] border border-slate-800 bg-slate-900"
    : "rounded-[28px] border border-slate-200 bg-white";

  const smallCardClass = dark
    ? "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm"
    : "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";

  const productCardClass = dark
    ? "group rounded-[24px] border border-slate-800 bg-slate-900 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
    : "group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl";

  const primaryButtonClass = dark
    ? "rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02] hover:opacity-90"
    : "rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:scale-[1.02] hover:opacity-90";

  const secondaryButtonClass = dark
    ? "rounded-2xl border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-900"
    : "rounded-2xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50";

  return (
    <main className={pageClass}>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 font-bold tracking-wide text-white">
              BP
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Basprint</div>
              <div className={dark ? "text-xs text-slate-400" : "text-xs text-slate-500"}>
                Полиграфия и брендирование
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:opacity-70">
              О компании
            </a>
            <a href="#catalog" className="transition hover:opacity-70">
              Каталог
            </a>
            <a href="#reviews" className="transition hover:opacity-70">
              Отзывы
            </a>
            <a href="#faq" className="transition hover:opacity-70">
              FAQ
            </a>
            <a href="#contacts" className="transition hover:opacity-70">
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <div
                className={
                  dark
                    ? "inline-flex rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                    : "inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600"
                }
              >
                Basprint · Полиграфия, сувениры, текстиль и бизнес-продукция
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                Печать, которая делает ваш бренд заметнее
              </h1>

              <p className={`mt-5 max-w-2xl text-lg leading-8 ${mutedTextClass}`}>
                От флаеров, коробок и календарей до кружек, футболок, шопперов,
                штампов и печатей — Basprint помогает быстро оформить заказ и
                получить качественный результат.
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
          </Reveal>

          <Reveal>
            <div className={sectionCardClass + " p-6 lg:p-8"}>
              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((item) => (
                  <div key={item} className={smallCardClass}>
                    <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700" />
                    <div className="font-medium">{item}</div>
                    <div className={`mt-2 text-sm ${mutedTextClass}`}>
                      Сильная сторона Basprint, которую чувствует клиент.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div className={sectionCardClass + " p-8"}>
            <h2 className="text-3xl font-bold">О компании</h2>
            <p className={`mt-4 max-w-3xl leading-7 ${mutedTextClass}`}>
              Basprint — полиграфическая компания, на которую можно положиться.
              Работаем с бизнесом и частными клиентами, выполняем заказы разного
              масштаба и делаем путь клиента максимально удобным: от первого
              сообщения до готового результата.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold">Каталог товаров и услуг</h2>
            <p className={`mt-2 ${mutedTextClass}`}>
              Все основные направления Basprint — в одном месте.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
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
                  {item}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.name} className={`delay-[${index * 20}ms]`}>
              <div className={productCardClass}>
                <div
                  className={
                    dark
                      ? "mb-4 h-40 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900"
                      : "mb-4 h-40 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100"
                  }
                />

                <div className="mb-3 flex items-center justify-between gap-2">
                  <div
                    className={
                      dark
                        ? "inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                        : "inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    }
                  >
                    {product.category}
                  </div>

                  {product.tag ? (
                    <div className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white dark:bg-white dark:text-slate-900">
                      {product.tag}
                    </div>
                  ) : null}
                </div>

                <h3 className="text-xl font-semibold">{product.name}</h3>

                <p className={`mt-2 text-sm leading-6 ${mutedTextClass}`}>
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/77024056954?text=${encodeURIComponent(
                      `Здравствуйте! Хочу заказать в Basprint: ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={primaryButtonClass}
                  >
                    Заказать
                  </a>

                  <a
                    href={`https://wa.me/77024056954?text=${encodeURIComponent(
                      `Здравствуйте! Хочу уточнить детали заказа в Basprint: ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryButtonClass}
                  >
                    Уточнить
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <h2 className="text-3xl font-bold">Как мы работаем</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step}>
              <div className={smallCardClass}>
                <div className={dark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                  Шаг {index + 1}
                </div>
                <div className="mt-2 font-medium">{step}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold">Отзывы клиентов</h2>
            <p className={`mt-2 ${mutedTextClass}`}>
              Реальные отзывы клиентов Basprint.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <Reveal key={review.name}>
              <div className={smallCardClass}>
                <div className="mb-3 text-yellow-500">★★★★★</div>
                <p className={`text-sm leading-6 ${mutedTextClass}`}>
                  {review.text}
                </p>
                <div className="mt-4 font-medium">{review.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold">Частые вопросы</h2>
            <p className={`mt-2 ${mutedTextClass}`}>
              Коротко о самом важном перед заказом.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question}>
              <div className={smallCardClass}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl">{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index ? (
                  <p className={`mt-4 text-sm leading-6 ${mutedTextClass}`}>
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div className={sectionCardClass + " grid gap-6 p-8 md:grid-cols-2"}>
            <div>
              <h2 className="text-3xl font-bold">Контакты</h2>
              <div className={`mt-4 space-y-2 ${mutedTextClass}`}>
                <p>Телефон: +7 702 405 6954</p>
                <p>Адрес: пр. Кабанбай батыра 48/1</p>
                <p>Пн–Пт: 09:00–18:30</p>
                <p>Перерыв: 13:00–14:00</p>
                <p>Ориентир: около поликлиники Шипагер</p>
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
        </Reveal>
      </section>

      <a
        href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105 hover:opacity-90 dark:bg-white dark:text-slate-900"
      >
        WhatsApp
      </a>

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
              ? "mx-auto max-w-7xl px-6 text-sm text-slate-400"
              : "mx-auto max-w-7xl px-6 text-sm text-slate-500"
          }
        >
          © Basprint — Полиграфия для бизнеса и частных клиентов
        </div>
      </footer>
    </main>
  );
}