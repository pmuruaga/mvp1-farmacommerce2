import firebase from "../Config/firebase"

export async function getAllPerfumes(){
    const querySnapshot = await firebase.db.collection("productos").get();
    //const querySnapshot = await firebase.db.collection("productos").orderBy("name").startAt(buscar).endAt(buscar+"/uf8ff").get();
    return querySnapshot.docs;
}

export async function getProductoById(id){
    // return axios.get("/items/"+id) 
    return await firebase.db.doc("productos/"+id).get();
}

export async function update(id,data){
    return await firebase.db.doc("productos/"+id).set(data);
}

export async function remove(id){
    return await firebase.db.doc("productos/"+id).delete();
}

export async function getProductosByIdCategoria(idCategoria){
    //const querySnapshot = await firebase.db.collection("productos").orderBy("name").startAt(buscar).endAt(buscar+"/uf8ff").get();
    const querySnapshot = await firebase.db.collection("productos").orderBy("idCategoria").equalTo(idCategoria).get();
    //dinosaursRef.orderByChild("height").equalTo(25)
    return querySnapshot.docs;
}