// Obs: Todo novo componente deve ser Importado.

import { useState } from 'react'
import Agenda from './components/agenda';
import AgendaForm from './components/agendaForm';
import Search from './components/search';
import Filter from './components/filter';

// Importando o Componente CSS!
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a Academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  // Função para pesquisar uma tarefa registrada na Agenda!
  const [search, setSearch] = useState("");



  // Função para realizar o filtro de pesquisa das tarefas registradas na Agenda!
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // Função para adicionar novas tarefas na Agenda!
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
    ];

    setTodos(newTodos);
  };

  // Função para remover as tarefas registradas na Agenda!
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);

    setTodos(filteredTodos);
  };

  // Função para completar a tarefa registrada na Agenda!
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas.</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
          .filter(
            (todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted
          )
          .filter(
            (todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort(
            (a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
          ) 
          .map(
            (todo) => (<Agenda key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />)
          )
        }
      </div>
      <div>
        <AgendaForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App
