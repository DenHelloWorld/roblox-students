# Students — roblox-ts + React

Проект на **roblox-ts** с интерфейсом на **React** (`@rbxts/react`). Код синхронизируется в Roblox Studio через **Rojo**.

## Что где лежит (главное)

- **Код** (TypeScript) — в `src/`, пишется в **VS Code**. Rojo льёт его в Studio.
- **Карта** (пол, стол, дом, спавны) — в файле **`game.rbxl`**, редактируется в **Studio**, сохраняется через **Ctrl+S**.

Rojo управляет **только кодом** (в `default.project.json` нет `Workspace`), поэтому всё, что ты наставишь в Studio, **не откатывается**.

## Структура

```
game.rbxl                — КАРТА (открывается и правится в Studio)
src/
  client/main.client.tsx  — клиентский код (React-интерфейс)
  server/main.server.ts   — серверный код
  shared/module.ts        — общий код
out/                      — скомпилированный Luau (генерируется автоматически)
default.project.json      — конфигурация Rojo (только код)
```

## Запуск

Две вкладки терминала:

**Вкладка 1 — компилятор:**
```bash
npm run watch
```

**Вкладка 2 — сервер Rojo:**
```bash
npm run serve
```

## Roblox Studio

1. Открой файл карты: **File → Open → `C:\students\roblox\game.rbxl`**.
2. Вкладка **PLUGINS** → **Rojo** → **Connect** → **Accept**.
3. Нажми **Play (F5)** — появится зелёная плашка «Связь с React установлена!».

## Строишь карту

1. Двигай/добавляй объекты в Studio.
2. **Ctrl+S** — изменения сохраняются в `game.rbxl`.
3. В VS Code сделай `git commit` — версия карты попадёт в историю.

## Пишешь код

1. Правь файлы в `src/...` в VS Code.
2. **Ctrl+S** → `npm run watch` собирает → Rojo сам обновляет код в Studio.
3. Проверяешь через **Play**.

## Команды

| Команда | Что делает |
| --- | --- |
| `npm run build` | Разовая сборка TypeScript → Luau |
| `npm run watch` | Сборка в режиме наблюдения |
| `npm run serve` | Запуск сервера Rojo |

## Полезно знать

- Пока компилятор не собрал код без ошибок, изменения не попадут в Studio.
- Во время Play-теста плагин Rojo не может делать HTTP (ошибка `Http requests can only be executed by game server`) — это нормально, код уже синхронизирован до запуска.
- Мультиплеер для теста: **Test → Server and Clients (F7)**, затем **Test → Add Clients**.

## Git и GitHub

Репозиторий: **https://github.com/DenHelloWorld/roblox-students**

- **Commit** — сохранить изменения в историю. **Discard** — отменить (вернуть к последнему коммиту). Не путать!
- Отправить на GitHub: VS Code → Source Control → **Commit** → **Sync Changes** (или `git push`).
- В git не попадают `node_modules`, `out`, `include` (см. `.gitignore`). Файл карты `game.rbxl` — в репозитории.

## Публикация игры

1. Открой `game.rbxl` и подключи Rojo (код синхронизируется в плейс).
2. **File → Publish to Roblox As…** → создай/выбери игру → **Publish**.
3. Roblox сам поднимает серверы — отдельно «деплоить сервер» не нужно.

## Заметки разработчика

- Rojo синхронизирует **только код**. Карта (`game.rbxl`) живёт отдельно и не откатывается.
- Позиции объектов в Rojo-проекте задаются через **CFrame** (свойство `Position` Rojo не применяет).
- Системное **Esc-меню** Roblox убрать нельзя; **чат** настраивается через `TextChatService` (в Studio или кодом).
- **Сервер** (`src/server`) — хозяин состояния, **клиент** (`src/client`) — интерфейс. Общение через RemoteEvent.
