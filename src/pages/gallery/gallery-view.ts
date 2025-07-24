import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from '@lit/task';
import '../../components/image-gallery.js';

const IMAGES_QUERY_URL = 'https://picsum.photos/v2/list?limit=9';

type ImageData = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

@customElement('gallery-view')
export class GalleryView extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property()
  pageId: number | undefined;

  constructor() {
    super();
    const pageParam = window.location.pathname.split('/').pop();
    this.pageId = pageParam ? Number(pageParam) : 1;
  }

  private _fetchImagesTask = new Task(this, {
    task: async ([pageId], { signal }) => {
      const response = await fetch(`${IMAGES_QUERY_URL}&page=${pageId}`, {
        signal,
      });
      if (!response.ok) {
        throw new Error(String(response.status));
      }
      const data = await response.json();
      return data as Promise<ImageData[]>;
    },
    args: () => [this.pageId],
  });

  render() {
    return this._fetchImagesTask.render({
      pending: () => html`<p>Loading images...</p>`,
      complete: images =>
        html`<image-gallery
          .images=${images.map(image => ({
            src: image.download_url,
            alt: image.author,
            caption: image.id,
            urlTo: image.url,
          }))}
        ></image-gallery>`,
      error: e => html`<p>Error: ${e}</p>`,
    });
  }
}
