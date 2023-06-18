import React from "react";
import Card from './Card';


const CardList=({Players})=>{
    
    return(
        <div>
            {Players.map((item,i)=>{
        return (<Card key={i} id={item.id} name={item.name} pic={item.pic} position={item.postion}/>);
    })}
        </div>
    );

}

export default CardList;