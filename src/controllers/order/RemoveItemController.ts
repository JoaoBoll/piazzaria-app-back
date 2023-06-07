import { Request, Response } from "express";
import { RemoveItemsService } from "../../services/order/RemoveItemsService";

class RemoveItemController{

    async handle(req: Request, res:Response){

        const item_id = req.query.item_id as string;

        const removeItemsService = new RemoveItemsService();

        const result = removeItemsService.execute({item_id});

        return res.json(result);

    }
}

export {RemoveItemController}