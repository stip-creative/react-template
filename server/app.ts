import path from "path";

import express from "express";
import Loadable from "react-loadable";

import stateRoutes from "./stateRoutes";

// Используем фреймворк Express для быстрой разработки на Node.js
const app = express();

// Обрабатываем статичные файлы
app.use(express.static("build"));
app.use("/public", express.static(path.resolve(__dirname, "public")));

// Слушаем приложение на 3000 порте, если он не задан процессом
const PORT: number = 8000;

Loadable.preloadAll().then(() =>
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`The app is running in PORT ${PORT}`);
    })
);

// Главный роутинг - обрабатывает GET-запросы и отдает state приложения - это
// может быть как константа, так и строки таблиц БД.
stateRoutes(app);
