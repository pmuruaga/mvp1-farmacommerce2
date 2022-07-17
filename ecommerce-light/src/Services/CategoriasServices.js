import firebase from "../Config/firebase"

export async function getAll(){
    const querySnapshot = await firebase.db.collection("categorias").get();
    //const querySnapshot = await firebase.db.collection("productos").orderBy("name").startAt(buscar).endAt(buscar+"/uf8ff").get();
    return querySnapshot.docs;
}

export async function getCategoriaById(id){
    return await firebase.db.doc("categorias/"+id).get();
}

