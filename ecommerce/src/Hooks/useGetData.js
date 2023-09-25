import baseUrl from "../API/baseUrl";

const useGetData = async(url , params )=>{

    const res = await baseUrl.get(url, params);
    return res.data;
}
const useGetDataToken = async(url , params )=>{

    const config = {
        headers:{
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }
    }



    const res = await baseUrl.get(url , config);
    return res.data;
}

export {useGetData, useGetDataToken};