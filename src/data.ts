export const profile = {
  name: 'Jack Stromberg',
  headline: 'Analytical applications for finance',
  summary:
    'I build analytical applications for markets, private equity, and advisory work — research desks, econometrics toolkits, and value-creation workflows in Python and R, with AI tools in the loop.',
  github: 'https://github.com/john-stromberg',
  site: 'https://john-stromberg.github.io',
} as const

export const focusLanes = [
  {
    title: 'Portfolio & risk',
    body: 'Construction, attribution, and scenario analysis that keep risk budgets readable under market stress.',
  },
  {
    title: 'Rates & credit',
    body: 'Fixed-income analytics spanning curves, spreads, ALM exposures, and path-dependent credit outcomes.',
  },
  {
    title: 'Advisor systems',
    body: 'Planning workflows, APIs, and .NET services that turn research into tools advisors can trust daily.',
  },
] as const

export const featuredProjects = [
  {
    name: 'Macro Desk',
    access: 'open-source' as const,
    href: 'https://github.com/john-stromberg/macro-lens',
    demoUrl: 'https://john-stromberg.github.io/macro-desk/',
    stack: 'Next.js · TypeScript',
    blurb:
      'Macro hedge fund PM and research desk: fund book with factor risk and P&L, living theses, catalyst calendar, scenario shock packs, and market tools for surprises, curves, policy, regimes, and cross-asset tape.',
    highlights: [
      'Book view with AUM, gross/net, VaR, and sleeve filters',
      'Theses linked to live expressions and upcoming catalysts',
      'Scenario lab with estimated fund P&L winners and losers',
    ],
  },
  {
    name: 'econkit',
    access: 'open-source' as const,
    href: 'https://github.com/john-stromberg/econkit',
    stack: 'R',
    blurb:
      'R toolkit for asset management and banking — turn macro and market data into recession risk, regime signals, scenario stress, rate/credit analytics, and governed reports.',
    highlights: [
      'Recession models, Sahm rule, nowcasts, and Minnesota-prior BVAR forecasts',
      'Scenario libraries with SAA stress, ALM NII/EVE, FTP, and lifetime ECL workflows',
      'Optional plumber API with model inventory, run lineage, and monitoring',
    ],
  },
  {
    name: 'value-creation',
    access: 'private' as const,
    stack: 'Python · Streamlit',
    blurb:
      'PE value creation for middle-market portfolio companies — diagnostics → VCP → LBO, Excel packs, and a Streamlit dashboard.',
    highlights: [
      'Diagnostics across pricing, working capital, commercial, contracts, pipeline, operations',
      'VCP initiative planning with LBO returns and Monte Carlo risk',
      'Excel packs and draft investment packages for IC / bid workflows',
    ],
  },
] as const

export const collections = [
  {
    name: 'Portfolio Analytics',
    count: 23,
    href: 'https://github.com/john-stromberg/portfolio-analytics',
    stack: 'Python / .NET',
  },
  {
    name: 'Fixed Income Analytics',
    count: 8,
    href: 'https://github.com/john-stromberg/fixed-income-analytics',
    stack: 'Python',
  },
  {
    name: 'Quantitative Research in R',
    count: 12,
    href: 'https://github.com/john-stromberg/quant-research-r',
    stack: 'R',
  },
  {
    name: 'Advisor Platform',
    count: 9,
    href: 'https://github.com/john-stromberg/advisor-platform',
    stack: '.NET',
  },
  {
    name: 'Wealth Planning Apps',
    count: 4,
    href: 'https://github.com/john-stromberg/wealth-planning-apps',
    stack: 'Python / Streamlit',
  },
] as const
