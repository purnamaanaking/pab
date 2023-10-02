// Functional Component
const Cat = (props) => {
    // State declaration with Hook
    const [isHungry, setIsHungry] = React.useState(true);

    // Return Value with JSX
    return (
        <div>
            <p>I am {props.name}, and I am {isHungry ? " hungry" : " full"}!</p>
            <button
                onClick={() => {
                    // Change the state value
                    setIsHungry(false);
                }}
                disabled={!isHungry}
            >
                {isHungry ? "Pour me some milk, please!" : "Thank you!"}
            </button>
        </div>
    );
}

// Functional Component
const Cafe = () => {
    return (
        <div>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </div>
    );
}

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);