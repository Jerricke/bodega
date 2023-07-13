import React from 'react'

function InventoryItemCard({item, handleClick, handleDelete, tester = false}) {
    //default value for the tester is set to false, meaning it is not in the inventory by default
    //BUT, in the CurrentInventoryList component, we render this tester with a tester={false} value
    //This is a solution to prevent the state to be toggle-able from just clicking the item in inventory list

    return(
        <div className="card" onClick={() => handleClick(item.name, tester)} >
            <img src={item.image} alt={item.name} ></img>
            <h3>{item.name}</h3>     
            <h4>${item.price}</h4>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
    );
}


//COMMENT OUT FIRST FUNCTION AND REMOVE COMMENT FOR THIS FUNCTION TO SEE THE PROBLEM
//ALSO COMMENT OUT THE FUNCTION ON LINE 38 IN InventoryManager.js

// function InventoryItemCard({item, handleClick, handleDelete}) {
//     return(
//         <div className="card" onClick={() => handleClick(item.name)} >
//             <img src={item.image} alt={item.name} ></img>
//             <h3>{item.name}</h3>     
//             <h4>${item.price}</h4>
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//         </div>
//     );
// }

export default InventoryItemCard;