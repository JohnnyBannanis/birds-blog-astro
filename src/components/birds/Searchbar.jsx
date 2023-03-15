import {useRef} from "react";

function Searchbar(props) {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="form-control lg:col-span-2 lg:col-start-2">
      <div className="input-group">
        <input id="inputBox" type="text" placeholder="Busqueda..." value={props.query} onChange={props.handleImput} ref={inputRef}
          className="
            w-full
            input 
            input-bordered 
            focus:-outline-offset-2 
            focus:input-primary"
        />
        <span onClick={handleClick}
          className="
            btn-primary 
            border-2 
            border-primary 
            hover:bg-primary 
            hover:border-primary
            "
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </span>
      </div>
    </div>
  )
};
export default Searchbar;