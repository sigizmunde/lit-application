import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import './pages/home-view.js';
import './pages/about-view.js';
import { customElement } from 'lit/decorators.js';
import { routes as blogsRoutes } from './pages/blogs/index.js';

@customElement('lit-application')
export class LitApplication extends LitElement {
  firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(_changedProperties);
    const router = new Router(this.shadowRoot!.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/about', component: 'about-view' },
      ...blogsRoutes,
      { path: '(.*)', redirect: '/' },
    ]);
  }

  // ...

  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

// customElements.define('lit-application', LitApplication);
// Don't need to define again as we are using @customElement decorator
// The decorator automatically registers the custom element with the browser.
