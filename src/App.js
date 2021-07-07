// Todo list


// import React, { useState } from "react";
// import TodoList from "./TodoList";
// let App=()=>{
//     let[setItem,upItem]=useState("");
//     let[setItem1,upItem1]=useState([]);
//     let todoList=(event)=>{
//       upItem(event.target.value)
//     }
//     let addItem =(event)=>{
//        upItem1((oldItems)=>{
//            return[...oldItems,setItem]
//        }
//        )
//        upItem('')
//     }
//     let deleteItem=(id)=>{
//         console.log("Show")
//         upItem1((oldItems)=>{
//             return oldItems.filter((arrElement,index)=>{
//                 return index != id
//             });
//         } )
//     }
//     return(
//         <div className="main">
//             <div className="center">
//             <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <div className="type">
//                 <input type="text" 
//                 value={setItem} 
//                 placeholder="Add a item" 
//                 onChange={todoList}
//                 autoComplete='off'
//                 />
//                 <button onClick={addItem} className="plus-btn">
//                     +
//                 </button>
//                 </div>
//                 <ol>
//                     {
//                         setItem1.map(
//                             function(val,index){
//                             return (<TodoList
//                             key={index}
//                             id={index}
//                             onSelect={deleteItem}
//                             text={val}/>)
//                             }
//                         )
//                     }
//                 </ol>
//             </div>
//         </div>
//     )
// }
// export default App;

// # To make a counter and with no negatuve value

// import React, { useState } from "react";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// let App=()=>{
//     let[curValue,upValue]=useState(0);
//     let increValue=()=>{
//         upValue(curValue+1)
//     }
//     let decreValue=()=>{
//        if( curValue>0){
//             upValue(curValue-1)
//        }
//         else {
//             return(alert("The Negative Value Does not Accepted"))
//         }
//     }
//     return(
//         <>
//         <h1 className="header">Counter</h1>
//         <div className="count">
//             <div>
//             <h1>{curValue}</h1>
//             <Tooltip title="Delete">
//             <Button className="decre" onClick={decreValue}><DeleteTwoToneIcon/></Button>
//             </Tooltip>
//             <Tooltip title="Add">
//             <Button className="incre" onClick={increValue}><AddCircleIcon/></Button>
//             </Tooltip>
//             </div>
//         </div>
//         </>
//     )
// }
// export default App;
// Todo list


// import React, { useState } from "react";
// import TodoList from "./TodoList";
// let App=()=>{
//     let[setItem,upItem]=useState("");
//     let[setItem1,upItem1]=useState([]);
//     let todoList=(event)=>{
//       upItem(event.target.value)
//     }
//     let addItem =(event)=>{
//        upItem1((oldItems)=>{
//            return[...oldItems,setItem]
//        }
//        )
//        upItem('')
//     }
//     let deleteItem=(id)=>{
//         console.log("Show")
//         upItem1((oldItems)=>{
//             return oldItems.filter((arrElement,index)=>{
//                 return index != id
//             });
//         } )
//     }
//     return(
//         <div className="main">
//             <div className="center">
//             <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <div className="type">
//                 <input type="text" 
//                 value={setItem} 
//                 placeholder="Add a item" 
//                 onChange={todoList}
//                 autoComplete='off'
//                 />
//                 <button onClick={addItem} className="plus-btn">
//                     +
//                 </button>
//                 </div>
//                 <ol>
//                     {
//                         setItem1.map(
//                             function(val,index){
//                             return (<TodoList
//                             key={index}
//                             id={index}
//                             onSelect={deleteItem}
//                             text={val}/>)
//                             }
//                         )
//                     }
//                 </ol>
//             </div>
//         </div>
//     )
// }
// export default App;

// # To make a counter and with no negatuve value

