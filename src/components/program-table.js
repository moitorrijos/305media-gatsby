import React from "react"
import Backstage from "../assets/programas/backstage.png"
import Botica from "../assets/programas/botica.png"
import DobleDeMentes from "../assets/programas/doble-de-mentes.png"
import TalentPlus from "../assets/programas/talent-plus.png"
import ZonaGeek from "../assets/programas/zona-geek.png"
import ComoVaMiami from "../assets/programas/mosca-como-va-miami.png"
import SoyArmandoFit from "../assets/programas/mosca-soy-armando-fit.png"
import GoJuanca from "../assets/programas/logo-go-juanca.png"
import Emprende507 from "../assets/programas/mosca-emprende-305.png"
import HoyEnBroadcast from "../assets/programas/hoy-en-broadcast.png"
import PolosOpuestos from "../assets/programas/mosca-polos-opuestos.png"
import GerenciaParaTodos from "../assets/programas/gerencia-para-todos.png"
import ExperienciaExtrema from "../assets/programas/experiencia-extrema.png"
import LiteralmenteHablando from "../assets/programas/literalmente-hablando.png"
import ElCamerino from "../assets/programas/logo-el-camerino.png"
import LlegandoProbando from "../assets/programas/llegando-probando.png"
import QueFlaca from "../assets/programas/que-flaca-tv.png"

const ProgramTable = () => (
  <div className="program-times-table">
    <ul className="times">
      <li className="head">Hora</li>
      <li>11am - 12pm</li>
      <li>12pm - 1pm</li>
      <li>1pm - 2pm</li>
      <li>2pm - 3pm</li>
      <li>3pm - 4pm</li>
      <li>4pm - 5pm</li>
      <li>5pm - 6pm</li>
      <li>6pm - 7pm</li>
    </ul>
    <div className="program-table">
      <table className="days">
        <thead>
          <tr>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={ComoVaMiami} alt="Logo"/></td> 
            <td></td>
            <td><img src={HoyEnBroadcast} alt="Logo"/></td>
            <td></td>
            <td><img src={LlegandoProbando} alt="Logo"/></td>
          </tr>
          <tr>
            <td><img src={Backstage} alt="Logo"/></td> 
            <td><img src={SoyArmandoFit} alt="Logo"/></td>
            <td></td>
            <td><img src={GerenciaParaTodos} alt="Logo"/></td>
            <td><img src={TalentPlus} alt="Logo"/></td>
          </tr>
          <tr>
            <td><img src={Botica} alt="Logo Programa"/></td> 
            <td></td>    
            <td><img src={Botica} alt="Logo Programa"/></td> 
            <td></td>    
            <td><img src={Botica} alt="Logo Programa"/></td> 
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={ExperienciaExtrema} alt="Logo"/></td>
            <td><img src={ComoVaMiami} alt="Logo Programa"/></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><img src={ZonaGeek} alt="Logo Programa"/></td> 
            <td><img src={GoJuanca} alt="Logo Programa"/></td>
            <td></td>
            <td></td> 
            <td><img src={DobleDeMentes} alt="Logo Programa"/></td>
          </tr>
          <tr>
            <td></td>
            <td><img src={Emprende507} alt="Logo Programa"/></td>
            <td><img src={PolosOpuestos} alt="Logo Programa"/></td>
            <td><img src={LiteralmenteHablando} alt="Logo Programa"/></td>
            <td><img src={QueFlaca} alt="Logo Programa"/></td>
          </tr>
          <tr>
            <td></td> 
            <td></td> 
            <td></td>
            <td><img src={ElCamerino} alt="Logo Programa"/></td> 
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default ProgramTable
