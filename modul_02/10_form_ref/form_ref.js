// Class Component
class MyApp extends React.Component {
    constructor(props) {
        super(props);

        // Ref Declaration
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.addressRef = React.createRef();
        this.departmentRef = React.createRef();
        this.genderManRef = React.createRef();
        this.genderWomanRef = React.createRef();
        this.scholarshipRef = React.createRef();
    }

    // Arrow Function
    handleFormSubmit = (event) => {
        event.preventDefault();

        // Get Ref Value
        let hasil = {
            name: this.nameRef.current.value,
            email: this.emailRef.current.value,
            alamat: this.addressRef.current.value,
            department: this.departmentRef.current.value,
            genderMan: this.genderManRef.current.checked,
            genderWoman: this.genderWomanRef.current.checked,
            scholarship: this.scholarshipRef.current.checked,
        }
        
        console.log(hasil);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} noValidate>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" ref={this.nameRef} />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" ref={this.emailRef} />
                    </div>

                    <div>
                        <label htmlFor="address">Address: </label>
                        <textarea name="address" id="address" ref={this.addressRef} />
                    </div>

                    <div>
                        <label htmlFor="department">Department: </label>
                        <select name="department" ref={this.departmentRef}>
                            <option value="Ilmu Komputer">Ilmu Komputer</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Teknik Komputer">Teknik Komputer</option>
                        </select>
                    </div>

                    <div>
                        <label>Gender: </label>

                        <input 
                            type="radio" 
                            name="gender" 
                            id="gender1"
                            value="Man" 
                            ref={this.genderManRef} 
                        />
                        <label htmlFor="gender1">Man</label>
                        
                        <input 
                            type="radio" 
                            name="gender" 
                            id="gender2"
                            value="Woman" 
                            ref={this.genderWomanRef} 
                        />
                        <label htmlFor="gender2">Woman</label>
                    </div>

                    <div>
                        <label>Scholarship Status: </label>
                        <input 
                            type="checkbox" 
                            id="scholarship" 
                            name="scholarship"
                            ref={this.scholarshipRef} 
                        />
                        <label htmlFor="scholarship">Get a scholarship</label>
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);