import React, { Fragment, useState, useEffect } from "react";
import { checkServerIdentity } from "tls";

type props = {
    todoItem: any,
    callback: any
}

const TodoList: React.FC<props> = React.memo(props => {

    const { todoItem, callback } = props;

    // const [checked, setChecked] = useState<boolean>(false);



    return (
        <Fragment>
            <li style={{ textDecoration: todoItem.complete ? "line-through" : "none", cursor: "pointer" }} onClick={() => callback(todoItem.id)}>{todoItem.name}</li>
        </Fragment >
    )
})

export default TodoList;