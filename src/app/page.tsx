"use client";
import { ramdomNumber } from "@/fuctions/randomNumber";
import { TodoItem } from "@/types/todoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([
    { label: "Fazer dever de casa", checked: false, id: 1 },
    { label: "Comprar o bolo", checked: false, id: 2 },
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === "") return;
    setList([
      ...list,
      { label: itemInput, checked: false, id: ramdomNumber() },
    ]);
    setItemInput("");
  };
  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };
  const toggleItem = (id: number) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }
    setList(newList);
  };
  return (
    <main className="w-screen h-screen p-4">
      <head>
        <title>Lista de Tarefas</title>
        <meta name="Lista de Tarefas" content="Organizador de tarefas" />
      </head>
      <div className="flex flex-col items-center">
        <h1 className=" text-3xl">Lista de Tarefas</h1>

        <div className="bg-gray-700 p-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="O que deseja fazer?"
            className="m-2 h-8 p-1 text-black"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
          />
          <button onClick={handleAddButton}>Adicionar</button>
        </div>

        <p className="my-4">{list.length} itens na lista </p>

        <ul className=" list-disc pl-5  ">
          {list.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                name=""
                onClick={() => toggleItem(item.id)}
                id=""
                checked={item.checked}
                className="w-6 h-6 mr-6"
              />
              {item.label} - {item.id}
              <button
                onClick={() => deleteItem(item.id)}
                className="hover:underline"
              >
                [ deletar ]
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default Page;
