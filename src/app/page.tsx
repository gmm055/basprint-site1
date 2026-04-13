export default function Home() {
  const services = [
    "Кружки",
    "Флаера",
    "Наклейки",
    "Шопперы",
    "Печати",
    "Визитки",
    "Блокноты",
    "Открытки",
  ];

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

  const reviews = [
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold">Basprint</div>
            <div className="text-xs text-slate-500">
              Сила в надежности в масштабе
            </div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-slate-600">
              О компании
            </a>
            <a href="#services" className="hover:text-slate-600">
              Услуги
            </a>
            <a href="#steps" className="hover:text-slate-600">
              Как мы работаем
            </a>
            <a href="#reviews" className="hover:text-slate-600">
              Отзывы
            </a>
            <a href="#contacts" className="hover:text-slate-600">
              Контакты
            </a>
          </nav>

          <a
            href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            Basprint · Полиграфия для бизнеса и частных клиентов
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Печать, которая продаёт и усиливает ваш бренд
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Визитки, флаера, упаковка и сувенирная продукция — быстро,
            качественно и с вниманием к деталям. Работаем с компаниями и
            частными клиентами.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Заказать в WhatsApp
            </a>

            <a
              href="#services"
              className="rounded-2xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50"
            >
              Смотреть услуги
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 p-5 shadow-sm"
            >
              <div className="font-medium">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-slate-200 p-8">
          <h2 className="text-3xl font-bold">О компании</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
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
          <p className="mt-2 text-slate-600">
            Самые востребованные направления Basprint.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-slate-200" />
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Удобное оформление заказа и быстрый переход в WhatsApp.
              </p>

              <a
                href={`https://wa.me/77024056954?text=${encodeURIComponent(
                  `Здравствуйте! Хочу заказать в Basprint: ${item}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-medium text-slate-900"
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
            <div
              key={step}
              className="rounded-2xl border border-slate-200 p-5 shadow-sm"
            >
              <div className="text-sm text-slate-500">Шаг {index + 1}</div>
              <div className="mt-2 font-medium">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <h2 className="text-3xl font-bold">Отзывы клиентов</h2>
          <p className="mt-2 text-slate-600">
            Реальные отзывы клиентов Basprint.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-200 p-5 shadow-sm"
            >
              <div className="mb-3 text-yellow-500">★★★★★</div>
              <p className="text-sm text-slate-600">{review.text}</p>
              <div className="mt-4 font-medium">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <h2 className="text-3xl font-bold">Готовы оформить заказ?</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Напишите нам в WhatsApp, и мы быстро подскажем по срокам, стоимости
            и лучшему решению под вашу задачу.
          </p>

          <a
            href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 rounded-3xl border border-slate-200 p-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Контакты</h2>
            <div className="mt-4 space-y-2 text-slate-600">
              <p>Телефон: +7 702 405 6954</p>
              <p>Адрес: пр. Кабанбай батыра 48/1</p>
              <p>Пн–Пт: 09:00–18:30</p>
              <p>Перерыв: 13:00–14:00</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="tel:+77024056954"
              className="rounded-2xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-50"
            >
              Позвонить
            </a>
            <a
              href="https://wa.me/77024056954?text=Здравствуйте! Хочу оформить заказ в Basprint"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              Написать в WhatsApp
            </a>
            <a
              href="https://2gis.kz/astana/firm/70000001018134048?m=71.412984%2C51.11341%2F16"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-50"
            >
              Открыть в 2ГИС
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
          © Basprint — Полиграфия для бизнеса и частных клиентов
        </div>
      </footer>
    </main>
  );
}