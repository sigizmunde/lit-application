import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './image-card.js';

@customElement('image-gallery')
export class ImageGallery extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .gallery {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 16px;
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
      }
    `,
  ];

  @property()
  images: Array<{
    src: string;
    alt?: string;
    caption?: string;
    urlTo?: string;
  }> = [];

  render() {
    return html` <h1>Image Gallery</h1>
      <div class="gallery">
        ${this.images.map(
          image =>
            html` <image-card
              .imageLink="${image.src}"
              .imageAlt="${image.alt}"
              .imageCaption="${image.caption}"
              .linkTo="${image.urlTo}"
            ></image-card>`,
        )}
      </div>`;
  }
}
