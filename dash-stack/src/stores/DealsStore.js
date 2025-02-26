import { makeAutoObservable } from "mobx";

class DealsStore
{
    data = [
        {
            productName: "Apple Watch",
            location: "6096 Marjolaine Landing",
            dateTime: "12.09.2019 - 12.53 PM",
            piece: "Piece",
            amount: "$34,295",
            status: "Delivered"
        },
        {
            productName: "Apple Watch",
            location: "6096 Marjolaine",
            dateTime: "12.09.2019 - 12.53 PM",
            piece: "Piece",
            amount: "$34,295",
            status: "Delivered"
        },
        {
            productName: "Apple Watch",
            location: "6096 Landing",
            dateTime: "12.09.2019 - 12.53 PM",
            piece: "Piece",
            amount: "$34,295",
            status: "Delivered"
        },
        {
            productName: "Apple Watch",
            location: "Marjolaine Landing",
            dateTime: "12.09.2019 - 12.53 PM",
            piece: "Piece",
            amount: "$34,295",
            status: "No Delivered"
        }
    ]

    names = [
        {name: "Product Name"},
        {name: "Location"},
        {name: "Date - Time"},
        {name: "Piece"},
        {name: "Amount"},
        {name: "Status"},
    ]

    constructor()
    {
        makeAutoObservable(this)
    }
}

const dealsStore = new DealsStore()
export default dealsStore;