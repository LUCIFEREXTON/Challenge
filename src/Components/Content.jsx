import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CountryNames from "./CountryNames";
import Brand from "./Brand";
import AllBrand from "./AllBrand";
const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
        );
        dispatch({ type: "STORE_DATA", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className="container border">
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
        <Switch>
          <Route exact path="/brand/:id" component={Brand} />
          <Route exact path="/:country" component={AllBrand} />
          <Route exact path="/" component={CountryNames} />
        </Switch>
      </div>
    </div>
  );
};

export default Content;
