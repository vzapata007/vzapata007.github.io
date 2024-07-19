import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../assets/CV_VictorZapata_SoftwareEngineer.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download CV Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row className="resume">
          <div
            style={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
              maxWidth: "1000px",
              overflow: "hidden", // Evita el scroll bar
              backgroundColor: "--bg-color", // Fondo claro para mejor contraste
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex flex-column align-items-center"
              style={{ width: "100%", height: "auto" }} // Ajusta el tamaño
            >
              {numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <div
                    key={`page_${index + 1}`}
                    style={{
                      marginBottom: "10px", // Margen reducido entre páginas
                      //border: "1px solid --nav-active", // Borde sutil para separación
                      //backgroundColor: "#fff", // Fondo blanco para cada página
                      maxWidth: "100%", // Asegura que la página no exceda el contenedor
                    }}
                  >
                    <Page
                      pageNumber={index + 1}
                      scale={width > 786 ? 1.7 : 0.6}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        margin: "0 auto", // Centra la página horizontalmente
                      }} // Ajusta la visualización de la página
                    />
                  </div>
                ))}
            </Document>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
