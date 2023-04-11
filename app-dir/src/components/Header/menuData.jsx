const menuData = [
   {
      title: "Home",
      path: "/",
      newTab: false,
   },
   {
      title: "About",
      path: "/about",
      newTab: false,
   },
   {
      title: "Blog",
      path: "/blog",
      newTab: false,
   },
   {
      title: "Support",
      path: "/contact",
      newTab: false,
   },
   {
      title: "React Query",
      newTab: false,
      submenu: [
         {
            title: "SSR",
            path: "/reactquery/ssr",
            newTab: false,
         },
         {
            title: "CSR",
            path: "/reactquery/csr",
            newTab: false,
         },
      ]
   },
   {
      title: "Pages",
      newTab: false,
      submenu: [
         {
            title: "About Page",
            path: "/about",
            newTab: false,
         },
         {
            title: "Contact Page",
            path: "/contact",
            newTab: false,
         },
         {
            title: "Blog Grid Page",
            path: "/blog",
            newTab: false,
         },
         {
            title: "Blog Sidebar Page",
            path: "/blog-sidebar",
            newTab: false,
         },
         {
            title: "Blog Details Page",
            path: "/blog-details",
            newTab: false,
         },
         {
            title: "Sign In Page",
            path: "/signin",
            newTab: false,
         },
         {
            title: "Sign Up Page",
            path: "/signup",
            newTab: false,
         },
         {
            title: "Error Page",
            path: "/error",
            newTab: false,
         },
      ],
   },
];
export default menuData;
