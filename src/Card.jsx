import React from "react";

function Card(props){
    return <> 
        <div className="content">
                <div className="poster">
                    <img src={props.imageUrl} alt="img not found"></img>
                </div>
                <div className="title-1">{props.type}</div>
                <div className="title-2">{props.title}</div>
            </div>
    </>
}
export default Card;