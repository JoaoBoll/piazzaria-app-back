import prismaClient from "../../prisma";

interface Order{
    order_id: string;
}

class ListOrdersService{
    async execute({order_id}:Order) {

        const orders = prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return orders;

    }
}

export {ListOrdersService}