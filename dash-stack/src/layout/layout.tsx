import Aside from "../aside";
import Header from "../header/header";
// import style from "./layout.yout.scss";
import style from "./layout.module.css";

interface ILayout{
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({children}) => {
    return (
        <div className={style.wrapper}>
            <Aside/>
            <div className={style.content}>
                <Header/>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout;