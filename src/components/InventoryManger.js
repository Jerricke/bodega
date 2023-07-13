import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([]) //create state for inventory data
    const [isReorder, setIsReorder] = useState({}) //create state to keep track of which item is in the reorder list

    useEffect( () => {
        fetch("http://localhost:8001/inventory")
            .then(r => r.json())
            .then(data => {
                setInventory(data)
                let newObj = {}; //create a temporary object to hold the new states (to avoid async issues)
                data.map( item => {
                    newObj = {...newObj, [item.name]: false} //for each item, set it's state to false
                    return newObj
                }) 
                setIsReorder(newObj) //update state object
                })
    }, [])

    function handleClick(itemName, tester) { //a complicated solution to make sure the onClick button works properly
        if (!isReorder[itemName]) { //if the button is not in the reorder list, then proceed
            setIsReorder({
                ...isReorder,
                [itemName]: !isReorder[itemName]
            })
        } else if (!tester) { //if the button IS in the reorder list, and that the tester (which is a var to check if it is a card generated in the inventory list) is not true, proceed
            setIsReorder({
                ...isReorder,
                [itemName]: !isReorder[itemName]
            })
        } else return null
    }

    // READ inventoryItemCard to understand this issue with the code
    // function handleClick(itemName) {
    //     setIsReorder({
    //         ...isReorder,
    //         [itemName]: !isReorder[itemName]
    //     })
    // }

    function handleDelete(itemId) { //a delete function that has the deleted item's ID passed thru 
        fetch(`http://localhost:8001/inventory/${itemId}`, {
            method: "DELETE"
        })
        .then(r => r.json())

        const itemUpdate = inventory.filter( item => { //filter the new data and return the item if ID does not match the deleted item ID
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