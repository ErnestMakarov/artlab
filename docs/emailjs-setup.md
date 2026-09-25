# Настройка EmailJS для ART Lab

## 1. Подключить почтовый сервис

1. Создать аккаунт на https://www.emailjs.com/.
2. Открыть **Email Services** → **Add New Service**.
3. Подключить Gmail, с которого ART Lab будет отправлять уведомления.
4. Скопировать полученный **Service ID** — он начинается с `service_`.

## 2. Создать шаблон письма

Открыть **Email Templates** → **Create New Template** и указать:

- **To Email:** `artlabtallinn@gmail.com`
- **From Name:** `ART Lab Website`
- **From Email:** включить **Use Default Email Address** и оставить адрес подключённого сервиса. Адрес клиента сюда ставить не нужно.
- **Reply-To:** `{{email}}`
- **Subject:** `Новая заявка ART Lab — {{interest}} — {{participant_name}} {{participant_last_name}}`

В поле **Content** открыть режим редактирования HTML и целиком вставить содержимое файла `docs/emailjs-template.html`.

Переменные, которые отправляет форма:

- `{{participant_name}}`
- `{{participant_last_name}}`
- `{{participant_age}}`
- `{{email}}`
- `{{phone}}`
- `{{interest}}`
- `{{message}}`
- `{{privacy_consent}}`
- `{{language}}`
- `{{submitted_at}}`
- `{{page_url}}`

Сохранить шаблон и скопировать **Template ID** — он начинается с `template_`.

## 3. Получить Public Key

Открыть **Account** в EmailJS и скопировать **Public Key**. В код и Vercel нужен именно Public Key. Private Key этой форме не нужен, его нельзя добавлять в клиентский проект.

## 4. Создать локальный env-файл

В корне проекта выполнить:

```bash
cp .env.example .env.local
```

Затем открыть `.env.local` и заполнить три значения EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Не добавлять кавычки и пробелы вокруг `=`. После изменения `.env.local` полностью перезапустить Vite:

```bash
npm run dev
```

## 5. Добавить переменные на Vercel

В **Project Settings → Environment Variables** проекта Vercel добавить те же три переменные EmailJS для Production, Preview и Development, затем выполнить новый deploy. Локальный файл `.env.local` на Vercel автоматически не попадает.

## 6. Проверить

1. Сначала отправить тест из самого EmailJS через **Test It**.
2. Затем заполнить форму на сайте.
3. Проверить входящие и папку Spam.
4. Нажать **Reply** в полученном письме: ответ должен отправляться на адрес клиента благодаря `Reply-To: {{email}}`.

Форма уже содержит обязательное согласие с политикой, простое honeypot-поле против ботов и блокировку повторного нажатия во время отправки.
