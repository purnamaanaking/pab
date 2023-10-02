// Functional Component
const Counter = () => {
    // State Declaration
    const [counter, setCounter] = React.useState(0);

    // Arrow Function
    const handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));

        // Change State Value
        setCounter(counter + val);
    }

    // Hook
    React.useEffect(() => {
        console.log("Ini seperti componentDidMount()");
        return () => {
            console.log("Ini seperti componentWillUnmount()");
        }
    }, []);

    // Hook
    React.useEffect(() => {
        console.log("Ini seperti componentDidMount() & componentDidUpdate()");
    });

    return (
        <div>
            <h1>{counter}</h1>
            <button val="+1" onClick={handleButtonClick}>Counter + 1</button>
            <button val="-1" onClick={handleButtonClick}>Counter - 1</button>
        </div>
    )
}

// Functional Component
const MyApp = () => {
    // State Declaration
    const [showCounter, setShowCounter] = React.useState(false);

    // Arrow Function
    const handleButtonClick = () => {
        // Change state value
        setShowCounter(!showCounter);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                {showCounter ? "Hide counter" : "Show counter"}
            </button>
            {showCounter && <Counter />}
        </div>
    )
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);