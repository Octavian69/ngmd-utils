// @ts-nocheck
import {Routes} from '@angular/router';
import entrya5rwlctak36 from '../../src/app/categories/ssr/ng-doc.category';
import entrydbg9ofelaql from '../../src/app/categories/ssr/features/ng-doc.category';
import entryrpupaxevaul from '../../src/app/categories/getting-started/ng-doc.category';
import entry94jhknq260c from '../../src/app/categories/initializer/ng-doc.category';
import entrymj1uro1yxlb from '../../src/app/categories/initializer/features/ng-doc.category';
import entrykdiukacof38 from '../../src/app/categories/http/ng-doc.category';
import entryr5gmsde6sd from '../../src/app/categories/http/classes/ng-doc.category';
import entry0ua0778ow3ip from '../../src/app/categories/http/resources/ng-doc.category';
import entryhiqv7sbk776 from '../../src/app/categories/interceptor/ng-doc.category';
import entryuurusyoa1xr from '../../src/app/categories/interceptor/features/ng-doc.category';
import entry45g848khxq6 from '../../src/app/categories/interceptor/http-context-tokens/ng-doc.category';
import entryy5sfrj6w7zc from '../../src/app/categories/services/ng-doc.category';
import entryy8yp278g95b from '../../src/app/categories/strategies/ng-doc.category';

