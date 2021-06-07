const express = require("express");
const router = express.Router();
const Suryas= require("./sceemas/suryaschema");

const app = express();

router.get("/" , async(req,res)=>{
try{
const suryaData = await Suryas.find();
res.json(suryaData);
}catch(err){
res.send(err);
}
});

router.post("/" , async(req,res)=>{
    const suryadata =  new Suryas({
        place : req.body.place,
        profession : req.body.profession
    })
    try{
        const s1 = await suryadata.save();
      res.json(s1);
    }catch(err){
   res.send(err);
    }
    })
 module.exports = router;