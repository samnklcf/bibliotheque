import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="default heade-sticky">
        <>
          <div className="un-item-logo">
            <b><span>Alissa</span> School</b>
          </div>
        </>
        <div className="un-block-right">
          <div className="un-notification">
            <a href="#" aria-label="activity">
              <i className="ri-notification-line" />
            </a>
            <span className="bull-activity" />
          </div>
          <div className="un-user-profile">
            <a href="#" aria-label="profile">
              <picture>
                <source srcSet="../../../../images/logo.png" type="image/webp" />
                <img className="img-avatar" src="/assets/images/logo.png" alt="" />
              </picture>
            </a>
          </div>
          {/* menu-sidebar */}
          <div className="menu-sidebar">
            <button
              type="button"
              name="sidebarMenu"
              aria-label="sidebarMenu"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#mdllSidebar-connected"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height="9.3"
                viewBox="0 0 19 9.3"
              >
                <g
                  id="Group_8081"
                  data-name="Group 8081"
                  transform="translate(-329 -37)"
                >
                  <rect
                    id="Rectangle_3986"
                    data-name="Rectangle 3986"
                    width={19}
                    height="2.3"
                    rx="1.15"
                    transform="translate(329 37)"
                    fill="#222032"
                  />
                  <rect
                    id="Rectangle_3987"
                    data-name="Rectangle 3987"
                    width={19}
                    height="2.3"
                    rx="1.15"
                    transform="translate(329 44)"
                    fill="#222032"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
