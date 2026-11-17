export const profile = {
  name: 'Jack Stromberg',
  headline: 'Quantitative research and financial software',
  summary:
    'Tools and research for portfolio construction, fixed income analytics, econometrics, advisor workflows, and planning applications.',
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

export const featured = {
  name: 'econkit',
  href: 'https://github.com/john-stromberg/econkit',
  stack: 'R',
  blurb:
    'R toolkit for asset management and banking: recession indicators, regime detection, scenario engines, ALM/ECL workflows, and a Plumber API surface.',
} as const

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

export const standalone = [
  {
    name: 'ReturnByDate',
    href: 'https://github.com/john-stromberg/returnbydate',
    note: 'Standalone return calculation utility',
  },
  {
    name: 'Data Analytics Bootcamp',
    href: 'https://github.com/john-stromberg/data-analytics-bootcamp-2019',
    note: 'Archived teaching materials from 2019',
  },
] as const
