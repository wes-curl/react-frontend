import axios from 'axios'

export async function signup(username, password) {
    var response = await axios.post("http://localhost:5000/account/signup?userid="+username+"&password="+password);
    if(response.data == "Username Taken"){
        return null;
    }
    return response.data;
}