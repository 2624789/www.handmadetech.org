import React from "react"

import Container from "../components/container"
import TopBar from "../components/top-bar"

import logo from "../../static/logo.png"

export default function Home() {
  return (
    <div>
      <TopBar logo={logo} />
      <Container>
        <h1 className="hmt-centered-text">Handmadetech</h1>

        <p>Software bien diseñado, confiable y de calidad.</p>

        <p>Well-crafted, trustworthy and quality software.</p>

        <h2>¿Qué hacemos?</h2>

        <p>
          Definición, desarrollo, operación y mantenimiento de sistemas
          software con un enfoque sistemático, disciplinado y cuantificable.
        </p>

        <p>
          Aplicamos principios y metodologías que se han demostrado adecuadas sobre
          la base de la experiencia previa.
        </p>

        <h3>1. Definición</h3>

        <p>PRD - Product Requirements Document</p>

        <ul>
          <li>¿Qué hace el producto?</li>
          <li>Descripción</li>
          <li>Métricas</li>
          <li>Planeación trimestral OKRs</li>
        </ul>

        <h3>2. Desarrollo</h3>

        <p>UI/X + Code</p>

        <h3>3. Operación y mantenimiento</h3>

        <p>SLAs - Service Level Agreements</p>

        <h2>Más información</h2>

        <p>info@handmadetech.org</p>

        <p><strong>*BTC-friendly</strong></p>
      </Container>
    </div>
  );
}
