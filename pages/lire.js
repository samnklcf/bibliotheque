import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import PageTitle from "@/components/PageTitle";
import Charge from "@/components/Charge";
import { useState, useRef } from "react";
import Link from "next/link";
import Retour from "@/components/Retour";

import React from "react";

function Recherche() {
  
  const [extractedText, setExtractedText] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append('image', file);

    fetch('https://alissabackendfluidbysamnk-mbrn.onrender.com/lecture', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Réponse du serveur non OK.');
        }
        return response.json();
      })
      .then((data) => {
        setExtractedText(data.extractedText);
      })
      .catch((error) => {
        console.error('Erreur lors de la requête vers le serveur :', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExtractedText("")
    const file = fileInputRef.current.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <div className="App solo">
      <center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h4>Extraction de texte depuis une image</h4>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          
        />
        <br />
        <br/>
        <button type="submit" className="btn btn-primary">Télécharger et Extraire le texte</button>
      </form>
      <br/>
      <div>
        <h2>Texte extrait :</h2> <br/>

        <pre className="p-20">
          {extractedText ? extractedText : "Veillez patienter"}
        </pre>
      </div>
      </center>
    </div>
  );
}

export default Recherche;
