import React, { useState } from 'react'

export default function Accordian(props) {
    // const [mode, setMode] = useState("Enable Dark Mode")
    // const [myStyle, setmyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })
    // const myStyleHandler = () =>{
    //     if(myStyle.backgroundColor === 'white'){
    //         setmyStyle({
    //             backgroundColor: 'black',
    //             color: 'white',
    //             border: '1px solid white'
    //         })
    //         setMode("Enable Dark Mode")
    //     }
    //         else{
    //             setmyStyle({
    //                 backgroundColor: 'white',
    //                 color: 'black',
    //             })
    //             setMode("Enable Light Mode")
    //         }
    // }
  return (
    <>
      <div className="container my-3">
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
            <h2 className="accordion-header" >
            <button className="accordion-button"  style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" >
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree"  className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
      </div>
      {/* <div className="btns">
        <button className="btn btn-primary my-4" onClick={myStyleHandler}>{mode}</button>
      </div> */}
    </>
  )
}
