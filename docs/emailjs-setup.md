# Настройка EmailJS для ART Lab

## 1. Подключить почтовый сервис

1. Создать аккаунт на https://www.emailjs.com/.
2. Открыть **Email Services** → **Add New Service**.
3. Для тестов или небольшого количества заявок можно подключить Gmail.
4. Сохранить полученный **Service ID**.

## 2. Создать шаблон письма

Открыть **Email Templates** → **Create New Template** и указать:

- **To Email:** `artlabtallinn@gmail.com`
- **From Name:** `ART Lab Website`
- **From Email:** оставить адрес подключённого сервиса / включить Use Default Email Address
- **Reply-To:** `{{email}}`
- **Subject:** `Новая заявка ART Lab — {{interest}} — {{participant_name}} {{participant_last_name}}`

В HTML-редактор письма вставить содержимое файла `docs/emailjs-template.html`.

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

Сохранить **Template ID**.

## 3. Получить Public Key

Открыть **Account** в EmailJS и скопировать **Public Key**. Private Key на клиентский сайт добавлять нельзя и для этой формы он не нужен.

## 4. Создать локальный env-файл

В корне проекта создать `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
VITE_FACEBOOK_URL=https://www.facebook.com/...
```

После изменения `.env.local` перезапустить Vite:

```bash
npm run dev
```

## 5. Добавить переменные на Vercel

В настройках проекта Vercel добавить те же четыре переменные окружения для Production, Preview и Development, затем выполнить новый deploy.

## 6. Проверить

1. Сначала отправить тест из самого EmailJS через **Test It**.
2. Затем заполнить форму на сайте.
3. Проверить входящие и папку Spam.
4. Нажать **Reply** в полученном письме: ответ должен отправляться на адрес клиента благодаря `Reply-To: {{email}}`.

Форма уже содержит обязательное согласие с политикой, простое honeypot-поле против ботов и блокировку повторного нажатия во время отправки.
