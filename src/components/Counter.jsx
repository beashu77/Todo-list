import React from "react";


const Counter =({initialValue})=>{
    //hooks use useState
    //hooks are set of inbuild react functions used to interact with VDOM.

    //useState is a hook in React
    //which is used to infrom VDOM of the changes that needs to be render
    const [count, setCount] =React.useState(initialValue);

    return (
        <div>
            <h1>Counter App:{count}</h1>
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>
            <button 
            onClick={() => {
                if(count>0){
                    setCount(count -1);
                }
              
                }}
                >
                Decrement
                </button>
                <button onClick={()=>{setCount(count*2)}}>Double</button>
        </div>
    )
}
export default Counter;