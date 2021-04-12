class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Solis Barrera Jose de Jesus
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
