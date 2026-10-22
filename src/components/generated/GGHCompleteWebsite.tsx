import React, { useState, useEffect, useRef } from 'react';
import './GGHCompleteWebsite.css';
import { GGHRegionalMap } from './GGHRegionalMap';
const contactSealCentre = "/assets/35bb1c93b4bec98c448fa882724b59d8de5ad6e3f332a8b4d805433c0ec80b80.svg";
const marineDisciplinePhoto = "/assets/f66017d5fe3e4172d757df94d17f46eca0d0f3567044d6fc2a72b86464c2ce17.jpg";
const poppinsRing = "/assets/0384089ab60d75bdca3efac18e57e9ffd67eec20727d63e7e5cf19849cd5c234.svg";
const cinematicHero = "/assets/d87899ec7b25c18f4729a6d899272ec71260cf11bbfd2ffb0d0fcfad3cb2a5bc.png";
const sealCentre = "/assets/aacbd8370b87014d0c7e67e93e485c19f3fbbb891c734196e42de426508d7ebc.svg";
const sealRing = poppinsRing;
const logo = "/assets/52c077ec8576cedddc17f21e7ae93953520b20095a2674bf047d6a327d1784a5.svg";
const team = "/assets/026c41118566455e1df7db46a155201d2368588aafedd74b59e0c2386bcc1ec9.jpg";
const rail = "/assets/6cdaeac261a6e1155135d8606780bdc1f12f8298c3a7e2000c7e5320df24fd3a.jpg";
const bridge = team;
const architecture = "/assets/7a2622c2b9d7aeed48c2d7df52d0fedab53f87f5f872c3dd0af003e07b9fd949.jpg";
const portrait = "/assets/8263420354c270238bca2bad452a813ff40e9e9e3d44f3de3349386849c02eca.jpg";
const ports = "/assets/fa90c8d16be65921494eb7d839d1075cf0c3f70ec923a5ae7a5624e70f3c83a8.jpg";
const cover = "/assets/8aa872d98695b53f0fa23c777b36512b4e0e24c18ef46b167c0473794c887392.jpg";
const business = [{
  name: 'Globtek Marine',
  sector: 'MARITIME ENGINEERING',
  tag: 'Expertise from vessel to shore.',
  copy: 'Specialist marine engineering consultancy, connecting naval architecture, coastal infrastructure and maritime programme delivery.',
  image: team,
  position: '50% 48%',
  services: ['Vessel Engineering', 'Naval Architecture', 'Maritime Infrastructure', 'Coastal Engineering', 'Maritime Programme Delivery', 'Technical Advisory & Assurance']
}, {
  name: 'Globtek Rail',
  sector: 'RAIL INFRASTRUCTURE',
  tag: 'Keeping networks moving.',
  copy: 'Rail design, asset intelligence and lifecycle support that strengthen the performance of critical transport infrastructure.',
  image: rail,
  position: '50% 50%',
  services: ['Rail Infrastructure Inspection', 'Asset Intelligence', 'Rail Design & Engineering', 'Operational Support & Slot Optimisation', 'Maintenance & Lifecycle Management', 'Digital Rail & Innovation']
}, {
  name: 'Globtek Consulting',
  sector: 'INTEGRATED ENGINEERING',
  tag: 'Engineering the connections.',
  copy: 'Civil, mechanical, electrical and water engineering, brought together to solve complex infrastructure challenges.',
  image: bridge,
  position: '70% 50%',
  services: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Water Engineering', 'Infrastructure Development', 'Integrated Project Solutions']
}];
const industries = [{
  title: 'Maritime & Ports',
  copy: 'Engineering for vessels, ports, harbours, waterfronts and marine infrastructure.',
  image: ports,
  business: 'Marine'
}, {
  title: 'Rail Infrastructure',
  copy: 'Supporting rail networks, freight corridors, maintenance systems and transport infrastructure.',
  image: rail,
  business: 'Rail'
}, {
  title: 'Public Infrastructure',
  copy: 'Specialist capability for municipal infrastructure, public assets and strategic programmes.',
  image: bridge,
  business: 'Multidisciplinary'
}, {
  title: 'Transportation & Logistics',
  copy: 'Integrated solutions supporting mobility, logistics efficiency and network performance.',
  image: team,
  business: 'Rail & Marine'
}, {
  title: 'Industrial & Energy',
  copy: 'Engineering support for industrial operations and infrastructure-intensive environments.',
  image: cover,
  business: 'Multidisciplinary'
}, {
  title: 'Infrastructure Development',
  copy: 'Planning, engineering and delivery support for critical infrastructure investment.',
  image: architecture,
  business: 'Group-wide capability'
}];
const principles = [['01', 'Technical rigour', 'Sound analysis, professional standards and proven methodologies.'], ['02', 'Practical execution', 'Engineering designed for successful implementation in real operating environments.'], ['03', 'Commercial relevance', 'Solutions aligned with client objectives, budget realities and market conditions.'], ['04', 'Lifecycle value', 'Decisions that strengthen resilience, sustainability and long-term asset performance.'], ['05', 'Sector understanding', 'Specialist experience that connects technical decisions with real-world operating conditions.']];
function Arrow({
  diagonal = false
}: {
  diagonal?: boolean;
}) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.4" /></svg>;
}
function Kicker({
  children
}: {
  children: React.ReactNode;
}) {
  return <span className="gh-kicker"><i />{children}</span>;
}
const slugs = ['marine', 'rail', 'multidisciplinary'];
const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/company': 'The Group',
  '/businesses': 'Our Engineering Businesses',
  '/businesses/marine': 'Globtek Marine',
  '/businesses/rail': 'Globtek Rail',
  '/businesses/multidisciplinary': 'Globtek Consulting',
  '/industries': 'Industries',
  '/partnerships': 'Partnerships',
  '/contact': 'Contact'
};
function readRoute() {
  return typeof window !== 'undefined' && window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/';
}
function enquiry(businessName = '', type = 'Project enquiry', sectorName = '') {
  const params = new URLSearchParams({
    type
  });
  if (businessName) params.set('business', businessName);
  if (sectorName) params.set('sector', sectorName);
  return '#/contact?' + params.toString();
}
function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  image
}: {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  image: string;
}) {
  return <section className="gh-page-hero"><img src={image} alt="" /><div className="gh-page-shade" /><div className="gh-container"><nav className="gh-breadcrumb" aria-label="Breadcrumb"><a href="#/">Home</a><span>/</span><span>{eyebrow}</span></nav><Kicker>{eyebrow.toUpperCase()}</Kicker><h1>{title}<br /><span>{accent}</span></h1><p>{copy}</p></div></section>;
}
function PageCTA({
  title = 'Let’s move your infrastructure forward.',
  copy = 'Bring your challenge to a group built on specialist expertise and connected thinking.',
  href = enquiry(),
  label = 'Discuss your requirements',
  image,
  imageAlt = ''
}: {
  title?: string;
  copy?: string;
  href?: string;
  label?: string;
  image?: string;
  imageAlt?: string;
}) {
  if (image) return <section className="gh-page-cta gh-cta-with-image"><div className="gh-cta-image-copy"><Kicker>GLOBTEK GLOBAL HOLDINGS / PARTNERSHIPS</Kicker><h2>{title}</h2><p>{copy}</p><a className="gh-button red" href={href}>{label}<Arrow diagonal /></a></div><figure className="gh-cta-image"><img src={image} alt={imageAlt} loading="lazy" /></figure></section>;
  return <section className="gh-page-cta"><div className="gh-container"><div><Kicker>APPLIED INGENUITY / IN ACTION</Kicker><h2>{title}</h2><p>{copy}</p></div><a className="gh-button red" href={href}>{label}<Arrow diagonal /></a></div></section>;
}
function BusinessCards() {
  return <div className="gh-business-grid">{business.map((b, i) => <a className="gh-business-card" href={'#/businesses/' + slugs[i]} key={b.name}><div className="gh-card-image"><img src={b.image} alt={b.sector} style={{
          objectPosition: b.position
        }} /><span className="gh-card-number">0{i + 1}</span><span className="gh-card-arrow"><Arrow diagonal /></span></div><div className="gh-card-content"><span>{b.sector}</span><h3>{b.name}</h3><p>{b.tag}</p><div>Explore capabilities<Arrow /></div></div></a>)}</div>;
}
function GroupPage() {
  return <><PageHero eyebrow="The Group" title="Specialist depth." accent="Collective strength." copy="A diversified engineering and infrastructure group. United by Applied Ingenuity." image={cover} /><section className="gh-container gh-page-section"><div className="gh-section-label"><Kicker>COMPANY OVERVIEW</Kicker><span>ESTABLISHED / 2013</span></div><div className="gh-editorial"><h2>Engineering expertise.<br /><span>Infrastructure impact.</span></h2><div><p className="gh-intro">Globtek Global Holdings is a strategically diversified engineering and infrastructure group with interests across maritime engineering, rail infrastructure and multidisciplinary engineering services.</p><p>Established in 2013 on a foundational belief that infrastructure challenges require engineering solutions combining technical excellence with practical delivery capability, the Group has grown into a platform of specialist companies united by a common purpose: to apply engineering expertise in ways that create measurable infrastructure impact and long-term stakeholder value.</p><p>Our operating model combines technical specialisation with group-wide strategic coordination. This enables each business to retain its depth while drawing on the collective strength of the wider group, supporting projects from planning and feasibility through engineering, implementation support and long-term asset performance optimisation.</p></div></div><dl className="gh-company-facts"><div><dt>Founded</dt><dd>2013</dd></div><div><dt>Headquarters</dt><dd>South Africa</dd></div><div><dt>Group structure</dt><dd>Diversified engineering and infrastructure holding group</dd></div><div><dt>Operating model</dt><dd>Specialist subsidiary businesses supported by group-level strategic coordination</dd></div><div><dt>Core sectors</dt><dd>Maritime Engineering · Rail Infrastructure · Multidisciplinary Engineering</dd></div></dl></section><section className="gh-approach" id="philosophy"><div className="gh-container"><div className="gh-section-label"><Kicker>OUR PHILOSOPHY</Kicker><span>APPLIED INGENUITY</span></div><div className="gh-approach-grid"><div><h2>Engineering that<br />creates enduring<br /><span>advantage.</span></h2><p>Applied Ingenuity defines how Globtek thinks, how we work and how we create value. It combines engineering discipline, strategic insight and delivery capability to produce solutions that are technically sound, commercially relevant and aligned with real operating environments.</p><p>Engineering should do more than solve technical problems. It should create sustainable advantages for asset owners, operators, investors, governments and the communities served by the infrastructure we help shape.</p></div><div className="gh-principles">{principles.map(([n, t, c]) => <div key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div><Arrow diagonal /></div>)}</div></div></div></section><section className="gh-container gh-page-section"><Kicker>OUR DIRECTION</Kicker><div className="gh-purpose-grid">{[['Vision', 'To be a leading African engineering and infrastructure group, recognised for technical leadership, specialist expertise, and the sustainable infrastructure solutions that enable economic growth, connectivity, resilience, and long-term societal impact.'], ['Mission', 'We deliver specialised engineering, infrastructure and advisory solutions through a group of expert businesses that combine technical excellence, strategic insight and disciplined execution to help clients solve complex challenges, improve asset performance and create enduring value.'], ['Purpose', 'To apply ingenuity, engineering expertise and strategic thinking to develop infrastructure that improves lives, enables growth and creates opportunities for future generations.']].map(([t, c], i) => <article key={t}><span>0{i + 1}</span><h2>{t}</h2><p>{c}</p></article>)}</div></section><section className="gh-leadership gh-container" id="technical-leadership"><div className="gh-leadership-photo"><img src={portrait} alt="Boswell Lungisa Douse" /><span>CHARTERED NAVAL ARCHITECT / EXECUTIVE DIRECTOR</span></div><div className="gh-leadership-copy"><Kicker>TECHNICAL LEADERSHIP</Kicker><h2>Expertise that<br />informs direction.</h2><p>Engineering capability is strengthened by leadership that combines strategic direction with recognised technical expertise. Our approach reflects a core principle: executive direction informed by technical expertise, sector insight and delivery-focused judgement.</p><div className="gh-person"><h3>Boswell Lungisa Douse</h3><span>Chartered Naval Architect</span><span>Group COO & Executive Director</span></div><p>His expertise enables Globtek to engage clients, infrastructure owners, investors and strategic partners across naval architecture, marine engineering and complex infrastructure delivery environments.</p><h3 className="gh-small-heading">Leadership philosophy</h3><ul className="gh-simple-list">{['Professional excellence and continuous technical development', 'Strategic thinking and infrastructure delivery understanding', 'Technical credibility and stakeholder confidence', 'Innovation in response to evolving infrastructure challenges', 'Disciplined, sustainable growth across group businesses'].map(t => <li key={t}>{t}</li>)}</ul></div></section><PageCTA title="Find the expertise for your next challenge." href="#/businesses" label="Explore our businesses" /></>;
}
function BusinessesPage() {
  return <><PageHero eyebrow="Our Engineering Businesses" title="Distinct expertise." accent="Connected capability." copy="Specialist businesses focused on distinct engineering disciplines and markets. Supported by one group platform." image={team} /><section className="gh-container gh-page-section"><div className="gh-section-label"><Kicker>THE GLOBTEK PLATFORM</Kicker><span>THREE SPECIALIST SECTORS</span></div><div className="gh-section-heading"><h2>Focused businesses.<br />Stronger together.</h2><p>Each business brings deep domain expertise and technical leadership, supported by group-wide strategic coordination.</p></div><BusinessCards /></section><section className="gh-platform-band"><div className="gh-container gh-editorial"><h2>The right expertise.<br /><span>At every stage.</span></h2><div><p className="gh-intro">Our integrated model supports the full infrastructure journey, connecting specialist capability with practical delivery insight.</p><ol className="gh-stage-list">{['Planning & feasibility', 'Engineering & design', 'Implementation support', 'Long-term asset performance optimisation'].map((t, i) => <li key={t}><span>0{i + 1}</span>{t}</li>)}</ol></div></div></section><PageCTA title="Not sure where your project fits?" copy="Tell us about the challenge. We can help identify the relevant specialist business." href={enquiry('Not sure / Group-wide')} label="Talk to the group" /></>;
}
const serviceCopy = [['Engineering expertise for vessel-related technical challenges and requirements.', 'Specialist naval architecture expertise, grounded in technical analysis and practical operating needs.', 'Engineering support for ports, harbours, waterfronts and related maritime infrastructure.', 'Engineering expertise for coastal environments and infrastructure interfaces.', 'Technical and delivery-focused support for maritime infrastructure programmes.', 'Technical insight supporting engineering decisions and assurance requirements.'], ['Inspection-focused understanding of rail infrastructure condition and performance.', 'Asset information and engineering insight to support infrastructure decisions.', 'Design and engineering capability for rail infrastructure requirements.', 'Support for operational efficiency, rail network use and slot optimisation.', 'Engineering decisions that support maintenance planning and lifecycle performance.', 'Innovation and digital approaches applied to rail infrastructure challenges.'], ['Civil engineering capability supporting infrastructure planning and development.', 'Mechanical engineering expertise within integrated infrastructure solutions.', 'Electrical engineering capability for infrastructure and operating environments.', 'Water engineering expertise supporting infrastructure requirements.', 'Planning and engineering support for infrastructure investment and development.', 'Coordinated specialist disciplines addressing complex project requirements.']];
function BusinessPage({
  index
}: {
  index: number;
}) {
  const b = business[index];
  return <><PageHero eyebrow={b.name} title={b.tag.split('. ')[0].replace(/\.$/, '')} accent="Applied Ingenuity." copy={b.copy} image={b.image} /><div className="gh-business-subnav gh-container"><a href="#/businesses">← All businesses</a><span>{b.sector}</span><a className="gh-text-link" href={enquiry(b.name)}>Discuss your requirements<Arrow diagonal /></a></div><section className="gh-container gh-page-section"><div className="gh-editorial"><div><Kicker>SPECIALIST CAPABILITY</Kicker><h2 className="gh-spaced-heading">{index === 0 ? <>From vessel<br />to shore.</> : index === 1 ? <>Supporting networks.<br /><span>Strengthening performance.</span></> : <>Multiple disciplines.<br /><span>Integrated solutions.</span></>}</h2></div><div><p className="gh-intro">{['Globtek Marine is a marine engineering consultancy bringing together vessel engineering, naval architecture, maritime infrastructure and coastal engineering.', 'Globtek Rail combines rail design and engineering with inspection, asset intelligence, operational support and lifecycle management.', 'Globtek Consulting brings civil, mechanical, electrical and water engineering together in support of infrastructure development and integrated project solutions.'][index]}</p><p>As part of Globtek Global Holdings, the business combines its specialist focus with the wider group’s strategic coordination, technical insight and delivery capability.</p><a className="gh-text-link" href="https://globtek.co.za/" target="_blank" rel="noreferrer">Visit the Globtek engineering site<Arrow diagonal /></a></div></div><div className="gh-services-grid">{b.services.map((s, i) => <article key={s}><span>0{i + 1}</span><h3>{s}</h3><p>{serviceCopy[index][i]}</p></article>)}</div></section><section className="gh-platform-band"><div className="gh-container gh-editorial"><h2>Expertise shaped<br />by real-world<br /><span>requirements.</span></h2><div><p className="gh-intro">Engineering decisions must work technically, commercially and in practice.</p><p>Our approach connects rigorous analysis with sector understanding and practical execution. Solutions are developed with client objectives, budget realities, operating conditions and long-term infrastructure value in mind.</p><ul className="gh-simple-list"><li>Technical excellence and professional standards</li><li>Specialist expertise and integrated thinking</li><li>Practical delivery and lifecycle perspective</li></ul><a href="#/company" className="gh-text-link">About our approach<Arrow diagonal /></a></div></div></section><section className="gh-container gh-related-section"><div className="gh-section-heading"><h2>Part of a connected group.</h2><a className="gh-text-link" href="#/businesses">All businesses<Arrow /></a></div><div className="gh-related-grid">{business.filter((_, i) => i !== index).map(other => <a href={'#/businesses/' + slugs[business.indexOf(other)]} key={other.name}><img src={other.image} alt="" /><div><span>{other.sector}</span><h3>{other.name}</h3><Arrow diagonal /></div></a>)}</div></section><PageCTA title={'Talk to ' + b.name + '.'} copy="Share your infrastructure requirement and the context that matters to your project." href={enquiry(b.name)} label="Enquire about this business" /></>;
}
function IndustriesPage() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const matched = active === 0 ? [0] : active === 1 ? [1] : active === 3 ? [0, 1] : active === 5 ? [0, 1, 2] : [2];
  return <><PageHero eyebrow="Industries" title="Critical systems." accent="Enduring impact." copy="Engineering expertise across the sectors that enable economic participation, mobility, industrial growth and long-term development." image={ports} /><section className="gh-container gh-page-section"><div className="gh-section-heading"><div><Kicker>INDUSTRIES WE SERVE</Kicker><h2 className="gh-spaced-heading">Find your sector.</h2></div><p>Select an industry to explore its infrastructure context and relevant group capabilities.</p></div><div className="gh-sector-tabs" role="tablist" aria-label="Industry sectors">{industries.map((s, i) => <button key={s.title} id={'industry-tab-' + i} role="tab" aria-selected={active === i} aria-controls="industry-detail" onClick={() => setActive(i)} onKeyDown={e => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + industries.length) % industries.length;
            setActive(next);
            document.getElementById('industry-tab-' + next)?.focus();
          }
        }} tabIndex={active === i ? 0 : -1}><span>0{i + 1}</span>{s.title}</button>)}</div><div className="gh-industry-detail" id="industry-detail" role="tabpanel" aria-labelledby={'industry-tab-' + active}><img src={current.image} alt={current.title} /><div><Kicker>SECTOR / 0{active + 1}</Kicker><h2>{current.title}</h2><p className="gh-intro">{current.copy}</p><p>We connect specialist expertise with the practical needs of asset owners, operators and infrastructure programmes, with a focus on technical quality, successful implementation and long-term value.</p><h3 className="gh-small-heading">Explore relevant capabilities</h3>{matched.map(i => <a className="gh-capability-link" href={'#/businesses/' + slugs[i]} key={i}>{business[i].name}<Arrow diagonal /></a>)}<a href={enquiry('', 'Project enquiry', current.title)} className="gh-button red">Discuss this sector<Arrow diagonal /></a></div></div></section><PageCTA title="Infrastructure challenges connect disciplines." copy="When your requirements cross sectors, our specialist businesses provide a coordinated group platform." href="#/businesses" label="Explore the group platform" /></>;
}
const growthDrivers = [['Critical infrastructure sectors', 'Exposure to maritime, rail and multidisciplinary engineering markets with long-term demand fundamentals.'], ['Diversified engineering platform', 'Specialist businesses across multiple disciplines reduce dependence on a single sector.'], ['Technical credibility & leadership distinction', 'Engineering credentials and specialist technical leadership underpin the group’s positioning.'], ['Public & private sector relevance', 'Capability aligned with government infrastructure mandates and private sector project requirements.'], ['Regional expansion potential', 'A scalable group model positioned for growth across African and international markets.'], ['Scalable operating model', 'A group structure designed to accommodate new specialist divisions and capabilities.']];
function PartnershipsPage() {
  return <><PageHero eyebrow="Partnerships" title="Shared ambition." accent="Structured opportunity." copy="A platform founded on technical credibility, sector relevance and exposure to industries fundamental to economic development and infrastructure resilience." image={architecture} /><section className="gh-container gh-page-section"><div className="gh-editorial"><h2>A specialist platform.<br /><span>A long-term perspective.</span></h2><div><p className="gh-intro">For investors, infrastructure owners, development finance institutions and strategic partners, Globtek presents a combination of specialist capability and structured growth potential.</p><p>The group’s diversified operating model connects specialist businesses while maintaining the flexibility, responsiveness and technical depth required by complex infrastructure projects.</p><a className="gh-text-link" href="#/company">Understand the group<Arrow diagonal /></a></div></div><div className="gh-services-grid">{growthDrivers.map(([t, c], i) => <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section><section className="gh-partner-paths"><div className="gh-container"><Kicker>FIND THE RIGHT CONVERSATION</Kicker><h2>Connect your objectives<br />with our capability.</h2><div className="gh-purpose-grid">{[['Infrastructure owners', 'Explore engineering support for your infrastructure challenge or programme.', 'Project enquiry'], ['Investors & strategic partners', 'Discuss the group platform, sector relevance and potential areas of collaboration.', 'Strategic partnership'], ['Engineering collaborators', 'Connect specialist expertise and explore complementary technical capabilities.', 'Engineering collaboration']].map(([t, c, type], i) => <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{c}</p><a className="gh-text-link" href={enquiry('', type)}>Start a conversation<Arrow diagonal /></a></article>)}</div></div></section><section className="gh-container gh-page-section gh-editorial"><div><Kicker>TECHNICAL CREDIBILITY</Kicker><h2 className="gh-spaced-heading">Leadership.<br />Insight.<br /><span>Practical execution.</span></h2></div><div><p className="gh-intro">Our leadership approach connects strategic thinking with recognised engineering expertise and infrastructure delivery understanding.</p><p>Professional excellence, technical development, innovation and disciplined growth guide the way the group approaches opportunity.</p><a className="gh-text-link" href="#/company">Meet our technical leadership<Arrow diagonal /></a></div></section><PageCTA image={ports} imageAlt="Port infrastructure and maritime facilities" title="Start a strategic conversation." copy="Tell us about your organisation, your interests and the opportunity you would like to explore." href={enquiry('', 'Strategic partnership')} label="Discuss a partnership" /></>;
}
function ContactPage({
  query
}: {
  query: string;
}) {
  const params = new URLSearchParams(query),
    initialType = params.get('type') || 'General enquiry',
    initialBusiness = params.get('business') || 'Not sure / Group-wide',
    sectorName = params.get('sector') || '';
  const [draft, setDraft] = useState<{
      body: string;
      subject: string;
      name: string;
    } | null>(null),
    [copied, setCopied] = useState(false),
    [opened, setOpened] = useState(false),
    [copyError, setCopyError] = useState(false);
  const preview = useRef<HTMLDivElement>(null);
  const types = ['Project enquiry', 'Strategic partnership', 'Engineering collaboration', 'General enquiry'];
  const options = ['Not sure / Group-wide', ...business.map(b => b.name)];
  function prepare(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = Object.fromEntries([...f.entries()].map(([k, v]) => [k, String(v).trim()]));
    for (const field of ['name', 'organisation', 'brief']) {
      if (!data[field]) {
        const input = e.currentTarget.elements.namedItem(field) as HTMLInputElement;
        input.setCustomValidity('Please enter a value.');
        input.reportValidity();
        return;
      }
    }
    const subject = 'GGH ' + data.type + ' — ' + data.organisation;
    const body = ['Hello Globtek team,', '', data.brief, '', 'Enquiry type: ' + data.type, 'Relevant business: ' + data.business, ...(sectorName ? ['Sector: ' + sectorName] : []), '', 'Name: ' + data.name, 'Organisation: ' + data.organisation, 'Email: ' + data.email].join('\n');
    setDraft({
      body,
      subject,
      name: data.name
    });
    setCopied(false);
    setOpened(false);
    setCopyError(false);
    requestAnimationFrame(() => preview.current?.focus());
  }
  return <><PageHero eyebrow="Contact" title="Your challenge." accent="Our applied ingenuity." copy="Connect with our team about an infrastructure project, a strategic opportunity or specialist collaboration." image={team} /><section className="gh-container gh-contact-page"><aside><Kicker>START THE CONVERSATION</Kicker><h2>Let’s find<br />the right expertise.</h2><p>Share a little context about your requirements. Select a business if you know which specialist team you need, or choose the group-wide option.</p><div className="gh-contact-details-row"><div className="gh-contact-information"><h3>Email</h3><a href="mailto:info@globtek.co.za">info@globtek.co.za<Arrow diagonal /></a><h3>Telephone</h3><a href="tel:+27870575956">087 057 5956</a><a href="tel:+27744093155">074 409 3155</a><h3>Visit us</h3><address>62 Smiso Nkwanyana Road<br />Morningside, Durban<br />4001, South Africa</address><a href="https://www.google.com/maps/search/?api=1&query=62%20Smiso%20Nkwanyana%20Road%20Morningside%20Durban%204001" target="_blank" rel="noreferrer" className="gh-text-link">View location<Arrow diagonal /></a></div><div className="gh-contact-map-card"><GGHRegionalMap background /></div></div></aside><div className="gh-enquiry-panel"><div className="gh-form-heading"><span>01 / YOUR ENQUIRY</span><h3>Tell us what you have in mind.</h3><p>Prepare an email to our team. You’ll review it here, then send it from your email app.</p>{sectorName && <div className="gh-context-chip">Selected sector: {sectorName}</div>}</div><form onSubmit={prepare} onInput={e => {
          const input = e.target as HTMLInputElement;
          input.setCustomValidity?.('');
        }}><div className="gh-form-grid"><label>Your name <span>*</span><input name="name" autoComplete="name" required maxLength={100} placeholder="Full name" /></label><label>Organisation <span>*</span><input name="organisation" autoComplete="organization" required maxLength={150} placeholder="Company or organisation" /></label><label className="wide">Email address <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={180} placeholder="you@company.com" /></label><label>Enquiry type<select name="type" defaultValue={types.includes(initialType) ? initialType : 'General enquiry'}>{types.map(t => <option key={t}>{t}</option>)}</select></label><label>Relevant business<select name="business" defaultValue={options.includes(initialBusiness) ? initialBusiness : 'Not sure / Group-wide'}>{options.map(t => <option key={t}>{t}</option>)}</select></label><label className="wide">Project or opportunity <span>*</span><textarea name="brief" required maxLength={4000} rows={6} placeholder="Tell us about the challenge, location, scope and any timing considerations." /></label></div><p className="gh-form-note">Fields marked * are required. The details stay in this page until you choose to open or copy the email.</p><button className="gh-button navy" type="submit">Review enquiry<Arrow diagonal /></button></form>{draft && <div className="gh-email-review" ref={preview} tabIndex={-1} aria-labelledby="review-title"><span>02 / REVIEW & SEND</span><h3 id="review-title">Your enquiry is ready to review.</h3><p>To: info@globtek.co.za</p><p className="gh-review-subject">{draft.subject}</p><textarea readOnly aria-label="Prepared enquiry email" value={draft.body} rows={12} /><div className="gh-review-actions"><a className="gh-button red" href={'mailto:info@globtek.co.za?subject=' + encodeURIComponent(draft.subject) + '&body=' + encodeURIComponent(draft.body)} onClick={() => setOpened(true)}>Open email app<Arrow diagonal /></a><button type="button" className="gh-copy-button" onClick={async () => {
              try {
                await navigator.clipboard.writeText(draft.body);
                setCopied(true);
                setCopyError(false);
              } catch {
                setCopyError(true);
              }
            }}>{copied ? 'Enquiry copied' : 'Copy enquiry'}</button></div><p role="status" className="gh-form-note">{copyError ? 'Copy is unavailable in this browser. Select and copy the email text above.' : opened ? 'Your email app has been requested. Send the message there to complete your enquiry; this page has not sent it.' : copied ? 'Copied. Paste the text into an email to info@globtek.co.za.' : 'Nothing has been sent. Review the details, then open your email app to send.'}</p></div>}</div></section></>;
}
function InnerPages({
  route
}: {
  route: string;
}) {
  const [path, query = ''] = route.split('?');
  let page: React.ReactNode;
  const idx = slugs.indexOf(path.split('/')[2]);
  if (path === '/company') page = <GroupPage />;else if (path === '/businesses') page = <BusinessesPage />;else if (path.startsWith('/businesses/') && idx !== -1) page = <BusinessPage index={idx} />;else if (path === '/industries') page = <IndustriesPage />;else if (path === '/partnerships') page = <PartnershipsPage />;else if (path === '/contact') page = <ContactPage key={route} query={query} />;else page = <section className="gh-container gh-page-section gh-not-found"><Kicker>PAGE NOT FOUND</Kicker><h1>Let’s get you<br />back on track.</h1><p>The page you requested could not be found.</p><a href="#/" className="gh-button navy">Return home<Arrow /></a></section>;
  return <main id="main" tabIndex={-1}>{page}</main>;
}
export const GGHCompleteWebsite = () => {
  const siteRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = siteRef.current;
    if (!root) return;
    let frame = 0;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const paint = () => {
      frame = 0;
      const top = Math.max(0, window.scrollY);
      const length = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty('--gh-progress', String(Math.min(1, top / length)));
      root.classList.toggle('gh-scrolled', top > 72);
      root.style.setProperty('--gh-parallax', !media.matches && window.innerWidth > 800 ? Math.min(top * .13, 85) + 'px' : '0px');
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    window.addEventListener('scroll', scroll, {
      passive: true
    });
    window.addEventListener('resize', scroll);
    media.addEventListener('change', scroll);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
      media.removeEventListener('change', scroll);
    };
  }, []);
  const [heroSector, setHeroSector] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const heroSlides = [{
    name: 'Marine',
    label: 'MARITIME ENGINEERING',
    image: cinematicHero
  }, {
    name: 'Rail',
    label: 'RAIL INFRASTRUCTURE',
    image: rail
  }, {
    name: 'Consulting',
    label: 'INTEGRATED ENGINEERING',
    image: bridge
  }];
  const [mobile, setMobile] = useState(false),
    [menu, setMenu] = useState(false),
    [sector, setSector] = useState(0),
    [route, setRoute] = useState(readRoute);
  useEffect(() => {
    if (heroPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches || route.split('?')[0] !== '/') return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setHeroSector(i => (i + 1) % 3);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [heroPaused, route]);
  useEffect(() => {
    const root = siteRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const elements = root.querySelectorAll<HTMLElement>('.gh-leadership-composition > *, .gh-investment-heading > *, .gh-investment-sectors > a, .gh-investment-thesis > article, .gh-group-grid > *, .gh-group-facts > div, .gh-section-heading > *, .gh-business-card, .gh-industry-visual, .gh-industry-accordion > div, .gh-approach-grid > div, .gh-principles > div, .gh-leadership > div, .gh-partnership-content > *, .gh-contact > *, .gh-editorial > *, .gh-purpose-grid > article, .gh-services-grid > article, .gh-industry-detail > *, .gh-contact-page > *, .gh-page-cta > *');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('gh-is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: .07,
      rootMargin: '0px 0px -35px 0px'
    });
    const changed: HTMLElement[] = [];
    elements.forEach(el => {
      if (el.parentElement?.closest('.gh-reveal')) return;
      const bounds = el.getBoundingClientRect();
      if (bounds.top < window.innerHeight * .94 && bounds.bottom > 0) return;
      const siblings = Array.from(el.parentElement?.children || []);
      el.style.setProperty('--gh-delay', Math.min(siblings.indexOf(el) % 4, 3) * 75 + 'ms');
      el.classList.add('gh-reveal');
      changed.push(el);
      observer.observe(el);
    });
    const revealFocused = (event: FocusEvent) => {
      (event.target as HTMLElement)?.closest('.gh-reveal')?.classList.add('gh-is-visible');
    };
    root.addEventListener('focusin', revealFocused);
    return () => {
      observer.disconnect();
      root.removeEventListener('focusin', revealFocused);
      changed.forEach(el => {
        el.classList.remove('gh-reveal', 'gh-is-visible');
        el.style.removeProperty('--gh-delay');
      });
    };
  }, [route]);
  const open = (i: number) => {
    window.location.hash = '/businesses/' + slugs[i];
    setMenu(false);
    setMobile(false);
  };
  useEffect(() => {
    const change = () => {
      const hash = window.location.hash;
      setRoute(readRoute());
      setMenu(false);
      setMobile(false);
      requestAnimationFrame(() => {
        if (hash && !hash.startsWith('#/')) {
          document.getElementById(hash.slice(1))?.scrollIntoView();
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'instant' as ScrollBehavior
          });
          document.getElementById('main')?.focus({
            preventScroll: true
          });
        }
      });
    };
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);
  useEffect(() => {
    document.title = (routeTitles[route.split('?')[0]] || 'Page not found') + ' | Globtek Global Holdings';
  }, [route]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(false);
        setMobile(false);
      }
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, []);
  const goto = () => {
    setMobile(false);
    setMenu(false);
  };
  return <div className={'gh-site gh-polished gh-cinematic ' + (route.split('?')[0] === '/' ? 'gh-cinematic-home' : '')} id="home" ref={siteRef}><div className="gh-reading-progress" aria-hidden="true" /><a href="#main" className="gh-skip" onClick={e => {
      e.preventDefault();
      document.getElementById('main')?.focus();
      document.getElementById('main')?.scrollIntoView();
    }}>Skip to content</a>
 
 <header className="gh-header"><a href="#/" aria-label="Globtek Global Holdings home" className="gh-logo" onClick={goto}><img src={logo} alt="Globtek Global Holdings" /></a><nav className={mobile ? 'gh-nav is-open' : 'gh-nav'} aria-label="Main navigation"><a href="#/company" aria-current={route.startsWith('/company') ? 'page' : undefined} onClick={goto}>The Group</a><div className="gh-dropdown"><button onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="business-menu">Our Businesses <span className={menu ? 'chevron up' : 'chevron'}>⌄</span></button>{menu && <div id="business-menu" className="gh-megamenu"><span>GLOBTEK ENGINEERING</span>{business.map((b, i) => <button onClick={() => open(i)} key={b.name}><small>0{i + 1}</small><div>{b.name}<em>{b.sector}</em></div><Arrow diagonal /></button>)}<a href="#/businesses" onClick={goto}>Explore the group platform <Arrow /></a></div>}</div><a href="#/industries" aria-current={route.startsWith('/industries') ? 'page' : undefined} onClick={goto}>Industries</a><a href="#/partnerships" aria-current={route.startsWith('/partnerships') ? 'page' : undefined} onClick={goto}>Partnerships</a><a href="#/contact" className="gh-nav-cta" onClick={goto}>Let’s Talk <Arrow diagonal /></a></nav><button className="gh-menu-button" onClick={() => {
        setMobile(!mobile);
        setMenu(false);
      }} aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-expanded={mobile}>{mobile ? <span>✕</span> : <><i /><i /></>}</button></header>
 {route.split('?')[0] === '/' ? <main id="main" tabIndex={-1}>
 <section className="gh-hero" aria-labelledby="hero-title"><div className="gh-hero-slides" aria-hidden="true">{heroSlides.map((slide, i) => <img key={slide.name} src={slide.image} className={'gh-hero-image ' + (i === heroSector ? 'is-active' : '')} alt="" />)}</div><div className="gh-hero-shade" /><div className="gh-hero-grid" aria-hidden="true"><i /><i /><i /><i /></div><div className="gh-hero-content"><Kicker>{heroSlides[heroSector].label} / GGH</Kicker><h1 id="hero-title">Engineering<br />infrastructure.<br /><span>Enabling growth.</span></h1><div className="gh-hero-copy"><p>The holding company behind Globtek engineering.<br className="desktop-break" /> Lasting value across maritime, rail and multidisciplinary infrastructure.</p><a className="gh-button red" href="#/businesses">Explore our businesses <Arrow diagonal /></a></div></div><div className="gh-hero-sector-controls" aria-label="Hero sectors">{heroSlides.map((slide, i) => <button key={slide.name} className={i === heroSector ? 'is-active' : ''} aria-pressed={i === heroSector} onClick={() => {
            setHeroSector(i);
            setHeroPaused(true);
          }}><span>0{i + 1}</span>{slide.name}<i /></button>)}<button className="gh-hero-pause" onClick={() => setHeroPaused(v => !v)} aria-label={heroPaused ? 'Play sector slideshow' : 'Pause sector slideshow'}>{heroPaused ? 'Play ▷' : 'Pause Ⅱ'}</button></div><a className="gh-scroll" href="#group"><span>DISCOVER THE GROUP</span><span>↓</span></a><div className="gh-brand-seal" aria-label="Globtek Holdings"><img className="gh-seal-centre" src={sealCentre} alt="" /><img className="gh-seal-ring" src={sealRing} alt="" /></div></section>
 <div className="gh-sector-rail">{business.map((b, i) => <button key={b.sector} onClick={() => open(i)}><span>0{i + 1}</span><b>{['Maritime Engineering', 'Rail Infrastructure', 'Multidisciplinary Engineering'][i]}</b><Arrow diagonal /></button>)}</div>
 <section className="gh-group gh-container" id="group"><div className="gh-section-label"><Kicker>THE GROUP</Kicker><span>01 / WHO WE ARE</span></div><div className="gh-group-grid"><h2>Specialist depth.<br /><span>Collective strength.</span></h2><div><p className="gh-lead">Globtek Global Holdings brings together specialist businesses to solve the infrastructure challenges that matter.</p><p>Founded in 2013, our group combines technical excellence, sector insight and disciplined execution. Each business retains its specialist focus, supported by the strategic coordination and shared strength of the wider group.</p><a href="#/company" className="gh-text-link">Discover Applied Ingenuity <Arrow diagonal /></a></div></div><div className="gh-group-facts"><div><b>2013<span>—</span></b><p>Established in South Africa</p></div><div><b>03<span>—</span></b><p>Specialist engineering sectors</p></div><div className="gh-group-fact-text"><span>FROM CONCEPT TO PERFORMANCE</span><p>Planning & feasibility <i>→</i> Engineering<br />Implementation support <i>→</i> Asset optimisation</p></div></div></section>
 <section className="gh-business-section" id="businesses"><div className="gh-container"><div className="gh-section-label"><Kicker>OUR BUSINESSES</Kicker><span>02 / SPECIALIST CAPABILITY</span></div><div className="gh-section-heading"><h2>Three disciplines.<br />One connected platform.</h2><p>Marine, Rail and Consulting.<br />One Globtek engineering website.</p></div><div className="gh-business-grid">{business.map((b, i) => <button className="gh-business-card" key={b.name} onClick={() => open(i)}><div className="gh-card-image"><img src={i === 0 ? marineDisciplinePhoto : b.image} style={{
                  objectPosition: i === 0 ? "48% 72%" : b.position
                }} alt={['Vessel and container terminal from Globtek’s supplied marine photograph', 'Rail freight corridor through mountainous terrain', 'Globtek team on site at port infrastructure'][i]} /><span className="gh-card-number">0{i + 1}</span><span className="gh-card-arrow"><Arrow diagonal /></span></div><div className="gh-card-content"><span>{b.sector}</span><h3>{b.name}</h3><p>{b.tag}</p><div>Explore capabilities <Arrow /></div></div></button>)}</div><div className="gh-business-foot"><span>ONE ENGINEERING WEBSITE</span><p>Marine, Rail and Consulting share a single Globtek marketing platform.</p><a className="gh-text-link" href="https://globtek.co.za/" target="_blank" rel="noreferrer">Visit Globtek engineering ↗</a></div></div></section>
 <section className="gh-industries gh-container" id="industries"><div className="gh-section-label"><Kicker>INDUSTRIES WE SERVE</Kicker><span>03 / CRITICAL INFRASTRUCTURE</span></div><div className="gh-section-heading"><h2>Where infrastructure<br />meets opportunity.</h2><p>Supporting the systems that enable mobility,<br />economic participation and long-term development.</p></div><div className="gh-industry-layout"><div className="gh-industry-visual"><img key={industries[sector].image} src={industries[sector].image} alt={industries[sector].title} /><div><span>SECTOR EXPERTISE</span><h3>{industries[sector].title}</h3><p>{industries[sector].business}</p></div><span className="gh-visual-index">0{sector + 1} / 06</span></div><div className="gh-industry-accordion">{industries.map((s, i) => <div key={s.title} className={sector === i ? 'active' : ''}><button onClick={() => setSector(i)} aria-expanded={sector === i} aria-controls={'sector-panel-' + i}><span>0{i + 1}</span><h3>{s.title}</h3><b>{sector === i ? '−' : '+'}</b></button><div className="gh-sector-panel" id={'sector-panel-' + i} hidden={sector !== i}><p>{s.copy}</p><a href={enquiry('', 'Project enquiry', s.title)} className="gh-text-link">Discuss your requirements <Arrow diagonal /></a></div></div>)}</div></div></section>
 <section className="gh-approach" id="approach"><div className="gh-container"><div className="gh-section-label"><Kicker>OUR PHILOSOPHY</Kicker><span>04 / APPLIED INGENUITY</span></div><div className="gh-approach-grid"><div><h2>Good engineering<br />thinks beyond<br /><span>the drawing.</span></h2><p>Applied Ingenuity is how we think, work and create value. It connects engineering discipline with strategic insight and real-world delivery.</p><div className="gh-approach-statement"><span>THE OUTCOME</span><p>Technically sound.<br />Commercially relevant.<br />Built for the real world.</p></div></div><div className="gh-principles">{principles.map(([n, t, c]) => <div key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div><Arrow diagonal /></div>)}</div></div></div></section>
 <section className="gh-leadership-editorial gh-container" id="leadership"><div className="gh-leadership-eyebrow"><Kicker>THE PEOPLE BEHIND THE PLATFORM</Kicker><span>GGH / LEADERSHIP</span></div><div className="gh-leadership-composition"><div className="gh-leadership-statement"><small>TECHNICAL EXPERTISE.<br />EXECUTIVE PERSPECTIVE.</small><h2>Direction<br />begins with<br /><em>understanding.</em></h2><p>Engineering judgement belongs at the centre of the decisions that shape infrastructure.</p><a className="gh-text-link" href="#/company">Our leadership approach <Arrow diagonal /></a></div><figure className="gh-leadership-portrait"><img src={portrait} alt="Boswell Lungisa Douse" /><figcaption><span>01 / TECHNICAL LEADERSHIP</span><b>Boswell Lungisa Douse</b><p>Group COO & Executive Director</p></figcaption></figure><div className="gh-leadership-detail"><span className="gh-leadership-rule" /><h3>Chartered<br />Naval Architect</h3><p>Specialist technical insight across vessel engineering, maritime infrastructure and complex delivery environments.</p><p>At GGH, that expertise informs strategic direction and connects the strengths of our engineering businesses.</p><span className="gh-leadership-signoff">APPLIED INGENUITY.<br />INFORMED DIRECTION.</span></div></div></section>
 <section className="gh-investment-editorial" id="partnerships"><div className="gh-container"><div className="gh-investment-top"><Kicker>INVESTMENT & PARTNERSHIP</Kicker><span>THE GGH PERSPECTIVE</span></div><div className="gh-investment-heading"><h2>Infrastructure<br />connects us.<br /><em>Ambition moves us.</em></h2><div><p>A holding company bringing specialist engineering businesses together around the infrastructure that enables growth.</p><a className="gh-text-link" href={enquiry('', 'Strategic partnership')}>Discuss a strategic partnership <Arrow diagonal /></a></div></div><div className="gh-investment-sectors">{business.map((b, i) => <a href={'#/businesses/' + slugs[i]} key={b.name}><img src={b.image} alt="" /><span>0{i + 1}</span><div><small>{b.sector}</small><h3>{b.name}</h3></div><Arrow diagonal /></a>)}</div><div className="gh-investment-thesis">{[['A specialist platform', 'Distinct technical businesses, coordinated through one group.'], ['Infrastructure relevance', 'Expertise across maritime, rail and integrated engineering.'], ['A wider horizon', 'A platform for collaboration across African and international markets.']].map(([t, c], i) => <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
 <section className="gh-contact gh-container" id="contact"><div><Kicker>LET’S TALK</Kicker><h2>Your challenge.<br /><span>Our applied ingenuity.</span></h2></div><a href="#/contact" className="gh-contact-orb gh-contact-seal" aria-label="Start an enquiry"><img className="gh-contact-seal-centre" src={contactSealCentre} alt="" /><img className="gh-contact-seal-ring" src={sealRing} alt="" /></a><div className="gh-contact-bottom"><p>Connect with our team about your next<br />infrastructure challenge or opportunity.</p><a href="mailto:info@globtek.co.za">info@globtek.co.za <Arrow diagonal /></a></div></section>
 </main> : <InnerPages route={route} />}<footer className="gh-footer"><div className="gh-footer-main gh-container"><div className="gh-footer-brand"><a href="#/" aria-label="Globtek home"><img src={logo} alt="Globtek Global Holdings" /></a><p>Applied Ingenuity for<br />Infrastructure Growth.</p><span>SOUTH AFRICA & INTERNATIONAL MARKETS</span></div><div><h3>Explore</h3><a href="#/company">The Group</a><a href="#/businesses">Our Engineering Businesses</a><a href="#/industries">Industries</a><a href="#/partnerships">Partnerships</a></div><div><h3>Our Engineering Businesses</h3>{business.map((b, i) => <button key={b.name} onClick={() => open(i)}>{b.name}</button>)}</div><div className="gh-footer-contact"><h3>Get in touch</h3><address>62 Smiso Nkwanyana Road<br />Morningside, Durban, 4001<br />South Africa</address><a href="tel:+27870575956">087 057 5956</a><a href="tel:+27744093155">074 409 3155</a><a href="mailto:info@globtek.co.za">info@globtek.co.za</a></div></div><div className="gh-footer-base gh-container"><span>© {new Date().getFullYear()} Globtek Global Holdings. All rights reserved.</span><a href="#home" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}>Back to top ↑</a></div></footer>

 </div>;
};
