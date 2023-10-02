// Class Component
class MyApp extends React.Component {
    // Constructor method
    constructor() {
        super();
        // State Declaration
        this.state = {
            title: "Learn React"
        };
        // Ref Declaration
        this.foo = "Hei";
        console.log('A:', this.foo);
    }

    // Arrow Function
    handleButtonClick = () => {
        console.log('B:', this.foo);
        this.foo = "Hello"; // Change variable value
        console.log('C:', this.foo);

        if (this.state.title === "Learn React") {
            this.setState({ title: "Learn JavaScript" });
        }
        else {
            this.setState({ title: "Learn React" });
        }
    }

    // Arrow Function
    handleFooClick = () => {
        console.log('Get Foo:', this.foo);
        alert(this.foo);
    }

    render() {
        return (
            <div>
                <h3>Title: {this.state.title}</h3>
                <div>
                    <p><button onClick={this.handleButtonClick}>Change Title</button></p>
                    <p><button onClick={this.handleFooClick}>Get Foo Value</button></p>
                </div>
            </div>
        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);