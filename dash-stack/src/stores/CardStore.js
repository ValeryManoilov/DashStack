import { makeAutoObservable } from "mobx"
import Orders from "../assets/HomepageImages/Order.svg";
import Users from "../assets/HomepageImages/User.svg";
import Sales from "../assets/HomepageImages/Sales.svg";
import Pending from "../assets/HomepageImages/Pending.svg";

class CardStore
{
    data = [
        {
            title: "Total User",
            value: "40,689",
            avatar: Users,
            growth: 1.085
        },
        {
            title: "Total Order",
            value: "10293",
            avatar: Orders,
            growth: 1.013
        },
        {
            title: "Total Sales",
            value: "$89,000",
            avatar: Sales,
            growth: 0.957
        },
        {
            title: "Total Pending",
            value: "2040",
            avatar: Pending,
            growth: 1.013
        },
    ]

    constructor()
    {
        makeAutoObservable(this)
    }
}

const cardStore = new CardStore()
export default cardStore;