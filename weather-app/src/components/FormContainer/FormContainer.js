import React, { Component } from 'react'

const apiKey = 'caa8bad954c9c35e58311cf490a989ed';


export default class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'London',
            temp: 0,
            id: null,
            error: null,
        };
    }

    componentDidMount(){
        const {name} = this.state;
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=` + apiKey)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=` + apiKey)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                this.setState({
                    name: result.name,
                    temp: result.main.temp,
                    id: result.weather[0].id
                });
            })
    }

    render() {
        const {name, temp, id} = this.state;
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.id}</h1>
                <h1>{this.state.temp}</h1>
            </div>
        )
    }
}
