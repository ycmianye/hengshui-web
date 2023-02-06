/* eslint-disable import/no-anonymous-default-export */
export default {
  footer: <p>© 蒸达人</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "阅读 →",
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: "https://zhengdaren.net",
      name: "首页",
    },
  ],
};
