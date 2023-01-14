const validation= (homes)=>{
	let errors={};

	if(!homes.store_Id){
	errors.store_Id=" required"
    }
	
	if(!homes.address){
	errors.address="required"
	}
	if(!homes.city){
	errors.city=" required"
	}
	if(!homes.zip_code){
	errors.zip_code=" required"
	}
    if(!homes.no_of_rooms){
        errors.no_of_rooms="required"
    }
	if(!homes.estimate_price){
        errors.estimate_price="required"
    }

return errors;
}
export default validation;