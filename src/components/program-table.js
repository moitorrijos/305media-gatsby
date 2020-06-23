import React from "react"
import CualquierCosa from "../assets/programas/cualquier-cosa.png"
import Agentes305 from "../assets/programas/agentes-305.png"
import AsignaturaPendiente from "../assets/programas/asignatura-pendiente.png"
import Backstage from "../assets/programas/backstage.png"
import Botica from "../assets/programas/botica.png"
import ConectandoContigo from "../assets/programas/conectando-contigo.png"
import CorrienteAlterna from "../assets/programas/corriente-alterna.png"
import DobleDeMentes from "../assets/programas/doble-de-mentes.png"
import Experiencia from "../assets/programas/experiencia.png"
import LucesCamaraCancion from "../assets/programas/luces-camara-cancion.png"
import RockStar from "../assets/programas/rock-star.png"
import TalentPlus from "../assets/programas/talent-plus.png"
import TresConTodo from "../assets/programas/tres-con-todo.png"
import ZonaGeek from "../assets/programas/zona-geek.png"

const ProgramTable = () => (
  <div className="program-times-table">
    <ul className="times">
      <li className="head">Hora</li>
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
            <td><img src={Backstage} alt="Logo"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={TalentPlus} alt="Logo"/></td>
          </tr>
          <tr>
            <td><img src={Botica} alt="Logo Programa"/></td>
            <td><img src={Botica} alt="Logo Programa"/></td>
            <td><img src={Botica} alt="Logo Programa"/></td>
            <td><img src={Botica} alt="Logo Programa"/></td>
            <td><img src={Botica} alt="Logo Programa"/></td>
          </tr>
          <tr>
            <td><img src={AsignaturaPendiente} alt="Logo Programa"/></td>
            <td></td>
            <td><img src={AsignaturaPendiente} alt="Logo Programa"/></td>
            <td></td>
            <td><img src={AsignaturaPendiente} alt="Logo Programa"/></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={DobleDeMentes} alt="Logo Programa"/></td>
          </tr>
          <tr>
            <td><img src={ZonaGeek} alt="Logo Programa"/></td>
            <td><img src={Experiencia} alt="Logo Programa"/></td>
            <td><img src={ConectandoContigo} alt="Logo Programa"/></td>
            <td><img src={RockStar} alt="Logo Programa"/></td>
            <td></td>
          </tr>
          <tr>
            <td><img src={TresConTodo} alt="Logo Programa"/></td>
            <td><img src={TresConTodo} alt="Logo Programa"/></td>
            <td><img src={TresConTodo} alt="Logo Programa"/></td>
            <td><img src={TresConTodo} alt="Logo Programa"/></td>
            <td><img src={TresConTodo} alt="Logo Programa"/></td>
          </tr>
          <tr>
            <td><img src={Agentes305} alt="Logo Programa"/></td>
            <td><img src={CorrienteAlterna} alt="Logo Programa"/></td>
            <td><img src={CualquierCosa} alt="Logo Programa"/></td>
            <td><img src={LucesCamaraCancion} alt="Logo Programa"/></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default ProgramTable
