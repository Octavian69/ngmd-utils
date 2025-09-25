// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocPageWrapperComponent} from '@ng-doc/app';
import {NgDocPageType} from '@ng-doc/core';

const headerContent: string = `<h1 class="ngde ngde" id="skip_headers_modification" href="interceptor/http-context-tokens/skip-headers-modification" headinglink="true">SKIP_HEADERS_MODIFICATION<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="skip_headers_modification"></ng-doc-heading-anchor></h1>`

@Component({
  selector: 'ng-doc-page-wrapper-ml8vlqoq',
  template: `<ng-doc-page-wrapper [routes]="routes" [headerContent]="headerContent" [hasBreadcrumb]="hasBreadcrumb" [pageType]="pageType"></ng-doc-page-wrapper>`,
  imports: [NgDocPageWrapperComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent {
    routes = routes[0].children!;
    headerContent = headerContent;
    pageType: NgDocPageType = 'guide';
    hasBreadcrumb = true;
}


const routes: Routes = [{
  path: '',
  component: PageWrapperComponent,
  title: `SKIP_HEADERS_MODIFICATION`,
  children: [
    {
      path: '',
      loadChildren: () => import('./index/page'),
      title: `SKIP_HEADERS_MODIFICATION`,
      data: {
        icon: '',
      }
    },
  ]
}]

export default routes;
