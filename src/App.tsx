import React, { useState, useEffect } from 'react';
import InputTodo from "./InputTodo";
import './App.css';
import TodoList from "./TodoList";

function App() {

  const [list, setList] = useState<any>({});
  const [completed, setCompleted] = useState<number>(0);

  const updateList = (id: string, newData: any) => {
    let newlist = {
      ...list,
      [id]: newData
    };
    setList(newlist);
    localStorage.setItem("List", JSON.stringify(newlist));
  }

  const updateListData = (id: string) => {
    let temp: { [id: string]: any } = {};
    temp = {
      ...list,
      [id]: {
        ...list[id],
        "complete": !list[id].complete
      }
    }
    let count = (Object.values(temp)).filter(f => f.complete);
    setList(temp);
    setCompleted(count.length);
    localStorage.setItem("List", JSON.stringify(temp));
  }
  const checkComplete = (data: any) => {
    let temp: { [id: string]: any } = data;
    let count = (Object.values(temp)).filter(f => f.complete);
    setCompleted(count.length);
  }

  useEffect(() => {

    let data = localStorage.getItem("List");
    if (typeof data === 'string') {
      setList(JSON.parse(data));
      checkComplete(JSON.parse(data))
    } else {
      setList({});
      checkComplete({});
    }
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        My TODO App
      </header>
      <div style={{ margin: 10 }}>
        <InputTodo callback={updateList} />
      </div>
      <div style={{ margin: 10, textDecoration: "underline" }}>
        {"Total todos remaining: " + completed + " of " + Object.values(list).length}
      </div>
      <div>
        <ul>
          {
            (Object.keys(list)).length > 0 && Object.values(list).map((item: any, i: number) =>
              <TodoList todoItem={item} key={i} callback={updateListData} />
            )
          }

        </ul>

      </div>
    </div>
  );
}

export default App;
