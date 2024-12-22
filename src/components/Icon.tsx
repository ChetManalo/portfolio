import "./styles/icon.scss";

const Icon = ({ name, image, setWindow }: Icon) => {
  return (
    <div className="icon" onClick={() => setWindow(true)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Icon;