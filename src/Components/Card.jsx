import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
const Card = ({
  header = null,
  title,
  children = null,
  path = "#",
  image = false
}) => {
  return (
    <div
      className="card text-white bg-dark mb-3 mx-auto"
      style={{ maxWidth: "18rem" }}
    >
      {header && (
        <div className="card-header d-flex justify-content-between">
          <div>
            {header.star} <i className="bi bi-brightness-high"></i>
          </div>{" "}
          <div>{header.position}</div>
        </div>
      )}
      {image && (
        <LazyLoadImage
          alt={""}
          effect="blur"
          className="card-img-top"
          src={`https://source.unsplash.com/random/200x100`}
        />
      )}
      <div className="card-body">
        <Link to={path} className="text-decoration-none text-white">
          <h5 className="card-title">{title}</h5>
        </Link>
        {children && <div className="card-text">{children}</div>}
      </div>
    </div>
  );
};
export default Card;
//card-img-top
