import { requestHandler } from "../utils/requestHandler";
// -----------------city functions------------------------
export const login = (data) => {
  let endpoint = "/account/login";
  let body = data;
  return requestHandler({ endpoint, method: "POST", body });
};

// -----------------city functions------------------------
export const addCity = (cityDetails) => {
  const endpoint = "/city/addcity";
  const body = cityDetails;
  return requestHandler({ endpoint, method: "POST", body });
};

export const editCities = (cityDetails) => {
  const endpoint = `/city/editcity/${cityDetails._id}`;
  const body = cityDetails;
  return requestHandler({ endpoint, method: "PUT", body });
};

export const deleteCities = (cityDetails) => {
  const endpoint = `/city/deletecity`;
  const body = { id: cityDetails._id };
  return requestHandler({ endpoint, method: "DELETE", body });
};

export const getSingleCity = (cityDetails) => {
  const endpoint = "/city/getsinglecity";
  const body = { id: cityDetails.singleId };
  return requestHandler({ endpoint, method: "POST", body });
};
