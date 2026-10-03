export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const individualLessons = days.map((day) => ({
  id: `${day}-individual`,
  day,
  time: null,
  category: "individual",
  title: "individual",
  age: null,
}));

export const lessons = [
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
  ...individualLessons,
];

export function getLessonById(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId) ?? null;
}

export function getLessonInterest(lesson) {
  return lesson.category === "individual" ? "individual" : "group";
}

function addLanguage(searchParams, language) {
  const languageCode = language?.split("-")[0];
  if (languageCode === "en" || languageCode === "ru") {
    searchParams.set("lang", languageCode);
  }
}

export function getLessonBookingUrl(lesson, language) {
  const searchParams = new URLSearchParams({
    interest: getLessonInterest(lesson),
    lesson: lesson.id,
  });
  addLanguage(searchParams, language);
  return `/contacts?${searchParams.toString()}#booking`;
}

