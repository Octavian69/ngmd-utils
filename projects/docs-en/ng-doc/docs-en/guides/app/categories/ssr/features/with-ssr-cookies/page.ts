// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocPageWrapperComponent} from '@ng-doc/app';
import {NgDocPageType} from '@ng-doc/core';

const headerContent: string = `<h1 class="ngde ngde" id="withssrcookies" href="ssr/features/with-ssr-cookies" headinglink="true">withSsrCookies<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="withssrcookies"></ng-doc-heading-anchor></h1>`

@Component({
  selector: 'ng-doc-page-wrapper-9q6rvtq7',
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
  title: `withSsrCookies`,
  children: [
    {
      path: '',
      loadChildren: () => import('./index/page'),
      title: `withSsrCookies`,
      data: {
        icon: '',
      }
    },
  ]
}]

export default routes;
