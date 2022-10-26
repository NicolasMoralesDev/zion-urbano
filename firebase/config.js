import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from "uuid";



const firebaseConfig = {
    apiKey: "AIzaSyCZ_kB287TfjLj_-ej8kExsJKwno_cjh1k",
    authDomain: "zion-urbano.firebaseapp.com",
    projectId: "zion-urbano",
    storageBucket: "zion-urbano.appspot.com",
    messagingSenderId: "1024248125755",
    appId: "1:1024248125755:web:4b79c9c60c0893f6557f1e"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

const storageref = ref(storage, v4())

export const upload = async (file) => {
    await uploadBytes(storageref, file)
    const url = await getDownloadURL(storageref)
    return url
}

export const deleteFiles = async (file) => {
    deleteObject(storageref, file)
}