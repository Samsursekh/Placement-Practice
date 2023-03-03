const tasks = require('../model/usermodel')

exports.postFunction = async(req, res) => {
 const {title, desc, price} = req.body 

 try{
      const taskData = await  tasks.create({title, desc, price});
      res.status(200).json(taskData);
 }catch(error){
    console.log(error)
 }
}

exports.getFunction  = async(req, res) => {
try {
   const taskData = await tasks.find();
   res.status(200).json(taskData);
   
} catch (error) {
   console.log(error)
   
}
}

exports.getSingleFunction = async(req, res) => {
   const {id} = req.params;

   try {
      const taskData = await tasks.findById({_id:id})
      res.status(200).json(taskData);
      
   } catch (error) {
      console.log(error)
      
   }
}

exports.updateFunction = async(req, res)=> {
   const {id} = req.params;

   try {
      const {title, desc, price} = req.body 
      const taskData = await tasks.findByIdAndUpdate(id, {title, desc, price}, {new:true});
      await taskData.save();
      res.status(200).json(taskData);
   } catch (error) {
      console.log(error)
   }
}

exports.deleteFunction = async(req, res) => {
   const {id} = req.params
   try {
    const taskData = await tasks.findByIdAndDelete(id)
    res.status(200).json(taskData);

   } catch (error) {
      console.log(error)
   }
}