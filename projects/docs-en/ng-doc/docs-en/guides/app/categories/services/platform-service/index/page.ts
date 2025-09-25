// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../../../src/app/categories/services/platform-service/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">Imported from <code class="ngde">@ngmd/utils/services</code></p><hr class="ngde"><h2 id="description" href="services/platform-service" headinglink="true" class="ngde">Description<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="description"></ng-doc-heading-anchor></h2><p class="ngde">Platform detection service by <code class="ngde ng-doc-code-with-link"><a href="https://angular.dev/api/core/PLATFORM_ID" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">PLATFORM_ID</a></code> identifier</p><h2 id="platformservice" href="services/platform-service" headinglink="true" class="ngde">PlatformService<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="platformservice"></ng-doc-heading-anchor></h2><p class="ngde"><strong class="ngde">Interface</strong></p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="https://angular.dev/api/core/Injectable" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">Injectable</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(\{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  providedIn</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'root'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> PlatformService</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> \{</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  public</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> isBrowser</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> boolean</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">  public</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> isServer</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> boolean</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">\}</span></span></code></pre><h2 id="methods" href="services/platform-service" headinglink="true" class="ngde">Methods<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="methods"></ng-doc-heading-anchor></h2><h3 id="isbrowser" href="services/platform-service" headinglink="true" class="ngde">isBrowser<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="isbrowser"></ng-doc-heading-anchor></h3><p class="ngde">Method returns <code class="ngde">true</code> if the called code is executed in a <strong class="ngde">browser</strong> environment</p><h3 id="isserver" href="services/platform-service" headinglink="true" class="ngde">isServer<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="isserver"></ng-doc-heading-anchor></h3><p class="ngde">Method returns <code class="ngde">true</code> if the called code is executed in a <strong class="ngde">server</strong> environment</p>`

@Component({
  selector: 'ng-doc-page-692tbgxp',
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
  title: `PlatformService`,
}]

export default routes;

