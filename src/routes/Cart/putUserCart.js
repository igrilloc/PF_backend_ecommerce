const {Cart, Users, Product} = require("../../db");


const putUserCart = async (req,res,next)=>{
  try{
    const { CartId } = req.params;
    const { ProductId } = req.body;
    let cart = await Cart.findOne({where:{CartId}});
    let product = await Product.findOne({where:{ProductId}})
    let carrito = cart.productCart
    if (carrito.includes(ProductId)){
      return res.status(400).json("ESTE PRODUCTO YA EXISTE")
    }else{
      infoUpdateCart={
        productCart: [...cart.productCart, product]
      }
      return res.send(await cart.update(infoUpdateCart));
    }
   
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
};

module.exports = {putUserCart};
