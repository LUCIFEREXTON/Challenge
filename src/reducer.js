const initialState = {
  data: null,
  countries: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_DATA": {
      const countries = [
        ...new Set([...action.payload.map((brand) => brand.Country)])
      ];
      return {
        ...state,
        data: action.payload,
        countries
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