export const NG_DOC_ROUTING: Routes = [
	
	{
		path: 'actions',
		title: `Actions`,
		loadChildren: () => import('./guides/app/categories/actions/page'),
	},
	
	{
		path: 'ssr',
		title: `SSR`,
    providers: [
      ...(entrya5rwlctak36.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'providers',
			pathMatch: 'full'
		},
	{
		path: 'providers',
		title: `Providers`,
		loadChildren: () => import('./guides/app/categories/ssr/providers/page'),
	},
	{
		path: 'logger',
		title: `Logger`,
		loadChildren: () => import('./guides/app/categories/ssr/logger/page'),
	},
	{
		path: 'tokens',
		title: `Tokens`,
		loadChildren: () => import('./guides/app/categories/ssr/tokens/page'),
	},
	{
		path: 'directives',
		title: `Directives`,
		loadChildren: () => import('./guides/app/categories/ssr/directives/page'),
	},
	{
		path: 'features',
		title: `Features`,
    providers: [
      ...(entrydbg9ofelaql.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'with-ssr-cookies',
			pathMatch: 'full'
		},
	{
		path: 'with-ssr-cookies',
		title: `withSsrCookies`,
		loadChildren: () => import('./guides/app/categories/ssr/features/with-ssr-cookies/page'),
	},],
	},],
	},
	
	{
		path: 'getting-started',
		title: `Getting Started`,
    providers: [
      ...(entryrpupaxevaul.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'style-guides',
			pathMatch: 'full'
		},
	{
		path: 'style-guides',
		title: `Style Guides`,
		loadChildren: () => import('./guides/app/categories/getting-started/style-guides/page'),
	},
	{
		path: 'installation',
		title: `Installation`,
		loadChildren: () => import('./guides/app/categories/getting-started/installation/page'),
	},],
	},
	
	{
		path: 'initializer',
		title: `Initializer`,
    providers: [
      ...(entry94jhknq260c.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'features',
			pathMatch: 'full'
		},
	{
		path: 'features',
		title: `Features`,
    providers: [
      ...(entrymj1uro1yxlb.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'with-initialize-handler',
			pathMatch: 'full'
		},
	{
		path: 'with-initialize-handler',
		title: `withInitializeHandler`,
		loadChildren: () => import('./guides/app/categories/initializer/features/with-initialize-handler/page'),
	},
	{
		path: 'with-environment',
		title: `withEnvironment`,
		loadChildren: () => import('./guides/app/categories/initializer/features/with-environment/page'),
	},
	{
		path: 'with-initialize-state',
		title: `withInitializeState`,
		loadChildren: () => import('./guides/app/categories/initializer/features/with-initialize-state/page'),
	},],
	},
	{
		path: 'introduction',
		title: `Introduction`,
		loadChildren: () => import('./guides/app/categories/initializer/introduction/page'),
	},],
	},
	
	{
		path: 'http',
		title: `Http`,
    providers: [
      ...(entrykdiukacof38.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'usage',
			pathMatch: 'full'
		},
	{
		path: 'usage',
		title: `Usage`,
		loadChildren: () => import('./guides/app/categories/http/usage/page'),
	},
	{
		path: 'helpers',
		title: `Helpers`,
		loadChildren: () => import('./guides/app/categories/http/helpers/page'),
	},
	{
		path: 'types',
		title: `Types`,
		loadChildren: () => import('./guides/app/categories/http/types/page'),
	},
	{
		path: 'introduction',
		title: `Introduction`,
		loadChildren: () => import('./guides/app/categories/http/introduction/page'),
	},
	{
		path: 'classes',
		title: `Classes`,
    providers: [
      ...(entryr5gmsde6sd.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'fetch-request',
			pathMatch: 'full'
		},
	{
		path: 'fetch-request',
		title: `FetchRequest`,
		loadChildren: () => import('./guides/app/categories/http/classes/pages/fetch-request/page'),
	},
	{
		path: 'api-request',
		title: `ApiRequest`,
		loadChildren: () => import('./guides/app/categories/http/classes/pages/api-request/page'),
	},
	{
		path: 'crud-request',
		title: `CrudRequest`,
		loadChildren: () => import('./guides/app/categories/http/classes/pages/crud-request/page'),
	},],
	},
	{
		path: 'resources',
		title: `Resources`,
    providers: [
      ...(entry0ua0778ow3ip.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'use-get',
			pathMatch: 'full'
		},
	{
		path: 'use-get',
		title: `useGet`,
		loadChildren: () => import('./guides/app/categories/http/resources/pages/use-get/page'),
	},
	{
		path: 'use-cache',
		title: `useCache`,
		loadChildren: () => import('./guides/app/categories/http/resources/pages/use-cache/page'),
	},
	{
		path: 'use-delete',
		title: `useDelete`,
		loadChildren: () => import('./guides/app/categories/http/resources/pages/use-delete/page'),
	},
	{
		path: 'use-put',
		title: `usePut`,
		loadChildren: () => import('./guides/app/categories/http/resources/pages/use-put/page'),
	},
	{
		path: 'use-patch',
		title: `usePatch`,
		loadChildren: () => import('./guides/app/categories/http/resources/pages/use-patch/page'),
	},
	{
		path: 'use-post',
		title: `usePost`,
		loadChildren: () => import('./guides/app/categories/http/resources/pages/use-post/page'),
	},
	{
		path: 'use-operator',
		title: `useOperator`,
		loadChildren: () => import('./guides/app/categories/http/resources/pages/use-operator/page'),
	},],
	},
	{
		path: 'api-hub',
		title: `ApiHub`,
		loadChildren: () => import('./guides/app/categories/http/api-hub/page'),
	},],
	},
	
	{
		path: 'db',
		title: `DB`,
		loadChildren: () => import('./guides/app/categories/db/page'),
	},
	
	{
		path: 'interceptor',
		title: `Interceptor`,
    providers: [
      ...(entryhiqv7sbk776.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'introduction',
			pathMatch: 'full'
		},
	{
		path: 'introduction',
		title: `Introduction`,
		loadChildren: () => import('./guides/app/categories/interceptor/introduction/page'),
	},
	{
		path: 'features',
		title: `Features`,
    providers: [
      ...(entryuurusyoa1xr.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'with-tags-urls-handler',
			pathMatch: 'full'
		},
	{
		path: 'with-tags-urls-handler',
		title: `withTagsUrlsHandler`,
		loadChildren: () => import('./guides/app/categories/interceptor/features/with-tags-urls-handler/page'),
	},
	{
		path: 'with-headers-handler',
		title: `withHeadersHandler`,
		loadChildren: () => import('./guides/app/categories/interceptor/features/with-headers-handler/page'),
	},
	{
		path: 'with-default-config',
		title: `withDefaultConfig`,
		loadChildren: () => import('./guides/app/categories/interceptor/features/with-default-config/page'),
	},
	{
		path: 'with-tags-urls-map',
		title: `withTagsUrlsMap`,
		loadChildren: () => import('./guides/app/categories/interceptor/features/with-tags-urls-map/page'),
	},
	{
		path: 'with-headers',
		title: `withHeaders`,
		loadChildren: () => import('./guides/app/categories/interceptor/features/with-headers/page'),
	},],
	},
	{
		path: 'http-context-tokens',
		title: `HttpContextTokens`,
    providers: [
      ...(entry45g848khxq6.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'skip-headers-modification',
			pathMatch: 'full'
		},
	{
		path: 'skip-headers-modification',
		title: `SKIP_HEADERS_MODIFICATION`,
		loadChildren: () => import('./guides/app/categories/interceptor/http-context-tokens/skip-headers-modification/page'),
	},
	{
		path: 'skip-request-modification',
		title: `SKIP_REQUEST_MODIFICATION`,
		loadChildren: () => import('./guides/app/categories/interceptor/http-context-tokens/skip-request-modification/page'),
	},],
	},],
	},
	
	{
		path: 'services',
		title: `Services`,
    providers: [
      ...(entryy5sfrj6w7zc.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'platform-service',
			pathMatch: 'full'
		},
	{
		path: 'platform-service',
		title: `PlatformService`,
		loadChildren: () => import('./guides/app/categories/services/platform-service/page'),
	},],
	},
	
	{
		path: 'browser-storage',
		title: `BrowserStorage`,
		loadChildren: () => import('./guides/app/categories/browser-storage/page'),
	},
	
	{
		path: 'directives',
		title: `Directives`,
		loadChildren: () => import('./guides/app/categories/directives/page'),
	},
	
	{
		path: 'store',
		title: `Store`,
		loadChildren: () => import('./guides/app/categories/store/page'),
	},
	
	{
		path: 'cookies',
		title: `Cookies`,
		loadChildren: () => import('./guides/app/categories/cookies/page'),
	},
	
	{
		path: 'pipes',
		title: `Pipes`,
		loadChildren: () => import('./guides/app/categories/pipes/page'),
	},
	
	{
		path: 'state',
		title: `State`,
		loadChildren: () => import('./guides/app/categories/state/page'),
	},
	
	{
		path: 'handlers',
		title: `Handlers`,
		loadChildren: () => import('./guides/app/categories/handlers/page'),
	},
	
	{
		path: 'decorators',
		title: `Decorators`,
		loadChildren: () => import('./guides/app/categories/decorators/page'),
	},
	
	{
		path: 'strategies',
		title: `Strategies`,
    providers: [
      ...(entryy8yp278g95b.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'provide-title-strategy',
			pathMatch: 'full'
		},
	{
		path: 'provide-title-strategy',
		title: `provideTitleStrategy`,
		loadChildren: () => import('./guides/app/categories/strategies/provide-title-strategy/page'),
	},],
	},
];
