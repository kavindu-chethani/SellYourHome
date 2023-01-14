import {useState, useEffect} from 'react';
import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import validation from "./validation";

function EditHomesToSell() {

const [homes, setHomes]=useState([]);
const [ID, setId] = useState("");
const [errors, setErrors]=useState({})

const gethomeByID = async (ID) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.get(`http://localhost:8080/Home/get/${ID}`, config);
        setHomes(res.data.Home);
        console.log(res.data);
    } catch (err) {
        console.error("error", err);
        console.log("Wrong");
    }
};

const {id} = useParams();
console.log(id);

useEffect(() => {
     
    try {
       
        setId(id);
        console.log(id);
        gethomeByID(id);
      }catch (err) {
        console.error("error", err);
      }
  
  
}, [id]);


const handleInputChange = (event) => {
   setHomes({
       ...homes,
       [event.target.name]: event.target.value,

   });
};

/*  UPDATE DATA */

const handleEdit = async (id) => {
    setErrors(validation(homes));
    const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

try {
    await axios.put(`http://localhost:8080/Home/updateHome/${ID}`,
        homes,
        config
    );
    setHomes({
        home_Id:homes.home_Id,
        address:homes.address,
        city:homes.city,
        zip_code:homes.zip_code,
        no_of_rooms:homes.no_of_rooms,
        estimate_price:homes.estimate_price,
    });
    window.location.reload();
} catch (err) {
  console.error("error", err);
  }
};


return(

   <div>
      <div class="content">
         <form class="ui main">
            <div class="title" >
              <h2>Edit Home selling Details</h2> 
              <hr></hr>
            </div>
          
             <div class="ui form" >

               <div class="inputfield">
                  <label>Home Id</label>
                  <input input  name="home_Id" 
                  class="input" placeholder="ID"  
                  value={homes.home_Id} 
                  onChange={handleInputChange}/>
                  
               </div> 
               {errors.home_Id && <p className="error">{errors.home_Id}</p>}

               <div class="inputfield">
                  <label>Address</label>
                  <input input  name="address" 
                  class="input" placeholder="Full Name" 
                  value={homes.address} 
                  onChange={handleInputChange}/>
               </div>
               {errors.address && <p className="error">{errors.address}</p>}


               <div class="inputfield">
                  <label>city</label>
                  <input input name="city" 
                  class="input" 
                  placeholder="city" 
                  value={homes.city} 
                  onChange={handleInputChange}/>
               </div>
               {errors.city && <p className="error">{errors.city}</p>}

               <div class="inputfield">
                  <label>Zip code</label>
                  <input input  
                  name="zip_code" 
                  class="input" 
                  placeholder="zip_code" 
                  value={homes.zip_code} 
                  onChange={handleInputChange}/>
               </div>
               {errors.zip_code && <p className="error">{errors.zip_code}</p>}


               <div class="inputfield">
                  <label>no_of_rooms</label>
                  <input input  
                  name="no_of_rooms" 
                  class="input" 
                  placeholder="no_of_rooms" 
                  value={homes.no_of_rooms} 
                  onChange={handleInputChange}/>
               </div>
               {errors.no_of_rooms && <p className="error">{errors.no_of_rooms}</p>}

               <div class="inputfield">
                  <label>Estimate Price</label>
                  <input input  
                  name="estimate_price" 
                  class="input" 
                  placeholder="estimate_price" 
                  value={homes.estimate_price} 
                  onChange={handleInputChange}/>
               </div>
               {errors.estimate_price && <p className="error">{errors.estimate_price}</p>}


            </div> 

             <div class="modal-footer">
               <button type="button" class="btn btnC" data-bs-dismiss="modal">CLOSE</button>
               <button type="submit" class="btn btnU"  onClick={() => handleEdit(id)} >UPDATE</button>
            </div> 
         </form>
      </div>
      </div>
 
);

}


export default EditHomesToSell;