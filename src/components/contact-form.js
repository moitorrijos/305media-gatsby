import React from "react"
import Send from "../icons/send-email.svg"

const ContactForm = () => (
  <form className="contact-form">
    <label htmlFor="tuNombre">
      Tu Nombre <small className="required">necesario</small>
      <input type="text" name="tuNombre" id="tuNombre" required="required" />
    </label>
    <label htmlFor="tuCorreo">
      Tu Correo <small className="required">necesario</small>
      <input type="email" name="tuCorreo" id="tuCorreo" required="required" />
    </label>
    <label htmlFor="tuTelefono">
      Tu Teléfono <small className="not-required">opcional</small>
      <input
        type="text"
        name="tuTelefono"
        id="tuTelefono"
        required="required"
      />
    </label>
    <label htmlFor="tuMensaje">
      Tu Mensaje <small className="required">necesario</small>
      <textarea name="tuMensaje" id="tuMensaje"  />
    </label>
    <button type="submit">
      Enviar
      <Send />
    </button>
  </form>
)

export default ContactForm
