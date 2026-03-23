import { Link, Route, Routes } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProductPage";

export default function AdminPage(){
    return(
        <div className="w-full h-full border-4 border-blue-900 bg-accent flex">
            <div className="w-[300px] h-full flex flex-col bg-accent text-white">
                <h1 className="font-bold p-5 border-b-4 border-white">Admin panel</h1>
                <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/"> <FaRegListAlt/> Order</Link>
                <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/products"><MdOutlineInventory2 />Product</Link>
                <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/users"><LuUsers />Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full border-8 border-accent rounded-[20px] bg-primary p-4">
                <Routes>
                    <Route path="/" element={<h1>Order Page</h1>} />
                    <Route path="/products" element={<AdminProductsPage/>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/add-product" element={<AdminAddProductPage/>}/>
                </Routes>

            </div>
        </div>
    )
    //instead of w-[calc(100%-300px)] you can use flex-1
}