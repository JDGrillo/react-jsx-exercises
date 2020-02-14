let TextInput = () => {
    // return <span>Make this component render a styled text input tag</span>
    return <input></input>
}

let YesNoRadio = () => {
    // return <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
    return (
        <div>
            <label>
                <input type="radio" value="yes" />
                Yes
    </label>
            <label>
                <input type="radio" value="yes" />
                No
    </label>
        </div>
    )
}

let SubmitButton = () => {
    // return <span>Make this component render a styled button of type "submit"</span>
    return <button>Submit</button>
}

let Form = () => {
    // return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
    return (
        <div>
            <TextInput />
            <TextInput />
            <TextInput />
            <YesNoRadio />
            <YesNoRadio />
            <SubmitButton />
        </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))