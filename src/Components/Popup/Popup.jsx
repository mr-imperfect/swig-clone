import React from 'react'
import './Popup.css'
function Popup(props) {
    return (
        <div class="popup">
            <h4 onClick={props.removepopup}>Back to home</h4>
            <div className="popup-container">
            
                <img src={props.selectedpopup.itemimage} alt="" />
                <h2 style={{color:"white"}}>{props.selectedpopup.itemname}</h2>
               
                  <button>Order now</button>
            </div>
            
        </div>
    )
}

export default Popup
