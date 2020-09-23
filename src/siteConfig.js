import kebabCase from 'lodash/kebabCase';

export default {
  siteUrl: 'http://localhost:8000/',
  siteTitle: 'مدونة واثق',
  siteDescription:
    'مدونة واثق الشويطر. مدونة شخصية تتحدث عن التقنية والبرمجة والثقافة والأدب وأشياء أخرى',
  pathPrefix: '',
  siteLogo: '/watheq.svg',
  userTwitter: 'watheq_show',
  mailchimpActionUrl:
    'https://xyz.us19.list-manage.com/subscribe/post?u=e89e9cac4b887c5ca51a7bfa8&id=d4d17540ed',
  gatsby_disqus_name: 'DISQUS_SHORT_NAME',
  navLinks: [
    {
      name: 'تاريخ',
      link: `/categories/${kebabCase('تاريخ')}`,
    },
    {
      name: 'كتب',
      link: `/categories/${kebabCase('كتب')}`,
    },
    {
      name: 'شعر',
      link: `/categories/${kebabCase('شعر')}`,
    },
    {
      name: 'تقنية',
      link: `/categories/${kebabCase('تقنية')}`,
    },
    {
      name: 'التعليم',
      link: `/categories/${kebabCase('التعليم')}`,
    },
    {
      name: 'التدوين',
      link: `/categories/${kebabCase('التدوين')}`,
    },
    {
      name: 'برمجة',
      link: `/categories/${kebabCase('برمجة')}`,
    },
  ],
};
