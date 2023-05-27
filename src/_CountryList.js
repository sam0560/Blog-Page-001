const CountryList = ({list,title,handleDelete,handleLoop}) => {
    return(
        <div className="country-list">
            <h1>{title}</h1>
            {list.map((list) => (
            <div className="list" key={list.id}>
                <h1 >{list.name}</h1>
                <p>{list.capital}</p>
                <button style={{backgroundColor: "#f1356d", color : "white"}} onClick={() => handleDelete(list.id)}>Delete</button>
            </div>
        ))}
        </div>
    );
}

export default CountryList;