// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../../src/app/categories/ssr/features/with-ssr-cookies/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">Imported from <code class="ngde">@ngmd/utils/ssr</code></p><hr class="ngde"><h2 id="description" href="ssr/features/with-ssr-cookies" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h2><p class="ngde">Ensures <code class="ngde ng-doc-code-with-link"><a href="/cookies#cookiesservice" class="ng-doc-code-anchor ngde">CookiesService</a></code> service works in SSR mode.</p><p class="ngde"><strong class="ngde">Interface</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="/ssr/features/with-ssr-cookies#withssrcookies" class="ng-doc-code-anchor ngde">withSsrCookies</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="/ssr/features/with-ssr-cookies#cookiesssrmanagerfeature" class="ng-doc-code-anchor ngde">CookiesSsrManagerFeature</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><p class="ngde"><strong class="ngde">Usage</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" name="app.config.ts" highlightedlines="[7]"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="/cookies#provideutilscookies" class="ng-doc-code-anchor ngde">provideUtilsCookies</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/cookies'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="/ssr/features/with-ssr-cookies#withssrcookies" class="ng-doc-code-anchor ngde">withSsrCookies</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/ssr'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> AppConfig</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="https://angular.dev/api/platform-browser/ApplicationConfig" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">ApplicationConfig</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  providers</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    // ...</span></span>
<span class="line highlighted"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    <a href="/cookies#provideutilscookies" class="ng-doc-code-anchor ngde">provideUtilsCookies</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="/ssr/features/with-ssr-cookies#withssrcookies" class="ng-doc-code-anchor ngde">withSsrCookies</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">())</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><ng-doc-blockquote type="warning" class="ngde"><p class="ngde">For <code class="ngde ng-doc-code-with-link"><a href="/ssr/features/with-ssr-cookies#withssrcookies" class="ng-doc-code-anchor ngde">withSsrCookies</a></code> to work, you need to inject the <code class="ngde ng-doc-code-with-link"><a href="/ssr/providers#provideutilsssr" class="ng-doc-code-anchor ngde">provideUtilsSsr</a></code> provider function</p></ng-doc-blockquote><h2 id="types" href="ssr/features/with-ssr-cookies" headinglink="true" class="ngde">Types<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="types"></ng-doc-heading-anchor></h2><h3 id="cookiesssrmanagerfeature" href="ssr/features/with-ssr-cookies" headinglink="true" class="ngde">CookiesSsrManagerFeature<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="cookiesssrmanagerfeature"></ng-doc-heading-anchor></h3><p class="ngde">Type returned by the <code class="ngde ng-doc-code-with-link"><a href="/ssr/features/with-ssr-cookies#withssrcookies" class="ng-doc-code-anchor ngde">withSsrCookies</a></code> feature function.</p>`

@Component({
  selector: 'ng-doc-page-240xofv8',
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
  title: `withSsrCookies`,
}]

export default routes;

