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
  // ----------------partie des states--------------
  const [sortie, setSortie] = useState("");
  const [Loader, setLoader] = useState(false);
  // -------------------fin des states-----------------

  let theme = useRef();


  const FormSub = (e) => {
    e.preventDefault();
    setSortie("");
    setLoader(true);

    fetch("/api/generator", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        promptSend: `
        ${theme.current.value}
        
       
        `,
      }),
    })
      .then(async (data) => {
        return data.json();
      })
      .then(async (resp) => {
        setSortie(resp);
        setLoader(false);
        console.log(resp)
      })
      .catch((e) => {
        setTimeout(() => {
          setSortie(
            '<b style="color: red;">Il y a un problème de connexion😣 📶<i>veuillez réessayer</i></b> . Veuillez appuyer sur le bouton de génération \n '
          );
          setLoader(false);
        }, 3000);
      });
  };
  return (
    <>
      <Head>
        <title>Recherche</title>
        <meta name="description" content="Alissa School pour philosophie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <>
        <div id="wrapper">
          <div id="content">
            <Retour lien="/" />

            <div className="space-sticky" />

            <section className="un-page-components">
              <PageTitle
                title="Recherche"
                description="Dissertation  "
              />
              <div className="content-comp p-0">
                <div className="space-items" />

                <div className="space-items" />
                <div className="padding-20 form-edit-profile bg-white">
                  <section className="main-search-header">
                    <div className="content-search">
                      <form className="form-group with_icon" onSubmit={FormSub}>
                        <div className="input_group">
                          <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="Veillez saisir votre recherche"
                            ref={theme}
                          />
                          <div className="icon">
                            <i className="ri-search-2-line"></i>
                          </div>
                        </div>
                        <br />

                        {Loader ? (
                          <button type="submit" className="btn btn-primary" disabled>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{
                                margin: "auto",
                                background: "",
                                display: "block",
                                shapeRendering: "auto",
                              }}
                              width="60px"
                              height="25px"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="xMidYMid"
                              className="img-fluid"
                            >
                              <circle cx={84} cy={50} r={10} fill="#29a0e4">
                                <animate
                                  attributeName="r"
                                  repeatCount="indefinite"
                                  dur="0.25s"
                                  calcMode="spline"
                                  keyTimes="0;1"
                                  values="10;0"
                                  keySplines="0 0.5 0.5 1"
                                  begin="0s"
                                />
                                <animate
                                  attributeName="fill"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="discrete"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="#29a0e4;#f3ff83;#6a86f8;#eff460;#29a0e4"
                                  begin="0s"
                                />
                              </circle>
                              <circle cx={16} cy={50} r={10} fill="#29a0e4">
                                <animate
                                  attributeName="r"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="0;0;10;10;10"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="0s"
                                />
                                <animate
                                  attributeName="cx"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="16;16;16;50;84"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="0s"
                                />
                              </circle>
                              <circle cx={50} cy={50} r={10} fill="#eff460">
                                <animate
                                  attributeName="r"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="0;0;10;10;10"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="-0.25s"
                                />
                                <animate
                                  attributeName="cx"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="16;16;16;50;84"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="-0.25s"
                                />
                              </circle>
                              <circle cx={84} cy={50} r={10} fill="#6a86f8">
                                <animate
                                  attributeName="r"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="0;0;10;10;10"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="-0.5s"
                                />
                                <animate
                                  attributeName="cx"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="16;16;16;50;84"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="-0.5s"
                                />
                              </circle>
                              <circle cx={16} cy={50} r={10} fill="#f3ff83">
                                <animate
                                  attributeName="r"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="0;0;10;10;10"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="-0.75s"
                                />
                                <animate
                                  attributeName="cx"
                                  repeatCount="indefinite"
                                  dur="1s"
                                  calcMode="spline"
                                  keyTimes="0;0.25;0.5;0.75;1"
                                  values="16;16;16;50;84"
                                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                                  begin="-0.75s"
                                />
                              </circle>
                              
                            </svg>
                          </button>
                        ) : (
                          <button type="submit" className="btn btn-primary" >
                            Recherche
                          </button>
                        )}
                      </form>
                      
                    </div>
                  </section>
                </div>
                <div className="space-items" />
              </div>
              {/* End.content-comp */}
            </section>
            <section className="un-page-components">
              <div className="un-title-default">
                <div className="text">
                  <h2>Résultat:</h2>
                </div>
              </div>
              <div className="content-comp p-0">
                <div className="bg-white padding-20">
                  <pre
                    id="samnk"
                    dangerouslySetInnerHTML={{ __html: sortie }}
                  ></pre>

                  {Loader && (
                    <>
                      <Charge />
                    </>
                  )}
                </div>
              </div>
              {/* End.content-comp */}
            </section>
          </div>
        </div>
      </>
    </>
  );
}

export default Recherche;
