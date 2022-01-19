import axios from "axios";

export const getDevices = async () => {
  try {
    const response = await axios.get("/api/v1/devices/");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getInterfaces = async () => {
  try {
    const response = await axios.get("/api/v1/interfaces/");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const createBlackout = async (fieldValues) => {
  try {
    if (fieldValues) {
      const response = await axios.post("api/v1/blackout/", fieldValues);
      return response;
    }
  } catch (error) {
    return error.response.data?.message || error.message;
  }
};
