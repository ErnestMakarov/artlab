import { Link, useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";

import Container from "../../components/ui/Container.jsx";

const filters = [
  "all",
  "art",
  "creative",
  "handicraft",
  "estonian",
  "individual",
];

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const lessons = [
  {
    id: "monday-art-1700",
    day: "monday",
    time: "17:00",
    category: "art",
    title: "art",
    age: "8+",
  },
  {
    id: "tuesday-art-1600",
    day: "tuesday",
    time: "16:00",
    category: "art",
    title: "art",
    age: "6+",
  },
  {
    id: "tuesday-estonian-1700",
    day: "tuesday",
    time: "17:00",
    category: "estonian",
    title: "estonian",
    age: "4+",
  },
  {
    id: "tuesday-handicraft-1815",
    day: "tuesday",
    time: "18:15",
    category: "handicraft",
    title: "handicraft",
    age: "8+",
  },
  {
    id: "wednesday-individual",
    day: "wednesday",
    time: null,
    category: "individual",
    title: "individual",
    age: null,
  },
  {
    id: "thursday-art-1600",
    day: "thursday",
    time: "16:00",
    category: "art",
    title: "art",
    age: "7+",
  },
  {
    id: "friday-creative-1600",
    day: "friday",
    time: "16:00",
    category: "creative",
    title: "creative",
    age: "4+",
  },
  {
    id: "friday-adults-1700",
    day: "friday",
    time: "17:00",
    category: "art",
    title: "artAdults",
    age: "18+",
  },
  {
    id: "saturday-creative-1000",
    day: "saturday",
    time: "10:00",
    category: "creative",
    title: "creative",
    age: "4+",
  },
  {
    id: "saturday-art-1100",
    day: "saturday",
    time: "11:00",
    category: "art",
    title: "art",
    age: "6+",
  },
  {
    id: "saturday-art-1200",
    day: "saturday",
    time: "12:00",
    category: "art",
    title: "art",
    age: "10+",
  },
  {
    id: "saturday-art-1300",
    day: "saturday",
    time: "13:00",
    category: "art",
    title: "art",
    age: "12+",
  },
  {
    id: "sunday-creative-1130",
    day: "sunday",
    time: "11:30",
    category: "creative",
    title: "creative",
    age: "5+",
  },
  {
    id: "sunday-art-1230",
    day: "sunday",
    time: "12:30",
    category: "art",
    title: "art",
    age: "6+",
  },
];

const categoryStyles = {
  art: {
    surface: "from-[#fbf8ff] to-[#f4edff]",
    accent: "bg-brand",
    text: "text-brand",
  },
  creative: {
    surface: "from-[#f7ffff] to-[#e8f8f7]",
    accent: "bg-accent-cyan",
    text: "text-accent-cyan",
  },
  handicraft: {
    surface: "from-[#fff9fc] to-[#ffedf5]",
    accent: "bg-accent-pink",
    text: "text-accent-pink",
  },
  estonian: {
    surface: "from-[#fffdf5] to-[#fff5cf]",
    accent: "bg-[#e4ad18]",
    text: "text-[#9b6f00]",
  },
  individual: {
    surface: "from-[#fbf9ff] to-[#f1effa]",
    accent: "bg-ink",
    text: "text-ink",
  },
};

const dayStyles = [
  "bg-[#f3eafa] text-brand",
  "bg-[#e7f7f5] text-accent-cyan",
  "bg-[#fff5cf] text-[#9b6f00]",
  "bg-[#eaf8f8] text-accent-cyan",
  "bg-[#ffedf4] text-accent-pink",
  "bg-[#eee9ff] text-brand",
  "bg-[#e7f7ef] text-[#2b9067]",
];

const lessonGridStyles = {
  1: "sm:grid-cols-2 lg:grid-cols-3",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 xl:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
};

function LessonCard({ lesson, t }) {
  const style = categoryStyles[lesson.category];
  const title = t(`board.classes.${lesson.title}`);

  return (
    <li
      className={`relative min-h-36 overflow-hidden rounded-[1.4rem] border border-white/90 bg-gradient-to-br p-5 shadow-[0_12px_35px_rgba(51,39,73,0.055)] ${style.surface}`}
    >
      <span
        className={`absolute right-5 top-5 size-2.5 rounded-full ring-4 ring-white/65 ${style.accent}`}
        aria-hidden="true"
      />

      <div className="flex h-full flex-col justify-between gap-7">
        <div>
          <p
            className={`pr-7 text-[9px] font-extrabold uppercase tracking-[0.15em] sm:text-[10px] ${style.text}`}
          >
            {t(`board.filters.${lesson.category}`)}
          </p>

          <h3 className="mt-3 max-w-[17rem] text-lg font-extrabold leading-[1.18] tracking-[-0.03em] text-ink">
            {title}
          </h3>
        </div>

        <div className="flex items-end justify-between gap-4">
          <p className={`text-xl font-extrabold tracking-[-0.035em] ${style.text}`}>
            {lesson.time ?? t("board.byAgreement")}
          </p>

          {lesson.age ? (
            <span
              className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold text-ink shadow-[0_6px_18px_rgba(51,39,73,0.06)]"
              aria-label={t("board.ageAria", { age: lesson.age })}
            >
              {lesson.age}
            </span>
          ) : (
            <span className="text-right text-[10px] font-bold leading-4 text-muted">
              {t("board.flexible")}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default function ScheduleBoard() {
  const { t } = useTranslation("schedule");
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedFilter = searchParams.get("direction");
  const requestedDay = searchParams.get("day");
  const activeFilter = filters.includes(requestedFilter)
    ? requestedFilter
    : "all";

  const filteredLessons =
    activeFilter === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.category === activeFilter);

  const dayOptions = days.map((day, index) => ({
    id: day,
    index,
    lessons: filteredLessons.filter((lesson) => lesson.day === day),
  }));

  const availableDays = dayOptions.filter((day) => day.lessons.length > 0);
  const activeDay = availableDays.some((day) => day.id === requestedDay)
    ? requestedDay
    : availableDays[0]?.id ?? days[0];
  const activeDayData =
    dayOptions.find((day) => day.id === activeDay) ?? dayOptions[0];
  const activeGridStyle =
    lessonGridStyles[Math.min(activeDayData.lessons.length, 4)] ??
    lessonGridStyles[4];

  function selectFilter(filter) {
    const nextSearchParams = new URLSearchParams(searchParams);
    const nextLessons =
      filter === "all"
        ? lessons
        : lessons.filter((lesson) => lesson.category === filter);
    const nextDay = nextLessons.some((lesson) => lesson.day === activeDay)
      ? activeDay
      : days.find((day) =>
          nextLessons.some((lesson) => lesson.day === day),
        );

    if (filter === "all") {
      nextSearchParams.delete("direction");
    } else {
      nextSearchParams.set("direction", filter);
    }

    if (nextDay) nextSearchParams.set("day", nextDay);

    setSearchParams(nextSearchParams, { replace: true });
  }

  function selectDay(day) {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set("day", day);
    setSearchParams(nextSearchParams, { replace: true });
  }

  return (
    <section
      className="relative isolate bg-[#fcfbff] py-20 sm:py-24 lg:py-28"
      aria-labelledby="schedule-board-title"
    >
      <div
        className="pointer-events-none absolute -left-32 top-56 size-80 rounded-full bg-accent-cyan/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-64 size-96 rounded-full bg-brand/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,0.65fr)] lg:items-end lg:gap-20">
          <div>
            <p className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-cyan sm:text-xs">
              <span
                className="h-0.5 w-8 rounded-full bg-current"
                aria-hidden="true"
              />
              {t("board.eyebrow")}
            </p>

            <h2
              id="schedule-board-title"
              className="mt-7 max-w-3xl text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.97] tracking-[-0.055em] text-ink"
            >
              {t("board.title")}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {t("board.description")}
          </p>
        </div>
      </Container>

      <div className="sticky top-16 z-30 mt-10 border-y border-white/90 bg-white/[0.82] py-3 shadow-[0_10px_35px_rgba(51,39,73,0.055)] backdrop-blur-2xl sm:top-[72px] lg:mt-12 xl:top-20">
        <Container>
          <div className="flex items-center gap-3 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="mr-1 hidden shrink-0 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted xl:block">
              {t("board.filterLabel")}
            </span>

            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => selectFilter(filter)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-extrabold transition-all duration-200 sm:px-5 sm:text-sm ${
                    isActive
                      ? "border-brand bg-brand text-white shadow-[0_8px_24px_rgba(107,57,211,0.20)]"
                      : "border-line bg-white/80 text-muted hover:border-brand/25 hover:text-ink"
                  }`}
                  aria-pressed={isActive}
                >
                  {t(`board.filters.${filter}`)}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      <Container className="relative mt-8 sm:mt-10">
        <p className="sr-only" role="status" aria-live="polite">
          {t("board.showing", { count: filteredLessons.length })}
        </p>

        <div className="rounded-[2rem] border border-white/90 bg-white/75 p-3 shadow-[0_20px_65px_rgba(51,39,73,0.07)] backdrop-blur-xl sm:p-4">
          <div className="overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="grid min-w-[1030px] grid-cols-7 gap-2 xl:min-w-0"
              role="group"
              aria-label={t("board.dayTabsLabel")}
            >
              {dayOptions.map((day) => {
                const lessonCount = day.lessons.length;
                const hasLessons = lessonCount > 0;
                const isActive = day.id === activeDay;
                const dayLabel = t(`board.days.${day.id}`);

                return (
                  <button
                    key={day.id}
                    type="button"
                    onClick={() => selectDay(day.id)}
                    disabled={!hasLessons}
                    className={`min-w-0 rounded-[1.25rem] border p-3 text-left transition-all duration-200 sm:p-4 ${
                      isActive
                        ? "border-ink bg-ink text-white shadow-[0_12px_30px_rgba(51,39,73,0.18)]"
                        : hasLessons
                          ? `border-white/90 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(51,39,73,0.08)] ${dayStyles[day.index]}`
                          : "cursor-not-allowed border-transparent bg-[#f5f3f7] text-muted/45"
                    }`}
                    aria-pressed={isActive}
                    aria-label={
                      hasLessons
                        ? t("board.dayAria", {
                            day: dayLabel,
                            count: lessonCount,
                          })
                        : t("board.dayUnavailable", { day: dayLabel })
                    }
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-extrabold tracking-[0.16em] opacity-65">
                        {String(day.index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex size-6 items-center justify-center rounded-full text-[10px] font-extrabold ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-white/75 text-current"
                        }`}
                        aria-hidden="true"
                      >
                        {lessonCount}
                      </span>
                    </span>

                    <span className="mt-4 block whitespace-nowrap text-[13px] font-extrabold tracking-[-0.02em] sm:text-sm">
                      {dayLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="mt-3 overflow-hidden rounded-[1.65rem] border border-line/70 bg-white"
            role="region"
            aria-live="polite"
            aria-labelledby={`active-schedule-${activeDay}`}
          >
            <div
              className={`flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6 ${dayStyles[activeDayData.index]}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-extrabold tracking-[0.18em] opacity-65">
                  {String(activeDayData.index + 1).padStart(2, "0")}
                </span>
                <h3
                  id={`active-schedule-${activeDay}`}
                  className="text-2xl font-extrabold tracking-[-0.04em] sm:text-3xl"
                >
                  {t(`board.days.${activeDay}`)}
                </h3>
              </div>

              <p className="text-xs font-extrabold opacity-70 sm:text-sm">
                {t("board.daySummary", {
                  count: activeDayData.lessons.length,
                })}
              </p>
            </div>

            <ul className={`grid gap-3 p-3 sm:p-4 ${activeGridStyle}`}>
              {activeDayData.lessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} t={t} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/90 bg-gradient-to-br from-surface-lilac via-white to-surface-aqua shadow-[0_20px_65px_rgba(51,39,73,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-pink sm:text-xs">
              {t("notice.eyebrow")}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
              {t("notice.title")}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              {t("notice.description")}
            </p>
          </div>

          <div className="border-t border-line/80 p-6 sm:p-8 lg:min-w-[330px] lg:border-l lg:border-t-0 lg:p-10">
            <Link
              to="/contacts#booking"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-[#7d45dc] px-7 text-center text-sm font-bold text-white shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button-hover"
            >
              {t("notice.cta")}
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <p className="mt-4 text-center text-xs leading-5 text-muted">
              {t("notice.caption")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
