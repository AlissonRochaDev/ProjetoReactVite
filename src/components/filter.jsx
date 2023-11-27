const filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <span>Satatus:</span>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>
                    <span>Ordem Alfabética:</span>
                    <button onClick={() => setSort("ASC")}>ASC</button>
                    <button onClick={() => setSort("Desc")}>DESC</button>
                </p>
            </div>
        </div>
    )
}

export default filter