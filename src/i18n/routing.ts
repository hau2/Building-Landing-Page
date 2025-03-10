import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // Hỗ trợ tiếng Anh 🇬🇧, tiếng Việt 🇻🇳, tiếng Trung 🇨🇳
  locales: ['en', 'vi', 'zh'],
  
  // Ngôn ngữ mặc định
  defaultLocale: 'vi'
});
