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

//api call for deleting Category

export const deleteCategory = async (categoryId)=>{
   await commonAPI("DELETE", `${SERVER_URL}/category/${categoryId}` , {})
}

// api call to get a single video


export const getSingleVedio = async (vedioId) => {
   return await commonAPI("GET", `${SERVER_URL}/allvedios/${vedioId}`, "")
}

// api call for updating category

export const  updateCategory=async(categoryid,categoryDetails)=>{
   return await commonAPI("PUT",`${SERVER_URL}/category/${categoryid}`,categoryDetails)
}


// api call for getting single category details

export const  getSingleCategory=async(categoryid)=>{
   return await commonAPI("GET",`${SERVER_URL}/category/${categoryid}`,"")
}