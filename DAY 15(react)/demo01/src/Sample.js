import React, { Component } from 'react'

class Sample extends Component
{
    state = {company : "CDAC"}

    constructor()
    {
        super();
        console.log("Sample constructor is called.")
    }

    componentDidMount()
    {
        console.log("Component did mount is called..")
    }

    componentDidUpdate()
    {
        console.log("Component did update is called..")

    }
    doSomething = () => {
        console.log("do something is called .")

        console.log("State value is now changing to ", this.state.company)
        this.setState({company : "sunbeam"})
    }

    render()
    {
        console.log("render is called")
        return (
            <div>
                <h1>welcome {this.state.company}</h1>
                <button onClick={this.doSomething}>click here</button>
            </div>
        );
    }

}

export default Sample;