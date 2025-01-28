import axios from "axios";

const base_url="https://recipe-managementserver.onrender.com/"

export const addRecipeApi=async(data)=>{
    return await axios.post(`${base_url}/recipes`,data)

}

export const getRecipeApi=async()=>{
    return await axios.get(`${base_url}/recipes`)
}

export const delRecipeApi=async(id)=>{
    return await axios.delete(`${base_url}/recipes/${id}`)
}

export const UpdateRecipeApi=async(id,data)=>{
    return await axios.put(`${base_url}/recipes/${id}`,data)
}

