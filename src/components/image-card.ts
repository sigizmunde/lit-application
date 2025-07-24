import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('image-card')
export class ImageCard extends LitElement {
  static styles = [
    css`
      * {
        box-sizing: border-box;
      }
      :host {
        display: block;
        flex: 1 1 calc(33.333% - 32px);
        max-width: 33.333%;
        align-self: stretch;
      }
      .image-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        height: 100%;
      }
      .image-card img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
      }
      a {
        display: block;
        margin: 0;
        text-decoration: none;
        color: #007bff;
      }
      .image-caption {
        font-size: 14px;
        color: #666;
      }
    `,
  ];

  @property()
  imageLink: string | undefined;

  @property()
  imageCaption: string | undefined;

  @property()
  imageAlt: string | undefined;

  @property()
  linkTo: string | undefined;

  render() {
    return html` <div class="image-card">
      <a href="${this.linkTo}" target="_blank" rel="noopener noreferrer">
        <img
          src="${this.imageLink}"
          alt="${this.imageAlt ?? this.imageCaption ?? 'Image'}"
        />
        ${
          this.imageCaption
            ? html`<p class="image-caption">${this.imageCaption}</p>`
            : ''
        }
      </btn>
    </div>`;
  }
}
