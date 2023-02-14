import axios from "../components/shared/axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

//Assessments
export const getAssessments = async (params) => {
  return await axios.get(`${baseURL}/assessments`, {
    params,
  });
};

export const getAssessment = async (params) => {
  return await axios.get(`${baseURL}/assessments/${params.id}`, {});
};

export const addAssessment = async (params) => {
  return await axios.post(`${baseURL}/assessments`, params);
};
