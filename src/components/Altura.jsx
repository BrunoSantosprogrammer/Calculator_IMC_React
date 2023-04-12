import styles from './Styles/Styles.module.css'

const Altura = (props) => {
    return(
        <div className={styles.inputs}>
            <label>
                Altura
            </label>
            <input placeholder='ex: 1.75'  type="number" value={props.altura} onChange={(e)=> {props.setAltura(e.target.value)}} />
        </div>
    )
}

export default Altura;