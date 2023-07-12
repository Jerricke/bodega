import React from 'react'
import InventoryItemCard from './InventoryItemCard';


function CurrentInventoryList({inventory, handleClick, handleDelete}) {

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {
                    inventory.map( item => {
                        return <InventoryItemCard key={item.id} handleDelete={handleDelete} tester={true} item={item} handleClick={handleClick}/>
                    })
                }
            </div>
        </div>
    );
}

export default CurrentInventoryList;