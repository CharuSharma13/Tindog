import React,{useState} from "react";
import CloseIcon from '@material-ui/icons/Close';
import web from "../src/components/iphone6.png"
const ListCom=(props)=>{
	const [line,setLine]=useState(false);
	const butItem=()=>{

		setLine(true);
	}
	return (<><div  class="itemsStyle "><button onClick={butItem} class="btnStyle btnSt d-flex column  mt-2">
		
	<li 
	// style={{textDecoration:line ? 'line-through':
	//  'none'}}
	 >{props.text}</li> <div className=" ml-auto mb-2 "><button onClick={()=>{props.onSelect(props.id)}}  class="hex btnSt"><CloseIcon /></button></div>
	</button></div>

						</>)
};

export default ListCom;