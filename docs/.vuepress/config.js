const { defaultTheme, viteBundler } = require("vuepress");
const { path } = require("@vuepress/utils");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");

module.exports = {
  title: "Tegisto Whitepaper",
  description: "Every company will have their own tokens in the future",
  base: '/docs-whitepaper/',
  head: [
    ["link", { rel: "icon", sizes: "32x32", href: "/docs-whitepaper/images/logos/tegisto-logo-icon.svg" }],
    // ["link", { rel: "stylesheet", type: "text/css", href: "/docs-whitepaper/input.css" }],
    ["link", { rel: "stylesheet", type: "text/css", href: "/docs-whitepaper/reset.css" }],
    // ["script", { src: "https://cdn.tailwindcss.com" }],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/docs-whitepaper/icons/colored-icons/yartu-colored-icons.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/docs-whitepaper/icons/font-icons/yartu-icons.css",
      },
    ],
  ],
  theme: defaultTheme({
    logo: "/images/logos/tegisto-logo.svg",
    logoDark: "/images/logos/tegisto-logo-dark.svg",
    navbar: [
      // NavbarItem
      {
        text: "Whitepaper",
        link: "/whitepaper/introduction.md",
      },
    ],
    sidebar: {
      "/whitepaper/": [
        {
          text: "Introduction",
          link: "/whitepaper/introduction.md",
        },
        {
          text: "Company Tokenization",
          link: "/whitepaper/tokenization/company-tokenization-concept.md",
          children: [
            {
              text: "Upcoming Feature",
              link: "/whitepaper/tokenization/upcoming-future.md",
            },
            
            {
              text: "How Will It Work",
              link: "/whitepaper/tokenization/how-to-work.md",
            },
            {
              text: "Company Tokens Exchange",
              link: "/whitepaper/tokenization/tokens-exchange.md",
            },
          ],
        },
        {
          text: "Features of Tegisto",
          link: "/whitepaper/features/features-of-tegisto.md",
          children: [
            {
              text: "Swap",
              link: "/whitepaper/features/swap.md",
            },
            {
              text: "Pool",
              link: "/whitepaper/features/pool.md",
            },
            {
              text: "Yield Farming",
              link: "/whitepaper/features/yield-farming.md",
            },
            {
              text: "Staking",
              link: "/whitepaper/features/staking.md",
            },
            {
              text: "Launchpad",
              link: "/whitepaper/features/launchpad.md",
            },
            {
              text: "Incubation",
              link: "/whitepaper/features/incubation.md",
            },
            {
              text: "DAO",
              link: "/whitepaper/features/dao.md",
            },
            {
              text: "DAO Reserve and Treasury",
              link: "/whitepaper/features/dao-reserve-treasury.md",
            },
            {
              text: "Multichain",
              link: "/whitepaper/features/multichain.md",
            },  
            {
              text: "DID",
              link: "/whitepaper/features/did.md",
            },
          ],
        },
        {
          text: "Tokenomics",
          link: "/whitepaper/tokenomics.md",
        },
        {
          text: "Roadmap",
          link: "/whitepaper/roadmap.md",
        },
        {
          text: "Contact",
          link: "/whitepaper/contact.md",
        },
      ],
    },
  }),
  plugins: [
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, "./ComponentsUsage/"),
    //   componentsPatterns: "**/*",
    // }),
  ],
  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  bundler: viteBundler({
    postcssOptions: {
      plugins: {
        tailwindcss: {
          config: "./tailwind.config.js",
        },
        autoprefixer: {},
      },
    },
  }),
};
