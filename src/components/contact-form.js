import React, { useState } from "react"
import Send from "../icons/send-email.svg"
import Sending from "../icons/refresh.svg"
import axios from "axios"

const ContactForm = () => {
  const [tuNombre, setTuNombre] = useState("")
  const [tuCorreo, setTuCorreo] = useState("")
  const [tuTelefono, setTuTelefono] = useState("")
  const [tuSaludos, setTuSaludos] = useState("")
  const [tuMensaje, setTuMensaje] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  return (
    <div className="contact-form-message">
      <form
        className="contact-form"
        onSubmit={async (event) => {
          event.preventDefault()
          if (!tuSaludos) {
            const sendEmail = "cmarquez@305media.tv"
            const mensaje = {
              _subject: "Has Recibido un Correo del nuevo sitio web",
              _replyto: tuCorreo,
              tuNombre,
              tuTelefono,
              tuSaludos,
              tuMensaje,
            }
            setLoading(true)
            const response = await axios.post(
              `https://mailthis.to/${sendEmail}`,
              mensaje
            )
            setLoading(false)
            if (response.data) {
              setSuccessMessage(true)
            } else {
              setErrorMessage(true)
            }
          }
        }}
      >
        <label htmlFor="tuNombre">
          Tu Nombre <small className="required">necesario</small>
          <input
            type="text"
            name="tuNombre"
            id="tuNombre"
            required="required"
            onChange={(event) => {
              setTuNombre(event.target.value)
            }}
            value={tuNombre}
          />
        </label>
        <label htmlFor="tuCorreo">
          Tu Correo <small className="required">necesario</small>
          <input
            type="email"
            name="tuCorreo"
            id="tuCorreo"
            required="required"
            onChange={(event) => {
              setTuCorreo(event.target.value)
            }}
            value={tuCorreo}
          />
        </label>
        <label htmlFor="tuTelefono">
          Tu Teléfono <small className="not-required">opcional</small>
          <input
            type="text"
            name="tuTelefono"
            id="tuTelefono"
            onChange={(event) => {
              setTuTelefono(event.target.value)
            }}
            value={tuTelefono}
          />
        </label>
        <label className="saludos" htmlFor="tuSaludos">
          Saludos
          <input
            type="text"
            name="tuSaludos"
            onChange={(event) => {
              setTuSaludos(event.target.value)
            }}
            value={tuSaludos}
          />
        </label>
        <label htmlFor="tuMensaje">
          Tu Mensaje <small className="required">necesario</small>
          <textarea
            name="tuMensaje"
            id="tuMensaje"
            onChange={(event) => {
              setTuMensaje(event.target.value)
            }}
            value={tuMensaje}
          />
        </label>
        <button type="submit" className={loading ? `enviando` : ``}>
          {loading ? "Enviando" : "Enviar"}
          {loading ? <Sending /> : <Send />}
        </button>
      </form>
      {errorMessage && (
        <div className="mensaje-correo error">
          <p>
            Disculpa, ha ocurrido un error. Por favor, vuelve a intentarlo más
            tarde.
          </p>
        </div>
      )}
      {successMessage && (
        <div className="mensaje-correo success">
          <p>
            Tu mensaje ha sido enviado exitosamente. Gracias por
            escribirnos. Te estaremos contactando muy pronto.
          </p>
        </div>
      )}
    </div>
  )
}

export default ContactForm
