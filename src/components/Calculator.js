import React, { useState } from "react";
import click from "../assets/click.wav"

function playSound() {
  new Audio(click).play()
}

export default function Calculator() {
  const [input, setInput] = useState("")
  const [oldInput, setOldInput] = useState("")
  const [operator, setOperator] = useState("")


  return (
    <>
      <div className="flex-container">

        <div className="calculator-body">
          <div className="lcd">
            <p className="lcd-numbers">{input}</p>
          </div>
    <br/>
          <div className="button-container" onClick={playSound}>
            <div>
              <button onClick={() => {
                AddToinput(setInput, input, 7)
              }}>7</button>

              <button onClick={() => {
                AddToinput(setInput, input, 8)
              }}>8 </button>

              <button onClick={() => {
                AddToinput(setInput, input, 9)
              }}>9</button>

              <button onClick={() => {
                safeSetOperator(oldInput, setOldInput, input, setInput, operator, setOperator, "+")
              }}>+</button>

            </div>
            <div>
              <button onClick={() => {
                AddToinput(setInput, input, 4)
              }}>4</button>

              <button onClick={() => {
                AddToinput(setInput, input, 5)
              }}>5 </button>

              <button onClick={() => {
                AddToinput(setInput, input, 6)
              }}>6</button>
              <button onClick={() => {
                safeSetOperator(oldInput, setOldInput, input, setInput, operator, setOperator, "-")
              }}>-</button>
            </div>
            <div>
              <button onClick={() => {
                AddToinput(setInput, input, 1)
              }}>1</button>

              <button onClick={() => {
                AddToinput(setInput, input, 2)
              }}>2 </button>

              <button onClick={() => {
                AddToinput(setInput, input, 3)
              }}>3</button>


              <button onClick={() => {
                safeSetOperator(oldInput, setOldInput, input, setInput, operator, setOperator, "*")
              }}>x</button>

            </div>
            <div>
              <button onClick={() => {
                AddToinput(setInput, input, 0)
              }}>0</button>

              <button onClick={() => {
                if (!input) setInput("0.")
                if (!input.includes(".")) AddToinput(setInput, input, ".")
              }}>.</button>

              <button onClick={() => {
                safeSetOperator(oldInput, setOldInput, input, setInput, operator, setOperator, "/")
              }}>/</button>

              <button onClick={() => {
                const calc = runCalculation(oldInput,setOldInput,input,setInput,operator,setOperator)
                setInput(calc)
                setOldInput(undefined)
                setOperator(undefined)
              }}>=</button>
            </div>

            <div >
              <button onClick={() => {
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

function runCalculation(Old, setOld, In, setIn, op, setOp) {
  let calc = 0
  if (op === "+") calc = Number(In) + Number(Old)
  if (op === "-") calc = Number(Old) - Number(In)
  if (op === "*") calc = Number(In) * Number(Old)
  if (op === "/") calc = Number(Old) / Number(In)

  return calc
}

function safeSetOperator( Old, setOld, In, setIn, op, setOp, opType) {

  if(Old && In && op){
    const calc = runCalculation(Old, setOld, In, setIn, op, setOp)
    setOp(opType)
    setOld(calc)
    setIn(undefined)
    return
  } 
  if (op === "") setOp(opType)
  else if (op != opType) {
    setOp(opType)
    setOld(In)
    setIn(undefined)
  }
}

function AddToinput( setPass, pass = "", value = "") {

  if (pass.length < 15) setPass(pass.toString() + value.toString())
}
