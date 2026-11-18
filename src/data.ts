export const profile = {
  name: 'Jack Stromberg',
  headline: 'Quantitative research and financial software',
  summary:
    'I build analytical applications and workflows with python, R, and various AI tools',
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
    name: 'econkit',
    href: 'https://github.com/john-stromberg/econkit',
    stack: 'R',
    blurb:
      'R toolkit for asset management and banking: recession indicators, regime detection, scenario engines, ALM/ECL workflows, and a Plumber API surface.',
  },
  {
    name: 'value-creation',
    href: 'https://github.com/john-stromberg/value-creation',
    stack: 'Python · Streamlit',
    blurb:
      'PE value creation toolkit (pevc) for middle-market portfolio companies — diagnostics, VCP planning, LBO returns, Excel packs, and a Streamlit dashboard.',
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
