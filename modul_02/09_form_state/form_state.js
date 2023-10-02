// Class Component
class MyApp extends React.Component {
    // Constructor method
    constructor(props) {
        super(props);

        // State Declaration
        this.state = {
            name: "",
            email: "",
            address: "",
            department: "",
            gender: "",
            scholarship: false
        };
    }

    // Arrow Function
    handleInputChange = (event) => {

        console.log(event.target);

        if (event.target.type === "checkbox") {
            // Change state value
            this.setState({ [event.target.name]: event.target.checked })
        }
        else {
            // Change state value
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    // Arrow Function
    handleButtonClick = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form action="" method="get" className="container">

                <div>
                    <label htmlFor="name">Name </label>
                    <input type="text" name="name" id="name" onChange={this.handleInputChange} />
                </div>

                <div>
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" id="email" onChange={this.handleInputChange} />
                </div>

                <div>
                    <label htmlFor="address">Address </label>
                    <textarea name="address" id="address" onChange={this.handleInputChange} />
                </div>

                <div>
                    <label htmlFor="department">Department </label>
                    <select name="department" value={this.state.department} onChange={this.handleInputChange}>
                        <option value="Ilmu Komputer">Ilmu Komputer</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Teknik Komputer">Teknik Komputer</option>
                    </select>
                </div>

                <div>
                    <label>Jenis kelamin </label>
                    
                    <input 
                        type="radio"
                        name="gender" 
                        id="gender1" 
                        value="Man" 
                        checked={this.state.gender === "Man"} 
                        onChange={this.handleInputChange} 
                    />
                    <label htmlFor="gender1">Man</label>
                    
                    <input 
                        type="radio" 
                        name="gender" 
                        id="gender2" 
                        value="Woman" 
                        checked={this.state.gender === "Woman"} 
                        onChange={this.handleInputChange} 
                    />
                    <label htmlFor="gender2">Woman</label>
                </div>

                <div>
                    <label>Scholarship Status </label>
                    <input type="checkbox" id="scholarship" name="scholarship" onChange={this.handleInputChange} />
                    <label htmlFor="scholarship">Get a scholarship</label>
                </div>

                <input type="submit" onClick={this.handleButtonClick} value="Save" />
            </form>
        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);