import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "./Card";
import { useEffect, useState } from "react";

const Brand = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [header, setHeader] = useState(null);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    data && setBrand(data[id]);
  }, [id, data]);

  useEffect(() => {
    brand &&
      setHeader({
        star: brand?.Stars,
        position: brand["Top Ten"]
      });
  }, [brand]);

  return (
    <Card header={header} title={brand?.Brand}>
      <div className="row">Country: {brand?.Country}</div>
      <div className="row">Variety: {brand?.Variety}</div>
      <div className="row">Style: {brand?.Style}</div>
    </Card>
  );
};

export default Brand;
