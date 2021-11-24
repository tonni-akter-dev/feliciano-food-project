const getDb = () => {
    let cart=localStorage.getItem('food_item');
return cart?JSON.parse(cart):{}
}
const addToDb=id=>{
    let cart =getDb();
    if (cart[id]) {
        cart[id] =cart[id]+1;

    } else {
        cart[id]=1;
    }
    updateDb(cart)
}
 const updateDb = (cart)=>{
    localStorage.setItem('food_item', JSON.stringify(cart))
 }
  export { addToDb ,getDb}