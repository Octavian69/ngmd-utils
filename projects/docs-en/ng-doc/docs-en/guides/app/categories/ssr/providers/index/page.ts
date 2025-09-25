// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../src/app/categories/ssr/providers/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">Imported from <code class="ngde">@ngmd/utils/ssr</code></p><hr class="ngde"><h2 id="description" href="ssr/providers" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h2><p class="ngde">This page lists the providers for working with the <code class="ngde">@ngmd/utils/ssr</code> module</p><h3 id="provideutilsssr" href="ssr/providers" headinglink="true" class="ngde">provideUtilsSsr<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="provideutilsssr"></ng-doc-heading-anchor></h3><p class="ngde">Provider function necessary for the correct operation of some tools in the <code class="ngde">@ngmd/utils/ssr</code> module</p><p class="ngde"><strong class="ngde">Interface</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ Request</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Response \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'express'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="/ssr/providers#provideutilsssr" class="ng-doc-code-anchor ngde">provideUtilsSsr</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">request</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Request</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde"> response</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Response</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="https://angular.dev/api/core/Provider" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">Provider</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre><p class="ngde"><strong class="ngde">Usage</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" name="server.ts" highlightedlines="[2,18]"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="https://angular.dev/api/ssr/node/CommonEngine" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">CommonEngine</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/ssr/node'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line highlighted"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="/ssr/providers#provideutilsssr" class="ng-doc-code-anchor ngde">provideUtilsSsr</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/ssr'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> express </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'express'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> app</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> express</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">Express</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> server</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> express</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> commonEngine</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="https://angular.dev/api/ssr/node/CommonEngine" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">CommonEngine</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  // ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  server</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">get</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">'**'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">req</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde"> res</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde"> next</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    // ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    commonEngine</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">      .</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">render</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(\{</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">        // ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">        providers</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">          // ...</span></span>
<span class="line highlighted"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">          <a href="/ssr/providers#provideutilsssr" class="ng-doc-code-anchor ngde">provideUtilsSsr</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(req</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> res)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">        ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      \})</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">      .</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">then</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">html</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> =></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> res</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">send</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(html))</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">      .</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">catch</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">err</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> =></span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> next</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(err))</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  \})</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  return</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> server</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\}</span></span></code></pre>`

@Component({
  selector: 'ng-doc-page-56gi76yv',
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
  title: `Providers`,
}]

export default routes;

