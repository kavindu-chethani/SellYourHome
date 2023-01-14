const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
let Home = require("../model/HomeModel");


//post method 

router.post('/add', (req,res)=>{
  let newHome = new Home(req.body);
  newHome.save((err)=>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
          success:"Home saved sucessfully"
      });
  });
})

//get method to retriew data

router.get('/get', (req,res)=>{
  Home.find().exec((err, Home)=>{
     if(err){
         return res.status(400).json({
             error:err
         });
     }return res.status(200).json({
         success:"true",
         Home
     });
  });
 
 });


//GET ONE Home By ID (http://localhost:8080/Home/<userID>)

router.route("/get/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userId =  req.params.id; //fetch the id parameter in url

    const home = await Home.findById(userId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then((Home) => {
        res.status(200).send({status : "Home data fetched", Home}) //if find success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with find data"}); //if not display error message
    })

})


  //update Home  http://localhost:8080/Home/updateHome/

  router.put('/updateHome/:id',(req,res)=>{
    Home.findByIdAndUpdate(
           req.params.id,
           {
               $set:req.body
           },
           (err,Home)=>{
               if(err){
                   return res.status(400).json({error:err});
               }
               return res.status(200).json({
                   success:"Updated Succesfully",
               });
           }
       );
   });
   

//delete Home  http://localhost:8080/Home/delete/

router.route("/delete/:id").delete(async(req,res) => { //get userid from frontend
    let userId = req.params.id; // assign userid to variable

    /*(/^[0-9a-fA-F]{24}$/)*/
        await Home.findByIdAndDelete(userId) //delete data that related to userId
            .then(() => {
                res.status(200).send({status: "user deleted"}); //display user deleted successfull
            }).catch((err) => {
                console.log(err.message)
            res.status(500).send({status: "Error with delete user", error:err.message}); //display error message
            })
    
})
//search

// router.route("/").get((req,res) =>{

//     const{q} = req.query;

//     const keys = ["store_Id","package_Id","delivery_District"];

//     const search = (stores) =>{
//         return stores.filter((item) =>
//             keys.some((key) => item[key].toLowerCase().includes(q))
//         );
//     };

//     Store.find().then((stores) =>{
//         res.json(search(stores)) //pass data from db to frontend
//     }).catch((err) =>{
//         console.log(err) //display errors
//     })

// })





module.exports = router;

