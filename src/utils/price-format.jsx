export default function getFormattedPrice(price){
    
    //is price is a valid number
    if(price == null){
        return "N/A"
    }

    const priceInNumber = Number(price);

    if(isNaN(priceInNumber)){
        return "N/A"
    }else{

        return "LKR "+ priceInNumber.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
}
//https://onrmowirdyvaxxnwslgh.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ucm1vd2lyZHl2YXh4bndzbGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MTUyODIsImV4cCI6MjA5MDA5MTI4Mn0.PfHbZt3PRyxYqeA_zIsl5gQpkwfk4QmHU7cCClnyp0Q