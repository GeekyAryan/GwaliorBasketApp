import { getData,postData } from "./ServerServices";

export async function fetchAllCategory(){

    var result=await getData('userinterface/fetch_all_Category')
    console.log("1234",result)
    return(result.data)
}