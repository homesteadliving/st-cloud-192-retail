const Arrow = () => <span aria-hidden="true">↓</span>;

export default function Home() {
  return <>
    <header className="nav" id="top">
      <a className="brand" href="#top" aria-label="St. Cloud 192 home"><span className="brandMark">SC</span><span><strong>ST. CLOUD</strong><small>192 RETAIL</small></span></a>
      <input className="menuToggle" type="checkbox" id="menu-toggle" aria-label="Toggle navigation" />
      <label className="menu" htmlFor="menu-toggle"><span></span><span></span></label>
      <nav><a href="#opportunity">Opportunity</a><a href="#site-plan">Site plan</a><a href="#location">Location</a><a className="navCta" href="#contact">Leasing</a></nav>
    </header>
    <main>
      <section className="hero">
        <div className="heroShade"/><div className="eyebrow light heroEyebrow">FOR LEASE OR GROUND LEASE</div>
        <div className="heroCopy"><h1>Where Florida<br/><em>comes to life.</em></h1><p>A sunlit retail destination on US‑192—positioned between St. Cloud&apos;s hometown energy and Orlando&apos;s world-class visitor corridor.</p></div>
        <a className="scroll" href="#opportunity"><span>Explore</span><i><Arrow/></i></a><div className="heroAddress">201 E 13TH ST<br/>ST. CLOUD, FL</div>
      </section>
      <section className="intro section" id="opportunity">
        <div><div className="eyebrow">THE OPPORTUNITY</div><h2>Local rhythm.<br/><em>Destination energy.</em></h2></div>
        <div className="introCopy"><p className="lead">Three acres of high-visibility frontage on one of Osceola County&apos;s defining east–west corridors.</p><p>A fresh, landscape-forward retail setting designed for the residents, commuters and visitors moving between St. Cloud, Kissimmee and the greater Orlando market.</p></div>
      </section>
      <section className="statsWrap"><div className="stats"><article><strong>3</strong><span>ACRES</span></article><article><strong>20,777</strong><span>SF PROPOSED</span></article><article><strong>47,500</strong><span>VEHICLES / DAY</span></article><article><strong>2</strong><span>RETAIL BUILDINGS</span></article></div></section>
      <section className="aerialFeature"><img src="/st-cloud-arrival-render.png" alt="Concept rendering of the St. Cloud retail center with tropical landscaping"/><div className="imageCaption"><span>01</span> A TROPICAL ARRIVAL ON US‑192</div></section>
      <section className="plan section" id="site-plan">
        <div className="planHead"><div><div className="eyebrow">THE CURRENT PLAN</div><h2>Space for your<br/><em>next location.</em></h2></div><p>A flexible two-building concept with abundant parking and direct visibility along Irlo Bronson Memorial Highway.</p></div>
        <div className="planFrame"><img src="/site-plan.png" alt="Schematic site plan for 201 E 13th Street, St. Cloud"/><div className="planKey"><span><i className="dot orange"></i>Building A <b>±13,363 SF</b></span><span><i className="dot blue"></i>Building B <b>±7,414 SF</b></span><span><i className="dot pale"></i>Parking <b>115 spaces</b></span></div></div>
        <p className="fineprint">Current schematic plan dated May 11, 2026. Conceptual information is subject to change; contact the leasing team for current availability.</p>
      </section>
      <section className="location" id="location"><div className="locationImage"><img src="/st-cloud-aerial-render.png" alt="Aerial concept rendering of the two-building St. Cloud retail development"/><span className="sunSeal">SUNSHINE<br/>MEETS<br/>OPPORTUNITY</span></div><div className="locationCopy"><div className="eyebrow light">THE LOCATION</div><h2>Connected to<br/><em>everyday escape.</em></h2><p>US‑192 connects a fast-growing residential trade area with Kissimmee, Lake Nona and the greater Southeast Orlando market—bringing daily convenience into the path of a dynamic regional destination.</p><dl><div><dt>102,293</dt><dd>5-mile population</dd></div><div><dt>2.64%</dt><dd>annual growth</dd></div><div><dt>$89,747</dt><dd>median household income</dd></div><div><dt>85,481</dt><dd>daytime population</dd></div></dl><small>2025 estimates / 2030 projection. Source: SRS / Esri.</small></div></section>
      <section className="retail section"><div className="eyebrow">THE TRADE AREA</div><h2>National names.<br/><em>Florida momentum.</em></h2><div className="retailGrid"><p>The site sits among established daily-needs, dining and service destinations, including Publix, Wawa, Dunkin&apos;, Ace Hardware, Mister Car Wash and Culver&apos;s.</p><div className="retailCards"><span>DINING</span><span>SERVICE</span><span>DAILY NEEDS</span><span>RETAIL</span></div></div></section>
      <section className="contact" id="contact"><div><div className="eyebrow light">LEASING INFORMATION</div><h2>Find your place<br/><em>in the sunshine.</em></h2></div><div className="contacts"><article><span>SRS REAL ESTATE PARTNERS</span><h3>KC Herbert</h3><a href="tel:+14077571629">407.757.1629</a><a href="mailto:kc.herbert@srsre.com">kc.herbert@srsre.com</a></article><article><span>SRS REAL ESTATE PARTNERS</span><h3>Jason B. Kaiser, CCIM</h3><a href="tel:+14073103001">407.310.3001</a><a href="mailto:jason.kaiser@srsre.com">jason.kaiser@srsre.com</a></article></div></section>
    </main>
    <footer><a className="brand footerBrand" href="#top"><span className="brandMark">SC</span><span><strong>ST. CLOUD</strong><small>192 RETAIL</small></span></a><p>201 E 13th Street · St. Cloud, Florida 34769</p><p className="footerRight">DEVELOPMENT BY <a href="https://ironcrestcapital.com" target="_blank" rel="noopener noreferrer">IRONCREST CAPITAL</a></p><small>Information is from sources deemed reliable but is not guaranteed and is subject to change.</small></footer>
  </>;
}
