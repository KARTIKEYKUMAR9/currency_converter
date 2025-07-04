import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
    let cur = fetch(`https://v6.exchangerate-api.com/v6/72f99500f6844804f605d47c/latest/${currency}`)
    .then((res)=>res.json())
    .then((res)=>setData(res["conversion_rates"]))
    // console.log(data);  
    },[currency])
    return data;
}
export default useCurrencyInfo;