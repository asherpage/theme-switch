import { useContext } from 'react';
import { StyleContext } from '../App';

const MainContent = () => {
  let { theme, info } = useContext(StyleContext);

  return (
    <>
      <div className={theme === 'light' ? 'contentSection' : 'contentSection darkContent'}>
        <div className="gamesContainer">
          {info.map((game) => (
            <div className={theme === 'light' ? 'gameBox' : 'gameBox darkGame'} key={game.id}>
              <p className={theme === 'light' ? 'gameTitle' : 'gameTitle darkGameTitle'}>
                <p className="gameName">{game.title}</p> 
                <br />
                <p>{game.genre}</p>
              </p>
              <br />
              <p className={theme === 'light' ? 'gameDesc' : 'gameDesc darkGameDesc'}>
                <span className="gameDescription">Description: </span>
                {game.description}
              </p>
              <br />
              <br />
              <img src={game.image} alt={`${game.title} image`} className="gameImg" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;
