const task = require('../model/modelScema');

exports.postFunction = async(req, res) => {
    const {title, desc, price} = req.body;

    try {
        const taskData = await task.create({title, desc, price})
        res.status(200).json(taskData);
        
    } catch (error) {
        console.log(error)
    }
}

exports.getFunction = async(req,res) => {

      try {
        const taskData = await task.find()
        res.status(200).json(taskData);
      } catch (error) {
        console.log(error);
      }
}

exports.getSingleFunction = async(req, res) => {
  const {id} = req.params
  try {
    const taskData = await task.findById({_id:id});
    res.status(200).json(taskData);
    
  } catch (error) {
    console.log(error)
  }
}


exports.updateFunction = async(req, res) => {
  const {id} = req.params

  try {
    const {title, desc, price} = req.body
    const taskData = await task.findByIdAndUpdate(id, {title, desc, price},{new:true})
    await taskData.save()
    res.status(200).json(taskData);
  } catch (error) {
    console.log(error)
    
  }
}

exports.deleteFunction = async(req, res) => {
  const {id} = req.params
  try {
    const taskData = await task.findByIdAndDelete(id)
    res.status(200).json(taskData);
    
  } catch (error) {
    console.log(error)
  }
}
   






