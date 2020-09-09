import React, { useState } from "react";

type props = {
    callback: any
}

const InputTodo: React.FC<props> = React.memo(props => {

    const { callback } = props;
    const [value, setValue] = useState<string>("");

    const handleChange = (event: any) => {
        setValue(event.currentTarget.value);
    }

    const handleClick = () => {
        let randomeId = Math.floor(Math.random() * (999 - 100 + 1) + 100) + value;
        callback(randomeId, { id: randomeId, name: value, complete: false });
        setValue("");
    }

    return (
        <div>
            <span>
                <input type="text" value={value} placeholder="Please enter todo item" name="todo" onChange={handleChange} />
            </span>
            <span style={{ marginLeft: 10, cursor: value.length > 0 ? "pointer" : "auto", pointerEvents: value.length > 0 ? "auto" : "none", opacity: value.length > 0 ? 1 : 0.5}}>
                <button onClick={handleClick} >Add ToDo</button>
            </span>

        </div>
    )
})

export default InputTodo;