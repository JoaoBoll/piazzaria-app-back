import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController{
    async handle(req: Request, res: Response ) {

        const {order_id} = req.body

        const listOrderService = new ListOrdersService();

        const orders = await listOrderService.execute({
            order_id
        });

        return res.json(orders);
    }
}

export {ListOrdersController}