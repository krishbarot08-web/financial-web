import type { LucideIcon } from 'lucide-react'
import {
  Home,
  Briefcase,
  Wallet,
  Cog,
  Car,
  Factory,
  ShieldCheck,
  Landmark,
  Clock,
  FileCheck2,
} from 'lucide-react'

export const siteConfig = {
  name: 'Shree Maa Financial Consultant',
  tagline: 'Your Trusted Financing Partner',
  phone: '+91 9974550851',
  email: 'smfcsurat@gmail.com',
  address: '406, 4th floor Prime Shoppers, Vesu, Surat - 395009',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export const partnerBanks = [
  'Meridian Bank',
  'Crestline Financial',
  'Union Capital',
  'Harbor National',
  'Sterling Bank',
  'Apex Housing Finance',
  'Northwind Bank',
  'Pinnacle Credit',
]

export type Service = {
  slug: string
  name: string
  icon: LucideIcon
  tagline: string
  description: string
  longDescription: string
  idealFor: string
  features: { title: string; description: string }[]
  steps: { title: string; description: string }[]
  rates: { bank: string; rate: string; fee: string; maxAmount: string }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'home-loans',
    name: 'Home Loans',
    icon: Home,
    tagline: 'Turn the key to your dream home.',
    description:
      'Competitive home loans for first-time buyers, upgraders, and property investors with flexible tenures.',
    longDescription:
      'Buying a home is one of life’s biggest decisions. As a DSA partner to leading banks and housing finance companies, we compare offers across lenders to secure you the lowest rate and the tenure that fits your budget — all with paperwork we handle for you.',
    idealFor: 'First-time homebuyers and salaried professionals',
    features: [
      { title: 'Competitive interest rates', description: 'We negotiate across partner banks to find the lowest rate you qualify for.' },
      { title: 'Flexible tenure up to 30 years', description: 'Structure EMIs comfortably around your monthly income.' },
      { title: 'Minimal documentation', description: 'A guided checklist so you submit the right documents once.' },
      { title: 'Quick sanction & disbursement', description: 'Faster approvals through our direct banking relationships.' },
    ],
    steps: [
      { title: 'Eligibility check', description: 'Share your income and property details for a quick eligibility snapshot.' },
      { title: 'Document submission', description: 'We collect and verify your KYC, income and property papers.' },
      { title: 'Loan sanction', description: 'Compare sanction letters from multiple banks and pick the best.' },
      { title: 'Disbursement', description: 'Funds are released to complete your purchase.' },
    ],
    rates: [
      { bank: 'Meridian Bank', rate: '8.35%', fee: '0.35%', maxAmount: '₹5 Cr' },
      { bank: 'Apex Housing Finance', rate: '8.50%', fee: '₹9,999', maxAmount: '₹3 Cr' },
      { bank: 'Union Capital', rate: '8.60%', fee: '0.25%', maxAmount: '₹7.5 Cr' },
    ],
    faqs: [
      { q: 'What is the minimum eligibility for a home loan?', a: 'Most lenders require a stable income, a healthy credit score (typically 700+), and age between 21 and 65. We assess your profile and match you with the right lender.' },
      { q: 'What documents are required?', a: 'Typically KYC (ID & address proof), income proof (salary slips or ITRs), bank statements, and property documents. We provide a personalised checklist.' },
      { q: 'Are there tax benefits on home loans?', a: 'Yes. You can claim deductions on principal (Section 80C) and interest (Section 24b) as per prevailing tax laws. We recommend confirming with your tax advisor.' },
      { q: 'Can I prepay my home loan?', a: 'Floating-rate home loans to individuals generally have no prepayment charges. We help you compare lenders on this specific term.' },
    ],
  },
  {
    slug: 'business-loans',
    name: 'Business Loans',
    icon: Briefcase,
    tagline: 'Fuel your next stage of growth.',
    description:
      'Working capital and term loans for startups, small businesses, and growing enterprises.',
    longDescription:
      'Whether you’re launching, scaling, or steadying cash flow, we connect you with banks and NBFCs offering business loans matched to your turnover and vintage. We present unbiased options so you borrow smart, not just fast.',
    idealFor: 'Startups, small business owners and growing enterprises',
    features: [
      { title: 'Collateral-free options', description: 'Unsecured loans available for eligible businesses.' },
      { title: 'Loan amounts to suit your scale', description: 'From modest working capital to large expansion funding.' },
      { title: 'Flexible repayment', description: 'Structured EMIs aligned to your revenue cycle.' },
      { title: 'Fast processing', description: 'Streamlined approvals through our lender network.' },
    ],
    steps: [
      { title: 'Consultation', description: 'We understand your business needs and funding purpose.' },
      { title: 'Profile & documents', description: 'Share turnover, GST and financials for assessment.' },
      { title: 'Lender matching', description: 'Compare offers from banks and NBFCs.' },
      { title: 'Sanction & disbursement', description: 'Funds credited to power your plans.' },
    ],
    rates: [
      { bank: 'Crestline Financial', rate: '11.50%', fee: '1.0%', maxAmount: '₹75 L' },
      { bank: 'Union Capital', rate: '12.25%', fee: '1.5%', maxAmount: '₹2 Cr' },
      { bank: 'Pinnacle Credit', rate: '13.00%', fee: '0.75%', maxAmount: '₹50 L' },
    ],
    faqs: [
      { q: 'Do I need collateral for a business loan?', a: 'Not always. Many lenders offer unsecured business loans based on turnover and credit history. We help you find collateral-free options where you qualify.' },
      { q: 'What is the minimum business vintage required?', a: 'Most lenders look for 1–3 years of operations, though some fintech lenders are more flexible. We match you accordingly.' },
      { q: 'How is my eligibility calculated?', a: 'Lenders assess turnover, profitability, credit score and existing obligations. We give you a clear picture before applying.' },
      { q: 'How quickly can funds be disbursed?', a: 'Depending on documentation and lender, disbursal can happen within a few working days of sanction.' },
    ],
  },
  {
    slug: 'overdrafts-cash-credit',
    name: 'Overdrafts & Cash Credit',
    icon: Wallet,
    tagline: 'Keep working capital flowing.',
    description:
      'Flexible overdraft and cash credit facilities to manage day-to-day business liquidity.',
    longDescription:
      'Smooth out the gaps between payables and receivables. We help you set up overdraft (OD) and cash credit (CC) limits so you draw only what you need and pay interest only on what you use.',
    idealFor: 'Businesses managing seasonal or cyclical cash flow',
    features: [
      { title: 'Pay interest only on usage', description: 'Interest applies only to the amount you actually draw.' },
      { title: 'Revolving credit limit', description: 'Reuse the limit as you repay — ideal for recurring needs.' },
      { title: 'Secured & unsecured options', description: 'Against collateral or turnover, based on your profile.' },
      { title: 'Renewable annually', description: 'Limits reviewed and renewed as your business grows.' },
    ],
    steps: [
      { title: 'Needs assessment', description: 'We estimate the working capital limit you require.' },
      { title: 'Documentation', description: 'Submit financials and security details, if any.' },
      { title: 'Limit sanction', description: 'Compare limits and pricing across banks.' },
      { title: 'Facility setup', description: 'Your OD/CC account is activated and ready to use.' },
    ],
    rates: [
      { bank: 'Harbor National', rate: '10.75%', fee: '0.5%', maxAmount: '₹1 Cr' },
      { bank: 'Northwind Bank', rate: '11.25%', fee: '0.6%', maxAmount: '₹1.5 Cr' },
      { bank: 'Sterling Bank', rate: '11.90%', fee: '0.5%', maxAmount: '₹80 L' },
    ],
    faqs: [
      { q: 'What is the difference between OD and CC?', a: 'Overdraft is usually linked to your current account and may be secured against deposits or property; cash credit is typically secured against stock and receivables. We explain which suits you.' },
      { q: 'Is interest charged on the full limit?', a: 'No. Interest is charged only on the amount you utilise, not the sanctioned limit.' },
      { q: 'Can the limit be increased later?', a: 'Yes, limits are typically reviewed annually and can be enhanced as your turnover grows.' },
      { q: 'What security is required?', a: 'It depends on the lender and amount — options range from unsecured to stock/property-backed facilities.' },
    ],
  },
  {
    slug: 'machinery-loans',
    name: 'Machinery Loans',
    icon: Cog,
    tagline: 'Invest in the equipment that scales you.',
    description:
      'Financing to purchase, upgrade, or expand plant and machinery for manufacturers.',
    longDescription:
      'Modern equipment drives productivity. We arrange machinery loans that let manufacturers and MSMEs acquire new or upgrade existing machinery, with the equipment itself often serving as collateral.',
    idealFor: 'Manufacturers, MSMEs and industrial businesses',
    features: [
      { title: 'Fund new & used machinery', description: 'Finance a wide range of industrial equipment.' },
      { title: 'Equipment as collateral', description: 'The machinery can secure the loan, easing eligibility.' },
      { title: 'Structured repayment', description: 'Tenures aligned to the useful life of the asset.' },
      { title: 'Attractive rates', description: 'Compared across lenders specialising in MSME finance.' },
    ],
    steps: [
      { title: 'Requirement review', description: 'Share machinery quotation and business details.' },
      { title: 'Assessment', description: 'We evaluate eligibility and required margin.' },
      { title: 'Sanction', description: 'Compare offers and finalise terms.' },
      { title: 'Disbursement', description: 'Payment made to the equipment supplier.' },
    ],
    rates: [
      { bank: 'Union Capital', rate: '10.90%', fee: '1.0%', maxAmount: '₹2 Cr' },
      { bank: 'Crestline Financial', rate: '11.40%', fee: '1.25%', maxAmount: '₹1.5 Cr' },
      { bank: 'Meridian Bank', rate: '11.75%', fee: '0.75%', maxAmount: '₹3 Cr' },
    ],
    faqs: [
      { q: 'Can I finance imported machinery?', a: 'Yes, many lenders finance imported equipment against a valid quotation and import documents.' },
      { q: 'What margin money is required?', a: 'Typically 15–25% of the machinery cost, though this varies by lender and profile.' },
      { q: 'Is the machinery the only collateral?', a: 'Often the equipment serves as primary security, but some lenders may seek additional collateral for larger amounts.' },
      { q: 'What tenure is available?', a: 'Repayment tenures usually range from 3 to 7 years, aligned to the machinery’s life.' },
    ],
  },
  {
    slug: 'car-loans',
    name: 'Car Loans',
    icon: Car,
    tagline: 'Drive home the right deal.',
    description:
      'Fast, competitive financing for new and pre-owned vehicles for individuals and businesses.',
    longDescription:
      'From your first car to a fleet upgrade, we compare auto loan offers across banks so you get the best rate, high funding on on-road price, and quick approvals.',
    idealFor: 'Salaried individuals, professionals and businesses',
    features: [
      { title: 'Up to 90% on-road funding', description: 'Higher funding means lower upfront cost.' },
      { title: 'New & used vehicles', description: 'Financing for both categories.' },
      { title: 'Quick approvals', description: 'Get sanctioned in as little as a day.' },
      { title: 'Flexible tenure', description: 'Choose EMIs that suit your budget.' },
    ],
    steps: [
      { title: 'Choose your vehicle', description: 'Share the model and on-road price.' },
      { title: 'Quick documentation', description: 'Submit KYC and income proof.' },
      { title: 'Sanction', description: 'Compare rates and approve.' },
      { title: 'Disbursement', description: 'Amount paid to the dealer.' },
    ],
    rates: [
      { bank: 'Northwind Bank', rate: '9.10%', fee: '₹4,999', maxAmount: '₹50 L' },
      { bank: 'Harbor National', rate: '9.25%', fee: '0.5%', maxAmount: '₹40 L' },
      { bank: 'Sterling Bank', rate: '9.40%', fee: '₹5,999', maxAmount: '₹35 L' },
    ],
    faqs: [
      { q: 'How much of the car price can be financed?', a: 'Many lenders fund up to 85–90% of the on-road price, subject to eligibility.' },
      { q: 'Can I finance a used car?', a: 'Yes, used-car loans are available; the rate and tenure depend on the vehicle’s age.' },
      { q: 'What documents are needed?', a: 'KYC, income proof and bank statements are usually sufficient. We share a checklist.' },
      { q: 'Are there prepayment charges?', a: 'Charges vary by lender; we help you compare this term upfront.' },
    ],
  },
  {
    slug: 'industrial-purchase-loans',
    name: 'Industrial Purchase Loans',
    icon: Factory,
    tagline: 'Secure the space to build big.',
    description:
      'Financing to acquire industrial land, sheds, or commercial-industrial property.',
    longDescription:
      'Expanding your operations? We help manufacturers and enterprises finance the purchase of industrial plots, sheds and units — with structured repayment aligned to your long-term plans.',
    idealFor: 'Manufacturers and enterprises expanding capacity',
    features: [
      { title: 'High-value funding', description: 'Financing for large industrial acquisitions.' },
      { title: 'Long tenures', description: 'Repayment structured for capital-intensive assets.' },
      { title: 'Property as collateral', description: 'The acquired property secures the loan.' },
      { title: 'Advisory on structuring', description: 'Guidance on the right mix of debt and margin.' },
    ],
    steps: [
      { title: 'Consultation', description: 'Discuss the property and funding requirement.' },
      { title: 'Valuation & documents', description: 'Property valuation and legal checks.' },
      { title: 'Sanction', description: 'Compare terms across lenders.' },
      { title: 'Disbursement', description: 'Funds released for the purchase.' },
    ],
    rates: [
      { bank: 'Meridian Bank', rate: '10.25%', fee: '0.75%', maxAmount: '₹10 Cr' },
      { bank: 'Union Capital', rate: '10.60%', fee: '1.0%', maxAmount: '₹15 Cr' },
      { bank: 'Pinnacle Credit', rate: '11.10%', fee: '0.9%', maxAmount: '₹5 Cr' },
    ],
    faqs: [
      { q: 'Which properties are eligible?', a: 'Industrial plots, sheds, and commercial-industrial units with clear title are typically eligible.' },
      { q: 'What margin is required?', a: 'Margin usually ranges from 25–40% of the property value depending on the lender and profile.' },
      { q: 'How long is the repayment tenure?', a: 'Tenures can extend up to 15 years for eligible borrowers.' },
      { q: 'Are legal and valuation checks handled?', a: 'Yes, the lender conducts these; we coordinate the process end to end for you.' },
    ],
  },
]

export const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Access to multiple banks', description: 'One application, many lenders — we shop the market so you don’t have to.', icon: Landmark },
  { title: 'Unbiased advice', description: 'We recommend what fits you, not what pays us most.', icon: ShieldCheck },
  { title: 'Faster processing', description: 'Direct banking relationships mean quicker approvals.', icon: Clock },
  { title: 'Simplified paperwork', description: 'We manage documentation so your application is right the first time.', icon: FileCheck2 },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
