import React ,{useState} from 'react';
import web from "../src/components/iphone6.png"

import ListCom from "./ListCom";

const Speed=()=>{
	const [undefine,fun]=useState("");
	const eventItem=(event)=>{
	fun(event.target.value);
	}
	const [item,setItem]=useState([]);
	const clickItem=()=>{
		if(undefine==='')
        {
            alert("You cannot leave an empty field");
        }
        else{
		setItem((i)=>{
		return [...i,undefine]
	    });
	    fun("");
	}
	};

	const deleteItem=(id) =>{
		console.log("deleted");
		setItem((i)=>{
			return i.filter((arrElem,ind)=>{
				return ind!==id;
			})
		})
	}
	

	return (<>

	<div className="container-fluid">
	
		<div className='row'>
			<div className="col-10 mx-auto ">
			<h1 className="text-center mt-3"> TINDOG </h1>
				<div className='row '>

					
					
						<div className="inputField col-md-12 col-lg-6  ">

						
						<input  type="text" className="form-control" placeholder=" Your Dog Likes " value={undefine} onChange={eventItem}></input>
						
						</div>
						<div className="col-md-12 col-lg-6 "><button className="btncl btn btn-primary" onClick={clickItem}>ADD</button></div>
						
				
        		<div className="row">

					<div className="col-md-12 col-lg-6  ">	
					
					<ul>
						{
						
						item.map((val,ind)=>{
						return <ListCom key={ind} id={ind} text={val} onSelect={deleteItem}/>;}
						)
						
						}
					</ul>
					</div>
					
					<div className=" col-md-12 animated homeclass header-img  col-lg-6 mt-5  ">
						<img src={web} className="img-fluid animated" alt="" />
					</div>
				</div>

				</div>
			</div>
		</div>
		
	</div>
	</>
	)
}
export default Speed;