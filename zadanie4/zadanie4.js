
function get_orders_info(orders) {
    //массив заказов со статусом delivered
    let target_orders = orders.filter(n => n.status =='delivered');
    let result = {};
    for(order of target_orders) {
        for(item of order['items']) {
            month = new Date(order.delivered_date).toLocaleString('en-EN', { month: 'long' });

            /*если месяц есть в ключах объекта,
            то прибавляем стоимость товара к общей стоимости
            */
            if (typeof result[month] !== "undefined") {
                result[month] += item.price * item.quantity;
            }
            /*если месяца нет в ключах объекта,
            то создаем ключ и присваиваем ему значение стоимости товара
            */
            else{
                result[month] = item.price * item.quantity;
            }
        }
    }

    return result;
}


let orders = [
    {
        id: 1,
        status: 'delivered',
        delivered_date: '2024-05-05',
        items: [
            {
                productName: 'Item1',
                quantity: 2,
                price: 50
            },
            {
                productName: 'Item2',
                quantity: 1,
                price: 100
            }
        ]
    },
    {
        id: 2,
        status: 'pending',
        delivered_date: '2024-10-12',
        items: [
            {
                productName: 'Item3',
                quantity: 2,
                price: 70
            },
            {
                productName: 'Item4',
                quantity: 1,
                price: 100
            }
        ]
    },
    {
        id: 3,
        status: 'delivered',
        delivered_date: '2024-11-05',
        items: [
            {
                productName: 'Item5',
                quantity: 2,
                price: 20
            },
            {
                productName: 'Item6',
                quantity: 1,
                price: 15
            },
            {
                productName: 'Item7',
                quantity: 1,
                price: 10
            }
        ]
    },
];
