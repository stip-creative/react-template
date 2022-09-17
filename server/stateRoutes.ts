import Express from "express";
import ssr from "./server";

export default function (app: Express.Application) {
    // Для любого пути отсылаем шаблон по умолчанию
    // ssr - функция, возвращающая сгенерированный HTML
    app.get("*", (req: Express.Request, res: Express.Response) => {
        const response = ssr(req.url);
        res.send(response);
    });
}
