import axios from "axios";

const BASE_URL = "localhost:5001/dogs";

/** Component that retrieves list of dogs */
async function getDogs() {
  const response = await axios.get(BASE_URL);
  const dogsList = response.data;
  return dogsList;
}

export { getDogs };
