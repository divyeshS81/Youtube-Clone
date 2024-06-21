export const API_KEY = 'AIzaSyDOhn1_YF3tbCYxqfzUN_v4a4CtyF-Rme8';


export const value_converter = (value) => {
    if(value>=1000000)
        {
            return Math.floor(value/1000000)+"M";
        }
        else if(value>=1000)
        {
            return Math.floor(value/1000)+"K";
        }
        else{
            return value;
        }
}