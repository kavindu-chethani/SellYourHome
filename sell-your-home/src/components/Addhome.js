import React, {useState} from "react";
import "./styels.css"; 
import axios from "axios";


export default function Addhome(){
const [errors, setErrors]=useState({})
const[homes, setValues]=useState({
  home_Id:"",
  address:"",
  city:"",
  zip_code:"",
  no_of_rooms:"",
  estimate_price:"",
});

const[home_Id, sethome_Id]= useState(" ");
const[address, setaddress]= useState(" ");
const[city, setcity]= useState(" ");
const[zip_code, setzip_code]= useState(" ");
const[no_of_rooms, setno_of_rooms]= useState(" ");
const[estimate_price, setestimate_price]= useState(" ");

function sendData(e){
    e.preventDefault();

    const newHome={
    home_Id,
    address,
    city,
    zip_code,
    no_of_rooms,
    estimate_price,
    }

    axios.post("http://localhost:8080/Home/add", newHome).then(()=>{
      alert("Home Added");
    }).catch((err)=>{
      alert(err)
    })
console.log(newHome);
}

  return(
   
        <div  className="content"> 
        <h2>Add Home Details to Sell</h2>
            
            <hr></hr>
            <div className="ui main">
                   
            <form className="ui form" onSubmit={sendData}>
                      <div className="field">
                        <label>home No</label>
                        <input
                          type="text"
                          value={home_Id}
                          name="home_Id"
                          placeholder="ex:Hm01"
                          // pattern="[a-za-z0-9]{4}"
                          onChange={(e) => sethome_Id(e.target.value)}
                          required/>
                      </div>
                      {errors.home_Id && <p className="error">{errors.home_Id}</p>}

                      <div className="field">
                        <label>Address</label>
                        <input
                          type="text"
                          value={address}
                          name="address"
                          placeholder="Temple road Lane"
                          // pattern="[a-za-z0-9]{4}"
                          onChange={(e) => setaddress(e.target.value)}
                          required/>  
                      </div>
                      {errors.address && <p className="error">{errors.address}</p>}

                      <div className="field">
                        <label>city</label>
                        <input
                          type="text"
                          value={city}
                          name="city"
                          placeholder="city"
                          onChange={(e) => setcity(e.target.value)}
                          required/>
                        {errors.city && <p className="error">{errors.city}</p>}
                        
                      </div>
                      <div className="field">
                        <label>zip code</label>
                        <input
                          type="text"
                          name="zip_code"
                          value={zip_code}
                          placeholder="Zip_code"
                          onChange={(e) => setzip_code(e.target.value)}
                          required
                        />
                      </div>
                      {errors.zip_code && <p className="error">{errors.zip_code}</p>}

                      <div className="field">
                        <label>no_of_rooms</label>
                        <input
                          type="text"
                          name="no_of_rooms"
                          value={no_of_rooms}
                          placeholder="no_of_rooms"
                          onChange={(e) => setno_of_rooms(e.target.value)}
                          required
                        /> 
                      </div>
                      <div className="field">
                        <label>estimate_price</label>
                        <input
                          type="text"
                          name="estimate_price"
                          value={estimate_price}
                          placeholder="estimate_price"
                          onChange={(e) => setestimate_price(e.target.value)}
                          required
                        /> 
                      </div>

                      <button className="ui button blue">Add to sell</button>
                    </form>
                  </div>
                <div>
               
                </div>
                </div>


    );
}