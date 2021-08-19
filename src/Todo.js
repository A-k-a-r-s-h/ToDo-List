import React, {useState} from 'react'
import "./Todo.css"
import {RiCloseCircleLine} from 'react-icons/ri'

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {
            
        } else  {
            setItems([ ...items, inputData]);
            setInputData('');
        }
    }

    
    // delete the items
    const deleteItem = (id) => {
        const updateditems = items.filter((elem,ind) => {
            return ind !== id;
        });

        setItems(updateditems);
    }


    // remove all 
    const removeAll = () => {
         setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>What's the Plan for Today?</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="add a task..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) }
                        />
                        <i className="fa fa-plus-circle add-btn" title="Add Item" onClick={addItem}></i> :
                    </div>

                    <div className="showItems">
                        
                        {
                            items.map((elem,ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>                                       
                                           <RiCloseCircleLine size="22" title="Delete Item" onClick={() => deleteItem(ind)}/>                                       
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn" data-sm-link-text="Remove All" onClick={removeAll}><span> REMOVE ALL </span> </button>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Todo
