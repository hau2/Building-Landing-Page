import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match tất cả đường dẫn có prefix ngôn ngữ
  matcher: ['/', '/(en|vi|zh)/:path*']
};
