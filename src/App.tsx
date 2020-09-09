import React, { useState, useEffect } from 'react';
import InputTodo from "./InputTodo";
import './App.css';
import TodoList from "./TodoList";

function App() {

  const [list, setList] = useState<any>({});

  const updateList = (id: string, newData: any) => {
    let newlist = {
      ...list,
      [id]: newData
    };
    setList(newlist);
    localStorage.setItem("List", JSON.stringify(newlist));
  }

  const updateListData = (id: string) => {
    let temp = {
      ...list,
      [id]: {
        ...list[id],
        "complete": !list[id].complete
      }
    }
    setList(temp);
    localStorage.setItem("List", JSON.stringify(temp));
  }

  useEffect(() => {
    
    let data = localStorage.getItem("List");
    if (typeof data === 'string') {
      setList(JSON.parse(data));
    } else setList({});


  }, [])

  return (
    <div className="App">
      <header className="App-header">
        My TODO App
      </header>
      <div style={{margin: 10}}>
        <InputTodo callback={updateList} />
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
