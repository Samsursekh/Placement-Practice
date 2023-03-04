const product = require('../model/modelScema');

exports.postFunction = async(req, res) => {
    const {title, desc, price} = req.body;

    try {
        const productData = await product.create({title, desc, price})
        res.status(200).json(productData);
        
    } catch (error) {
        console.log(error)
    }
}

exports.getFunction = async(req,res) => {

      try {
        const productData = await product.find()
        res.status(200).json(productData);
      } catch (error) {
        console.log(error);
      }
}

exports.getSingleFunction = async(req, res) => {
  const {id} = req.params
  try {
    const productData = await product.findById({_id:id});
    res.status(200).json(productData);
    
  } catch (error) {
    console.log(error)
  }
}


exports.updateFunction = async(req, res) => {
  const {id} = req.params

  try {
    const {title, desc, price} = req.body
    const productData = await product.findByIdAndUpdate(id, {title, desc, price},{new:true})
    await productData.save()
    res.status(200).json(productData);
  } catch (error) {
    console.log(error)
    
  }
}

exports.deleteFunction = async(req, res) => {
  const {id} = req.params
  try {
    const productData = await product.findByIdAndDelete(id)
    res.status(200).json(productData);
    
  } catch (error) {
    console.log(error)
  }
}
   






