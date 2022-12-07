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
    [
      "link",
      {
        rel: "icon",
        sizes: "32x32",
        href: "/docs-whitepaper/images/logos/tegisto-logo-icon.svg",
      },
    ],
    // ["link", { rel: "stylesheet", type: "text/css", href: "/docs-whitepaper/input.css" }],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/docs-whitepaper/reset.css",
      },
    ],
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
          link: "/whitepaper/company-tokenization",
          children: [
            {
              text: "Upcoming Feature",
              link: "/whitepaper/company-tokenization/upcoming-future-every-company-will-have-their-own-tokens.md",
            },
            {
              text: "How to Work",
              link: "/whitepaper/company-tokenization/how-company-tokenization-will-work-in-tegisto.md",
            },
            {
              text: "Tokens Exchange",
              link: "/whitepaper/company-tokenization/decentralized-company-tokens-exchange.md",
            },
          ],
        },
        {
          text: "Target Markets",
          link: "/whitepaper/target-markets-and-sectors-overview.md",
        },
        {
          text: "Competitive Analysis",
          link: "/whitepaper/competitor-analysis.md",
        },
        {
          text: "Tegisto Solutions",
          link: "/whitepaper/tegisto-solutions",
          children: [
            {
              text: "Introducing Dashboard",
              link: "/whitepaper/tegisto-solutions/tegisto-dashboard",
              children: [
                {
                  text: "Create Token Service",
                  link: "/whitepaper/tegisto-solutions/tegisto-dashboard/tegisto-create-token-service.md",
                },
                {
                  text: "Add Token To List",
                  link: "/whitepaper/tegisto-solutions/tegisto-dashboard/tegisto-add-token-to-list.md",
                },
                {
                  text: "Manage Stake",
                  link: "/whitepaper/tegisto-solutions/tegisto-dashboard/tegisto-manage-stake-dashboard.md",
                },
                {
                  text: "Tegisto DAO",
                  link: "/whitepaper/tegisto-solutions/tegisto-dashboard/tegisto-DAO.md",
                },
                {
                  text: "Tegisto DID",
                  link: "/whitepaper/tegisto-solutions/tegisto-dashboard/tegisto-DID.md",
                },
                {
                  text: "Tegisto Launchpad",
                  link: "/whitepaper/tegisto-solutions/tegisto-dashboard/tegisto-launchpad.md",
                },
              ],
            },
          ],
        },
        {
          text: "Features of Tegisto",
          link: "/whitepaper/features/features-of-tegisto.md",
          children: [
            {
              text: "Trade",
              link: "/whitepaper/features/trade.md",
            },
            {
              text: "Liquidity Pools",
              link: "/whitepaper/features/liquidity-pools.md",
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
              text: "IDO Launchpad",
              link: "/whitepaper/features/IDO-launchpad.md",
            },
            {
              text: "Incubation",
              link: "/whitepaper/features/incubation.md",
            },
            {
              text: "DAO",
              link: "/whitepaper/features/DAO.md",
            },
            {
              text: "DAO Reserve and Treasury",
              link: "/whitepaper/features/DAO-reserve-and-treasury.md",
            },
            {
              text: "Multichain",
              link: "/whitepaper/features/multichain.md",
            },
            {
              text: "Integrating DID",
              link: "/whitepaper/features/integrating-DID-into-tegisto.md",
            },
          ],
        },
        {
          text: "Tegisto SDK",
          link: "/whitepaper/tegisto-SDK.md",
        },
        {
          text: "Token Utility",
          link: "/whitepaper/token-utility.md",
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
          text: "Team",
          link: "/whitepaper/team.md",
        },
        {
          text: "Disclaimer",
          link: "/whitepaper/disclaimer.md",
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
