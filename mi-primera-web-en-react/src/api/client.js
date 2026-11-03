import { getToken } from "../auth/auth";

const API_URL = import.meta.env.VITE_API_URL;

export async function request(endpoint, method="GET",body) {
    const token = getToken();

    if (token) {
        //headers.Authorization = `Bearer ${token}`;
        
    }

    const req = await fetch(`${API_URL}${endpoint}`,{
        method,
        headers:{
            "Content-type":"application/json",
            ...(token && {Authorization: `Bearer ${token}`})
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if(!req.ok) throw Error(`Èrror ${req.status}`);

    //return req.status === 204 ? null : req.json();

    if (req.status === 204) {
        return null;
    }else{
        return req.json()
    }
}