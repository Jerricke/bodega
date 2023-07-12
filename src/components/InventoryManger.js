import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([])
    const [isReorder, setIsReorder] = useState({})

    useEffect( () => {
        fetch("http://localhost:8001/inventory")
            .then(r => r.json())
            .then(data => {
                setInventory(data)
                let newObj = {};
                data.map( item => {
                    newObj = {...newObj, [item.name]: false}
                    return newObj
                }) 
                setIsReorder(newObj)
                })
    }, [])

    function handleClick(itemName) {
        setIsReorder({
            ...isReorder,
            [itemName]: !isReorder[itemName]
        })
    }

    function handleDelete(itemId) {
        fetch(`http://localhost:8001/inventory/${itemId}`, {
            method: "DELETE"
        })
        .then(r => r.json())

        const itemUpdate = inventory.filter( item => {
            return item.id !== itemId
        })

        setInventory(itemUpdate)
    }

    return(
        <div className="container">
            <CurrentInventoryList handleDelete={handleDelete} handleClick={handleClick} inventory={inventory}/>
            <ReorderInventoryList isReorder={isReorder} handleClick={handleClick} inventory={inventory}/>
        </div>
    );
}

export default InventoryManager;