import './index.css'

const DestinationItem = props => {
  const {destinationItemList} = props
  const {name, imgUrl} = destinationItemList

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="image-card" />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
