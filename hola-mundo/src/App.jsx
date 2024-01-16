import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  /* otra forma de pasar props es meterlas todas dentro de un objeto pero no es buena opcion, seria asi:
  const propsEvilAFM = {isFollowing: false, userName="EvilAFM"  }
  */

  return (
    //<> es lo mismo que <react.fragment>
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Manu23_Hunter"
        name="Manuel Santos"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}      
        userName="EvilAFM"
        name="Alex el Charpo"
        //{...propsEvilAFM} asi combinado con el comentario de arriba pasaria las props se llama rest operator pero es mala practica
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="KNekro"
        name="Knekrin"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="illojuan"
        name="Juanito el malaguita"
      />
    </section>
  );
}
