import React, {useState} from "react";

export default function Calculator(){
    const [input, setInput] = useState("")
    const [oldInput, setOldInput] = useState("")
    const [operator, setOperator] = useState("")
    
  
    return(
    <>
<div className="flex-container">

    <div className="calculator-body">
      <div className="lcd">
           <p>{input}</p> 
      </div>

   <div className="button-container">
        <div>
          <button onClick={()=>{
              AddToinput(setInput,input,7)
            }}>7</button>

          <button onClick={()=>{
              AddToinput(setInput,input,8)
            }}>8 </button>
            
          <button onClick={()=>{
              AddToinput(setInput,input,9)
            }}>9</button>

            <button onClick={()=>{
              setOldInput(input)
              setInput(undefined)
              setOperator("+")
            
            }}>+</button>
            
        </div>
        <div>
          <button onClick={()=>{
              AddToinput(setInput,input,4)
            }}>4</button>

          <button onClick={()=>{
              AddToinput(setInput,input,5)
            }}>5 </button>
            
          <button onClick={()=>{
              AddToinput(setInput,input,6)
            }}>6</button>
             <button onClick={()=>{
              setOldInput(input)
              setInput(undefined)
              setOperator("-")
            }}>-</button>
        </div>
        <div>
          <button onClick={()=>{
              AddToinput(setInput,input,1)
            }}>1</button>

          <button onClick={()=>{
              AddToinput(setInput,input,2)
            }}>2 </button>
            
          <button onClick={()=>{
              AddToinput(setInput,input,3)
            }}>3</button>
            

            <button onClick={()=>{
              setOldInput(input)
              setInput(undefined)
              setOperator("*")
            }}>x</button>

        </div>
        <div>
        <button onClick={()=>{
              AddToinput(setInput,input,0)
            }}>0</button>

            <button onClick={()=>{
              AddToinput(setInput,input,".")
            }}>.</button>

            <button onClick={()=>{
              setOldInput(input)
              setInput(undefined)
              setOperator("/")
            }}>/</button>
            
            <button onClick={()=>{
              let calc = 0
              if(operator==="+")calc = Number(input) +  Number(oldInput)
              if(operator==="-")calc = Number(oldInput) -  Number(input)
              if(operator==="*")calc = Number(input) * Number(oldInput)
              if(operator==="/")calc = Number(oldInput) / Number(input)
            
              setOldInput(undefined)
              setOperator(undefined)
              //setAnswer(calc)
              setInput(calc)
            }}>=</button>
        </div>

        <div > 
        <button onClick={()=>{
              setInput(undefined)
              setOldInput(undefined)
              setOperator(undefined)
            }}>C</button>

        </div>
        
    </div>
  </div>
</div>
        </>
    )
}

function AddToinput( setPass, pass="", value=""){
  
      setPass(pass.toString()+value.toString())
}