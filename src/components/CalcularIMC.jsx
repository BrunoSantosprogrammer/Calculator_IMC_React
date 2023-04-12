import styles from './Styles/Styles.module.css'

const CalcularIMC = (props) => {
    const calc=() => {
        props.setResultado(props.peso/(props.altura*props.altura))
    }
    return(
        <div>
            <button className={styles.btn} onClick={calc}>Calcular</button>
        </div>
    )
}

export default CalcularIMC;