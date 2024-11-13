import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

// Save Vedio
// save vedio api call by add.jsx

export const addVedio = async (vedio) => {
    return await commonAPI("POST", `${SERVER_URL}/allvedios`, vedio)
 }

export const getAllVedios = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allvedios`, "")
 }

 export const deleteVedio = async (vedioId)=>{
    return await commonAPI("DELETE" , `${SERVER_URL}/allvedios/${vedioId}`,{})
 }

 export const saveHistory = async (vedio) => {
   return await commonAPI("POST", `${SERVER_URL}/history`, vedio)
}

export const getAllHistory = async () => {
   return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

export const deleteHistory = async (vedioId)=>{
   await commonAPI("DELETE", `${SERVER_URL}/history/${vedioId}` , {})
}

export const addCategory = async (categoryDetails) => {
   return await commonAPI("POST", `${SERVER_URL}/category`, categoryDetails)
}

// api call for get Category

export const getAllCategory = async () => {
   return await commonAPI("GET", `${SERVER_URL}/category`, "")
}