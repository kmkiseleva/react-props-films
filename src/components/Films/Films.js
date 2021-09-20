import styles from "./Films.module.css";
import Stars from "../Stars";

const sourceData = [
  {
    id: "dune",
    title: "Dune",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/ru/f/f1/%D0%94%D1%8E%D0%BD%D0%B0_%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    rating: 5,
    genre: "Fiction",
    price: 50,
  },
  {
    id: "games",
    title: "The Hunger Games: Catching Fire",
    imgURL:
      "https://english-films.online/uploads/cache/golodnye-igry-i-vspyhnet-plamja-smotret-onlajn-b4b21174.jpg",
    rating: 4,
    genre: "Action",
    price: 45,
  },
];

const Films = () => {
  return (
    <div className={styles.container}>
      {sourceData.map((film) => (
        <div className={styles["film-container"]}>
          <div className={styles["img-wrapper"]}>
            <img className={styles["img-item"]} src={film.imgURL} alt="img" />
            <div className={styles.genre}>{film.genre}</div>
          </div>
          <div>
            <div className={styles["film-body"]}>
              <h2 className={styles["film-title"]}>{film.title}</h2>
              <div className={styles["film-rating"]}>
                <Stars count={film.rating} />
              </div>
              <div className={styles["film-service"]}>
                <div className={styles.buy}>Buy {film.price.toFixed(2)}$</div>
              </div>
            </div>
          </div>
          <div className={styles["film-reactions"]}>
            <div className={styles.like}></div>
            <div className={styles.share}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Films;
