import React from "react";
import Script from "next/script";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="un-bottom-navigation filter-blur">
        <div className="em_body_navigation border-0 -active-links">
          <div className="item_link">
            <Link
              href="/"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-home-5-line" />
              </div>
              <div className="icon_active">
                <i className="ri-home-5-fill" />
              </div>
            </Link>
          </div>
          <div className="item_link">
            <Link
              href="/recherche"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-search-2-line" />
              </div>
              <div className="icon_active">
                <i className="ri-search-2-fill" />
              </div>
            </Link>
          </div>
          <div className="item_link">
            <button
              type="button"
              name="sidebarMenu"
              aria-label="sidebarMenu"
              className="btn btn_navLink without_active"
              data-bs-toggle="modal"
              data-bs-target="#mdllSidebar-connected"
            >
              <div className="btn btnCircle_default">
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
                    fill="#FFFFFF"
                  />
                  <rect
                    id="Rectangle_3987"
                    data-name="Rectangle 3987"
                    width={19}
                    height="2.3"
                    rx="1.15"
                    transform="translate(329 44)"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
              </div>
            </button>
          </div>
          <div className="item_link">
            <Link
              href="#"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-heart-3-line" />
              </div>
              <div className="icon_active">
                <i className="ri-heart-3-fill" />
              </div>
            </Link>
          </div>

          <div className="item_link">

            <Link
              href="/lire"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-user-4-line" />
              </div>
              <div className="icon_active">
                <i className="ri-user-4-fill" />
              </div>
            </Link>
          </div>
        </div>
      </footer>
      
      <Script src="/assets/js/pwa-services.js"></Script>
      <Script src="/assets/vendors/btn.js"></Script>
      <Script src="/assets/vendors/zuck_stories/zuck.min.js"></Script>
      <Script src="/assets/vendors/zuck_stories/zuck.min.js"></Script>
      <Script src="/assets/vendors/smoothscroll/smoothscroll.min.js"></Script>
      <Script src="/assets/vendors/swiper/swiper-bundle.min.js"></Script>
      <Script src="/assets/vendors/nouislider/nouislider.min.js"></Script>
      <Script src="/assets/vendors/nouislider/wNumb.min.js"></Script>
      <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/js/custom.js"></Script>
    </>
  );
}
