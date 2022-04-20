import { useState, useRef, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
const CountryNames = () => {
  const countries = useSelector((state) => state.countries);
  const [allCountries, setAllCountries] = useState([]);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setAllCountries((prevState) => [...prevState, ...countries]);
        }
      });
      if (node) observer.current.observe(node);
    },
    [countries]
  );

  useEffect(() => {
    countries && setAllCountries([...countries]);
  }, [countries]);

  return (
    <>
      {allCountries &&
        allCountries.map((name, index) => {
          if (allCountries.length === index + 1) {
            return (
              <div className="col" key={index} ref={lastBookElementRef}>
                <Card title={name} path={`/${name}`} />
              </div>
            );
          }
          return (
            <div className="col" key={index}>
              <Card title={name} path={`/${name}`} />
            </div>
          );
        })}
    </>
  );
};

export default CountryNames;
