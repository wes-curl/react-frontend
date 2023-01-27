import axios from 'axios'

export async function realAuth(username, password) {
    var response = await axios.post("http://localhost:5000/account/login?userid="+username+"&password="+password);
    if(response.data == "Invalid Login"){
        return null;
    }
    return response.data;
}