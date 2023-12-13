import React from "react";
import Link from "next/link";

export default function Cote() {
 
   return (
    <div
      className="modal sidebarMenu -left fade"
      id="mdllSidebar-connected"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header d-block pb-1">
            {/* un-user-profile */}
            <div className="un-user-profile">
              <div className="image_user">
                <picture>
                  <source srcSet="../../../../../images/logo.png" type="image/webp" />
                  <img src="../../../images/avatar/11.jpg" alt="image" />
                </picture>
              </div>
              <div className="text-user">
                <h3>Alissa School</h3>
                <p>0745700040</p>
              </div>
            </div>
            <button
              type="button"
              className="btn btnClose"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ri-close-fill" />
            </button>
            {/* cover-balance */}
            <div className="cover-balance">
              <div className="un-balance">
                <div className="content-balance">
                  <div className="head-balance">
                    <h4>Classe de:</h4>
                    
                  </div>
                  <p className="no-balance">Tle B</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-sm-size bg-white text-dark rounded-pill"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                data-bs-target="#mdllUploadItem"
              >
                Changer
              </button>
            </div>
          </div>
          <div className="modal-body">
            <ul className="nav flex-column -active-links"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
            
            >
              <li className="nav-item"
              
              >
                <Link className="nav-link" href="/">
                  <div className="icon_current">
                    <i className="ri-compass-line" />
                  </div>
                  <div className="icon_active">
                    <i className="ri-compass-fill" />
                  </div>
                  <span className="title_link">Dashboard</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" href="button">
                  <div className="icon_current">
                    <i className="ri-home-5-line" />
                  </div>
                  <div className="icon_active">
                    <i className="ri-home-5-fill" />
                  </div>
                  <span className="title_link">Bouton</span>
                  <span className="xs-badge">8</span>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" href="creer">
                  <div className="icon_current">
                    <i className="ri-pages-line" />
                  </div>
                  <div className="icon_active">
                    <i className="ri-pages-fill" />
                  </div>
                  <span className="title_link">Créer Compte</span>
                  <div className="badge-circle">
                    <span className="doted_item" />
                  </div>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" href="drop">
                  <div className="icon_current">
                    <i className="ri-layout-2-line" />
                  </div>
                  <div className="icon_active">
                    <i className="ri-layout-2-fill" />
                  </div>
                  <span className="title_link">Drop</span>
                </Link>
              </li> */}
              {/* <label className="title__label">Autre</label>
              <li className="nav-item">
                <Link className="nav-link" href="formulaire">
                  <div className="icon_current">
                    <i className="ri-questionnaire-line" />
                  </div>
                  <div className="icon_active">
                    <i className="ri-questionnaire-fill" />
                  </div>
                  <span className="title_link">Formulaire</span>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" href="texte">
                  <div className="icon_current">
                    <i className="ri-file-info-line" />
                  </div>
                  <div className="icon_active">
                    <i className="ri-file-info-fill" />
                  </div>
                  <span className="title_link">Texte</span>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link" href="toast">
                  <div className="icon_current">
                    <i className="ri-file-info-line" />
                  </div>
                  <div className="icon_active">
                    <i className="ri-file-info-fill" />
                  </div>
                  <span className="title_link">Toastes</span>
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="modal-footer">
            <div className="em_darkMode_menu">
              <label className="text" htmlFor="switchDark">
                <h3>Dark Mode</h3>
                <p>Browsing in night mode</p>
              </label>
              <label
                className="switch_toggle toggle_lg theme-switch"
                htmlFor="switchDark"
              >
                <input
                  type="checkbox"
                  className="switchDarkMode theme-switch"
                  id="switchDark"
                  aria-describedby="switchDark"
                />
                <span className="handle" />
              </label>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
