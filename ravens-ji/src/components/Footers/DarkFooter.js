/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
              href="https://github.com/predatorsfr"
                target="_blank"
              >
                Predatorsfr ©
              </a>
            </li>
            <li>
              <a
              href="https://www.epitech.eu/fr/vie-associative/"
                target="_blank"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default DarkFooter;
