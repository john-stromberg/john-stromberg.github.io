export const profile = {
  name: 'Jack Stromberg',
  headline: 'Analytical applications for finance',
  summary: 'Building analytical tools and systems',
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
    title: 'Private wealth',
    body: 'Firm-book planning, asset allocation, manager selection, tax efficiency, and automations between client meetings.',
  },
] as const

export const featuredProjects = [
  {
    name: 'Wealth Center',
    access: 'open-source' as const,
    href: 'https://github.com/john-stromberg/wealth-center',
    demoUrl: 'https://john-stromberg.github.io/wealth-center/',
    stack: 'Next.js · TypeScript',
    blurb:
      'Private wealth firm platform: household planning, strategic allocation, manager lineup, tax efficiency, and an automation center that queues drift, tax, RMD, and meeting-pack work between reviews.',
    highlights: [
      'Firm book with sample households, IPS bands, and exception badges',
      'Allocation, managers, and tax-location workflows with tax-aware rebalance proposals',
      'Deterministic automations with rule traces and meeting-pack drafts',
    ],
  },
  {
    name: 'pwm-toolkit',
    access: 'open-source' as const,
    href: 'https://github.com/john-stromberg/pwm-toolkit',
    stack: 'Python · Streamlit',
    blurb:
      'Private wealth analyst and PM toolkit: household analytics, tax-aware rebalancing, TLH, Roth/RMD planning, Monte Carlo goals, custodian imports, book exceptions, and client reports.',
    highlights: [
      'Library + CLI + Streamlit for IPS drift, performance, rebalance, and tax workflows',
      'Custodian CSV import, reconciliation, book-of-business exception scanning',
      'Roth conversion, RMD, and Monte Carlo spending-success analysis',
    ],
  },
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
    name: 'Wealth Planning Apps',
    count: 5,
    href: 'https://github.com/john-stromberg/wealth-planning-apps',
    stack: 'Python / Streamlit',
  },
  {
    name: 'Quantitative Research in R',
    count: 12,
    href: 'https://github.com/john-stromberg/quant-research-r',
    stack: 'R',
  },
] as const
