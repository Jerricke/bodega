import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({inventory, handleClick, isReorder}) {
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
            {
                inventory.map( item => {
                    if (isReorder[item.name]) {
                        return <InventoryItemCard key={item.id} item={item} handleClick={handleClick}/>
                    } else return null
                })
            }
            </div>
        </div>
    );
}

export default ReorderInventoryList;