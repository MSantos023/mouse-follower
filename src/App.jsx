import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false); //recoge en un state si esta activado o no
  const [position, setPosition] = useState({ x: 0, y: 0 }); //recoge en un state la posicion con x e y

  //se crea el efecto, se puede tener cuantos efectos quieras
  useEffect(() => {
    //se asigna al state los valores que recoge mediante el evento a los valores x e y
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    //ejecuta el evento si esta activado
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    //limpia el evento, si no, el evento una vez activado nunca para
    // se ejecuta cuando cambian las dependencias o se desmonta el componente
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: " none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
};

function App() {

  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() =>{setMounted(!mounted)}}>montar o Desmontar followMouse component</button>
    </main>
  );
}

export default App;
