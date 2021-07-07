// TodoList using the Material UI

// import React, { useState } from "react";
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import AddIcon from '@material-ui/icons/Add';
// import ToDoList from "./TodoList"
// let App=()=>{
//     let[curValue,upValue]=useState("");
//     let[curItem,upItem]=useState([])
//     let inputEvent=(event)=>{
//         upValue(event.target.value)
//     }
//     let showItem=()=>{
//         upItem((oldItem)=>{
//             return([...oldItem,curValue])
//         })
//         upValue(" ")
//     }
//     let delItem=()=>{
//         console.log('delete')
//     }
// return(<>
//         <div className="main">
//             <Card className="center">
//             <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <div className="type">
//                     <input type="text"  value={curValue} placeholder="Add a item" onChange={inputEvent}/>
//                     <Button className="plus-btn" onClick={showItem}><AddIcon className="plus-btn"/></Button>
//                 </div>
//                 <ol>
//                     {curItem.map(
//                        function (val,index){
//                             return( 
//                                 <ToDoList
//                                     text={val}
//                                     key={index}
//                                     id={index}
//                                     onSubmit={delItem}
//                                 />
//                                  )
//                         }
//                     )}
//                 </ol>
//             </Card>
//         </div>
//       </>)
// }
// export default App;