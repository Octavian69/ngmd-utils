// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../../src/app/categories/initializer/features/with-environment/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">Imported from <code class="ngde">@ngmd/utils/initializer</code></p><hr class="ngde"><h2 id="description" href="initializer/features/with-environment" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h2><p class="ngde"><em class="ngde">Feature function</em> that defines the strategy for loading a configuration file into the <em class="ngde">environments</em> object.</p><p class="ngde"><strong class="ngde">Interface</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">function</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="/initializer/features/with-environment#withenvironment" class="ng-doc-code-anchor ngde">withEnvironment</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">T</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> extends</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> object</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">environment</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> T</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="/initializer/features/with-environment" class="ng-doc-code-anchor ngde">InitializeEnvironmentFeature</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">T</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span></span></code></pre><p class="ngde"><strong class="ngde">Usage</strong></p><p class="ngde">A detailed guide for integration is described <a href="/initializer/introduction#before-angular-18" class="ngde">here</a></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" name="src/app/app.config.ts"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  <a href="/initializer/introduction#provideutilsinitializer" class="ng-doc-code-anchor ngde">provideUtilsInitializer</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  <a href="/initializer/features/with-environment#withenvironment" class="ng-doc-code-anchor ngde">withEnvironment</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/initializer'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ <a href="/interceptor/introduction#provideutilsinterceptor" class="ng-doc-code-anchor ngde">provideUtilsInterceptor</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> <a href="/interceptor/features/with-tags-urls-map#withtagsurlsmap" class="ng-doc-code-anchor ngde">withTagsUrlsMap</a> \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ngmd/utils/interceptor'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ environment \} </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"><a href="https://rxjs.dev/api/index/function/from" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the RxJS documentation.">from</a></span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@env'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> AppConfig</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="https://angular.dev/api/platform-browser/ApplicationConfig" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">ApplicationConfig</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  providers</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    <a href="/initializer/introduction#provideutilsinitializer" class="ng-doc-code-anchor ngde">provideUtilsInitializer</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(environment</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> <a href="/initializer/features/with-environment#withenvironment" class="ng-doc-code-anchor ngde">withEnvironment</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(environment))</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    <a href="/interceptor/introduction#provideutilsinterceptor" class="ng-doc-code-anchor ngde">provideUtilsInterceptor</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">      <a href="/interceptor/features/with-tags-urls-map#withtagsurlsmap" class="ng-doc-code-anchor ngde">withTagsUrlsMap</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(() </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">        return</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{ </span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">'@'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> environment</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">API_HOST</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@ws'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> environment</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde">WS_HOST</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">      \})</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    )</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre>`

@Component({
  selector: 'ng-doc-page-pzuakwps',
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
  title: `withEnvironment`,
}]

export default routes;

