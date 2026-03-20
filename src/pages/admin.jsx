import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-full border-4 border-blue-900 flex">
            <div className="w-[300px] h-full bg-red-900 flex flex-col">
                <h1 className="font-bold">Using a tags</h1>
                <a href="/admin/">Admin</a><br/>
                <a href="/admin/products">Products</a><br/>
                <a href="/admin/users">Users</a><br/>

                <h1 className="font-bold">Using Link tags</h1>
                <Link to="/admin/">Admin</Link>
                <Link to="/admin/products">Product</Link>
                <Link to="/admin/users">Users</Link>

            </div>
            <div className="w-[calc(100%-300px)] h-full bg-amber-400">
                <Routes>
                    <Route path="/" element={<h1>Order Page</h1>} />
                    <Route path="/products" element={<h1>Product Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                </Routes>

            </div>
        </div>
    )
    //instead of w-[calc(100%-300px)] you can use flex-1
}