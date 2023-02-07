import axios from "axios";
import React from "react";


export type method = 'GET' | 'POST' | 'PUT' | 'DELETE'


export interface data {
    page? : number | null,
    results? : number | null
}

export async function serviceHttp(URL : string, method : method, data : data, headers : any){
    if (!headers) {
        headers = {
            'Accept' : 'Application/json'
        }
    }
    if (method == 'GET') {
        return await axios.get(URL, {
            params : {
                page : data.page,
                results : data.results
            },
            headers : headers
        }).then(result => {
            return result.data;
        }) 
    }
}