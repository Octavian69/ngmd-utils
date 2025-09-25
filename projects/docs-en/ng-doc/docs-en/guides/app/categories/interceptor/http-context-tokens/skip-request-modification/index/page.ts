// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../../src/app/categories/interceptor/http-context-tokens/skip-request-modification/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">Imported from <code class="ngde">@ngmd/utils/interceptor</code></p><hr class="ngde"><h2 id="description" href="interceptor/http-context-tokens/skip-request-modification" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h2><p class="ngde"><code class="ngde ng-doc-code-with-link"><a href="https://angular.dev/api/common/http/HttpContextToken" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">HttpContextToken</a></code> used to disable request processing by <em class="ngde">feature functions</em> of type <code class="ngde ng-doc-code-with-link"><a href="/interceptor/introduction#utilsinterceptorfeatures" class="ng-doc-code-anchor ngde">UtilsInterceptorFeatures</a></code></p><h2 id="usage" href="interceptor/http-context-tokens/skip-request-modification" headinglink="true" class="ngde">Usage<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="usage"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="/interceptor/http-context-tokens/skip-request-modification#skip_request_modification" class="ng-doc-code-anchor ngde">SKIP_REQUEST_MODIFICATION</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/interceptor'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="/http/helpers#tohttpcontext" class="ng-doc-code-anchor ngde">toHttpContext</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/http'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="https://angular.dev/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">Component</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">/**/</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ExampleComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  private</span><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde"> getUsers$</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="/http/resources/use-get#getrequest" class="ng-doc-code-anchor ngde">GetRequest</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">IUser</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]> </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="/http/resources/use-get#useget" class="ng-doc-code-anchor ngde">useGet</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(\{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    url</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'https://fakestoreapi.com/users'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    <a href="/http/resources/use-get#force" class="ng-doc-code-anchor ngde">force</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      requestOptions</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">        context</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="/http/helpers#tohttpcontext" class="ng-doc-code-anchor ngde">toHttpContext</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"><a href="/interceptor/http-context-tokens/skip-request-modification#skip_request_modification" class="ng-doc-code-anchor ngde">SKIP_REQUEST_MODIFICATION</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> true</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      \}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    \}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  \})</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\}</span></span></code></pre><p class="ngde">Now all handlers of the <code class="ngde ng-doc-code-with-link"><a href="/interceptor/introduction#provideutilsinterceptor" class="ng-doc-code-anchor ngde">provideUtilsInterceptor</a></code> provider function will be ignored for this request.</p>`

@Component({
  selector: 'ng-doc-page-b4s7rcwy',
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
  title: `SKIP_REQUEST_MODIFICATION`,
}]

export default routes;

