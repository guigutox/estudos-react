import styles from './CarDetails.module.css'

const CarDetails = ({brand, name, year}) => {

return (
    <div>
        <p>{brand}, {name}, {year}</p>
    </div>
  )
}

export default CarDetails