// import React, { useState } from "react";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// let App=()=>{
//     let[curValue,upValue]=useState(0);
//     let increValue=()=>{
//         upValue(curValue+1)
//     }
//     let decreValue=()=>{
//        if( curValue>0){
//             upValue(curValue-1)
//        }
//         else {
//             return(alert("The Negative Value Does not Accepted"))
//         }
//     }
//     return(
//         <>
//         <h1 className="header">Counter</h1>
//         <div className="count">
//             <div>
//             <h1>{curValue}</h1>
//             <Tooltip title="Delete">
//             <Button className="decre" onClick={decreValue}><DeleteTwoToneIcon/></Button>
//             </Tooltip>
//             <Tooltip title="Add">
//             <Button className="incre" onClick={increValue}><AddCircleIcon/></Button>
//             </Tooltip>
//             </div>
//         </div>
//         </>
//     )
// }
// export default App;
// Todo list


// import React, { useState } from "react";
// import TodoList from "./TodoList";
// let App=()=>{
//     let[setItem,upItem]=useState("");
//     let[setItem1,upItem1]=useState([]);
//     let todoList=(event)=>{
//       upItem(event.target.value)
//     }
//     let addItem =(event)=>{
//        upItem1((oldItems)=>{
//            return[...oldItems,setItem]
//        }
//        )
//        upItem('')
//     }
//     let deleteItem=(id)=>{
//         console.log("Show")
//         upItem1((oldItems)=>{
//             return oldItems.filter((arrElement,index)=>{
//                 return index != id
//             });
//         } )
//     }
//     return(
//         <div className="main">
//             <div className="center">
//             <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <div className="type">
//                 <input type="text" 
//                 value={setItem} 
//                 placeholder="Add a item" 
//                 onChange={todoList}
//                 autoComplete='off'
//                 />
//                 <button onClick={addItem} className="plus-btn">
//                     +
//                 </button>
//                 </div>
//                 <ol>
//                     {
//                         setItem1.map(
//                             function(val,index){
//                             return (<TodoList
//                             key={index}
//                             id={index}
//                             onSelect={deleteItem}
//                             text={val}/>)
//                             }
//                         )
//                     }
//                 </ol>
//             </div>
//         </div>
//     )
// }
// export default App;

// # To make a counter and with no negatuve value

// import React, { useState } from "react";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// let App=()=>{
//     let[curValue,upValue]=useState(0);
//     let increValue=()=>{
//         upValue(curValue+1)
//     }
//     let decreValue=()=>{
//        if( curValue>0){
//             upValue(curValue-1)
//        }
//         else {
//             return(alert("The Negative Value Does not Accepted"))
//         }
//     }
//     return(
//         <>
//         <h1 className="header">Counter</h1>
//         <div className="count">
//             <div>
//             <h1>{curValue}</h1>
//             <Tooltip title="Delete">
//             <Button className="decre" onClick={decreValue}><DeleteTwoToneIcon/></Button>
//             </Tooltip>
//             <Tooltip title="Add">
//             <Button className="incre" onClick={increValue}><AddCircleIcon/></Button>
//             </Tooltip>
//             </div>
//         </div>
//         </>
//     )
// }
// export default App;

import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import ToDoList from "./TodoList"
let App=()=>{
    let[curValue,upValue]=useState("");
    let[curItem,upItem]=useState([])
    let inputEvent=(event)=>{
        upValue(event.target.value)
    }
    let showItem=()=>{
        upItem((oldItem)=>{
            return([...oldItem,curValue])
        })
        upValue(" ")
    }
    let delItem=()=>{
        console.log('delete')
    }
return(<>
        <div className="main">
            <Card className="center">
            <br/>
                <h1>ToDo List</h1>
                <br/>
                <div className="type">
                    <input type="text"  value={curValue} placeholder="Add a item" onChange={inputEvent}/>
                    <Button className="plus-btn" onClick={showItem}><AddIcon className="plus-btn"/></Button>
                </div>
                <ol>
                    {curItem.map(
                       function (val,index){
                            return( 
                                <ToDoList
                                    text={val}
                                    key={index}
                                    id={index}
                                    onSubmit={delItem}
                                />
                                 )
                        }
                    )}
                </ol>
            </Card>
        </div>
      </>)
}
export default App;