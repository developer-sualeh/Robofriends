import React from "react";

const Card = ({ name, email, id}) =>{
    return (
        <div className="tc bg-light-green ba bw2 shadow-5 dib br-4 pa3 ma2 grow">
            
            <img src={`https://robohash.org/${id}?200x200`} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    );
}

export default Card;