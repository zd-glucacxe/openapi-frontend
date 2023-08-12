import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'zd-glucacxe出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined />zd-glucacxe</>,
          href: 'https://github.com/zd-glucacxe',
          blankTarget: true,
        },
        {
          key: 'chat',
          title: 'chatForzuodong',
          href: 'https://chat.zuodong.life/',
          blankTarget: true,  // 超链接 默认打开新页面
        },

      ]}
    />
  );
};
export default Footer;
