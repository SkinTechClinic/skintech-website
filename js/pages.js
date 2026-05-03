/* =========================================================================
 * SkinTech Laser Clinic — Page Render Functions
 * ========================================================================= */

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('sk_lang', lang); } catch(e) {}
  navigate(currentRoute);
}

function renderHome() {
  const nl = currentLang === 'nl';
  const svcs = nl ? SERVICES : SERVICES_EN;
  const techs = nl ? TECH : TECH_EN;
  const faqs  = nl ? FAQS  : FAQS_EN;

  const c = nl ? {
    eyebrow: 'Amsterdam · Est. 2026',
    h1: 'Premium laser- en<br/>huidbehandelingen<br/>in <i>Amsterdam.</i>',
    intro: 'Voor een gladdere huid, meer comfort en zichtbaar verzorgde resultaten — met geavanceerde technologie, persoonlijke aandacht en een rustige clinic experience.',
    bookBtn: 'Boek nu', scanBtn: 'Gratis huidscan',
    heroSub: 'Geavanceerde technologie · Persoonlijke huidanalyse · Rustige clinic-ervaring',
    stat1: 'Behandelingen', stat2: 'Huidtypes behandeld', stat3: 'Specialist per cliënt',
    aboutEy: 'Over ons',
    aboutH: 'Waar technologie en<br/>huidverzorging <i>samenkomen.</i>',
    aboutP: 'Bij SkinTech Laser Clinic combineren we hoogwaardige laser- en huidtechnologie met een persoonlijke, rustige benadering. Onze behandelingen zijn ontworpen voor mensen die duidelijke resultaten willen, maar ook comfort, veiligheid en vertrouwen belangrijk vinden.',
    svcEy: 'Behandelingen', svcH: 'Onze <i>behandelingen.</i>',
    svcP: 'Gerichte behandelingen voor ontharing, huidverbetering en een frisse, gezonde uitstraling.',
    whyEy: 'Waarom SkinTech',
    whyH: 'Medical-grade kwaliteit,<br/><i>boutique ervaring.</i>',
    whyP: 'Geen keten. Geen salon. We zitten er precies tussenin: een private Amsterdamse kliniek voor mensen die resultaten willen, zonder het koude institutionele gevoel.',
    why1h:'Premium technologie.', why1p:'We werken met zorgvuldig geselecteerde apparatuur voor comfort, precisie en diep huidinzicht.',
    why2h:'Persoonlijk behandelplan.', why2p:'Geen standaard aanpak. We kijken naar jouw huid, doelen en comfortniveau — elke sessie opnieuw.',
    why3h:'Rustige clinic experience.', why3p:'Een moderne, elegante omgeving waar je je welkom voelt. Technologie die niet koud aanvoelt, maar warm uitgevoerd wordt.',
    why4h:'Transparante behandeling.', why4p:'Duidelijke uitleg, eerlijke verwachtingen en heldere prijzen. Altijd. Zonder verrassingen achteraf.',
    techEy: 'Technologie', techH: 'High-tech behandelingen,<br/>warm <i>uitgevoerd.</i>',
    techP: 'Onze technologie ondersteunt elke stap van je behandeling: van huidanalyse tot comfortkoeling en verfijnde huidverbetering. Professioneel, veilig en persoonlijk.',
    techBtn: 'Bekijk onze technologie →',
    scanEy: 'Gratis huidscan',
    scanH: 'Start met een <i style="color:var(--bronze-deep);">gratis huidscan.</i>',
    scanP: 'Wil je weten welke behandeling het beste past bij jouw huid? Boek een gratis huidscan en ontvang persoonlijk advies — zonder verplichtingen.',
    scanList: ['Huidanalyse met professionele technologie','Persoonlijk advies op basis van jouw huiddoelen','Geen verplichting tot behandeling','Ideaal vóór laserontharing of facials'],
    scanCta: 'Gratis huidscan →', scanFree: 'Gratis · Vrijblijvend',
    journEy: 'Jouw traject', journH: 'Een behandelritme,<br/>geen <i>transactie.</i>',
    journP: 'Hoe een typisch SkinTech-traject verloopt, van het eerste gesprek tot duurzaam resultaat.',
    j1h:'Consult', j1p:'Een gratis huidscan van 45 minuten. Geen druk, geen upsell — alleen een goede lezing van waar je huid staat.',
    j2h:'Plan', j2p:'Een geschreven protocol afgestemd op jouw huid, doelen en agenda — klaar vóórdat een behandeling wordt gepland.',
    j3h:'Behandeling', j3p:'Sessies in onze Amsterdamse clinic. Rustig, met één vaste specialist per cliënt, in een ruimte voor kwaliteit — niet volume.',
    j4h:'Onderhoud', j4p:'Kwartaalonderhoud, jaarlijkse evaluatie, evoluerend plan. Jouw huid verandert — het protocol ook.',
    resEy: 'Resultaten', resH: 'Resultaten die<br/><i>natuurlijk aanvoelen.</i>',
    resP: 'Hier tonen we binnenkort echte behandelresultaten van SkinTech-cliënten, met volledige toestemming en zonder retouche.',
    resBef: 'voor', resAft: 'na', resSoon: 'binnenkort',
    res1img: true,
    res1t:'Laserontharing', res1d:'Na 6 sessies',
    res2img: true,
    res2t:'Glacē Glow Facial', res2d:'Zelfde dag',
    res3img: true,
    res3t:'Deep Cleansing', res3d:'Na 3 sessies',
    resCta: 'Plan je consult →',
    testiEy: 'Ervaringen', testiH: 'Ervaringen van<br/>onze <i>cliënten.</i>',
    testiP: 'Eerlijke woorden van onze eerste cliënten. Volledige namen op verzoek beschikbaar.',
    t1q:'"Een rustige, professionele ervaring. Alles werd duidelijk uitgelegd."', t1a:'— M. · Amsterdam Zuid', t1t:'Consult & Glacē Glow',
    t2q:'"De clinic voelt premium, maar persoonlijk. Precies wat ik zocht."', t2a:'— A. · De Pijp', t2t:'Laserontharing',
    t3q:'"Mijn huid voelde direct frisser na de behandeling."', t3a:'— L. · Jordaan', t3t:'Deep Cleansing Facial',
    faqEy: 'Veelgestelde vragen', faqH: 'Veelgestelde<br/><i>vragen.</i>',
    faqP: 'Een selectie van de vragen die we het meest horen. Staat jouw vraag er niet bij? Neem contact op.',
    faqBtn: 'Bekijk alle vragen',
    finalH: 'Klaar voor persoonlijk<br/><i style="color:var(--bronze-pale);">behandeladvies?</i>',
    finalP: 'Boek je afspraak of start met een gratis huidscan in Amsterdam.',
    finalBook: 'Boek nu →', finalScan: 'Gratis huidscan',
  } : {
    eyebrow: 'Amsterdam · Est. 2026',
    h1: 'Premium laser and<br/>skin treatments<br/>in <i>Amsterdam.</i>',
    intro: 'For smoother skin, lasting comfort and visibly refined results — with advanced technology, personal attention and a calm clinic experience.',
    bookBtn: 'Book now', scanBtn: 'Free skin scan',
    heroSub: 'Advanced technology · Personal skin analysis · Calm clinic experience',
    stat1: 'Treatments', stat2: 'Skin types treated', stat3: 'Specialist per client',
    aboutEy: 'About us',
    aboutH: 'Where technology and<br/>skin care <i>meet.</i>',
    aboutP: 'At SkinTech Laser Clinic we combine advanced laser and skin technology with a personal, calm approach. Our treatments are designed for people who want clear results and also value comfort, safety and trust.',
    svcEy: 'Treatments', svcH: 'Our <i>treatments.</i>',
    svcP: 'Focused treatments for hair removal, skin improvement and a fresh, healthy appearance.',
    whyEy: 'Why SkinTech',
    whyH: 'Medical-grade quality,<br/><i>boutique experience.</i>',
    whyP: 'Not a chain. Not a salon. We sit precisely between: a private Amsterdam clinic for people who want results without the cold institutional feel.',
    why1h:'Premium technology.', why1p:'We use carefully selected equipment for comfort, precision and deep skin insight.',
    why2h:'Personal treatment plan.', why2p:'No default approach. We look at your skin, goals and comfort level — every session, freshly.',
    why3h:'Calm clinic experience.', why3p:'A modern, elegant environment where you feel welcome. Technology that does not feel cold, but is delivered with warmth.',
    why4h:'Full transparency.', why4p:'Clear explanation, honest expectations and straightforward pricing. Always. No surprises afterwards.',
    techEy: 'Technology', techH: 'Advanced treatments,<br/>delivered with <i>care.</i>',
    techP: 'Our technology supports every step of your treatment: from skin analysis to comfort cooling and refined skin improvement. Professional, safe and personal.',
    techBtn: 'View our technology →',
    scanEy: 'Free skin scan',
    scanH: 'Start with a <i style="color:var(--bronze-deep);">free skin scan.</i>',
    scanP: 'Want to know which treatment suits your skin best? Book a free skin scan and receive personal advice — no obligations.',
    scanList: ['Skin analysis with professional technology','Personal advice based on your skin goals','No obligation to book a treatment','Ideal before laser hair removal or facials'],
    scanCta: 'Free skin scan →', scanFree: 'Free · No obligation',
    journEy: 'Your journey', journH: 'A treatment rhythm,<br/>not a <i>transaction.</i>',
    journP: 'How a typical SkinTech journey unfolds, from first conversation to lasting results.',
    j1h:'Consultation', j1p:'A free 45-minute skin scan. No pressure, no upsell — just a proper read of where your skin stands.',
    j2h:'Plan', j2p:'A written protocol tailored to your skin, goals and calendar — ready before any treatment is booked.',
    j3h:'Treatment', j3p:'Sessions at our Amsterdam clinic. Unhurried, with one dedicated specialist per client, in a space built for quality — not volume.',
    j4h:'Maintenance', j4p:'Quarterly maintenance, annual review, evolving plan. Your skin changes — the protocol does too.',
    resEy: 'Results', resH: 'Results that feel<br/><i>naturally yours.</i>',
    resP: 'Real client results coming soon, shared with full consent and no retouching.',
    resBef: 'before', resAft: 'after', resSoon: 'coming soon',
    res1img: true,
    res1t:'Laser Hair Removal', res1d:'After 6 sessions',
    res2img: true,
    res2t:'Glacē Glow Facial', res2d:'Same day',
    res3img: true,
    res3t:'Deep Cleansing', res3d:'After 3 sessions',
    resCta: 'Plan your consultation →',
    testiEy: 'Reviews', testiH: 'Words from<br/>our <i>clients.</i>',
    testiP: 'Honest notes from our first clients. Full names available on request.',
    t1q:'"A calm, professional experience. Everything was explained clearly."', t1a:'— M. · Amsterdam Zuid', t1t:'Consult & Glacē Glow',
    t2q:'"The clinic feels premium but personal. Exactly what I was looking for."', t2a:'— A. · De Pijp', t2t:'Laser Hair Removal',
    t3q:'"My skin felt noticeably fresher right after the treatment."', t3a:'— L. · Jordaan', t3t:'Deep Cleansing Facial',
    faqEy: 'Common questions', faqH: 'Frequently<br/><i>asked.</i>',
    faqP: 'A selection of the questions we hear most often. Not here? Get in touch.',
    faqBtn: 'All questions',
    finalH: 'Ready for personal<br/><i style="color:var(--bronze-pale);">skin advice?</i>',
    finalP: 'Book your appointment or start with a free skin scan in Amsterdam.',
    finalBook: 'Book now →', finalScan: 'Free skin scan',
  };

  return `
  <section class="hero">
    <div class="hero-fingerprint">${fingerprintSVG}</div>
    <div class="container" style="position:relative; z-index:2; width:100%;">
      <div style="margin-bottom:60px;" class="eyebrow">
        <span style="color:var(--bronze-pale); letter-spacing:0.22em; text-transform:uppercase; font-size:11px;">${c.eyebrow}</span>
      </div>
      <div class="hero-grid">
        <h1>${c.h1}</h1>
        <div class="hero-meta">
          <p class="hero-intro">${c.intro}</p>
          <div class="hero-cta">
            <button class="btn btn-primary" data-book>${c.bookBtn} <span>→</span></button>
            <button class="btn btn-dark-outline" onclick="navigate('contact')">${c.scanBtn}</button>
          </div>
          <p style="font-size:11px; letter-spacing:0.15em; color:rgba(245,239,228,0.45); text-transform:uppercase; margin-top:8px;">${c.heroSub}</p>
        </div>
      </div>
    </div>
    <div class="hero-bottom">
      <div class="hero-marquee-stat"><strong>05</strong><span>${c.stat1}</span></div>
      <div class="hero-marquee-stat"><strong>VI</strong><span>${c.stat2}</span></div>
      <div class="hero-marquee-stat"><strong>1:1</strong><span>${c.stat3}</span></div>
      <div class="hero-marquee-stat" style="text-align:right;"><strong>↓</strong><span>Scroll</span></div>
    </div>
  </section>

  <section style="padding:100px 0; background:var(--cream-deep);">
    <div class="container">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.aboutEy}</span><h2 style="margin-top:16px;">${c.aboutH}</h2></div>
        <p>${c.aboutP}</p>
      </div>
    </div>
  </section>

  <section class="services-sec">
    <div class="container">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.svcEy}</span><h2 style="margin-top:16px;">${c.svcH}</h2></div>
        <p>${c.svcP}</p>
      </div>
      <div class="service-list">
        ${svcs.map(s => `
          <div class="service-row" data-route="services">
            <span class="num">${s.num}</span>
            <h3>${s.name.replace(s.italic,'<i>'+s.italic+'</i>')}</h3>
            <p class="blurb">${s.blurb}</p>
            <span class="arrow-circle">→</span>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="why-sec">
    <div class="container">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.whyEy}</span><h2 style="margin-top:16px; color:var(--cream);">${c.whyH}</h2></div>
        <p style="color:rgba(245,239,228,0.55);">${c.whyP}</p>
      </div>
      <div class="why-grid">
        <div class="why-card"><div class="n">i.</div><h4>${c.why1h}</h4><p>${c.why1p}</p></div>
        <div class="why-card"><div class="n">ii.</div><h4>${c.why2h}</h4><p>${c.why2p}</p></div>
        <div class="why-card"><div class="n">iii.</div><h4>${c.why3h}</h4><p>${c.why3p}</p></div>
        <div class="why-card"><div class="n">iv.</div><h4>${c.why4h}</h4><p>${c.why4p}</p></div>
      </div>
    </div>
  </section>

  <section class="tech-sec">
    <div class="container">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.techEy}</span><h2 style="margin-top:16px;">${c.techH}</h2></div>
        <p>${c.techP}</p>
      </div>
      <div class="tech-grid">
        ${techs.slice(0,3).concat([techs[4]]).map(t2 => `
          <div class="tech-card" data-route="technology">
            <div class="meta"><span>${t2.type}</span><span>→</span></div>
            <h4>${t2.name}</h4>
            <div class="tech-img">${techIllus(t2.id)}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:40px; text-align:right;">
        <button class="btn btn-outline" data-route="technology">${c.techBtn}</button>
      </div>
    </div>
  </section>

  <section style="padding:120px 0; background:var(--cream-deep);">
    <div class="container">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center;">
        <div>
          <span class="eyebrow" style="display:block; margin-bottom:20px;">— ${c.scanEy}</span>
          <h2 style="font-family:var(--serif); font-size:clamp(38px,5vw,64px); font-weight:300; line-height:1.05; margin-bottom:24px;">${c.scanH}</h2>
          <p style="color:var(--muted); font-size:15px; line-height:1.75; max-width:440px; margin-bottom:32px;">${c.scanP}</p>
          <ul style="list-style:none; margin-bottom:36px; display:flex; flex-direction:column; gap:12px;">
            ${c.scanList.map(b=>`<li style="display:flex; gap:12px; font-size:14px; color:var(--muted);"><span style="color:var(--bronze-deep); font-family:var(--serif); font-style:italic;">✓</span>${b}</li>`).join('')}
          </ul>
          <div style="display:flex; gap:14px; align-items:center; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="navigate('contact')">${c.scanCta}</button>
            <span style="font-family:var(--serif); font-size:28px; color:var(--bronze-deep); font-style:italic;">€0</span>
          </div>
        </div>
        <div style="border-radius:4px; aspect-ratio:4/5; position:relative; overflow:hidden; background:var(--cream-deep);">
          <img loading="lazy" src="assets/sylton-scan.png" alt="Sylton Observ 520x huidscan" style="width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; filter:brightness(1.05) contrast(1.05) saturate(0.85);"/>
          <div style="position:absolute; bottom:20px; left:20px; background:rgba(245,239,228,0.92); backdrop-filter:blur(8px); padding:10px 16px; border-radius:4px; border:1px solid var(--line);">
            <div style="font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:var(--bronze-deep); margin-bottom:2px;">Sylton Observ 520x</div>
            <div style="font-family:var(--serif); font-size:16px; color:var(--ink);">${c.scanFree}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="journey-sec">
    <div class="container">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.journEy}</span><h2 style="margin-top:16px;">${c.journH}</h2></div>
        <p>${c.journP}</p>
      </div>
      <div class="journey-steps">
        <div class="journey-step"><div class="n">01</div><h4>${c.j1h}</h4><p>${c.j1p}</p></div>
        <div class="journey-step"><div class="n">02</div><h4>${c.j2h}</h4><p>${c.j2p}</p></div>
        <div class="journey-step"><div class="n">03</div><h4>${c.j3h}</h4><p>${c.j3p}</p></div>
        <div class="journey-step"><div class="n">04</div><h4>${c.j4h}</h4><p>${c.j4p}</p></div>
      </div>
    </div>
  </section>

  <section class="results-sec">
    <div class="container">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.resEy}</span><h2 style="color:var(--cream); margin-top:16px;">${c.resH}</h2></div>
        <p>${c.resP}</p>
      </div>
      <div class="results-grid">
        ${[{t:c.res1t,d:c.res1d,img:c.res1img,n:1},{t:c.res2t,d:c.res2d,img:c.res2img,n:2},{t:c.res3t,d:c.res3d,img:c.res3img,n:3}].map(r=>`
          <div class="result-card">
            <div class="result-imgs">
              <div class="result-img">${r.img ? '<img loading="lazy" src="assets/result-before-'+r.n+'.webp" alt="Resultaat voor behandeling" style="width:100%;height:100%;object-fit:cover;"/>' : ''}<span class="tag">${c.resBef}</span>${r.img ? '' : c.resBef+' · '+c.resSoon}</div>
              <div class="result-img">${r.img ? '<img loading="lazy" src="assets/result-after-'+r.n+'.webp" alt="Resultaat na behandeling" style="width:100%;height:100%;object-fit:cover;"/>' : ''}<span class="tag">${c.resAft}</span>${r.img ? '' : c.resAft+' · '+c.resSoon}</div>
            </div>
            <div class="caption"><span class="treatment">${r.t}</span><span class="time">${r.d}</span></div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:48px; text-align:center;">
        <button class="btn btn-dark-outline" onclick="navigate('contact')" style="margin:0 auto;">${c.resCta}</button>
      </div>
    </div>
  </section>

  <section style="padding:120px 0; background:var(--cream-deep);">
    <div class="container">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.testiEy}</span><h2 style="margin-top:16px;">${c.testiH}</h2></div>
        <p>${c.testiP}</p>
      </div>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:28px;">
        ${[{q:c.t1q,a:c.t1a,t:c.t1t},{q:c.t2q,a:c.t2a,t:c.t2t},{q:c.t3q,a:c.t3a,t:c.t3t}].map(r=>`
          <div class="testi-card">
            <div class="stars">✦ ✦ ✦ ✦ ✦</div>
            <blockquote>${r.q}</blockquote>
            <div class="author"><strong>${r.a}</strong> · ${r.t}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="faq-sec">
    <div class="container-narrow">
      <div class="sec-header">
        <div><span class="eyebrow">— ${c.faqEy}</span><h2 style="margin-top:16px;">${c.faqH}</h2></div>
        <p>${c.faqP}</p>
      </div>
      ${faqs.slice(0,4).map(f=>`
        <div class="faq-item">
          <div class="faq-q"><h4>${f.q}</h4><div class="faq-plus"></div></div>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>
      `).join('')}
      <div style="margin-top:40px; text-align:right;">
        <button class="btn btn-ghost" data-route="faq">${c.faqBtn} <span class="arrow">→</span></button>
      </div>
    </div>
  </section>

  <section style="padding:120px 0; background:var(--ink); color:var(--cream); text-align:center;">
    <div class="container-narrow">
      <h2 style="font-family:var(--serif); font-size:clamp(38px,5vw,64px); font-weight:300; line-height:1.05; margin-bottom:24px; color:var(--cream);">${c.finalH}</h2>
      <p style="color:rgba(245,239,228,0.6); max-width:480px; margin:0 auto 40px; font-size:15px; line-height:1.7;">${c.finalP}</p>
      <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap;">
        <button class="btn btn-primary" style="background:var(--cream); color:var(--ink);" data-book>${c.finalBook}</button>
        <button class="btn btn-dark-outline" onclick="navigate('contact')">${c.finalScan}</button>
      </div>
    </div>
  </section>
  `;
}


/* ===================== About ===================== */
function renderAbout() {
  const nl = currentLang === 'nl';
  const c = nl ? {
    eyebrow: 'Over SkinTech',
    h1: 'Een premium clinic<br/>voor de <i>bewuste</i> cliënt.',
    lede: 'We openden SkinTech omdat Amsterdam een ander soort esthetisch adres nodig had — een plek waar medische precisie en boutique zorg niet elkaars tegenpolen zijn, maar elkaars verlengstuk.',
    visieLabel: 'Onze visie',
    p1: 'Huid is specifiek. Een scan, een protocol en een specialist die jouw naam kent — dat is het minimum. Al het andere is decoratie.',
    p2: 'We behandelen één persoon tegelijk, in ruimtes die dichter bij een atelier voelen dan bij een wachtkamer. We zeggen nee tegen behandelingen die je niet nodig hebt. We meten, plannen en blijven betrokken.',
    founderEyebrow: 'Onze aanpak',
    founderH: 'Meer dan een <i>behandeling.</i>',
    fp1: 'SkinTech ontstond als antwoord — op ketenklinieken die cliënten verwerken, op spas die klinische diepgang missen, en op een markt die je te vaak dwingt te kiezen tussen beiden.',
    fp2: 'We wilden een plek die esthetische zorg met dezelfde ernst behandelt als elke andere tak van de geneeskunde, zonder de warmte te verliezen die mensen doet terugkomen. Een plek waar de technologie clinical-grade is en de ervaring oprecht mooi.',
    fp3: 'Elk detail — de verlichting, de muziek, de scanner, de planning — is gekozen om huidbehandeling te laten voelen als een bewust onderdeel van een bewust leven.',
    sig: '— Het SkinTech-team',
    valuesEyebrow: 'Onze waarden',
    valuesH: 'Drie principes,<br/><i>niet onderhandelbaar.</i>',
    valuesSub: 'Principes die elke boeking, elk consult en elke beslissing in de behandelruimte vormgeven.',
    v1h: 'Precisie.', v1p: 'Zorgvuldige behandeling met professionele technologie, afgestemd op jouw huid — nooit op een standaard.',
    v2h: 'Comfort.', v2p: 'Een rustige omgeving en apparatuur die de behandelervaring aangenamer maakt. Technologie die warm aanvoelt.',
    v3h: 'Transparantie.', v3p: 'Heldere uitleg, eerlijke verwachtingen en duidelijke prijzen. Altijd. Zonder verrassingen.',
    ctaH: 'Begin met persoonlijk <i style="color:var(--bronze-pale);">advies.</i>',
    ctaSub: 'Boek je gratis huidscan of plan direct een behandeling. 45 minuten, geen druk, een geschreven plan dat je meeneemt.',
    cta1: 'Gratis huidscan →', cta2: 'Boek nu →',
  } : {
    eyebrow: 'About SkinTech',
    h1: 'A premium clinic<br/>for the <i>considered</i> client.',
    lede: 'We opened SkinTech because Amsterdam needed a different kind of aesthetic address — one where medical precision and boutique care are not in competition, but in conversation.',
    visieLabel: 'Our philosophy',
    p1: 'Skin is specific. A scan, a protocol and a specialist who knows your name — that is the baseline. Everything else is decoration.',
    p2: 'We treat one person at a time, in rooms that feel closer to an atelier than a waiting room. We say no to treatments you do not need. We measure, plan, and stay involved.',
    founderEyebrow: 'Our approach',
    founderH: 'More than a <i>treatment.</i>',
    fp1: 'SkinTech was founded as a response — to chain clinics that process clients, to spas that lack clinical depth, and to a market that too often forces a choice between the two.',
    fp2: 'We wanted a space that treats aesthetic care with the same seriousness as any other branch of medicine, without losing the warmth that makes people want to return. A place where the technology is clinical-grade and the experience is genuinely beautiful.',
    fp3: 'Every detail — the lighting, the music, the scanner, the scheduling — is chosen to make skin treatment feel like a considered part of a considered life.',
    sig: '— The SkinTech team',
    valuesEyebrow: 'What guides us',
    valuesH: 'Three principles,<br/><i>non-negotiable.</i>',
    valuesSub: 'Principles that shape every booking, every consultation and every treatment room decision.',
    v1h: 'Precision.', v1p: 'Careful treatment with professional technology, tailored to your skin — never to a default.',
    v2h: 'Comfort.', v2p: 'A calm environment and equipment that makes the treatment experience more pleasant. Technology that feels warm.',
    v3h: 'Transparency.', v3p: 'Clear explanation, honest expectations and straightforward pricing. Always. No surprises.',
    ctaH: 'Begin with personal <i style="color:var(--bronze-pale);">advice.</i>',
    ctaSub: 'Book your free skin scan or plan a treatment directly. 45 minutes, no pressure, a written plan to take home.',
    cta1: 'Free skin scan →', cta2: 'Book now →',
  };
  return `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">— ${c.eyebrow}</span>
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
  </section>
  <section class="about-philos">
    <div class="container" style="display:contents;">
      <div class="container" style="display:grid; grid-template-columns:1fr 1.4fr; gap:80px;">
        <div><span class="label">${c.visieLabel}</span></div>
        <div>
          <p>${c.p1}</p>
          <p>${c.p2}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="founder-sec">
    <div class="container">
      <div class="founder-grid">
        <div class="founder-photo"><img loading="lazy" src="assets/founder-web.webp" alt="SkinTech clinic"/></div>
        <div class="founder-text">
          <span class="eyebrow">— ${c.founderEyebrow}</span>
          <h3 style="margin-top:20px;">${c.founderH}</h3>
          <p>${c.fp1}</p>
          <p>${c.fp2}</p>
          <p>${c.fp3}</p>
          <div class="founder-sig">${c.sig}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="values-sec">
    <div class="container">
      <div class="sec-header">
        <div>
          <span class="eyebrow">— ${c.valuesEyebrow}</span>
          <h2 style="margin-top:16px;">${c.valuesH}</h2>
        </div>
        <p>${c.valuesSub}</p>
      </div>
      <div class="values-grid">
        <div class="value-card"><div class="n">i.</div><h4>${c.v1h}</h4><p>${c.v1p}</p></div>
        <div class="value-card"><div class="n">ii.</div><h4>${c.v2h}</h4><p>${c.v2p}</p></div>
        <div class="value-card"><div class="n">iii.</div><h4>${c.v3h}</h4><p>${c.v3p}</p></div>
      </div>
    </div>
  </section>
  <section style="padding:120px 0; background:var(--ink); color:var(--cream); text-align:center;">
    <div class="container-narrow">
      <h2 style="font-family:var(--serif); font-size:clamp(38px,5vw,64px); font-weight:300; line-height:1.05; margin-bottom:32px; color:var(--cream);">${c.ctaH}</h2>
      <p style="color:rgba(245,239,228,0.6); max-width:480px; margin:0 auto 40px; font-size:15px; line-height:1.7;">${c.ctaSub}</p>
      <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap;">
        <button class="btn btn-dark-outline" onclick="navigate('contact')">${c.cta1}</button>
        <button class="btn btn-primary" style="background:var(--cream); color:var(--ink);" data-book>${c.cta2}</button>
      </div>
    </div>
  </section>
  `;
}


/* ===================== Services ===================== */
function renderServices() {
  const nl = currentLang === 'nl';
  const svcs = nl ? SERVICES : SERVICES_EN;
  const c = nl ? {
    eyebrow:'Behandelingen',
    h1:'Behandelingen voor een<br/>gladde, frisse en<br/><i>verzorgde huid.</i>',
    lede:'Van laserontharing tot facials en huidanalyse: ontdek welke behandeling past bij jouw huid en doelen.',
    soon:'binnenkort', dur:'Duur', freq:'Frequentie', forWho:'Voor wie',
    benefits:'Voordelen', expect:'Wat je kunt verwachten', pricing:'Tarieven', book:'Boek',
  } : {
    eyebrow:'Treatments',
    h1:'Treatments for smoother,<br/>fresher and better<br/><i>cared-for skin.</i>',
    lede:'From laser hair removal to facials and skin analysis: discover which treatment suits your skin and goals.',
    soon:'coming soon', dur:'Duration', freq:'Frequency', forWho:'Who it is for',
    benefits:'Benefits', expect:'What to expect', pricing:'Pricing', book:'Book',
  };
  return `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">— ${c.eyebrow}</span>
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
  </section>
  ${svcs.map((s, i) => `
    <section class="service-detail" id="${s.id}">
      <div class="container">
        <div class="service-detail-grid" style="${i%2?'direction:rtl;':''}">
          <div style="direction:ltr;">
            <div class="service-detail-visual">${s.img ? '<img loading="lazy" src="'+s.img+'" alt="'+s.name+'" style="width:100%;height:100%;object-fit:cover;"/>' : s.name.toLowerCase().replace(/[^a-z0-9]/g,'-')+' · '+c.soon}</div>
          </div>
          <div class="service-detail-text" style="direction:ltr;">
            <span class="eyebrow">— ${s.num} · ${s.duration}</span>
            <h3>${s.name.replace(s.italic,'<i>'+s.italic+'</i>')}</h3>
            <p class="desc">${s.desc}</p>
            <div class="service-meta">
              <div><div class="label">${c.dur}</div><div class="val">${s.duration}</div></div>
              <div><div class="label">${c.freq}</div><div class="val">${s.sessions}</div></div>
            </div>
            <div style="margin-bottom:32px;">
              <span class="eyebrow" style="display:block;margin-bottom:16px;">— ${c.forWho}</span>
              <p style="font-size:15px;color:var(--muted);line-height:1.7;">${s.forWho}</p>
            </div>
            <div style="margin-bottom:32px;">
              <span class="eyebrow" style="display:block;margin-bottom:16px;">— ${c.benefits}</span>
              <ul class="service-benefits">
                ${s.benefits.map((b,j)=>`<li><span class="b-num">${(j+1).toString().padStart(2,'0')}</span>${b}</li>`).join('')}
              </ul>
            </div>
            <div style="margin-bottom:32px;">
              <span class="eyebrow" style="display:block;margin-bottom:16px;">— ${c.expect}</span>
              <p style="font-size:15px;color:var(--muted);line-height:1.7;">${s.expect}</p>
            </div>
            ${s.pricing?`
            <div style="margin-bottom:32px;">
              <span class="eyebrow" style="display:block;margin-bottom:16px;">— ${c.pricing}</span>
              <div style="border-top:1px solid var(--line);">
                ${s.pricing.map(p=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--line);"><span style="font-size:14px;color:var(--muted);">${p.label}</span><span style="font-family:var(--serif);font-size:18px;color:var(--ink);">${p.value}</span></div>`).join('')}
              </div>
              ${s.priceNote?`<p style="font-size:12px;color:var(--muted);margin-top:12px;line-height:1.6;">${s.priceNote}</p>`:''}
            </div>`:''}
            <button class="btn btn-primary" data-book>${c.book} ${s.nav.toLowerCase()} →</button>
          </div>
        </div>
      </div>
    </section>
  `).join('')}
  `;
}


/* ===================== English data ===================== */


function renderTechnology() {
  const nl = currentLang === 'nl';
  const techs = nl ? TECH : TECH_EN;
  const c = nl ? {
    eyebrow:'Technologie',
    h1:'Geavanceerde technologie<br/>voor betere <i>huidresultaten.</i>',
    lede:'Bij SkinTech gebruiken we zorgvuldig geselecteerde technologieën die bijdragen aan precisie, comfort en een premium behandelervaring.',
    app:'Toepassing', zones:'Zones', types:'Huidtypes',
    ctaH:'Ervaar de apparatuur<br/><i style="color:var(--bronze-deep);">in persoon.</i>',
    ctaSub:'Begin met een gratis huidscan. De snelste manier om te begrijpen wat jouw huid werkelijk nodig heeft — en welke apparatuur je daar brengt.',
    ctaBtn:'Gratis huidscan boeken →',
  } : {
    eyebrow:'Technology',
    h1:'Advanced technology<br/>for better <i>skin results.</i>',
    lede:'At SkinTech we use carefully selected technologies that contribute to precision, comfort and a premium treatment experience.',
    app:'Application', zones:'Zones', types:'Skin types',
    ctaH:'Experience the technology<br/><i style="color:var(--bronze-deep);">in person.</i>',
    ctaSub:"Begin with a free skin scan. The fastest way to understand what your skin actually needs — and which device will get you there.",
    ctaBtn:'Book a free skin scan →',
  };
  return `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">— ${c.eyebrow}</span>
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
  </section>
  ${techs.map((t2, i) => `
    <section class="tech-detail">
      <div class="container">
        <div class="tech-detail-grid ${i%2?'reverse':''}">
          <div class="tech-detail-visual">${techIllus(t2.id)}<div class="tag-label"><span><span class="dot"></span>${t2.name}</span><span>fig. ${(i+1).toString().padStart(2,'0')}</span></div></div>
          <div>
            <span class="eyebrow">— ${(i+1).toString().padStart(2,'0')} · ${t2.type}</span>
            <h3 style="margin-top:16px;">${t2.name}</h3>
            <span class="tech-sub">${t2.sub}</span>
            <p>${t2.p1}</p>
            <p>${t2.p2}</p>
            <div class="tech-specs">
              <div class="tech-spec"><div class="l">${c.app}</div><div class="v">${t2.type}</div></div>
              <div class="tech-spec"><div class="l">${c.zones}</div><div class="v">${t2.region}</div></div>
              <div class="tech-spec"><div class="l">${c.types}</div><div class="v">${t2.tones}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `).join('')}
  <section style="padding:120px 0; background:var(--cream-deep); text-align:center;">
    <div class="container-narrow">
      <h2 style="font-family:var(--serif); font-size:clamp(38px,5vw,64px); font-weight:300; line-height:1.05; margin-bottom:24px;">${c.ctaH}</h2>
      <p style="color:var(--muted); max-width:480px; margin:0 auto 40px; font-size:15px; line-height:1.7;">${c.ctaSub}</p>
      <button class="btn btn-primary" onclick="navigate('contact')">${c.ctaBtn}</button>
    </div>
  </section>
  `;
}


/* ===================== Results ===================== */
function renderResults() {
  const nl = currentLang === 'nl';
  return `
  <section class="page-head" style="background:var(--ink); color:var(--cream); border-bottom-color:var(--line-dark);">
    <div class="container">
      <span class="eyebrow" style="color:var(--bronze-pale);">— ${nl ? 'Resultaten' : 'Results'}</span>
      <h1 style="color:var(--cream);">${nl
        ? 'Eerlijke voor,<br/><i style="color:var(--bronze-pale);">verdiende na.</i>'
        : 'Honest before,<br/><i style="color:var(--bronze-pale);">earned after.</i>'}</h1>
      <p class="lede" style="color:rgba(245,239,228,0.6);">${nl
        ? 'Onze volledige galerie verschijnt bij de opening van de clinic. De afbeeldingen hieronder zijn placeholders — echte resultaten worden toegevoegd met volledige schriftelijke toestemming en zonder retouche.'
        : 'Our full client gallery launches with the clinic. Placeholder imagery is shown below — real results will replace these, with full written consent and no retouching.'}</p>
    </div>
  </section>

  <section style="background:var(--ink); padding:80px 0 140px; color:var(--cream);">
    <div class="container">
      <div class="results-page-grid" style="grid-template-columns:repeat(2,1fr);">
        ${(nl
          ? [{t:'Laserontharing · Oksels', d:'6 sessies · 8 maanden'},
             {t:'Glacē Glow Facial', d:'Resultaat zelfde dag'},
             {t:'Deep Cleansing · Verstopte huid', d:'3 sessies · 8 weken'},
             {t:'Combinatie · Gezichtsprogramma', d:'Per kwartaal · 12 maanden'}]
          : [{t:'Laser Hair Removal · Underarm', d:'6 sessions · 8 months'},
             {t:'Glacē Glow Facial', d:'Same-day result'},
             {t:'Deep Cleansing · Congested skin', d:'3 sessions · 8 weeks'},
             {t:'Combination · Face programme', d:'Quarterly · 12 months'}]
        ).map(r => `
          <div class="result-big" style="background:#2A2420;">
            <div class="ba-split">
              <div style="color:var(--bronze-pale);">${nl ? 'voor' : 'before'}</div>
              <div style="color:var(--bronze-pale);">${nl ? 'na' : 'after'}</div>
            </div>
            <div class="caption" style="color:var(--cream);">
              <span>${r.t}</span>
              <span class="time" style="color:var(--bronze-pale);">${r.d}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="testimonials">
    <div class="container">
      <div class="sec-header">
        <div>
          <span class="eyebrow">— ${nl ? 'In hun eigen woorden' : 'In their own words'}</span>
          <h2 style="margin-top:16px;">${nl ? 'Het stille soort<br/><i>zelfvertrouwen.</i>' : 'The quiet kind<br/>of <i>confidence.</i>'}</h2>
        </div>
        <p>${nl ? 'Onbewerkte reacties van onze eerste cliënten. Volledige namen op verzoek beschikbaar.' : 'Unedited notes from our first clients. Full names available on request.'}</p>
      </div>
      <div class="testi-grid">
        ${(nl
          ? [{q:'"Alleen al het consult was het waard. Ik heb nog nooit iemand gehad die mijn huid echt gelezen heeft — en het plan dat ze schreven was inhoudelijk, geen verkooppraatje."',a:'<strong>M. — Amsterdam Zuid</strong> · Consult & Glacē Glow'},
             {q:'"Na zes sessies kan ik er eindelijk mee stoppen. De behandeling is rustig, de specialist is uitstekend, de ruimte is mooi. Precies wat ik zocht."',a:'<strong>A. — De Pijp</strong> · Laserontharing'},
             {q:'"Klinisch zonder klinisch te voelen. Je verlaat het met stralende huid en een geschreven protocol — en toch ook met het gevoel dat je een heel goed uur voor jezelf had."',a:'<strong>L. — Jordaan</strong> · Deep Cleansing Facial'},
             {q:'"Ik waardeerde het dat me werd verteld wat ik níét nodig had. Dat alleen al bouwde meer vertrouwen dan welke behandeling ook."',a:'<strong>S. — Oud-West</strong> · Huidscan'}]
          : [{q:'"The consultation alone was worth it. I\'ve never had anyone actually read my skin before — and the plan they wrote was intelligent, not a sales document."',a:'<strong>M. — Amsterdam Zuid</strong> · Consultation & Glacē Glow'},
             {q:'"Six sessions in and I can already stop thinking about it. The treatment is calm, the specialist is excellent, the space is beautiful. Exactly what I was looking for."',a:'<strong>A. — De Pijp</strong> · Laser Hair Removal'},
             {q:'"Clinical without being clinical. You leave with glowing skin and a written protocol — and somehow also feeling like you just had a very good hour to yourself."',a:'<strong>L. — Jordaan</strong> · Deep Cleansing Facial'},
             {q:'"I appreciated being told what I didn\'t need. That alone built more trust than any treatment would have."',a:'<strong>S. — Oud-West</strong> · Skin Scan'}]
        ).map(r => `
          <div class="testi-card">
            <div class="stars">✦ ✦ ✦ ✦ ✦</div>
            <blockquote>${r.q}</blockquote>
            <div class="author">${r.a}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section style="padding:120px 0; text-align:center;">
    <div class="container-narrow">
      <h2 style="font-family:var(--serif); font-size:clamp(38px,5vw,64px); font-weight:300; line-height:1.05; margin-bottom:24px;">
        ${nl ? 'Jouw <i style="color:var(--bronze-deep);">voor</i> begint hier.' : 'Your <i style="color:var(--bronze-deep);">before</i> starts here.'}
      </h2>
      <p style="color:var(--muted); max-width:460px; margin:0 auto 40px; font-size:15px; line-height:1.7;">
        ${nl
          ? 'Begin met een gratis huidscan. We scannen, luisteren en schrijven een plan — volledig vrijblijvend.'
          : 'Begin with a complimentary skin scan. We\'ll scan, listen and write you a plan — no obligation to continue.'}
      </p>
      <button class="btn btn-primary" onclick="navigate('contact')">${nl ? 'Boek je gratis huidscan →' : 'Book your free skin scan →'}</button>
    </div>
  </section>
  `;
}

/* ===================== FAQ
  const nl = currentLang === 'nl';
  const faqs = nl ? FAQS : FAQS_EN;
  const groups = nl
    ? [
        { title:'Laserontharing', items:[0,1,2] },
        { title:'Facials & huid', items:[5] },
        { title:'Voorbereiding & nazorg', items:[3,4] },
        { title:'Consulten & boeken', items:[6,7,8] },
      ]
    : [
        { title:'Laser Hair Removal', items:[0,1,2] },
        { title:'Facials & Skin', items:[5] },
        { title:'Preparation & Aftercare', items:[3,4] },
        { title:'Consultations & Booking', items:[6,7,8] },
      ];
  return `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">— ${nl ? 'Veelgestelde vragen' : 'Frequently asked'}</span>
      <h1>${nl ? 'Veelgestelde<br/><i>vragen.</i>' : 'Questions,<br/><i>answered properly.</i>'}</h1>
      <p class="lede">${nl
        ? "Een selectie van de vragen die we het meest horen. Staat jouw vraag er niet bij? Neem contact op — we beantwoorden het graag."
        : "If something isn't covered here, message us directly. We'd rather answer a question before you book than after."}</p>
    </div>
  </section>

  <section class="faq-sec">
    <div class="container-narrow">
      ${groups.map(g => `
        <div style="margin-bottom:72px;">
          <span class="eyebrow" style="display:block; margin-bottom:24px;">— ${g.title}</span>
          ${g.items.map(i => `
            <div class="faq-item">
              <div class="faq-q"><h4>${faqs[i].q}</h4><div class="faq-plus"></div></div>
              <div class="faq-a"><p>${faqs[i].a}</p></div>
            </div>
          `).join('')}
        </div>
      `).join('')}

      <div style="margin-top:80px; padding:48px; background:var(--cream-deep); border-radius:4px; display:flex; justify-content:space-between; align-items:center; gap:40px; flex-wrap:wrap;">
        <div>
          <h4 style="font-family:var(--serif); font-size:28px; font-weight:400; margin-bottom:6px;">${nl ? 'Nog vragen?' : 'Still unsure?'}</h4>
          <p style="color:var(--muted); font-size:14px;">${nl ? 'Stuur ons een WhatsApp — we reageren doorgaans binnen het uur.' : 'Message us on WhatsApp — we usually reply within the hour.'}</p>
        </div>
        <button class="btn btn-primary" data-route="contact">${nl ? 'Neem contact op →' : 'Get in touch →'}</button>
      </div>
    </div>
  </section>
  `;
}

/* ===================== FAQ ===================== */
function renderFaq() {
  const nl = currentLang === 'nl';
  const faqs = nl ? FAQS : FAQS_EN;
  const groups = nl
    ? [
        { title:'Laserontharing', items:[0,1,2] },
        { title:'Facials & huid', items:[5] },
        { title:'Voorbereiding & nazorg', items:[3,4] },
        { title:'Consulten & boeken', items:[6,7,8] },
      ]
    : [
        { title:'Laser Hair Removal', items:[0,1,2] },
        { title:'Facials & Skin', items:[5] },
        { title:'Preparation & Aftercare', items:[3,4] },
        { title:'Consultations & Booking', items:[6,7,8] },
      ];
  return `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">— ${nl ? 'Veelgestelde vragen' : 'Frequently asked'}</span>
      <h1>${nl ? 'Veelgestelde<br/><i>vragen.</i>' : 'Questions,<br/><i>answered properly.</i>'}</h1>
      <p class="lede">${nl
        ? 'Een selectie van de vragen die we het meest horen. Staat jouw vraag er niet bij? Neem contact op.'
        : "If something isn't covered here, message us directly. We'd rather answer a question before you book than after."}</p>
    </div>
  </section>
  <section class="faq-sec">
    <div class="container-narrow">
      ${groups.map(g => `
        <div style="margin-bottom:72px;">
          <span class="eyebrow" style="display:block; margin-bottom:24px;">— ${g.title}</span>
          ${g.items.map(i => `
            <div class="faq-item">
              <div class="faq-q"><h4>${faqs[i].q}</h4><div class="faq-plus"></div></div>
              <div class="faq-a"><p>${faqs[i].a}</p></div>
            </div>
          `).join('')}
        </div>
      `).join('')}
      <div style="margin-top:80px; padding:48px; background:var(--cream-deep); border-radius:4px; display:flex; justify-content:space-between; align-items:center; gap:40px; flex-wrap:wrap;">
        <div>
          <h4 style="font-family:var(--serif); font-size:28px; font-weight:400; margin-bottom:6px;">${nl ? 'Nog vragen?' : 'Still unsure?'}</h4>
          <p style="color:var(--muted); font-size:14px;">${nl ? 'Stuur ons een WhatsApp — we reageren doorgaans binnen het uur.' : 'Message us on WhatsApp — we usually reply within the hour.'}</p>
        </div>
        <button class="btn btn-primary" data-route="contact">${nl ? 'Neem contact op →' : 'Get in touch →'}</button>
      </div>
    </div>
  </section>
  `;
}

/* ===================== Journal ===================== */


function renderJournal() {
  const nl = currentLang === 'nl';
  const c = nl ? {
    eyebrow:'Journal',
    h1:'Inzichten, tips en<br/><i>behandelkennis.</i>',
    lede:'Artikelen over huidverzorging, behandelingen en de technologie achter onze aanpak. Geschreven door het SkinTech-team.',
    readMore:'Lees verder →',
    allCat:'Alles',
  } : {
    eyebrow:'Journal',
    h1:'Insights, tips and<br/><i>treatment knowledge.</i>',
    lede:'Articles about skin care, treatments and the technology behind our approach. Written by the SkinTech team.',
    readMore:'Read more →',
    allCat:'All',
  };

  const cats = ['all', ...new Set(ARTICLES.map(a => nl ? a.cat : a.catEn))];

  return `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">— ${c.eyebrow}</span>
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
  </section>

  <section style="padding:80px 0 140px;">
    <div class="container">
      <div style="display:flex; gap:12px; margin-bottom:48px; flex-wrap:wrap;">
        ${cats.map(cat => `
          <button class="btn btn-outline journal-filter" style="font-size:12px; padding:8px 18px;" onclick="filterJournal('${cat}')" data-cat="${cat}">
            ${cat === 'all' ? c.allCat : cat}
          </button>
        `).join('')}
      </div>
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:28px;" id="journalGrid">
        ${ARTICLES.map(a => `
          <article class="journal-card" data-cat="${nl ? a.cat : a.catEn}" style="cursor:pointer;" onclick="showArticle('${a.id}')">
            <div style="aspect-ratio:16/10; border-radius:4px; overflow:hidden; margin-bottom:20px; background:var(--cream-deep);">
              ${a.img ? `<img src="${a.img}" alt="" style="width:100%; height:100%; object-fit:cover;" loading="lazy"/>` : ''}
            </div>
            <div style="display:flex; gap:16px; align-items:center; margin-bottom:12px;">
              <span style="font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--bronze-deep);">${nl ? a.cat : a.catEn}</span>
              <span style="font-size:10px; color:var(--muted);">${a.date}</span>
            </div>
            <h3 style="font-family:var(--serif); font-size:22px; font-weight:400; line-height:1.25; margin-bottom:12px;">${nl ? a.titleNl : a.titleEn}</h3>
            <p style="font-size:13px; color:var(--muted); line-height:1.7; margin-bottom:16px;">${nl ? a.excerptNl : a.excerptEn}</p>
            <span style="font-size:12px; color:var(--bronze-deep); letter-spacing:0.05em;">${c.readMore}</span>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section style="padding:100px 0; background:var(--cream-deep); text-align:center;">
    <div class="container-narrow">
      <h2 style="font-family:var(--serif); font-size:clamp(32px,4vw,52px); font-weight:300; line-height:1.1; margin-bottom:20px;">
        ${nl ? 'Wil je op de hoogte <i style="color:var(--bronze-deep);">blijven?</i>' : 'Want to stay <i style="color:var(--bronze-deep);">informed?</i>'}
      </h2>
      <p style="color:var(--muted); max-width:440px; margin:0 auto 32px; font-size:14px; line-height:1.7;">
        ${nl ? 'Volg ons op Instagram voor tips, nieuws en behind-the-scenes van de clinic.' : 'Follow us on Instagram for tips, news and behind-the-scenes from the clinic.'}
      </p>
      <a href="https://instagram.com/skintech_nl" target="_blank" rel="noopener" class="btn btn-primary">Instagram →</a>
    </div>
  </section>
  `;
}

function filterJournal(cat) {
  document.querySelectorAll('.journal-card').forEach(card => {
    if (cat === 'all') { card.style.display = ''; }
    else { card.style.display = card.dataset.cat === cat ? '' : 'none'; }
  });
  document.querySelectorAll('.journal-filter').forEach(btn => {
    btn.classList.toggle('active-filter', btn.dataset.cat === cat);
    if (btn.dataset.cat === cat) {
      btn.style.background = 'var(--ink)'; btn.style.color = 'var(--cream)'; btn.style.borderColor = 'var(--ink)';
    } else {
      btn.style.background = ''; btn.style.color = ''; btn.style.borderColor = '';
    }
  });
}

function showArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;
  const nl = currentLang === 'nl';
  const content = ARTICLE_CONTENT[id];
  const body = content ? (nl ? content.bodyNl : content.bodyEn) : '';
  const app = document.getElementById('app');
  app.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'page-enter';
  el.innerHTML = `
    <section class="page-head">
      <div class="container">
        <div style="margin-bottom:16px;">
          <button class="btn btn-ghost" onclick="navigate('journal')" style="font-size:12px;">← ${nl ? 'Terug naar Journal' : 'Back to Journal'}</button>
        </div>
        <span class="eyebrow">${nl ? a.cat : a.catEn} · ${a.date}</span>
        <h1 style="max-width:800px;">${nl ? a.titleNl : a.titleEn}</h1>
      </div>
    </section>
    <section style="padding:60px 0 120px;">
      <div class="container-narrow">
        ${a.img ? `<div style="border-radius:4px; overflow:hidden; margin-bottom:48px; aspect-ratio:21/9;"><img loading="lazy" src="${a.img}" alt="" style="width:100%; height:100%; object-fit:cover;"/></div>` : ''}
        <div class="article-body" style="font-size:15px; line-height:1.8; color:var(--ink);">
          <div style="font-family:var(--serif); font-size:22px; line-height:1.5; margin-bottom:32px; color:var(--ink);">${nl ? a.excerptNl : a.excerptEn}</div>
          ${body ? body : `<div style="padding:48px; background:var(--cream-deep); border-radius:4px; text-align:center;">
            <p style="font-family:var(--serif); font-size:20px; color:var(--muted); margin-bottom:20px;">${nl ? 'Dit artikel wordt binnenkort aangevuld.' : 'This article will be updated soon.'}</p>
          </div>`}
        </div>
        <div style="margin-top:60px; padding-top:40px; border-top:1px solid var(--line); display:flex; justify-content:space-between; align-items:center;">
          <button class="btn btn-ghost" onclick="navigate('journal')" style="font-size:12px;">← ${nl ? 'Terug naar Journal' : 'Back to Journal'}</button>
          <button class="btn btn-primary" onclick="navigate('contact')">${nl ? 'Stel een vraag →' : 'Ask a question →'}</button>
        </div>
      </div>
    </section>
  `;
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = renderFooter();
  el.appendChild(footer);
  app.appendChild(el);
  window.scrollTo(0, 0);
  bindPageInteractions();
}

/* ===================== Contact ===================== */
function renderContact() {
  const nl = currentLang === 'nl';
  return `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">— ${nl ? 'Contact & boeken' : 'Contact & booking'}</span>
      <h1>${nl ? 'Begin met een<br/><i>gesprek.</i>' : 'Begin with<br/>a <i>conversation.</i>'}</h1>
      <p class="lede">${nl
        ? 'Vertel ons iets over jouw huid en doelen. We reageren binnen één werkdag met beschikbaarheid, of een directe WhatsApp-link als je liever belt.'
        : 'Tell us a little about your skin and your goals. We\'ll respond within one business day with availability, or a direct WhatsApp link if you prefer to speak.'}</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="contact-grid">
        <form class="contact-form" onsubmit="handleContact(event)">
          <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
          <div class="form-row">
            <div class="form-field">
              <label>${nl ? 'Voornaam' : 'First name'}</label>
              <input type="text" name="first_name" placeholder="${nl ? 'Jouw naam' : 'Your name'}" required>
            </div>
            <div class="form-field">
              <label>${nl ? 'Achternaam' : 'Last name'}</label>
              <input type="text" name="last_name" placeholder="${nl ? 'Familienaam' : 'Family name'}" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>E-mail</label>
              <input type="email" name="email" placeholder="you@example.com" required>
            </div>
            <div class="form-field">
              <label>${nl ? 'Telefoon (optioneel)' : 'Phone (optional)'}</label>
              <input type="tel" name="phone" placeholder="+31 6 ...">
            </div>
          </div>
          <div class="form-field">
            <label>${nl ? 'Behandeling van interesse' : 'Treatment of interest'}</label>
            <select name="treatment">
              <option>${nl ? 'Gratis huidscan & consult' : 'Free Skin Scan & Consultation'}</option>
              <option>${nl ? 'Laserontharing' : 'Laser Hair Removal'}</option>
              <option>Deep Cleansing Facial</option>
              <option>Glacē Glow Facial</option>
              <option>${nl ? 'Op maat — behandelplan' : 'Tailored Treatment Plan'}</option>
              <option>${nl ? 'Weet ik nog niet' : 'Not sure yet'}</option>
            </select>
          </div>
          <div class="form-field">
            <label>${nl ? 'Vertel ons iets' : 'Tell us a little'}</label>
            <textarea name="message" placeholder="${nl
              ? 'Wat wil je bereiken? Eerdere behandelingen of huidaandoeningen die we moeten weten?'
              : 'What are you hoping to achieve? Any prior treatments or skin concerns we should know about?'}"></textarea>
          </div>
          <div style="margin-top:16px; display:flex; gap:10px; align-items:flex-start;">
            <input type="checkbox" id="consent" required style="margin-top:4px; flex-shrink:0;">
            <label for="consent" style="font-size:12px; color:var(--muted); line-height:1.5; letter-spacing:0; text-transform:none;">
              ' + (nl ? 'Ik ga akkoord met het <a href="#" onclick="event.preventDefault(); navigate(\'privacy\')" style="color:var(--bronze-deep); text-decoration:underline;">privacybeleid</a> en geef toestemming voor het verwerken van mijn gegevens.' : 'I agree to the <a href="#" onclick="event.preventDefault(); navigate(\'privacy\')" style="color:var(--bronze-deep); text-decoration:underline;">privacy policy</a> and consent to the processing of my data.') + '
            </label>
          </div>
          <div style="margin-top:12px;">
            <button class="btn btn-primary" type="submit">${nl ? 'Verstuur →' : 'Send enquiry →'}</button>
          </div>
        </form>

        <aside class="contact-info">
          <span class="eyebrow">— SkinTech Amsterdam</span>
          <h3 style="margin-top:16px;">${nl ? 'Vind ons in <i>Amsterdam.</i>' : 'Find us in <i>Amsterdam.</i>'}</h3>

          <div class="contact-block">
            <div class="label">${nl ? 'Adres' : 'Address'}</div>
            <div class="val">Amsterdam<br/>${nl ? '(adres volgt bij boeking)' : '(address shared upon booking)'}</div>
          </div>
          <div class="contact-block">
            <div class="label">${nl ? 'Openingstijden' : 'Opening hours'}</div>
            <div class="val" style="font-size:16px;">
              ${nl ? 'Di–Vr · 09:00 – 20:00<br/>Za · 10:00 – 18:00<br/>Ma & Zo · op afspraak'
                    : 'Tue–Fri · 09:00 – 20:00<br/>Sat · 10:00 – 18:00<br/>Mon & Sun · by appointment'}
            </div>
          </div>
          <div class="contact-block">
            <div class="label">${nl ? 'Direct contact' : 'Direct'}</div>
            <div class="val" style="font-size:16px;">
              <a href="tel:+31619826664">+31 6 19 82 66 64</a><br/>
              <a href="https://wa.me/31619826664" target="_blank" rel="noopener">WhatsApp</a><br/>
              <a href="#">info@skintechclinic.nl</a>
            </div>
          </div>
          <div style="margin-top:32px;">
            <button class="btn btn-outline" style="width:100%; justify-content:center;" data-book>${nl ? 'Online boeken →' : 'Book online →'}</button>
          </div>
        </aside>
      </div>

      <div style="margin-top:40px; margin-bottom:100px; height:360px; background:var(--cream-deep); border-radius:4px; position:relative; overflow:hidden; display:grid; place-items:center;">
        <div style="position:absolute; inset:0; background:
          repeating-linear-gradient(0deg, transparent 0 39px, rgba(26,22,19,0.06) 39px 40px),
          repeating-linear-gradient(90deg, transparent 0 39px, rgba(26,22,19,0.06) 39px 40px);
        "></div>
        <div style="position:relative; text-align:center;">
          <div style="font-family:monospace; font-size:11px; letter-spacing:0.2em; color:var(--muted); margin-bottom:12px;">AMSTERDAM</div>
          <div style="font-family:var(--serif); font-size:28px; font-weight:300;">${nl ? 'Kaart · <i style="color:var(--bronze-deep);">binnenkort</i>' : 'Map · <i style="color:var(--bronze-deep);">coming soon</i>'}</div>
        </div>
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:20px; height:20px; border-radius:50%; background:var(--bronze-deep); box-shadow:0 0 0 8px rgba(184,149,106,0.25);"></div>
      </div>
    </div>
  </section>
  `;
}





function renderPrivacy() {
  const nl = currentLang === 'nl';
  const h3Style = 'margin-top:36px; font-family:var(--serif); font-size:24px; font-weight:400;';
  const h4Style = 'margin-top:24px; font-size:16px; font-weight:600;';
  const updated = 'margin-top:40px; color:var(--muted); font-size:13px;';
  if (nl) {
    return `<section class="page-head"><div class="container">
      <span class="eyebrow">— Juridisch</span>
      <h1>Privacy<br/><i>beleid.</i></h1></div></section>
    <section><div class="legal-body">

    <p><strong>Verwerkingsverantwoordelijke:</strong> SkinTech Laser Clinic B.V., Keizersgracht 241, 1016 EA Amsterdam. KvK 42039525. E-mail: info@skintechclinic.nl</p>
    <p>SkinTech Laser Clinic B.V. ("SkinTech", "wij", "ons") hecht grote waarde aan de bescherming van uw persoonsgegevens. Dit privacybeleid beschrijft hoe wij uw persoonsgegevens verzamelen, gebruiken, opslaan en beschermen in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR), de Uitvoeringswet AVG (UAVG) en overige toepasselijke Nederlandse en Europese wetgeving.</p>

    <h3>1. Welke persoonsgegevens verzamelen wij?</h3>

    <h4>1.1 Contactgegevens</h4>
    <p>Naam, e-mailadres, telefoonnummer — verstrekt via het contactformulier, bij het boeken van een afspraak of bij telefonisch/WhatsApp-contact.</p>

    <h4>1.2 Behandelgegevens</h4>
    <p>Huidtype (Fitzpatrick-classificatie), behandelvoorkeuren, behandelgeschiedenis, behandelplannen en voortgangsnotities.</p>

    <h4>1.3 Gezondheidsgegevens (bijzondere categorie)</h4>
    <p>Informatie over huidcondities, allergieën, medicijngebruik (waaronder isotretinoïne en fotosensibiliserende middelen), zwangerschap en medische voorgeschiedenis relevant voor uw behandeling. Deze gegevens worden uitsluitend verwerkt met uw uitdrukkelijke toestemming (art. 9 lid 2 sub a AVG) en zijn noodzakelijk voor het veilig uitvoeren van uw behandeling.</p>

    <h4>1.4 Beeldmateriaal</h4>
    <p>Huidscans gemaakt met de Sylton Observ 520x, voor-en-na foto's en behandelfoto's. Deze worden alleen gemaakt en opgeslagen met uw uitdrukkelijke schriftelijke toestemming. Beeldmateriaal dat op de website of sociale media wordt geplaatst, vereist aanvullende afzonderlijke toestemming.</p>

    <h4>1.5 Technische gegevens</h4>
    <p>IP-adres (geanonimiseerd), browsertype, apparaatgegevens, pagina's bezocht, verwijzende URL — uitsluitend via analytische cookies waarvoor u toestemming heeft gegeven.</p>

    <h3>2. Rechtsgronden voor verwerking</h3>
    <p>Wij verwerken uw gegevens op basis van de volgende rechtsgronden:</p>
    <p><strong>Toestemming (art. 6 lid 1 sub a AVG):</strong> Voor gezondheidsgegevens, beeldmateriaal en analytische cookies. U kunt uw toestemming te allen tijde intrekken.<br/>
    <strong>Uitvoering van een overeenkomst (art. 6 lid 1 sub b AVG):</strong> Voor het verwerken van afspraken, behandelingen en facturering.<br/>
    <strong>Wettelijke verplichting (art. 6 lid 1 sub c AVG):</strong> Voor belastingadministratie en wettelijk vereiste bewaarplicht.<br/>
    <strong>Gerechtvaardigd belang (art. 6 lid 1 sub f AVG):</strong> Voor websitebeveiliging, fraudepreventie en verbetering van onze dienstverlening.</p>

    <h3>3. Waarvoor gebruiken wij uw gegevens?</h3>
    <p>Uw afspraak inplannen, bevestigen en herinneren.<br/>
    Uw behandeling veilig en effectief uitvoeren, inclusief het bepalen van de juiste laserinstellingen op basis van uw huidtype.<br/>
    Behandelvoortgang bijhouden en behandelplannen optimaliseren.<br/>
    Facturering en financiële administratie.<br/>
    Communicatie over uw behandeling of afspraak.<br/>
    Verbetering van onze website en dienstverlening (uitsluitend met geanonimiseerde gegevens).</p>

    <h3>4. Cookies</h3>

    <h4>4.1 Functionele cookies (geen toestemming vereist)</h4>
    <p>Taalvoorkeur (NL/EN) en cookiebannervoorkeur. Deze cookies zijn strikt noodzakelijk voor het functioneren van de website.</p>

    <h4>4.2 Analytische cookies (toestemming vereist)</h4>
    <p>Wij gebruiken analytische cookies uitsluitend na uw uitdrukkelijke toestemming via de cookiebanner. IP-adressen worden geanonimiseerd. U kunt uw toestemming te allen tijde intrekken door uw browserinstellingen aan te passen of door contact met ons op te nemen.</p>

    <h4>4.3 Marketing/tracking cookies</h4>
    <p>Wij gebruiken geen marketing- of trackingcookies en delen geen gegevens met advertentienetwerken.</p>

    <h3>5. Delen met derden</h3>
    <p>Wij delen uw persoonsgegevens niet met derden, behalve:</p>
    <p><strong>Hostingprovider:</strong> Vercel Inc. (VS) — voor het hosten van onze website. Verwerking op basis van EU-VS Data Privacy Framework.<br/>
    <strong>Boekhouding:</strong> Onze boekhouder voor belastingdoeleinden (wettelijke verplichting).<br/>
    <strong>Betalingsverwerker:</strong> Uw betaalgegevens worden verwerkt door uw bank of betaalprovider; wij slaan geen creditcard- of betaalgegevens op.</p>
    <p>Wij verkopen, verhuren of verhandelen uw persoonsgegevens nooit aan derden.</p>

    <h3>6. Bewaartermijnen</h3>
    <p><strong>Contactgegevens en afspraakgegevens:</strong> 2 jaar na laatste contact of behandeling.<br/>
    <strong>Behandelgegevens en gezondheidsgegevens:</strong> 5 jaar na laatste behandeling, conform de richtlijn voor esthetische behandelingen.<br/>
    <strong>Beeldmateriaal (huidscans, foto's):</strong> 5 jaar na laatste behandeling, tenzij u eerder om verwijdering verzoekt.<br/>
    <strong>Financiële gegevens:</strong> 7 jaar (wettelijke bewaarplicht belastingdienst).<br/>
    <strong>Websiteloggegevens:</strong> 26 maanden (geanonimiseerd).</p>

    <h3>7. Beveiliging</h3>
    <p>Wij treffen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies of wijziging. Dit omvat SSL/TLS-versleuteling op onze website, toegangsbeperking tot persoonsgegevens op need-to-know-basis, en beveiligde opslag van gezondheidsgegevens en beeldmateriaal.</p>

    <h3>8. Uw rechten onder de AVG/GDPR</h3>
    <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
    <p><strong>Recht op inzage (art. 15 AVG):</strong> U kunt opvragen welke gegevens wij van u verwerken.<br/>
    <strong>Recht op rectificatie (art. 16 AVG):</strong> U kunt onjuiste gegevens laten corrigeren.<br/>
    <strong>Recht op verwijdering (art. 17 AVG):</strong> U kunt verzoeken uw gegevens te wissen ("recht op vergetelheid"), tenzij wettelijke bewaarplicht van toepassing is.<br/>
    <strong>Recht op beperking (art. 18 AVG):</strong> U kunt de verwerking van uw gegevens laten beperken.<br/>
    <strong>Recht op overdraagbaarheid (art. 20 AVG):</strong> U kunt uw gegevens in een gestructureerd, gangbaar formaat opvragen.<br/>
    <strong>Recht van bezwaar (art. 21 AVG):</strong> U kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.<br/>
    <strong>Recht op intrekking toestemming:</strong> Voor verwerkingen op basis van toestemming kunt u deze te allen tijde intrekken, zonder dat dit afbreuk doet aan de rechtmatigheid van eerdere verwerking.</p>
    <p>U kunt uw rechten uitoefenen door een e-mail te sturen naar <strong>info@skintechclinic.nl</strong>. Wij reageren binnen 30 dagen.</p>

    <h3>9. Klachten</h3>
    <p>Indien u een klacht heeft over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen via info@skintechclinic.nl. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP), de Nederlandse toezichthouder voor gegevensbescherming:</p>
    <p>Autoriteit Persoonsgegevens<br/>Postbus 93374, 2509 AJ Den Haag<br/>www.autoriteitpersoonsgegevens.nl</p>

    <h3>10. Minderjarigen</h3>
    <p>Onze diensten zijn niet gericht op personen jonger dan 18 jaar. Wij behandelen geen minderjarigen zonder schriftelijke toestemming van een ouder of wettelijk vertegenwoordiger. Wij verzamelen niet bewust persoonsgegevens van personen jonger dan 16 jaar.</p>

    <h3>11. Wijzigingen</h3>
    <p>Wij behouden ons het recht voor dit privacybeleid te wijzigen. De meest recente versie is altijd beschikbaar op deze pagina. Bij substantiële wijzigingen informeren wij u via de website.</p>

    <p style="margin-top:40px; color:var(--muted); font-size:13px;">Laatst bijgewerkt: mei 2026. Versie 2.0.</p>
    </div></section>`;
  } else {
    return `<section class="page-head"><div class="container">
      <span class="eyebrow">— Legal</span>
      <h1>Privacy<br/><i>policy.</i></h1></div></section>
    <section><div class="legal-body">

    <p><strong>Data controller:</strong> SkinTech Laser Clinic B.V., Keizersgracht 241, 1016 EA Amsterdam, The Netherlands. KvK (Chamber of Commerce) 42039525. Email: info@skintechclinic.nl</p>
    <p>SkinTech Laser Clinic B.V. ("SkinTech", "we", "us") is committed to protecting your personal data. This privacy policy describes how we collect, use, store, and protect your personal data in accordance with the General Data Protection Regulation (GDPR), the Dutch GDPR Implementation Act (UAVG), and other applicable Dutch and European legislation.</p>

    <h3>1. What personal data do we collect?</h3>

    <h4>1.1 Contact details</h4>
    <p>Name, email address, phone number — provided via the contact form, when booking an appointment, or through phone/WhatsApp communication.</p>

    <h4>1.2 Treatment data</h4>
    <p>Skin type (Fitzpatrick classification), treatment preferences, treatment history, treatment plans, and progress notes.</p>

    <h4>1.3 Health data (special category)</h4>
    <p>Information about skin conditions, allergies, medication use (including isotretinoin and photosensitising agents), pregnancy, and medical history relevant to your treatment. This data is processed exclusively with your explicit consent (Art. 9(2)(a) GDPR) and is necessary for the safe delivery of your treatment.</p>

    <h4>1.4 Visual records</h4>
    <p>Skin scans taken with the Sylton Observ 520x, before-and-after photographs, and treatment photographs. These are only taken and stored with your explicit written consent. Any visual material published on the website or social media requires additional, separate consent.</p>

    <h4>1.5 Technical data</h4>
    <p>IP address (anonymised), browser type, device information, pages visited, referring URL — collected solely via analytics cookies for which you have given consent.</p>

    <h3>2. Legal bases for processing</h3>
    <p>We process your data on the following legal bases:</p>
    <p><strong>Consent (Art. 6(1)(a) GDPR):</strong> For health data, visual records, and analytics cookies. You may withdraw your consent at any time.<br/>
    <strong>Performance of a contract (Art. 6(1)(b) GDPR):</strong> For processing appointments, treatments, and invoicing.<br/>
    <strong>Legal obligation (Art. 6(1)(c) GDPR):</strong> For tax administration and legally required retention periods.<br/>
    <strong>Legitimate interest (Art. 6(1)(f) GDPR):</strong> For website security, fraud prevention, and improvement of our services.</p>

    <h3>3. How do we use your data?</h3>
    <p>To schedule, confirm, and remind you of your appointments.<br/>
    To deliver your treatment safely and effectively, including determining the correct laser settings for your skin type.<br/>
    To track treatment progress and optimise treatment plans.<br/>
    Invoicing and financial administration.<br/>
    Communication regarding your treatment or appointment.<br/>
    Improvement of our website and services (using anonymised data only).</p>

    <h3>4. Cookies</h3>

    <h4>4.1 Functional cookies (no consent required)</h4>
    <p>Language preference (NL/EN) and cookie banner preference. These cookies are strictly necessary for the operation of the website.</p>

    <h4>4.2 Analytics cookies (consent required)</h4>
    <p>We use analytics cookies only after your explicit consent via the cookie banner. IP addresses are anonymised. You may withdraw your consent at any time by adjusting your browser settings or by contacting us.</p>

    <h4>4.3 Marketing/tracking cookies</h4>
    <p>We do not use marketing or tracking cookies and do not share data with advertising networks.</p>

    <h3>5. Sharing with third parties</h3>
    <p>We do not share your personal data with third parties, except:</p>
    <p><strong>Hosting provider:</strong> Vercel Inc. (US) — for hosting our website. Processing based on the EU-US Data Privacy Framework.<br/>
    <strong>Accounting:</strong> Our accountant for tax purposes (legal obligation).<br/>
    <strong>Payment processor:</strong> Your payment data is processed by your bank or payment provider; we do not store credit card or payment details.</p>
    <p>We never sell, rent, or trade your personal data to third parties.</p>

    <h3>6. Retention periods</h3>
    <p><strong>Contact details and appointment data:</strong> 2 years after last contact or treatment.<br/>
    <strong>Treatment data and health data:</strong> 5 years after last treatment, in accordance with aesthetic treatment guidelines.<br/>
    <strong>Visual records (skin scans, photographs):</strong> 5 years after last treatment, unless you request earlier deletion.<br/>
    <strong>Financial data:</strong> 7 years (statutory retention requirement by the Dutch Tax Authority).<br/>
    <strong>Website log data:</strong> 26 months (anonymised).</p>

    <h3>7. Security</h3>
    <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration. This includes SSL/TLS encryption on our website, restricting access to personal data on a need-to-know basis, and secured storage of health data and visual records.</p>

    <h3>8. Your rights under the GDPR</h3>
    <p>You have the following rights regarding your personal data:</p>
    <p><strong>Right of access (Art. 15 GDPR):</strong> You may request which data we process about you.<br/>
    <strong>Right to rectification (Art. 16 GDPR):</strong> You may have incorrect data corrected.<br/>
    <strong>Right to erasure (Art. 17 GDPR):</strong> You may request deletion of your data ("right to be forgotten"), unless a statutory retention obligation applies.<br/>
    <strong>Right to restriction (Art. 18 GDPR):</strong> You may request restriction of processing of your data.<br/>
    <strong>Right to data portability (Art. 20 GDPR):</strong> You may request your data in a structured, commonly used format.<br/>
    <strong>Right to object (Art. 21 GDPR):</strong> You may object to processing based on legitimate interest.<br/>
    <strong>Right to withdraw consent:</strong> For processing based on consent, you may withdraw your consent at any time, without affecting the lawfulness of prior processing.</p>
    <p>You may exercise your rights by sending an email to <strong>info@skintechclinic.nl</strong>. We will respond within 30 days.</p>

    <h3>9. Complaints</h3>
    <p>If you have a complaint about the processing of your personal data, please contact us at info@skintechclinic.nl. You also have the right to file a complaint with the Autoriteit Persoonsgegevens (AP), the Dutch data protection authority:</p>
    <p>Autoriteit Persoonsgegevens<br/>P.O. Box 93374, 2509 AJ The Hague<br/>www.autoriteitpersoonsgegevens.nl</p>

    <h3>10. Minors</h3>
    <p>Our services are not directed at persons under the age of 18. We do not treat minors without written consent from a parent or legal guardian. We do not knowingly collect personal data from persons under the age of 16.</p>

    <h3>11. Changes</h3>
    <p>We reserve the right to amend this privacy policy. The most recent version is always available on this page. In the event of substantial changes, we will inform you via the website.</p>

    <p style="margin-top:40px; color:var(--muted); font-size:13px;">Last updated: May 2026. Version 2.0.</p>
    </div></section>`;
  }
}

function renderTerms() {
  const nl = currentLang === 'nl';
  const h3Style = 'margin-top:36px; font-family:var(--serif); font-size:24px; font-weight:400;';
  const updated = 'margin-top:40px; color:var(--muted); font-size:13px;';
  if (nl) {
    return `<section class="page-head"><div class="container">
      <span class="eyebrow">— Juridisch</span>
      <h1>Algemene<br/><i>voorwaarden.</i></h1></div></section>
    <section><div class="legal-body">

    <p>Deze algemene voorwaarden zijn van toepassing op alle diensten en overeenkomsten van <strong>SkinTech Laser Clinic B.V.</strong>, gevestigd aan de Keizersgracht 241, 1016 EA Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 42039525 ("SkinTech", "wij", "ons").</p>

    <h3>1. Definities</h3>
    <p><strong>Cliënt:</strong> De natuurlijke persoon die een afspraak maakt of een behandeling ondergaat bij SkinTech.<br/>
    <strong>Behandeling:</strong> Elke dienst die door SkinTech wordt aangeboden, waaronder laserontharing, gezichtsbehandelingen, huidscans en consulten.<br/>
    <strong>Overeenkomst:</strong> De afspraak tussen de cliënt en SkinTech voor het uitvoeren van een of meerdere behandelingen.</p>

    <h3>2. Toepasselijkheid</h3>
    <p>Deze voorwaarden zijn van toepassing op alle offertes, afspraken, behandelingen en overige overeenkomsten tussen SkinTech en de cliënt. Door het maken van een afspraak of het ondergaan van een behandeling accepteert de cliënt deze voorwaarden. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</p>

    <h3>3. Afspraken en annulering</h3>
    <p><strong>Boeken:</strong> Afspraken kunnen online, telefonisch of via WhatsApp worden gemaakt.<br/>
    <strong>Bevestiging:</strong> U ontvangt een bevestiging per e-mail of SMS.<br/>
    <strong>Annulering:</strong> Annulering is kosteloos tot 24 uur voor de geplande afspraak. Bij annulering binnen 24 uur of het niet verschijnen zonder bericht ("no-show") behouden wij ons het recht voor om 50% van de behandelprijs in rekening te brengen.<br/>
    <strong>Verplaatsen:</strong> U kunt uw afspraak kosteloos verplaatsen tot 24 uur van tevoren.<br/>
    <strong>Te laat komen:</strong> Bij meer dan 15 minuten vertraging behouden wij ons het recht voor de afspraak in te korten of te annuleren. De behandelprijs blijft verschuldigd.</p>

    <h3>4. Behandelingen</h3>
    <p><strong>Aard van dienstverlening:</strong> SkinTech biedt esthetische huidbehandelingen en geen medische zorg in de zin van de Wet BIG. Onze behandelingen zijn cosmetisch van aard.<br/>
    <strong>Intake en consult:</strong> Voor een eerste laserbehandeling vindt altijd een intakeconsult plaats, inclusief huidanalyse met de Sylton Observ 520x. De specialist beoordeelt of de behandeling geschikt en veilig is voor uw huidtype.<br/>
    <strong>Resultaten:</strong> Resultaten variëren per persoon en zijn afhankelijk van onder meer huidtype, haarkleur, hormoonhuishouding, behandelfrequentie en naleving van voor- en nazorginstructies. SkinTech garandeert geen specifiek resultaat.<br/>
    <strong>Contra-indicaties:</strong> De cliënt is verplicht relevante medische informatie te delen, waaronder medicijngebruik (isotretinoïne, antibiotica, bloedverdunners), huidaandoeningen, zwangerschap en recente zonblootstelling. Bij verzwijging van relevante informatie aanvaardt SkinTech geen aansprakelijkheid.<br/>
    <strong>Weigering:</strong> SkinTech behoudt zich het recht voor een behandeling te weigeren indien deze naar professioneel oordeel niet veilig of geschikt is.</p>

    <h3>5. Prijzen en betaling</h3>
    <p><strong>Prijzen:</strong> Alle prijzen zijn in euro's en inclusief btw, tenzij anders vermeld. De actuele prijslijst is beschikbaar in de clinic en op verzoek.<br/>
    <strong>Betaling:</strong> Betaling geschiedt direct na de behandeling, tenzij anders overeengekomen. Wij accepteren pin (Maestro/V-Pay), creditcard (Visa/Mastercard), iDEAL en contant.<br/>
    <strong>Pakketten:</strong> Bij aankoop van een behandelpakket is het gehele bedrag direct verschuldigd. Pakketten zijn persoonsgebonden en niet overdraagbaar. Restitutie van ongebruikte sessies geschiedt uitsluitend op basis van een medische contra-indicatie.<br/>
    <strong>Prijswijzigingen:</strong> SkinTech behoudt zich het recht voor prijzen aan te passen. Lopende pakketten worden niet beïnvloed door prijswijzigingen.</p>

    <h3>6. Aansprakelijkheid</h3>
    <p>SkinTech is uitsluitend aansprakelijk voor directe schade die het gevolg is van aantoonbare nalatigheid van SkinTech, tot maximaal het bedrag van de betreffende behandeling. SkinTech is niet aansprakelijk voor indirecte schade, gevolgschade, verwachte resultaten die niet zijn behaald, of schade als gevolg van het niet naleven van voor- en nazorginstructies door de cliënt.</p>
    <p>SkinTech is niet aansprakelijk voor bijwerkingen die binnen het normale spectrum van laserbehandelingen en gezichtsbehandelingen vallen, waaronder tijdelijke roodheid, zwelling, pigmentveranderingen en gevoeligheid, mits de behandeling conform protocol is uitgevoerd.</p>

    <h3>7. Klachten</h3>
    <p>Wij nemen klachten serieus. Klachten kunt u richten aan info@skintechclinic.nl of mondeling aan de behandelaar. Wij streven ernaar klachten binnen 14 dagen inhoudelijk te beantwoorden. Indien wij er samen niet uitkomen, kunt u zich wenden tot een onafhankelijke geschillencommissie of de rechter.</p>

    <h3>8. Intellectueel eigendom</h3>
    <p>Alle content op de website van SkinTech — waaronder teksten, afbeeldingen, logo's, ontwerpen en software — is eigendom van SkinTech Laser Clinic B.V. of wordt onder licentie gebruikt. Gebruik, reproductie of verspreiding zonder schriftelijke toestemming is niet toegestaan.</p>

    <h3>9. Cadeaubonnen</h3>
    <p>Cadeaubonnen zijn 12 maanden geldig na aankoopdatum, niet inwisselbaar voor geld en niet overdraagbaar. Bij verlies of diefstal vindt geen vervanging plaats.</p>

    <h3>10. Hygiëne en veiligheid</h3>
    <p>SkinTech hanteert strikte hygiëneprotocollen. Alle apparatuur wordt na elke behandeling gereinigd en gedesinfecteerd. Wegwerponderdelen worden na eenmalig gebruik vervangen. De cliënt wordt verzocht op tijd aanwezig te zijn en eventuele gezondheidsklachten vooraf te melden.</p>

    <h3>11. Overmacht</h3>
    <p>In geval van overmacht (waaronder maar niet beperkt tot ziekte, technische storingen, overheidsmaatregelen of pandemie) is SkinTech niet gehouden aan haar verplichtingen. Afspraken worden in dat geval zonder kosten verplaatst.</p>

    <h3>12. Toepasselijk recht</h3>
    <p>Op deze voorwaarden en alle overeenkomsten tussen SkinTech en de cliënt is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam.</p>

    <h3>13. Wijzigingen</h3>
    <p>SkinTech behoudt zich het recht voor deze voorwaarden te wijzigen. De meest recente versie is altijd beschikbaar op deze pagina.</p>

    <p style="margin-top:40px; color:var(--muted); font-size:13px;">Laatst bijgewerkt: mei 2026. Versie 2.0.</p>
    </div></section>`;
  } else {
    return `<section class="page-head"><div class="container">
      <span class="eyebrow">— Legal</span>
      <h1>Terms &<br/><i>conditions.</i></h1></div></section>
    <section><div class="legal-body">

    <p>These terms and conditions apply to all services and agreements of <strong>SkinTech Laser Clinic B.V.</strong>, located at Keizersgracht 241, 1016 EA Amsterdam, The Netherlands, registered with the Dutch Chamber of Commerce (KvK) under number 42039525 ("SkinTech", "we", "us").</p>

    <h3>1. Definitions</h3>
    <p><strong>Client:</strong> The natural person who makes an appointment or undergoes a treatment at SkinTech.<br/>
    <strong>Treatment:</strong> Any service offered by SkinTech, including laser hair removal, facial treatments, skin scans, and consultations.<br/>
    <strong>Agreement:</strong> The arrangement between the client and SkinTech for the delivery of one or more treatments.</p>

    <h3>2. Applicability</h3>
    <p>These terms apply to all quotes, appointments, treatments, and other agreements between SkinTech and the client. By making an appointment or undergoing a treatment, the client accepts these terms. Deviations are only valid if agreed in writing.</p>

    <h3>3. Appointments and cancellation</h3>
    <p><strong>Booking:</strong> Appointments can be made online, by phone, or via WhatsApp.<br/>
    <strong>Confirmation:</strong> You will receive a confirmation by email or SMS.<br/>
    <strong>Cancellation:</strong> Cancellation is free of charge up to 24 hours before the scheduled appointment. For cancellations within 24 hours or failure to attend without notice ("no-show"), we reserve the right to charge 50% of the treatment price.<br/>
    <strong>Rescheduling:</strong> You may reschedule your appointment free of charge up to 24 hours in advance.<br/>
    <strong>Late arrival:</strong> If you arrive more than 15 minutes late, we reserve the right to shorten or cancel the appointment. The treatment price remains due.</p>

    <h3>4. Treatments</h3>
    <p><strong>Nature of services:</strong> SkinTech provides aesthetic skin treatments and not medical care within the meaning of the Dutch Healthcare Professions Act (Wet BIG). Our treatments are cosmetic in nature.<br/>
    <strong>Intake and consultation:</strong> A first laser treatment is always preceded by an intake consultation, including skin analysis with the Sylton Observ 520x. The specialist assesses whether the treatment is suitable and safe for your skin type.<br/>
    <strong>Results:</strong> Results vary per individual and depend on factors including skin type, hair colour, hormonal balance, treatment frequency, and adherence to pre- and aftercare instructions. SkinTech does not guarantee specific results.<br/>
    <strong>Contraindications:</strong> The client is obliged to disclose relevant medical information, including medication use (isotretinoin, antibiotics, blood thinners), skin conditions, pregnancy, and recent sun exposure. SkinTech accepts no liability if relevant information is withheld.<br/>
    <strong>Refusal of treatment:</strong> SkinTech reserves the right to decline a treatment if, in our professional judgement, it is not safe or suitable.</p>

    <h3>5. Prices and payment</h3>
    <p><strong>Prices:</strong> All prices are in euros and include VAT, unless stated otherwise. The current price list is available at the clinic and upon request.<br/>
    <strong>Payment:</strong> Payment is due immediately after the treatment, unless otherwise agreed. We accept debit cards (Maestro/V-Pay), credit cards (Visa/Mastercard), iDEAL, and cash.<br/>
    <strong>Packages:</strong> The full amount of a treatment package is due upon purchase. Packages are personal and non-transferable. Refunds for unused sessions are only issued on the basis of a medical contraindication.<br/>
    <strong>Price changes:</strong> SkinTech reserves the right to adjust prices. Existing packages are not affected by price changes.</p>

    <h3>6. Liability</h3>
    <p>SkinTech is only liable for direct damage resulting from demonstrable negligence on the part of SkinTech, up to a maximum of the value of the treatment concerned. SkinTech is not liable for indirect damage, consequential damage, expected results not achieved, or damage resulting from the client's failure to follow pre- and aftercare instructions.</p>
    <p>SkinTech is not liable for side effects that fall within the normal spectrum of laser and facial treatments, including temporary redness, swelling, pigmentation changes, and sensitivity, provided the treatment was performed according to protocol.</p>

    <h3>7. Complaints</h3>
    <p>We take complaints seriously. Complaints can be directed to info@skintechclinic.nl or communicated verbally to the practitioner. We aim to respond to complaints substantively within 14 days. If we are unable to resolve the matter together, you may refer to an independent dispute resolution committee or the courts.</p>

    <h3>8. Intellectual property</h3>
    <p>All content on the SkinTech website — including text, images, logos, designs, and software — is the property of SkinTech Laser Clinic B.V. or is used under licence. Use, reproduction, or distribution without written permission is prohibited.</p>

    <h3>9. Gift vouchers</h3>
    <p>Gift vouchers are valid for 12 months from the date of purchase, non-redeemable for cash, and non-transferable. No replacement is provided in case of loss or theft.</p>

    <h3>10. Hygiene and safety</h3>
    <p>SkinTech maintains strict hygiene protocols. All equipment is cleaned and disinfected after each treatment. Disposable components are replaced after single use. Clients are requested to arrive on time and to report any health concerns in advance.</p>

    <h3>11. Force majeure</h3>
    <p>In the event of force majeure (including but not limited to illness, technical failures, government measures, or pandemic), SkinTech is not bound by its obligations. Appointments will be rescheduled at no cost.</p>

    <h3>12. Governing law</h3>
    <p>These terms and all agreements between SkinTech and the client are governed by Dutch law. Disputes shall be submitted to the competent court in Amsterdam.</p>

    <h3>13. Changes</h3>
    <p>SkinTech reserves the right to amend these terms. The most recent version is always available on this page.</p>

    <p style="margin-top:40px; color:var(--muted); font-size:13px;">Last updated: May 2026. Version 2.0.</p>
    </div></section>`;
  }
}


function renderFooter() {
  const nl = currentLang === 'nl';
  return `
    <div class="container">
      <div class="footer-big">
        ${nl
          ? 'Begin met een <i>gratis huidscan</i> — <a href="#" onclick="navigate(\'contact\')">boek hier →</a>'
          : 'Start with a <i>free skin scan</i> — <a href="#" onclick="navigate(\'contact\')">book here →</a>'}
      </div>
      <div class="footer-grid">
        <div>
          <div class="logo" style="color:var(--cream); margin-bottom:24px;">
            <img class="logo-img" src="assets/logo.png" alt="SkinTech Laser Clinic · Amsterdam"/>
          </div>
          <p class="footer-addr">${nl
            ? 'Premium laser- en huidbehandelingen<br/>in Amsterdam.<br/><br/>info@skintechclinic.nl<br/>+31 6 19 82 66 64'
            : 'Premium laser and skin treatments<br/>in Amsterdam.<br/><br/>info@skintechclinic.nl<br/>+31 6 19 82 66 64'}</p>
        </div>
        <div>
          <h5>${nl ? 'Behandelingen' : 'Treatments'}</h5>
          <ul>
            <li><a href="#" data-route="services">${nl ? 'Laserontharing' : 'Laser Hair Removal'}</a></li>
            <li><a href="#" data-route="services">Deep Cleansing Facial</a></li>
            <li><a href="#" data-route="services">Glacē Glow Facial</a></li>
            <li><a href="#" data-route="services">${nl ? 'Gratis huidscan' : 'Free skin scan'}</a></li>
            <li><a href="#" data-route="services">${nl ? 'Op maat — behandelplan' : 'Tailored Treatment Plan'}</a></li>
          </ul>
        </div>
        <div>
          <h5>${nl ? 'Kliniek' : 'Clinic'}</h5>
          <ul>
            <li><a href="#" data-route="about">${nl ? 'Over ons' : 'About'}</a></li>
            <li><a href="#" data-route="technology">${nl ? 'Technologie' : 'Technology'}</a></li>
            <li><a href="#" data-route="faq">FAQ</a></li>
            <li><a href="#" data-route="journal">Journal</a></li>
            <li><a href="#" data-route="contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>${nl ? 'Volg ons' : 'Follow'}</h5>
          <ul>
            <li><a href="https://instagram.com/skintech_nl" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://wa.me/31619826664" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="#">Journal — ${nl ? 'binnenkort' : 'coming soon'}</a></li>
            <li><a href="#" onclick="event.preventDefault(); setLang('nl')" style="${currentLang==='nl'?'font-weight:500; color:var(--cream);':'opacity:0.5;'}">NL</a> · <a href="#" onclick="event.preventDefault(); setLang('en')" style="${currentLang==='en'?'font-weight:500; color:var(--cream);':'opacity:0.5;'}">EN</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-legal">
        <span>© 2026 SkinTech Laser Clinic · Amsterdam</span>
        <span>${nl ? '<a href="#" onclick="event.preventDefault(); navigate(\'privacy\')" style="color:inherit;">Privacybeleid</a> · <a href="#" onclick="event.preventDefault(); navigate(\'terms\')" style="color:inherit;">Algemene voorwaarden</a> · KvK 42039525' : '<a href="#" onclick="event.preventDefault(); navigate(\'privacy\')" style="color:inherit;">Privacy policy</a> · <a href="#" onclick="event.preventDefault(); navigate(\'terms\')" style="color:inherit;">Terms</a> · KvK 42039525'}</span>
      </div>
    </div>
  `;
}



