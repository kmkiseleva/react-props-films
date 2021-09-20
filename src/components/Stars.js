import Star from "./Star";

const Stars = ({ count }) => {
  if (count < 1 || count > 5 || typeof count != "number") {
    return null;
  }

  const renderStars = [...Array(count).keys()].map((star) => (
    <Star key={Math.random()} />
  ));

  return <ul className="card-body-stars u-clearfix">{renderStars}</ul>;
};

export default Stars;
