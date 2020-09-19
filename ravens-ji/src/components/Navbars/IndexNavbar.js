import React from "react";

// reactstrap components
import {
  Button,
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
          <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#pablo"
                  id="rules"
                  onClick={(e) => e.preventDefault()}
                >
                  <p>Règles</p>
                </Button>
                <UncontrolledTooltip target="#rules">
                Bienvenue à tous, vous pouvez envoyer sur ce site vos photos réalisés lors de la journée. N'oubliez pas les 3 contraintes photos : Prendre une photo de groupe avec un membre de la Team Rocket, une autre avec un rouxcool et pour finir une photo d'équipe original. 
                Vous aurez jusqu’à 17h pour envoyer toutes vos photo, alors ne perdez pas trop de temps !
                A vos marque, prêts ? Cheese
                </UncontrolledTooltip>
           <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/bde.epitech"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <img
                  width="80" 
                  height="80"
                    src={require("assets/img/facebook.png")}
                  ></img>
                   <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/bde.epitech/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <img
                  width="75" 
                  height="75"
                    src={require("assets/img/insta.png")}
                  ></img>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
