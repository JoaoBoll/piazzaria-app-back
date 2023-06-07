import prismaClient from "../../prisma";

interface Order{
    order_id: string;
}

class ListOrdersService{
    async execute({order_id}:Order) {

        const orders = prismaClient.order.findMany({
            where: {
                id: order_id
            }
        });

        return orders;

    }
}

export {ListOrdersService}