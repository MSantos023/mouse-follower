import { useState } from "react";
export function TwitterFollowCard({formatUserName, userName, name}) {
  const [isFollowing, setIsFollowing] = useState(false) //la primera posicion es el valor y la segunda la forma de actualizar
  //const imgeSrc = `https://unavatar.io/twitter/${userName}`; es lo mismo que en la evalucion de abajo
  //pero abajo es mas corto y directo
  const textFolowing = isFollowing ? 'Siguiendo' : 'Seguir' //ternaria si se cumple s following el texto es siguiendo si no se cumple es seguir
  const buttonClassName = isFollowing ? "tw-followCard-button isFollowing" : "tw-followCard-button";
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/twitter/${userName}`} //al querer una evaluacion/busqueda por una prop se puede hacer de esta manera
          alt="Profile Pic"
        />
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-info-userName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>    
          <span className="tw-followCard-text">{textFolowing}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
