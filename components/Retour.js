import React from "react";
import Link from "next/link";

function Retour(props) {
  return (
    <header className="default heade-sticky">
      <div className="un-title-page go-back">
        <Link href={`${props.lien}`} className="icon">
          <i className="ri-arrow-drop-left-line" />
        </Link>
      </div>
    </header>
  );
}

export default Retour;
