//Este componente deverá receber dados por Props e mostrar as Informações em Tela
export function Card({ name, position, picture }) {
  return (
    <div className="card-component">
      <img src={picture} alt={`${name}`} />
      <div className="card-body">
        <h1>{name}</h1>
        <span>{position}</span>
      </div>
    </div>
  )
}