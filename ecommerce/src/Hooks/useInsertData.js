import baseUrl from "../API/baseUrl";

const useInsertDataWithImage = async(url , params )=>{
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization : `Bearer ${localStorage.getItem('token')}`

    }
    }
    const res = await baseUrl.post(url, params, config);
    return res;
}

const useInsertData = async(url , params )=>{

    const config = {
        headers: {
            Authorization : `Bearer ${localStorage.getItem('token')}`,
        }
    }

    const res = await baseUrl.post(url, params, config);
    // console.log(res)
    return res;
}

export  {useInsertData , useInsertDataWithImage} ;

