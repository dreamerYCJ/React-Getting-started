import React from 'react';
import ThemeBox from "./ThemeBox"
import ThemeContext from "./ThemeContext"

const theme = {
    light: {
        bgColor: "gray",
        color: "blue"
    },
    dark: {
        bgColor: "black",
        color: "white"
    }
}

class ThemeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            theme:"dark"       
        }
        // this.ChangeTheme = this.ChangeTheme.bind(this)
    }
    ChangeTheme(theme){
       this.setState({
           theme:theme
       })
    }
    render() {
        return (
            <ThemeContext.Provider value={theme[this.state.theme]}>
                <div className="row">
                    <div className="col-4 offset-4">
                        <button className="btn btn-light" onClick = {()=>{this.ChangeTheme('light')}}>浅色主题</button>
                        <button className="btn btn-dark" onClick = {()=>{this.ChangeTheme('dark')}}>深色主题</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-2 mt-2">
                        <ThemeBox />
                    </div>
                </div>
            </ThemeContext.Provider>
        )
    }
}
export default ThemeButton