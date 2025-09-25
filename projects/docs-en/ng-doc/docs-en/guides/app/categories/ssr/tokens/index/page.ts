// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../src/app/categories/ssr/tokens/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">Imported from <code class="ngde">@ngmd/utils/ssr</code></p><hr class="ngde"><h2 id="description" href="ssr/tokens" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h2><p class="ngde">This page lists the tokens provided by the <code class="ngde">@ngmd/utils/ssr</code> module</p><h2 id="request" href="ssr/tokens" headinglink="true" class="ngde">REQUEST<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="request"></ng-doc-heading-anchor></h2><p class="ngde">Request object token within <code class="ngde">@angular/ssr</code></p><p class="ngde"><strong class="ngde">Interface</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ Request \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'express'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> <a href="https://angular.dev/api/core/REQUEST" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">REQUEST</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="https://angular.dev/api/core/InjectionToken" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">InjectionToken</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">Request</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><ng-doc-blockquote type="warning" class="ngde"><p class="ngde">For the <code class="ngde ng-doc-code-with-link"><a href="https://angular.dev/api/core/REQUEST" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">REQUEST</a></code> token to work, you need to inject the <code class="ngde ng-doc-code-with-link"><a href="/ssr/providers#provideutilsssr" class="ng-doc-code-anchor ngde">provideUtilsSsr</a></code> provider function</p></ng-doc-blockquote><h2 id="response" href="ssr/tokens" headinglink="true" class="ngde">RESPONSE<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="response"></ng-doc-heading-anchor></h2><p class="ngde">Response object token for requests within <code class="ngde">@angular/ssr</code></p><p class="ngde"><strong class="ngde">Interface</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ Response \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'express'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> RESPONSE</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="https://angular.dev/api/core/InjectionToken" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">InjectionToken</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">Request</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><ng-doc-blockquote type="warning" class="ngde"><p class="ngde">For the <code class="ngde">RESPONSE</code> token to work, you need to inject the <code class="ngde ng-doc-code-with-link"><a href="/ssr/providers#provideutilsssr" class="ng-doc-code-anchor ngde">provideUtilsSsr</a></code> provider function</p></ng-doc-blockquote>`

@Component({
  selector: 'ng-doc-page-w6vqbxxr',
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
  title: `Tokens`,
}]

export default routes;

