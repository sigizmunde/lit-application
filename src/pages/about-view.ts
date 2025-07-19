import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-view')
export class AboutView extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h1>About</h1>
      <p>This is the about page.</p>`;
  }
}
