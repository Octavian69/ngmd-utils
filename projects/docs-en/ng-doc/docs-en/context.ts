// @ts-nocheck
import { Provider } from '@angular/core';
import { NG_DOC_CONTEXT, NG_DOC_ROUTE_PREFIX, NG_DOC_SHIKI_THEME } from '@ng-doc/app/tokens';

export function provideNgDocContext(): Provider[] {
  return [{
    provide: NG_DOC_CONTEXT,
    useValue: {
      navigation: [
          
        {
          title: `Getting Started`,
          route: '/getting-started',
          expandable: true,
          expanded: false,
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Installation`,
          route: '/getting-started/installation',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Style Guides`,
          route: '/getting-started/style-guides',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          
        {
          title: `Actions`,
          route: '/actions',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `BrowserStorage`,
          route: '/browser-storage',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Cookies`,
          route: '/cookies',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `DB`,
          route: '/db',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Decorators`,
          route: '/decorators',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Directives`,
          route: '/directives',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Handlers`,
          route: '/handlers',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Http`,
          route: '/http',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Introduction`,
          route: '/http/introduction',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Usage`,
          route: '/http/usage',
          order: 2,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Classes`,
          route: '/http/classes',
          expandable: true,
          expanded: false,
          order: 3,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `ApiRequest`,
          route: '/http/classes/api-request',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `CrudRequest`,
          route: '/http/classes/crud-request',
          order: 2,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `FetchRequest`,
          route: '/http/classes/fetch-request',
          order: 3,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
              
        {
          title: `Resources`,
          route: '/http/resources',
          expandable: true,
          expanded: false,
          order: 4,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `useGet`,
          route: '/http/resources/use-get',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `usePost`,
          route: '/http/resources/use-post',
          order: 2,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `usePatch`,
          route: '/http/resources/use-patch',
          order: 3,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `usePut`,
          route: '/http/resources/use-put',
          order: 4,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `useDelete`,
          route: '/http/resources/use-delete',
          order: 5,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `useCache`,
          route: '/http/resources/use-cache',
          order: 6,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `useOperator`,
          route: '/http/resources/use-operator',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
              
        {
          title: `ApiHub`,
          route: '/http/api-hub',
          order: 5,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Types`,
          route: '/http/types',
          order: 6,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Helpers`,
          route: '/http/helpers',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          
        {
          title: `Initializer`,
          route: '/initializer',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Introduction`,
          route: '/initializer/introduction',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Features`,
          route: '/initializer/features',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `withInitializeState`,
          route: '/initializer/features/with-initialize-state',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `withEnvironment`,
          route: '/initializer/features/with-environment',
          order: 2,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `withInitializeHandler`,
          route: '/initializer/features/with-initialize-handler',
          order: 3,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          ]
        },
          
        {
          title: `Interceptor`,
          route: '/interceptor',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Introduction`,
          route: '/interceptor/introduction',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Features`,
          route: '/interceptor/features',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `withDefaultConfig`,
          route: '/interceptor/features/with-default-config',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `withHeaders`,
          route: '/interceptor/features/with-headers',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `withHeadersHandler`,
          route: '/interceptor/features/with-headers-handler',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `withTagsUrlsHandler`,
          route: '/interceptor/features/with-tags-urls-handler',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `withTagsUrlsMap`,
          route: '/interceptor/features/with-tags-urls-map',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
              
        {
          title: `HttpContextTokens`,
          route: '/interceptor/http-context-tokens',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `SKIP_HEADERS_MODIFICATION`,
          route: '/interceptor/http-context-tokens/skip-headers-modification',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `SKIP_REQUEST_MODIFICATION`,
          route: '/interceptor/http-context-tokens/skip-request-modification',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          ]
        },
          
        {
          title: `Pipes`,
          route: '/pipes',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Services`,
          route: '/services',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `PlatformService`,
          route: '/services/platform-service',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          
        {
          title: `SSR`,
          route: '/ssr',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Providers`,
          route: '/ssr/providers',
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Tokens`,
          route: '/ssr/tokens',
          order: 2,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Logger`,
          route: '/ssr/logger',
          order: 3,
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Directives`,
          route: '/ssr/directives',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Features`,
          route: '/ssr/features',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `withSsrCookies`,
          route: '/ssr/features/with-ssr-cookies',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          ]
        },
          
        {
          title: `State`,
          route: '/state',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Store`,
          route: '/store',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Strategies`,
          route: '/strategies',
          expandable: true,
          expanded: false,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `provideTitleStrategy`,
          route: '/strategies/provide-title-strategy',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
      ],
    },
  }, {
    provide: NG_DOC_ROUTE_PREFIX,
    useValue: '',
  }, {
    provide: NG_DOC_SHIKI_THEME,
    useValue: {
      light: '',
      dark: '',
    },
  }];
}
