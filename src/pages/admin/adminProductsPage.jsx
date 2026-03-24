import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  }

];

export default function AdminProductsPage(){

    const [products, setProducts] = useState(sampleProducts);
    


    return(
        <div className="w-full h-full overflow-y-scroll">

              {
                    products.map(
                        (item , index)=>{
                            console.log(item)
                            console.log(index)
                            return <h1 key={index}>{item.productId}</h1>
                        }
                    )
                }
            <Link to="/admin/add-product" className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16">
                <FaPlus/>
            </Link>
            
        </div>
    )
}