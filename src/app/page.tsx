"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Coffee,
  FileImage,
  FileText,
  Files,
  FolderOpen,
  Gift,
  GraduationCap,
  ImageIcon,
  Mail,
  MapPinned,
  Menu,
  NotebookPen,
  Package,
  Phone,
  Printer,
  ScrollText,
  Send,
  Shirt,
  ShoppingBag,
  Sparkles,
  Stamp,
  Sticker,
  TimerReset,
  X,
} from "lucide-react";

type Product = {
  name: string;
  category: string;
  description: string;
  tag?: string;
  icon: React.ReactNode;
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
    icon: <Coffee size={26} />,
  },
  {
    name: "Бутылки",
    category: "Сувениры",
    description: "Стильные бутылки с нанесением логотипа или индивидуального дизайна.",
    icon: <Gift size={26} />,
  },
  {
    name: "Термосы",
    category: "Сувениры",
    description: "Практичные термосы с персонализированной печатью.",
    icon: <Sparkles size={26} />,
  },
  {
    name: "Лифлеты",
    category: "Полиграфия",
    description: "Информативные материалы для бизнеса, рекламы и мероприятий.",
    icon: <FileText size={26} />,
  },
  {
    name: "Флаера",
    category: "Полиграфия",
    description: "Яркие флаера для продвижения, акций и офлайн-рекламы.",
    tag: "Частый заказ",
    icon: <ScrollText size={26} />,
  },
  {
    name: "Конверты с нанесением",
    category: "Полиграфия",
    description: "Фирменные конверты с печатью для деловой и корпоративной переписки.",
    icon: <Mail size={26} />,
  },
  {
    name: "Открытки",
    category: "Полиграфия",
    description: "Поздравительные, рекламные и брендированные открытки.",
    icon: <FileImage size={26} />,
  },
  {
    name: "Меню",
    category: "Полиграфия",
    description: "Меню стандартных и нестандартных размеров для кафе и ресторанов.",
    icon: <BookOpen size={26} />,
  },
  {
    name: "Книги",
    category: "Полиграфия",
    description: "Печать книг и многостраничной продукции с аккуратной сборкой.",
    icon: <GraduationCap size={26} />,
  },
  {
    name: "Наклейки",
    category: "Полиграфия",
    description: "Наклейки и стикеры разных форматов для упаковки и рекламы.",
    tag: "Для бизнеса",
    icon: <Sticker size={26} />,
  },
  {
    name: "Бейсболки",
    category: "Текстиль",
    description: "Нанесение логотипов и надписей на бейсболки.",
    icon: <Sparkles size={26} />,
  },
  {
    name: "Шопперы",
    category: "Текстиль",
    description: "Печать на шопперах для брендов, мероприятий и мерча.",
    tag: "Тренд",
    icon: <ShoppingBag size={26} />,
  },
  {
    name: "Нанесение на футболки",
    category: "Текстиль",
    description: "Печать и брендирование футболок для бизнеса и мероприятий.",
    tag: "Популярно",
    icon: <Shirt size={26} />,
  },
  {
    name: "Твёрдый переплёт",
    category: "Полиграфия",
    description: "Изделия в твёрдом переплёте для презентабельной подачи.",
    icon: <Files size={26} />,
  },
  {
    name: "Коробки",
    category: "Полиграфия",
    description: "Коробки с индивидуальным оформлением и фирменной печатью.",
    tag: "Для бренда",
    icon: <Package size={26} />,
  },
  {
    name: "Блокноты",
    category: "Полиграфия",
    description: "Брендированные блокноты для офиса, подарков и продаж.",
    icon: <NotebookPen size={26} />,
  },
  {
    name: "Папки",
    category: "Полиграфия",
    description: "Фирменные папки для деловой документации и презентаций.",
    icon: <FolderOpen size={26} />,
  },
  {
    name: "Магниты",
    category: "Сувениры",
    description: "Магниты с логотипом, изображением или рекламной подачей.",
    icon: <ImageIcon size={26} />,
  },
  {
    name: "Календари",
    category: "Полиграфия",
    description: "Настольные и настенные календари под фирменный стиль.",
    icon: <CalendarDays size={26} />,
  },
  {
    name: "Штампы",
    category: "Бизнес",
    description: "Штампы для бизнеса, офиса и документов с удобным заказом.",
    icon: <Stamp size={26} />,
  },
  {
    name: "Печати",
    category: "Бизнес",
    description: "Изготовление печатей с быстрыми сроками и понятным процессом.",
    tag: "Срочно",
    icon: <Printer size={26} />,
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
  {
    title: "Быстрые сроки",
    text: "Оперативно подскажем сроки и не будем тянуть с ответом.",
    icon: <TimerReset size={24} />,
    gradient: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Качественная печать",
    text: "Аккуратный результат и внимание к деталям в каждом заказе.",
    icon: <Sparkles size={24} />,
    gradient: "from-fuchsia-400 to-fuchsia-600",
  },
  {
    title: "Удобный заказ",
    text: "Клиенту легко: быстрое общение и понятный путь к результату.",
    icon: <Send size={24} />,
    gradient: "from-yellow-300 to-yellow-500",
  },
  {
    title: "Помощь с макетом",
    text: "Поможем подготовить макет, если его ещё нет.",
    icon: <NotebookPen size={24} />,
    gradient: "from-slate-500 to-slate-700",
  },
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

function ThemeLogo({ dark }: { dark: boolean }) {
  return (
    <div className="relative h-14 w-[170px] sm:h-16 sm:w-[190px]">
      <img
        src="/logo-basprint-light.svg"
        alt="Basprint"
        className={`absolute inset-0 h-full w-full object-contain transition-all duration-300 ${
          dark ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />
      <img
        src="/logo-basprint-dark.svg"
        alt="Basprint"
        className={`absolute inset-0 h-full w-full object-contain transition-all duration-300 ${
          dark ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      />
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [category, setCategory] = useState("Все");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");

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

  const handleQuickOrder = () => {
    const text = `Здравствуйте! Хочу оформить заказ в Basprint:

Имя: ${name || "-"}
Телефон: ${phone || "-"}
Что нужно: ${request || "-"}`;

    window.open(
      `https://wa.me/77024056954?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const pageClass = dark
    ? "min-h-screen bg-[#06070A] text-white transition-colors duration-300"
    : "min-h-screen bg-[#f7f8fb] text-slate-900 transition-colors duration-300";

  const headerClass = dark
    ? "sticky top-0 z-50 border-b border-white/10 bg-[#06070A]/80 backdrop-blur-xl"
    : "sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl";

  const mutedTextClass = dark ? "text-slate-300" : "text-slate-600";

  const sectionCardClass = dark
    ? "rounded-[28px] border border-white/10 bg-white/[0.04]"
    : "rounded-[28px] border border-slate-200 bg-white";

  const softCardClass = dark
    ? "rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
    : "rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]";

  const productCardClass = dark
    ? "group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06]"
    : "group rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]";

  const primaryButtonClass = dark
    ? "w-full sm:w-auto rounded-2xl bg-white px-6 py-4 font-medium text-slate-900 transition hover:scale-[1.02] hover:opacity-90 active:scale-95"
    : "w-full sm:w-auto rounded-2xl bg-slate-900 px-6 py-4 font-medium text-white transition hover:scale-[1.02] hover:opacity-90 active:scale-95";

  const secondaryButtonClass = dark
    ? "w-full sm:w-auto rounded-2xl border border-white/15 px-6 py-4 font-medium transition hover:bg-white/5 active:scale-95"
    : "w-full sm:w-auto rounded-2xl border border-slate-300 px-6 py-4 font-medium transition hover:bg-slate-50 active:scale-95";

  const inputClass = dark
    ? "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-white/20"
    : "w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500";

  return (
    <main id="top" className={pageClass}>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center transition hover:opacity-90">
            <div className="origin-left transition-transform duration-300 hover:scale-[1.02]">
              <ThemeLogo dark={dark} />
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm md:flex">
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

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={
                dark
                  ? "rounded-xl border border-white/15 px-3 py-2 text-sm transition hover:bg-white/5"
                  : "rounded-xl border border-slate-300 px-3 py-2 text-sm transition hover:bg-slate-50"
              }
              type="button"
              aria-label="Переключить тему"
            >
              {dark ? "☀" : "☾"}
            </button>

            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className={
                dark
                  ? "hidden rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:opacity-90 sm:inline-flex"
                  : "hidden rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:inline-flex"
              }
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={
                dark
                  ? "inline-flex rounded-xl border border-white/15 px-3 py-2 text-sm md:hidden"
                  : "inline-flex rounded-xl border border-slate-300 px-3 py-2 text-sm md:hidden"
              }
              aria-label="Открыть меню"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 border-t" : "max-h-0"
          } ${dark ? "border-white/10" : "border-slate-200"}`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              О компании
            </a>
            <a href="#catalog" onClick={() => setMenuOpen(false)}>
              Каталог
            </a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Отзывы
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>
              Контакты
            </a>
            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className={primaryButtonClass}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal>
            <div>
              <div
                className={
                  dark
                    ? "inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
                    : "inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600"
                }
              >
                Basprint · Полиграфия, сувениры, текстиль и бизнес-продукция
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
                Печать, которая делает ваш бренд заметнее
              </h1>

              <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${mutedTextClass}`}>
                От флаеров, коробок и календарей до кружек, футболок, шопперов,
                штампов и печатей — Basprint помогает быстро оформить заказ и
                получить качественный результат без лишних сложностей.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {["Быстро", "Качественно", "Удобно", "Для бизнеса и частных клиентов"].map(
                  (item) => (
                    <span
                      key={item}
                      className={
                        dark
                          ? "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-300"
                          : "rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600"
                      }
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className={sectionCardClass + " p-5 sm:p-6 lg:p-8"}>
              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((item) => (
                  <div key={item.title} className={softCardClass}>
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-br ${item.gradient}`}
                    >
                      {item.icon}
                    </div>
                    <div className="font-medium">{item.title}</div>
                    <div className={`mt-2 text-sm leading-6 ${mutedTextClass}`}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className={sectionCardClass + " p-6 sm:p-8 lg:p-10"}>
            <h2 className="text-3xl font-semibold tracking-tight">О компании</h2>
            <p className={`mt-4 max-w-3xl leading-7 ${mutedTextClass}`}>
              Basprint — полиграфическая компания, на которую можно положиться.
              Работаем с бизнесом и частными клиентами, выполняем заказы разного
              масштаба и делаем путь клиента максимально удобным: от первого
              сообщения до готового результата.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Каталог товаров и услуг</h2>
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
                      ? "rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5"
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
          {filteredProducts.map((product) => (
            <Reveal key={product.name}>
              <div className={productCardClass}>
                <div
                  className={
                    dark
                      ? "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 text-cyan-300 transition group-hover:scale-110 group-hover:text-white"
                      : "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-purple-100 text-slate-700 transition group-hover:scale-110"
                  }
                >
                  {product.icon}
                </div>

                <div className="mb-3 flex items-center justify-between gap-2">
                  <div
                    className={
                      dark
                        ? "inline-flex rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
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

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight">Как мы работаем</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step}>
              <div className={softCardClass}>
                <div className={dark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                  Шаг {index + 1}
                </div>
                <div className="mt-2 font-medium">{step}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className={sectionCardClass + " grid gap-6 p-6 sm:p-8 lg:grid-cols-2"}>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Быстрый заказ</h2>
              <p className={`mt-3 max-w-xl leading-7 ${mutedTextClass}`}>
                Оставьте короткую заявку, и готовый текст сразу откроется в WhatsApp.
                Это самый быстрый способ получить расчёт и сроки.
              </p>
            </div>

            <div className="grid gap-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className={inputClass}
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон"
                className={inputClass}
              />
              <textarea
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="Что нужно напечатать или изготовить?"
                rows={4}
                className={inputClass + " resize-none"}
              />
              <button onClick={handleQuickOrder} className={primaryButtonClass} type="button">
                Отправить в WhatsApp
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Отзывы клиентов</h2>
            <p className={`mt-2 ${mutedTextClass}`}>
              Реальные отзывы клиентов Basprint.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <Reveal key={review.name}>
              <div className={softCardClass}>
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

      <section id="faq" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Частые вопросы</h2>
            <p className={`mt-2 ${mutedTextClass}`}>
              Коротко о самом важном перед заказом.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question}>
              <div className={softCardClass}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`text-sm leading-6 ${mutedTextClass}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className={sectionCardClass + " grid gap-6 p-6 sm:p-8 md:grid-cols-2"}>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Контакты</h2>
              <div className={`mt-4 space-y-3 ${mutedTextClass}`}>
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+7 702 405 6954</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinned size={18} />
                  <span>пр. Кабанбай батыра 48/1</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} />
                  <span>Пн–Пт: 09:00–18:30</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClockInline />
                  <span>Перерыв: 13:00–14:00</span>
                </div>
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

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6">
        <Reveal>
          <div
            className={
              dark
                ? "rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8"
                : "rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8"
            }
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Готовы обсудить ваш заказ?
            </h2>
            <p className={`mt-3 max-w-2xl leading-7 ${mutedTextClass}`}>
              Напишите нам в WhatsApp — быстро подскажем сроки, формат и лучший вариант под вашу задачу.
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
                target="_blank"
                rel="noreferrer"
                className={primaryButtonClass}
              >
                Связаться в WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <a
        href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition active:scale-95 hover:opacity-90"
      >
        WhatsApp
      </a>

      <footer
        className={
          dark
            ? "border-t border-white/10 py-8"
            : "border-t border-slate-200 py-8"
        }
      >
        <div
          className={
            dark
              ? "mx-auto max-w-7xl px-4 text-sm text-slate-400 sm:px-6"
              : "mx-auto max-w-7xl px-4 text-sm text-slate-500 sm:px-6"
          }
        >
          © Basprint — Полиграфия для бизнеса и частных клиентов
        </div>
      </footer>
    </main>
  );
}

function ClockInline() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}