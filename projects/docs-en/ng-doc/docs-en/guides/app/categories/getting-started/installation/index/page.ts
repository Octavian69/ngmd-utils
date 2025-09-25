// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../src/app/categories/getting-started/installation/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<hr class="ngde"><h3 id="description" href="getting-started/installation" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h3><p class="ngde">This library provides a wide range of tools for automating and simplifying your Angular applications. It also offers declarative approaches to solving common development problems, helping you maintain a consistent codebase across multiple projects and making developer migration between them easier.</p><h3 id="installation" href="getting-started/installation" headinglink="true" class="ngde">Installation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="installation"></ng-doc-heading-anchor></h3><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-sh"><span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">yarn</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> add</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> @ngmd/utils</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"># or</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">npm</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> i</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> @ngmd/utils</span></span></code></pre><h3 id="usage" href="getting-started/installation" headinglink="true" class="ngde">Usage<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="usage"></ng-doc-heading-anchor></h3><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" highlightedlines="[1,7]"><code class="language-typescript"><span class="line highlighted"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="/decorators#onchange" class="ng-doc-code-anchor ngde">OnChange</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/decorators'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="https://angular.dev/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">Component</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(\{</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">...</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> SomeComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  public</span><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde"> id</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="https://angular.dev/api/core/InputSignal" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">InputSignal</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">> </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> <a href="https://angular.dev/api/core/input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">input</a></span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">required</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">  @</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="/decorators#onchange" class="ng-doc-code-anchor ngde">OnChange</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">'id'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  private</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> onInputIdChange</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">id</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    // some code when <a href="https://angular.dev/api/core/input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">input</a> id changes</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  \}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\}</span></span></code></pre>`

@Component({
  selector: 'ng-doc-page-isp5jgct',
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
  title: `Installation`,
}]

export default routes;

