import React from "react";


export const PlayerCard = props => {
console.log(props)
    return(
        <div>
            <h1>Hello from the PlayerCard!</h1>
            <div className="card-wrapper">
            <h1 className="card-name">{props.player.name}</h1>
            <h2 className="card-team">Team: {props.player.team}</h2>
            <h4 className="card-rank">World Ranking: {props.player.rank}</h4>
 </div>
        </div>
    )
}

export default PlayerCard;