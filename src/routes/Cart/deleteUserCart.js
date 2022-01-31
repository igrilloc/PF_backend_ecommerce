const {Cart, Users, Product} = require("../../db");
const deleteUserCart = async(req,res,next)=>{
  try{
    const { CartId } = req.params;
    const { ProductId }  = req.body;
    if(!ProductId){
      let cart = await Cart.findOne({where:{CartId}});
      let allCart={
        productCart: []
      }
      return res.send(await cart.update(allCart))
    }else{
      let product = await Product.findOne({where:{ProductId}})
      let newCart = (cart.productCart.filter(e=>e.ProductId !== product.ProductId))
      let oneProduct = {
        productCart: newCart
      }
      return res.send(await cart.update(oneProduct))
    }
    
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
}

module.exports={
  deleteUserCart
};