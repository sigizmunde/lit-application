import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('blog-detail-view')
export class BlogDetailView extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property()
  blogId: number | undefined;

  constructor() {
    super();
    const blogParam = window.location.pathname.split('/').pop();
    this.blogId = blogParam ? Number(blogParam) : undefined;
  }

  render() {
    return html` <h1>Blog Detail</h1>
      <p>This is Blog ${this.blogId}</p>`;
  }
}
