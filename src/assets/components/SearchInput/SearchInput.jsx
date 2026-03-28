import styles from "./SearchInput.module.css";

function SearchInput({txt, city,type, onChange, onClick }) {
  return (
    <>
    
   <nav className={styles.Nav}>
         <input value={city}type={type} onChange={onChange}  placeholder="search city..."/>
        <button type="button" onClick={onClick}>Pesquisar</button>
        <h1>{txt}</h1>
   </nav>
    </>
  );
}

export default SearchInput;
