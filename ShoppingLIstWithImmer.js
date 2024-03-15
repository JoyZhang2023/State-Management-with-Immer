import { useImmer } from "use-immer";

function ShoppingListWithImmer () {
    var itemID = 0;
    const [shoppingList, setShoppingList] = useImmer([
        {id: itemID,
        name:"apple",
        quantity: 64,
        details: {category: "fruit", notes: "perishible"}
    }]);

    const addItem = () => {
        itemID += 1;
        const itemName = document.getElementById("itemName").value
        setShoppingList(draft=>{
            draft.push({
                id:itemID,
                name:itemName,
                quantity: document.getElementById("quantityInput").value,
                details: {
                    category: document.getElementById("categoryInput").value,
                    notes: document.getElementById("noteInput").value
                }
            });
        });
    };

    const updateItem = () => {

        /*document.getElementById("changeItem").addEventListener("click", (event)=>{
            event.preventDefault();
        });
        
        const newList = shoppingList.filter((item)=> item.id !== id);
        setShoppingList(draft=>{
            draft = newList;
        }); */
        //alert("update item");

    };

    const removeItem = (id) => {
        /*document.getElementById("removal").addEventListener("click", (event)=>{
            event.preventDefault();
        });*/
        
    };

    
    const displayItem = shoppingList.map((item) => {
        return (
            <tr key= {item.id}>
                <th>{item.name}</th>
                <th>{item.quantity}</th>
                <th>{item.details.category}</th>
                <th>{item.details.notes}</th>
                <th>
                    <button id="removal" onClick={removeItem(item.id)}>Remove this item</button>
                    <button id="changeItem" onClick={updateItem(item.id)}>Update this item</button>
                </th>
            </tr>    
            )
    });



    return (
        <>
        <table> 
        <thead>
          <tr>
            <th>Item name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Note</th>
            <th>Action</th>
          </tr> 
        </thead>
        <tbody>
            {displayItem}
        </tbody>
        </table>
        <input type="text" id="itemName" placeholder='Enter item here'></input> <br></br>
        <input type="text" id="quantityInput" placeholder='Enter quantity here'></input> <br></br>
        <input type="text" id="categoryInput" placeholder='Enter category here'></input> <br></br>
        <input type="text" id="noteInput" placeholder='Enter note here'></input> <br></br>
        <button onClick={addItem}>Add item to shoppping list</button> 
        <br></br> <br></br>
        <input type="text" id="NameUpdate" placeholder='Update item here'></input> 
        <input type="text" id="quantityInput" placeholder='Update quantity here'></input> 
        <input type="text" id="categoryInput" placeholder='Update category here'></input> 
        <input type="text" id="noteInput" placeholder='Update note here'></input> 


        </>
    );
};

export default ShoppingListWithImmer;