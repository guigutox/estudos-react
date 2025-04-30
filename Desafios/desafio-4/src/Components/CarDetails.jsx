import styles from './CarDetails.module.css'

const CarDetails = ({brand, name, year}) => {

return (
    <div className={styles.card}>
        <p>{brand}, {name}, {year}</p>
    </div>
  )
}

export default CarDetails