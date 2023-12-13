
import Head from "next/head";


import Router from "next/router";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { v4 } from "uuid";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"

import { db, imgDb } from "@/components/FirebaseConfig";
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
  doc as Docx,
} from "firebase/firestore";


function Marketing() {
  const [user, setUser] = useState([]);
  const UserCollection = collection(db, "user");
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [page, setAge] = useState();
  const [modif, setModif] =useState()
  const [image, setImage] = useState();
  const [texte, setText] = useState()

  const deleteDocx = async (id) => {
    try {
      const userDocx = Docx(db, "user", id);
      await deleteDoc(userDocx);
    } catch (error) {
      console.log("vous avez raté");
    }
  };
  
  // ------------------------upload---------------------------
  const updateDocx = async (prenom, page, id) => {
    const userDocx = Docx(db, "user", id);
    await updateDoc(userDocx, {prenom: modif, page: page + 1 });
  };

  // ----------------------------add-----------------------
  const create = async () => {
    try {
      await addDoc(UserCollection, {
        nom: nom,
        prenom: texte,
        page: Number(page),
      });
      
      setText("")
      setNom("")
      setAge("")
      console.log("reçu");
    } catch (error) {
      console.log(" Vous avez une erreur");
    }
  };

// ----------------------------------lister----------------------
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(UserCollection);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [texte, nom, page]);

  // -------------------------UPDATE DATAS-----------------------
  const handUpdate = (e) => {
    const imageName = e.target.files[0]
    if(imageName) {
      console.log(imageName.name)
      setNom(imageName.name.slice(0, -4))
    }
    
    const imgs = ref(imgDb, `imgs/${v4()}`)
    uploadBytes(imgs, imageName).then(data => {
      console.log(data, "imgs")
      getDownloadURL(data.ref).then(val => {
        console.log(val)
        setText(val)

      })
    })
  }
  const Lien = (lien) =>{
    Router.push(lien)
  }

  return (
    <>
      <Head>
        <title>Page d&apos;accueil</title>
      </Head>

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Accueil</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/"></Link>
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row align-items-top">
            <div className="col-lg-12">
              texte: <h4>{modif}</h4>
              
              <br /><br /><br /><br />
              <div>
                <input type="file" accept="image/*" name="" id="" onChange={(e) => handUpdate(e)} />
                
                
                <br /><br />
                <br />
              </div>
              <div className="card">
                <input
                  type="text"
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                  value={nom}
                  placeholder="Nom"
                />
                <input
                  type="url"
                  value={texte}
                  placeholder="prenom"
                />
                
                <input
                  type="number"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  placeholder="Page"
                />
                {texte && (
                  <button type="button" onClick={create}>
                  Ajouter{" "}
                </button>)}
                

                <br />
                <br />
                {user.map((users) => (
                  <div>
                    <h6>titre: {users.nom}</h6>
                    <br />
                    <img src={users.prenom} alt={users.nom} width={200}  />
                    <br /><br />
                    <button className="btn btn-primary" onClick={() => Lien(users.prenom)}>Télécharger ici</button>
                    <br />
                    <p>pages: {users.page}</p>
                    
                    <button
                      onClick={() => {
                        deleteDocx(users.id);
                      }}
                    >
                      Supprimer
                    </button>

                    <input type="text" onChange={(e) => {
                      setModif(e.target.value)
                    }} />
                    
                    <button
                      onClick={() => {
                        updateDocx(users.prenom,users.page, users.id);
                      }}
                    >
                      Ajouter mon age
                    </button>

                    <hr />
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Marketing;
