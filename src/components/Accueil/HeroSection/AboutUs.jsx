import img from "../../../assets/topng.png";
import { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const imgDesktopRef = useRef(null);
  const imgMobileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationComplete(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 100px 0px" }
    );

    if (imgDesktopRef.current) {
      observer.observe(imgDesktopRef.current);
    }
    if (imgMobileRef.current) {
      observer.observe(imgMobileRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="container py-4 py-md-5">
        <div
          className="row"
          style={{ margin: window.innerWidth >= 992 ? "0 5rem" : "0" }}
        >
          <div className="col-lg-20 col-12 mb-4">
            <h2 className="titleh2 text-left mb-4 position-relative">
              Qui sommes-nous ?
              <span
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  width: "9rem",
                  height: "5px",
                  backgroundColor: "#fa9805ff",
                }}
              ></span>
            </h2>

            <div
              className="text-us2 flex-column flex-md-row d-flex"
              style={{ height: "auto", minHeight: "17rem" }}
            >
              <div className="me-md-4 mb-3 mb-md-0">
                <p>
                  <strong style={{ color: "#333", fontWeight: "700" }}>
                    JM-CONTACTS
                  </strong>{" "}
                  est une référence dans le domaine de la sous-traitance en
                  développement informatique de gestion (Applicatif classique ou
                  Web). <br /> Depuis sa création en janvier 2000 à Madagascar,
                  JM Contacts s'est établie comme une société de référence dans
                  le domaine du développement informatique, en particulier dans
                  les technologies{" "}
                  <a
                    href="https://www.pcsoft.fr"
                    style={{ color: "#4da6ff", textDecoration: "none" }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#0066cc";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#4da6ff";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    PC SOFT.
                  </a>
                  <br />
                  Madagascar a un potentiel unique en tant que hub technologique
                  pour les professionnels francophones. Notre implantation dans
                  cette île dynamique nous permet de bénéficier d'un
                  environnement riche en talents et favorable à l'innovation.
                </p>
              </div>
              <div className="pl-6 d-none d-md-block" ref={imgDesktopRef}>
                <img
                  src={img}
                  alt=""
                  height="250rem"
                  width="380rem"
                  style={{
                    transform: animationComplete
                      ? "translateX(0)"
                      : "translateX(200px)",
                    opacity: animationComplete ? 1 : 0,
                    transition:
                      "transform 0.9s ease-out, opacity 0.9s ease-out",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>

            <div className="text-us2">
              <p>
                Nous mettons à disposition de nos clients des collaborateurs
                dédiés : Chefs de projets, développeurs séniors et développeurs
                juniors. Ils sont le pilier de notre succès et capitalisent sur
                des années d'expérience et de passion pour le développement
                informatique de gestion. Avec une expertise éprouvée dans les
                technologies PCSoft (Windev, Windev Mobile et Webdev),
                JM-Contacts a su bâtir une réputation solide. La confiance que
                nos clients placent en nous est le fruit de notre engagement
                continu envers la qualité et notre capacité à fournir des
                solutions innovantes et adaptées à leurs besoins. En tant que
                partenaire fiable, JM Contacts reste dédié à l'excellence et à
                la satisfaction de ses clients. De plus, la sous-traitance à
                distance (offshore) apporte des avantages au fonctionnement des
                SSII et des éditeurs de progiciels, en passant de la culture
                orale à la culture de l'écrit, ce qui est très bénéfique en
                termes de traçabilité et de qualité.
              </p>
            </div>

            <div
              className="d-block d-md-none text-center mt-3 mb-4"
              ref={imgMobileRef}
            >
              <img
                src={img}
                alt=""
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  transform: animationComplete
                    ? "translateX(0)"
                    : "translateX(200px)",
                  opacity: animationComplete ? 1 : 0,
                  transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
