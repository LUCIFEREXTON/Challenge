import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./Card";

const AllBrands = () => {
  const { country } = useParams();
  const data = useSelector((state) => state.data);
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    data && setBrands([...data.filter((brand) => brand.Country === country)]);
  }, [country, data]);

  return (
    <>
      {brands &&
        [...brands].map((brand, i) => (
          <div className="col" key={i}>
            <Card title={brand.Brand} path={`/brand/${i}`} image={true} />
          </div>
        ))}
    </>
  );
};

export default AllBrands;
