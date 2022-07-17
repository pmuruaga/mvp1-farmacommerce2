import firebase from "../Config/firebase"

export async function getUsuarioById(id){
    const userInfo = await firebase.db.collection("usuarios")
        .where("userId","==",id).get();
    return userInfo;
}

