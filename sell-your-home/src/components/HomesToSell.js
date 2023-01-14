import React from "react";
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import "./styels.css"; 
// import { useReactToPrint } from "react-to-print";


export default function HomesToSell(){


const homenavigate = useNavigate();


    const submit = async (e)=>  {
      homenavigate("/Addhome");
    }
    const edit = async (e)=>  {
      edit("/EditHomesToSell");
    }
    
   



const [homes, setHomes]=useState([]);

useEffect(()=>{
function getAllHomes(){
    axios.get("http://localhost:8080/Home/get").then((res)=>{
            console.log(res.data);
            setHomes(res.data.Home);
        }).catch((err)=>{
            alert(err.message);
        })
    }
    getAllHomes();

}, [])


const dataList = [...homes];
console.log("adfgh", dataList);

const dataArr=[];

//console.log(dataList.existingSt[0])
//delete

const onDelete =(id)=>{
        
  axios.delete(`http://localhost:8080/Home/delete/${id}`).then((res)=>{
      alert("Delete Successfully");
          //get();
          axios.get("http://localhost:8080/Home/").then((res) =>{
          console.log(res.data);
          setHomes(res.data);
      }).catch((err) => {
          alert(err.message);
      })
  })
}
//DATA RETRIEVING FUNCTION
    // GET WAREHOUSE MANAGER Details FROM DB
    const [query,setQuery] = useState("");
   
 
    useEffect(()=> {
        function getHomes(){
            axios.get(`http://localhost:8080/Home/?q=${query}`).then((res) =>{
                console.log(res.data);
                setHomes(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        if(query.length === 0 || query.length > 1) getHomes();
    }, [query])

return (
  <div>
  
<div className="container">   
<hr></hr>

{/* header cards */}

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Add Your Home To Sell</h5>
        <p class="card-text">Sell your home with confidence</p>
        <form onSubmit={submit}>
        <button type="submit" className="ui button blue" >Add home to sell</button>
        </form>
      </div>
    </div>
  </div>

</div>

<h2>Sell Your Home</h2>

{/* tabel for houses to sell*/}
<div className="card shodow mb-4">        
        <div className="card-body">
            {/* search  */}
            <div class="input-group">
             <div class="form-outline">
                <input type="search" 
                name="search"
                 id="form1" 
                 class="form-control" 
                 placeholder="search" 
                  onChange={(e)=>setQuery(e.target.value)}/>
                </div>
                <button type="button" className="ui button blue">search</button>
               
 
</div>
        <hr></hr>
            <div className="table-responsive">
            <div>
           
            { <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                             <th scope="col">Home ID</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Zip_code</th>
                                            <th scope="col">No_of_rooms</th>
                                            <th scope="col">estimate_price</th>
                                            <th scope="col">EDIT</th>
                                            <th scope="col">DELETE</th>
                                            
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                     {dataList.length >0 ? (dataList.map((homes)=>(
                                        <tr>
                                        <td>{homes.home_Id}</td>
                                        <td>{homes.address}</td>
                                        <td>{homes.city}</td>
                                        <td>{homes.zip_code}</td>
                                        <td>{homes.no_of_rooms}</td>
                                        <td>{homes.estimate_price}</td>
                                        <td>
                                        <a className="ui button blue"  href={`http://localhost:3000/EditHomesToSell/${homes._id}`} type="submit">EDIT</a>
                                        </td>
                                        <td>
                                            <button type="button" className="ui button blue" onClick={()=>{onDelete(homes._id)}}>DELETE</button>
                                        </td>
                                       
                                         </tr>   
                                      ))
                                      ): (
                                        <p>No details found</p>
                                      )}
                                    </tbody>
                                </table> }
                    </div>  
            </div>
        </div>

    </div>
    </div>
</div> 

);}

   


