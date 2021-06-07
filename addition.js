const express = require("express");
const router = express.Router();
const Kalyans = require("./sceemas/kalyansceema");


router.get('/', async(req,res)=>{
   try{
       const kalyansdata =await Kalyans.find();
res.json(kalyansdata);
   }catch(error){
    res.send(error);
   }
}) 

router.post('/' , async(req,res)=>{
    const kalyandata = new Kalyans({
        name:req.body.name,
        age:req.body.age
    })
try{
    const k1 = await kalyandata.save();
res.json(k1);
}catch(err){
res.send(err);
}
})
// add=function add(a,b){
//     return a+b;
// }s
module.exports = router;
// module.exports = add;