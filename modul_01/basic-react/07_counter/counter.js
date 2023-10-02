// MyApp Component
class MyApp extends React.Component {
    state = { 
        counter: 0 
    };

    handleDec = () => {
        // Change the state value
        this.setState({ counter: this.state.counter - 1 });
    }

    handleInc = () => {
        // Change the state value
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleDec}> - 1</button>
                <button onClick={this.handleInc}> + 1</button>
            </div>
        )
    }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);