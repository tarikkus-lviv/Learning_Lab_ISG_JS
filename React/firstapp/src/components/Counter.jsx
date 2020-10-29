import React from 'react'


export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    component() {
        this.setState( { number: this.props.number } )
    }


    render() {

        const addNumber = this.props.counterFunction;

        return(
            <div className='Counter'>
                <button className='button'
                    onClick={() => {
                        if(!isNaN(this.state.number)) addNumber(this.state.number)
                    }
                }>
                    Counter: {this.state.number}
                </button>
                <input 
                    onCharge={(e) => {this.setState({ number: Number.parseInt(e.target.value) })}}
                    placeholder='Enter your number'
                />
            </div>
        );
    }
    
}
