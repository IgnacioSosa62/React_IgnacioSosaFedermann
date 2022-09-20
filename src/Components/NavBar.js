import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <div className="navbar bg-green-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Tienda</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <CartWidget></CartWidget>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
export default NavBar