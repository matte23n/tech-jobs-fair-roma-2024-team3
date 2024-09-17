import axios from "axios";
// interface to create

const baseUrl = "https://hackathon-backend-git-main-matte23ns-projects.vercel.app";

const getActivityUrl = baseUrl + "/task/all" // GET
const updateActivityUrl = baseUrl + "/task/update/" // PUT
const createActivityUrl = baseUrl + "/task/create" // POST
const deleteActivityUrl = baseUrl + "/task/delete" // DELETE

export const getActivity = async () => {
    return await axios.get(getActivityUrl);
};

export const updateActivity = async (updateRequest: any) => {
    console.log('updateRequest-------------------------');
    console.log(updateRequest);
    console.log(updateRequest.id);
    
    return await axios.put(updateActivityUrl+updateRequest.id, updateRequest);
};

export const createActivity = async (createRequest: any) => {
    console.log(createRequest);
    
    return await axios.post(createActivityUrl, createRequest);
};

export const deleteActivity = async (deleteRequest: any) => {
    return await axios.delete(deleteActivityUrl, deleteRequest);
};