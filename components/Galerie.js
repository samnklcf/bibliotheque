import React from "react";

function Galerie({ children }) {
  return (
    <section className="unSwiper-cards">
      <br />

      <div className="discover-nft-random margin-t-0">
        <div className="content-NFTs-body">
         

        {children}

          
        </div>
        <br />
        <div className="border-sections-home" />
      </div>
    </section>
  );
}

export default Galerie;
