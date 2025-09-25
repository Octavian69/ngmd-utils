// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../src/app/categories/ssr/directives/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">Imported from <code class="ngde">@ngmd/utils/ssr</code></p><hr class="ngde"><h2 id="description" href="ssr/directives" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h2><p class="ngde">Here is a list of directives that can be useful for working in applications using <code class="ngde">@angular/ssr</code></p><h2 id="browserrenderdirective" href="ssr/directives" headinglink="true" class="ngde">BrowserRenderDirective<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="browserrenderdirective"></ng-doc-heading-anchor></h2><p class="ngde">Renders template content only in the browser. If the application is running on the server, the content will not be displayed. This is useful for performing DOM manipulations and using third-party libraries that only work in the browser.</p><p class="ngde">In client-side rendering, the main work of creating the HTML page is performed on the client side (in the browser) using JavaScript.</p><p class="ngde"><strong class="ngde">Usage</strong></p><div class="ngde"><ng-doc-tab group="browser-render-group" name="example.component.html" icon="" class="ngde"><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> *ngBrowserRender</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> (click)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"changeStyle()"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Click me</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> #textElement</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Some text here</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">&#x3C;!-- Or --></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> *ngBrowserRender</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">canvas</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> id</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"myChart"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">canvas</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre></ng-doc-tab></div><div class="ngde"><ng-doc-tab group="browser-render-group" name="example.component.ts" icon="" class="ngde"><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" highlightedlines="[1,5]"><code class="language-ts"><span class="line highlighted"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ BrowserRenderDirective \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/ssr'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="https://angular.dev/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">Component</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(\{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  imports</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line highlighted"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">    BrowserRenderDirective</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  // ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ExampleComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{\}</span></span></code></pre></ng-doc-tab></div><p class="ngde">These examples show that such code will only work in the client environment. DOM manipulations and connecting third-party libraries, for example, for creating charts and animations, will only work in the browser. This prevents code execution on the server, which can lead to errors.</p><ng-doc-blockquote type="warning" class="ngde"><p class="ngde">If your application supports SSR, don't forget to check during local development that there are no errors.</p></ng-doc-blockquote><h2 id="serverrenderdirective" href="ssr/directives" headinglink="true" class="ngde">ServerRenderDirective<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="serverrenderdirective"></ng-doc-heading-anchor></h2><p class="ngde">Renders template content only on the server. This is useful for preloading data and displaying it on the page before the page is loaded in the browser.</p><p class="ngde">In server-side rendering, the HTML page is fully generated on the server and sent to the client. This provides fast initial page loading and better SEO optimization.</p><p class="ngde"><strong class="ngde">Usage</strong></p><p class="ngde">On the server, you can preload data and display it on the page before the page is loaded in the browser. This allows you to speed up page loading and improve user experience, especially with slow connections.</p><div class="ngde"><ng-doc-tab group="server-render-group" name="example.component.html" icon="" class="ngde"><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> *ngServerRender</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Loading data from server...</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">p</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre></ng-doc-tab></div><div class="ngde"><ng-doc-tab group="server-render-group" name="example.component.ts" icon="" class="ngde"><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" highlightedlines="[1,5]"><code class="language-ts"><span class="line highlighted"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ ServerRenderDirective \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/ssr'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="https://angular.dev/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">Component</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(\{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  imports</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line highlighted"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">    ServerRenderDirective</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  // ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ExampleComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{\}</span></span></code></pre></ng-doc-tab></div><ng-doc-blockquote type="warning" class="ngde"><p class="ngde">If your application supports SSR, don't forget to check during local development that there are no errors.</p></ng-doc-blockquote>`

@Component({
  selector: 'ng-doc-page-stguf8ly',
  template: `<ng-doc-page></ng-doc-page>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgDocPageComponent,
    ...PLAYGROUND_COMPONENTS,
  ],
  providers: [
    {provide: NgDocRootPage, useExisting: PageComponent},
    PLAYGROUND_PROVIDERS,
    (entry.providers ?? []),
  ],
})
export class PageComponent extends NgDocRootPage {
  readonly pageType: NgDocPageType = 'guide';
  readonly pageContent: string = pageContent;
  readonly page?: NgDocPage = entry;
  readonly demoAssets: NgDocDemoAssets = demoAssets;

  constructor() {
    super();
  }
}

const routes: Routes = [{
  ...(isRoute(entry.route) ? entry.route : {}),
  path: '',
  component: PageComponent,
  title: `Directives`,
}]

export default routes;

