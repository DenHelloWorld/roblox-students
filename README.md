# Students — roblox-ts + React

Проект на **roblox-ts** с интерфейсом на **React** (`@rbxts/react`), синхронизация в Roblox Studio через **Rojo**.

## Структура

```
src/
  client/main.client.tsx   — клиентский код (React-интерфейс)
  server/main.server.ts    — серверный код
  shared/module.ts         — общий код (клиент + сервер)
out/                       — скомпилированный Luau (генерируется автоматически)
default.project.json       — конфигурация Rojo
```

Основной React-компонент лежит в `src/client/main.client.tsx`.

## Запуск (в терминале VS Code)

Нужно два процесса в двух вкладках терминала:

**Вкладка 1 — компилятор (следит за изменениями):**
```bash
npm run watch
```

**Вкладка 2 — сервер Rojo:**
```bash
npm run serve
```

## Roblox Studio

1. Открой Roblox Studio → **New** → шаблон **Baseplate**.
2. Установи плагин Rojo: вкладка **HOME/VIEW** → **Toolbox** → **Plugins** → найди **Rojo** → **Install**.
3. В Studio открой вкладку **PLUGINS** → **Rojo** → нажми **Connect**.
4. Нажми **Play** (F5) — должна появиться зелёная плашка «Связь с React установлена!».

## Полезные команды

| Команда | Что делает |
| --- | --- |
| `npm run build` | Разовая сборка TypeScript → Luau |
| `npm run watch` | Сборка в режиме наблюдения |
| `npm run serve` | Запуск сервера Rojo для Studio |

> Важно: пока компилятор не соберёт код без ошибок, изменения не попадут в Studio.
