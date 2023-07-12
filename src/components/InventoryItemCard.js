import React from 'react'

function InventoryItemCard({item, handleClick, handleDelete, tester = false}) {


    return(
        <div className="card" onClick={() => handleClick(item.name, tester)} >
            <img src={item.image} alt={item.name} ></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;