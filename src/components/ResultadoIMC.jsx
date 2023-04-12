import styles from './Styles/Styles.module.css'

const Resultado = (props) => {
    return(
        <div>
            <p className={styles.resultado}>
            Resultado: {props.resultado.toFixed(2)}
            </p>
        </div>
    )
}

export default Resultado;