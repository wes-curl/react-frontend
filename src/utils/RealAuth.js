import sha256 from 'crypto-js/sha256';
import WordArray from 'crypto-js/sha256';

const get_hash = (username) => {
    if(username == "wesley"){
        return "da949c6b5b03839b3c73b97a827ce9bd016f3d23f0734fbabdaaa278b4cd8f1d";
    } else {
        return "";
    }
}

const get_salt = (username) => {
    if(username == "wesley"){
        return "Carthago Delenda Est";
    } else {
        return "";
    }
}

const get_token = (username) => {
    if(username == "wesley"){
        return "deafbeefdeedbead";
    } else {
        return "";
    }
}

export const realAuth = (username, password) =>{
    const pw_hash = get_hash(username);
    console.log(sha256(password+get_salt(username)).toString())
    console.log(pw_hash)
    if(pw_hash == sha256(password+get_salt(username)).toString()){
        return get_token(username);
    } else {
        return null;
    }
}