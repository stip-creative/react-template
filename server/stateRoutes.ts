import Express from "express";
import ssr from "./server";

export default function (app: Express.Application) {
    // Для любого пути отсылаем шаблон по умолчанию
    // ssr - функция, возвращающая сгенерированный HTML
    app.get("*", async (req: Express.Request, res: Express.Response) => {
        const response = await ssr(req.url);
        res.send(response);
    });
}
