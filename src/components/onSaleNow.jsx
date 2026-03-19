import ProductCard from "./productCard";

export default function OneSaleNow(){

    return(
        <div> 
            <h1>On Sale Now</h1>
                  <ProductCard
                  name="Mackbook Air"
                  image="https://picsum.photos/id/0/200/300"
                  price="$999" 
                  />
              
            
                  <ProductCard 
                  name="iphone"
                  image="https://picsum.photos/id/3/200/300"
                  price="$800"
                  />
            
                  <ProductCard
                  name="Shose"
                  image="https://picsum.photos/id/21/200/300"
                  price="$600"
                  />
        </div>
    )
}