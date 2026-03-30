import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import getFormattedPrice from "../../utils/price-format";
import axios from "axios";

const sampleProducts = [
  {
    productId: "P001",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    altNames: ["Mouse", "Wireless Mouse"],
    price: 2500,
    labelledPrice: 3000,
    category: "Accessories",
    image: ["/images/mouse1.png", "/images/mouse2.png"],
    isVisible: true,
    brand: "Logitech",
    model: "M185"
  },

  {
    productId: "P002",
    name: "Mechanical Keyboard",
    description: "RGB mechanical gaming keyboard",
    altNames: ["Keyboard", "Gaming Keyboard"],
    price: 8500,
    labelledPrice: 9500,
    category: "Accessories",
    image: ["/images/keyboard1.png", "/images/keyboard2.png"],
    isVisible: true,
    brand: "Redragon",
    model: "K552"
  },

  {
    productId: "P003",
    name: "24 inch Monitor",
    description: "Full HD IPS display monitor",
    altNames: ["Monitor", "LED Monitor"],
    price: 45000,
    labelledPrice: 50000,
    category: "Display",
    image: ["/images/monitor1.png", "/images/monitor2.png"],
    isVisible: true,
    brand: "Dell",
    model: "SE2422H"
  },

  {
    productId: "P004",
    name: "External Hard Drive 1TB",
    description: "Portable USB 3.0 external hard drive",
    altNames: ["Hard Drive", "External HDD"],
    price: 18500,
    labelledPrice: 21000,
    category: "Storage",
    image: ["/images/hdd1.png", "/images/hdd2.png"],
    isVisible: true,
    brand: "Seagate",
    model: "Expansion 1TB"
  },

  {
    productId: "P005",
    name: "USB Flash Drive 64GB",
    description: "High-speed USB 3.0 flash drive",
    altNames: ["Pen Drive", "USB Drive"],
    price: 2500,
    labelledPrice: 3000,
    category: "Storage",
    image: ["/images/usb1.png", "/images/usb2.png"],
    isVisible: true,
    brand: "SanDisk",
    model: "Ultra Flair"
  },
  {
    productId: "P001",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    altNames: ["Mouse", "Wireless Mouse"],
    price: 2500,
    labelledPrice: 3000,
    category: "Accessories",
    image: ["/images/mouse1.png", "/images/mouse2.png"],
    isVisible: true,
    brand: "Logitech",
    model: "M185"
  },

  {
    productId: "P002",
    name: "Mechanical Keyboard",
    description: "RGB mechanical gaming keyboard",
    altNames: ["Keyboard", "Gaming Keyboard"],
    price: 8500,
    labelledPrice: 9500,
    category: "Accessories",
    image: ["/images/keyboard1.png", "/images/keyboard2.png"],
    isVisible: true,
    brand: "Redragon",
    model: "K552"
  },

  {
    productId: "P003",
    name: "24 inch Monitor",
    description: "Full HD IPS display monitor",
    altNames: ["Monitor", "LED Monitor"],
    price: 45000,
    labelledPrice: 50000,
    category: "Display",
    image: ["/images/monitor1.png", "/images/monitor2.png"],
    isVisible: true,
    brand: "Dell",
    model: "SE2422H"
  },

  {
    productId: "P004",
    name: "External Hard Drive 1TB",
    description: "Portable USB 3.0 external hard drive",
    altNames: ["Hard Drive", "External HDD"],
    price: 18500,
    labelledPrice: 21000,
    category: "Storage",
    image: ["/images/hdd1.png", "/images/hdd2.png"],
    isVisible: true,
    brand: "Seagate",
    model: "Expansion 1TB"
  },

  {
    productId: "P005",
    name: "USB Flash Drive 64GB",
    description: "High-speed USB 3.0 flash drive",
    altNames: ["Pen Drive", "USB Drive"],
    price: 2500,
    labelledPrice: 3000,
    category: "Storage",
    image: ["/images/usb1.png", "/images/usb2.png"],
    isVisible: true,
    brand: "SanDisk",
    model: "Ultra Flair"
  }

];

//image


export default function AdminProductsPage(){

    const [products, setProducts] = useState(sampleProducts);

    useEffect(()=>{
      const token = localStorage.getItem("token");

    axios.get(import.meta.env.VITE_API_URL + "/products", {
      headers: {
        Authorization: "Bearer "+token
      }
    }).then((response)=>{
      setProducts(response.data);
      console.log(response.data);
    })
    }, []);
    
    return(
        <div className="w-full h-full overflow-y-scroll">

 <div className="w-full p-6 bg-primary min-h-screen">
  


    <div className="flex justify-between items-center px-6 py-4 border-b">
      <h2 className="text-2xl font-bold text-secondary">
        Product Management
      </h2>
    </div>

    

      <table className="w-full text-sm text-left bg-white shadow-xl rounded-2xl">
        <thead className="bg-accent text-white uppercase text-xs tracking-wider sticky top-0">
          <tr>
            <th className="px-4 py-3">Product ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Label Price</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Images</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Brand</th>
            <th className="px-4 py-3">Model</th>
          </tr>
        </thead>


        <tbody className="divide-y">

          {products.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-primary transition duration-200"
            >
              <td className="px-4 py-3 font-medium text-secondary">
                {item.productId}
              </td>

              <td className="px-4 py-3 font-semibold">
                {item.name}
              </td>

              <td className="px-4 py-3 text-green-600 font-medium">
                {getFormattedPrice(item.price)}
              </td>

              <td className="px-4 py-3 text-gray-400 line-through">
                {getFormattedPrice(item.labelledPrice)}
              </td>

              <td className="px-4 py-3">
                <span className="bg-primary text-secondary px-3 py-1 rounded-full text-xs">
                  {item.category || "Uncategorized"}
                </span>
              </td>

              <td className="px-4 py-3">
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-lg shadow"
                />
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    item.isVisible
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.isVisible ? "Visible" : "Hidden"}
                </span>
              </td>

              <td className="px-4 py-3">
                {item.brand}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {item.model}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    

</div>

            <Link to="/admin/add-product" className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16">
                <FaPlus/> 
            </Link>
            
        </div>
    )
}