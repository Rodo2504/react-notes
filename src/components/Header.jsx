import React from "react";

function Header({ handleDarkMode }){
    return(
        <div className="header">
            <h1>Notas</h1>
            <button className="save" onClick={()=>
                handleDarkMode(
                    (previoousDarkMode) => !previoousDarkMode
                )
            }
            
            >Cambiar Fondo</button>
        </div>
    )
}

export default Header;