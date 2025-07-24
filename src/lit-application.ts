import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { customElement } from 'lit/decorators.js';
import './pages/home-view.js';
import './pages/about-view.js';
import './pages/gallery/gallery-view.js';

@customElement('lit-application')
export class LitApplication extends LitElement {
  firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(_changedProperties);
    const router = new Router(this.shadowRoot!.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/about', component: 'about-view' },
      // Using dynamic import for lazy loading of blog routes
      {
        path: '/blogs',
        children: () =>
          import('./pages/blogs/index.js').then(module => module.routes),
      },
      {
        path: '/gallery',
        children: () =>
          import('./pages/gallery/index.js').then(module => module.routes),
      },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  // ...

  render() {
    return html`
      <main>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/blogs">Blogs</a>
        <div id="outlet"></div>
      </main>
    `;
  }
}

// customElements.define('lit-application', LitApplication);
// Don't need to define again as we are using @customElement decorator
// The decorator automatically registers the custom element with the browser.
