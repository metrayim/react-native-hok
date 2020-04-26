export const myURL = `http://35.197.153.66:3001`;
let upload_endpoint = myURL+"/record/post";
const CATEGORYUPLOADENDPOINT  = myURL+"/category";
const CATEGORYREMOVEENDPOINT  = myURL+"/category/remove"
const RECORDONTODAY = myURL+"/record/today";
const REMOVERECORD = myURL+"/record/remove";
const GETDATA = myURL+"/category"
const GET_URL = myURL+"/record/report"

export const getAllCategoies  = async () => {
  
    try {
        const result =await fetch(GETDATA);
        const json = await result.json();
        console.log(json)
        return json;
    } catch (error) {
        console.log(error)
        return [];
    }

}
export const uploadCategory = async ( _category)=> {
    try {
        let category ;
        category = _category;
       
        const result = await fetch(CATEGORYUPLOADENDPOINT,{
            body : JSON.stringify(category),
            method :'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
             
        })
        const json = await result.json();  
        if(json.raw.length>0 ){
            category.id = json.raw[0].id;
            return category;
        }else{
            return {
                status :  false,
                description : "FAIL"
            }
        }        
    } catch (error) {
        return {
            status :  false,
            description : "FAIL"
        }
    }    
}

export const removeCategory = async (_category ) => {
    try {
        const res = await fetch(CATEGORYREMOVEENDPOINT,
            {
            method : "PUT",
            body : JSON.stringify(_category), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }});
        const json = await res.json()
        console.log(json)
        return json
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const saveRecord =async (record) =>  {
   
    try {
        let serviceRecord ;
        serviceRecord = record;
        serviceRecord.created = new Date();
        console.log(serviceRecord)
        const result = await fetch(upload_endpoint,{
            body : JSON.stringify(serviceRecord),
            method :'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
             
        })
        const json = await result.json();  
        if(json.raw.length>0 ){
            return {
                status : true,
                body : json
            }
        }else{
            return {
                status : false,
                body : 0
            }
        }        
    } catch (error) {
        return {
            status : false,
            body : error
        }
    }       
}
export const getTodayRecord= async () => {
    try {
        const result =await fetch(`${RECORDONTODAY}`);
        const json = await result.json();
     
        return json;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const removeRecord = async (id ) => {
    try {
        const result =await fetch(`${REMOVERECORD}?id=${id}`,{method : 'PUT'});
        const json = await result.json();
        
        return {
            status : true,
            body : json
        }
    } catch (error) {
        console.log(error)
        return {
            status : false,
            body : error
        }
    }
}

export const getReportDuring= async (start ,end ) => {
    try {
        const result =await fetch(`${GET_URL}?start=${start}&end=${end}`);
        const json = await result.json();
     
        return json;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const static_data = [
    {
        "categoryId": 1,
        "name": "developer",
        "service_amount": "12117",
        "total_price": "45772"
    },
    {
        "categoryId": 2,
        "name": "developer",
        "service_amount": "12602",
        "total_price": "0"
    },
    {
        "categoryId": 3,
        "name": "developer",
        "service_amount": "2327",
        "total_price": "8048"
    },
    {
        "categoryId": 13,
        "name": "menghok",
        "service_amount": "51",
        "total_price": "6273"
    }
] 
