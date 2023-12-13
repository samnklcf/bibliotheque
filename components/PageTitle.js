import React from "react";

function PageTitle(prop) {
  return (
    <section className="un-page-components">
      <div className="un-title-default">
        <div className="text">
          <h2>{prop.title}</h2>
          <p>{prop.description}</p>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
