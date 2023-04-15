import { useSelector } from "react-redux";
import Card from "./Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      
      <div>
        {favorites.map(
          ({ id, name, status, species, gender, origin, image, onClose }) => {
            return (
              <Card
                id={id}
                key={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Favorites;