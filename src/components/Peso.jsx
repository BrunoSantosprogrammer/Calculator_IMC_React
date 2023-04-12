import styles from "./Styles/Styles.module.css";

const Peso = (props) => {
    return(
        <div className={styles.inputs} >
            <h1>Calculator IMC</h1>
            <label className={styles.peso}>
                Peso
            </label>
            <input placeholder="ex: 70"  type="number" value={props.peso} onChange={(e)=> {props.setPeso(e.target.value)}} />
        </div>
    )
}

export default Peso;