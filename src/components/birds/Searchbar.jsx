function Searchbar(props) {
  return (
    <div className="form-control">
      <div className="input-group">
        <input type="text" placeholder="Busqueda..." value={props.query} onChange={props.handleImput}
          className="
            input 
            input-bordered 
            focus:-outline-offset-2 
            focus:input-primary"
        />
        <button 
          className="
            btn 
            btn-primary 
            border-2 
            border-primary 
            hover:bg-primary 
            hover:border-primary"
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </div>
  )
};
export default Searchbar;