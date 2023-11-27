import React, { useState } from 'react'

const AgendaForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!value || !category) return;
    // teste -> console.log(value, category);
    // Adicionar todo/agenda!
    // Limpar os Campos!
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="agendaForm">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite um Título..." value={value} onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default AgendaForm