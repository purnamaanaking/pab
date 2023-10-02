// Class Component
class MyApp extends React.Component { 
    // Constructor method
    constructor(props) {
        super(props);
        // State Declaration
        this.state = { 
            input: "" 
        };
    }

    // Arrow Function
    handleInputChange = (event) => {
        // Change state value
        this.setState({ 
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Judul: {this.state.input}</h1>
                <input type="text" onChange={this.handleInputChange} />
            </div>
        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);