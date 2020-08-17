import React from 'react';
import ThemeContext from "./ThemeContext"

const ThemeBox = ()=>{
    return (
        <ThemeContext.Consumer>
            {
                theme =>{
                    return (
                        <div
                            
                            style={{background:theme.bgColor,color:theme.color}}
                        >
                            样式区域
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ThemeBox