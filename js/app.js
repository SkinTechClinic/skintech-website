/* =========================================================================
 * SkinTech Laser Clinic — App Router & Initialization
 * ========================================================================= */

const routes = {
  home: renderHome,
  about: renderAbout,
  services: renderServices,
  technology: renderTechnology,
  results: renderResults,
  faq: renderFaq,
  journal: renderJournal,
  contact: renderContact,
  privacy: renderPrivacy,
  terms: renderTerms,
};

let _isInitialLoad = true;
function navigate(route) {
  currentRoute = route;
  // Close mobile nav if open
  var navLinks = document.querySelector('.nav-links'); if (navLinks) { navLinks.style.display = ''; navLinks.style.position = ''; navLinks.style.top = ''; navLinks.style.left = ''; navLinks.style.right = ''; navLinks.style.flexDirection = ''; navLinks.style.background = ''; navLinks.style.padding = ''; navLinks.style.gap = ''; navLinks.style.borderBottom = ''; } var toggle = document.querySelector('.mobile-toggle'); if (toggle) toggle.setAttribute('aria-expanded', 'false');
  const app = document.getElementById('app');
  app.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'page-enter';
  el.innerHTML = routes[route] ? routes[route]() : renderHome();
  app.appendChild(el);
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = renderFooter();
  app.appendChild(footer);

  // Update nav labels
  const navLabels = {
    home: t('navHome'), about: t('navAbout'), services: t('navServices'),
    technology: t('navTech'), faq:'FAQ', journal:'Journal', contact:'Contact'
  };
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.route === route);
    if (navLabels[a.dataset.route]) a.textContent = navLabels[a.dataset.route];
  });
  const scanBtn = document.getElementById('nl-scan');
  const bookBtn = document.getElementById('nl-book');
  if (scanBtn) scanBtn.textContent = t('navScan');
  if (bookBtn) bookBtn.textContent = t('navBook');

  const darkOpener = route === 'home' || route === 'results';
  document.getElementById('siteNav').classList.toggle('on-dark', darkOpener);
  window.scrollTo(0, 0);
  document.getElementById('app').focus({preventScroll: true});
  // Update URL hash (skip for home to keep clean root URL)
  if (_isInitialLoad) { _isInitialLoad = false; } else { const langPrefix = currentLang === "en" ? "en/" : ""; if (route === "home" && currentLang === "nl") { history.pushState(null, "", window.location.pathname); } else { history.pushState(null, "", "#" + langPrefix + route); } }
  bindPageInteractions();
}

function bindPageInteractions() {
  document.querySelectorAll('[data-route]').forEach(el => {
    if (!el._routeBound) {
      el._routeBound = true;
      el.onclick = (e) => { e.preventDefault(); navigate(el.dataset.route); };
    }
  });
  document.querySelectorAll('.faq-item').forEach(it => {
    it.onclick = () => it.classList.toggle('open');
  });
  document.querySelectorAll('[data-book]').forEach(el => {
    el.onclick = (e) => { e.preventDefault(); openBooking(); };
  });
}

/* ===================== Home ===================== */


/* ===================== Booking modal ===================== */
let bookingStep = 1;
let bookingData = { service: null, gender: 'women', date: null, slot: null, firstName: '', lastName: '', email: '', phone: '' };

function openBooking() {
  bookingOpen = true;
  bookingStep = 1;
  bookingData = { service: null, gender: 'women', date: null, slot: null, firstName: '', lastName: '', email: '', phone: '' };
  renderBooking();
}
function closeBooking() { bookingOpen = false; document.getElementById('modalHost').innerHTML = ''; }

function renderBooking() {
  const host = document.getElementById('modalHost');
  if (!bookingOpen) { host.innerHTML = ''; return; }
  host.innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target===this) closeBooking()">
      <div class="modal">
        <button class="close" onclick="closeBooking()">✕</button>
        <div class="step-dots">
          <div class="step-dot ${bookingStep>=1?'active':''}"></div>
          <div class="step-dot ${bookingStep>=2?'active':''}"></div>
          <div class="step-dot ${bookingStep>=3?'active':''}"></div>
          <div class="step-dot ${bookingStep>=4?'active':''}"></div>
        </div>
        ${bookingStep===1 ? bookingStep1() : ''}
        ${bookingStep===2 ? bookingStep2() : ''}
        ${bookingStep===3 ? bookingStep3() : ''}
        ${bookingStep===4 ? bookingStep4() : ''}
      </div>
    </div>
  `;
}

function bookingStep1() {
  const svcs = currentLang==='en' ? SERVICES_EN : SERVICES;
  const selectedSvc = bookingData.service ? svcs.find(s=>s.id===bookingData.service) : null;
  const recLabel = currentLang==='nl' ? 'Aanbevolen bij een eerste bezoek' : 'Recommended for first-time visitors';
  const vatNote = currentLang==='nl' ? 'Alle prijzen incl. 21% btw' : 'All prices include 21% VAT';
  const wLabel = currentLang==='nl' ? 'Dames' : 'Women';
  const mLabel = currentLang==='nl' ? 'Heren' : 'Men';
  const singleH = currentLang==='nl' ? 'Per sessie' : 'Single';
  const pkg6H = '6x';
  const pkg8H = '8x';

  // Build laser pricing table if laser is selected
  var laserTable = '';
  if (selectedSvc && selectedSvc.laserPricing) {
    var lp = selectedSvc.laserPricing[bookingData.gender] || selectedSvc.laserPricing.women;
    var catLabels = currentLang==='nl'
      ? {face:'Gezicht',upperBody:'Bovenlichaam',bikini:'Bikini / intiem',legs:'Benen',lowerBody:'Onderlichaam',combos:'Combipakketten'}
      : {face:'Face',upperBody:'Upper body',bikini:'Bikini / intimate',legs:'Legs',lowerBody:'Lower body',combos:'Combination packages'};
    var rows = '';
    Object.keys(lp).forEach(function(cat) {
      rows += '<tr><td colspan="4" style="padding:10px 0 4px; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:var(--bronze-deep); font-weight:600; border-bottom:1px solid var(--line);">'+(catLabels[cat]||cat)+'</td></tr>';
      lp[cat].forEach(function(r) {
        rows += '<tr style="border-bottom:1px solid var(--line);">' +
          '<td style="padding:5px 0; font-size:12px;">'+r.area+'</td>' +
          '<td style="padding:5px 4px; font-size:12px; text-align:right; font-family:var(--serif);">'+r.single+'</td>' +
          '<td style="padding:5px 4px; font-size:12px; text-align:right; color:var(--muted);">'+r.pkg6+'</td>' +
          '<td style="padding:5px 4px; font-size:12px; text-align:right; color:var(--muted);">'+r.pkg8+'</td>' +
          '</tr>';
      });
    });
    laserTable = '<div style="margin-top:16px; background:var(--cream-deep); border-radius:4px; padding:16px;">' +
      '<div style="display:flex; gap:8px; margin-bottom:12px;">' +
        '<button class="btn '+(bookingData.gender==='women'?'btn-primary':'btn-ghost')+'" style="font-size:12px; padding:6px 16px;" onclick="bookingData.gender=\'women\'; renderBooking();">'+wLabel+'</button>' +
        '<button class="btn '+(bookingData.gender==='men'?'btn-primary':'btn-ghost')+'" style="font-size:12px; padding:6px 16px;" onclick="bookingData.gender=\'men\'; renderBooking();">'+mLabel+'</button>' +
      '</div>' +
      '<div style="max-height:220px; overflow-y:auto;">' +
      '<table style="width:100%; border-collapse:collapse;">' +
        '<thead><tr style="border-bottom:1px solid var(--line);">' +
          '<th style="text-align:left; font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:var(--muted); padding-bottom:6px;"></th>' +
          '<th style="text-align:right; font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:var(--muted); padding-bottom:6px;">'+singleH+'</th>' +
          '<th style="text-align:right; font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:var(--muted); padding-bottom:6px;">'+pkg6H+'</th>' +
          '<th style="text-align:right; font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:var(--muted); padding-bottom:6px;">'+pkg8H+'</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div style="font-size:10px; color:var(--muted); margin-top:8px;">'+vatNote+'</div>' +
      '</div>';
  }

  // Build standard pricing panel for non-laser services
  var stdPricing = '';
  if (selectedSvc && selectedSvc.pricing && !selectedSvc.laserPricing) {
    stdPricing = '<div style="margin-top:16px; background:var(--cream-deep); border-radius:4px; padding:16px;">' +
      '<div style="font-size:11px; text-transform:uppercase; letter-spacing:0.12em; color:var(--muted); margin-bottom:10px;">'+(currentLang==='nl'?'Tarieven':'Pricing')+' — '+selectedSvc.name+'</div>';
    selectedSvc.pricing.forEach(function(p) {
      stdPricing += '<div style="display:flex; justify-content:space-between; padding:6px 0; font-size:13px; border-bottom:1px solid var(--line);">' +
        '<span style="color:var(--charcoal);">'+p.label+'</span>' +
        '<span style="font-family:var(--serif); color:var(--bronze-deep);">'+p.value+'</span></div>';
    });
    if (selectedSvc.priceNote) stdPricing += '<div style="font-size:11px; color:var(--muted); margin-top:8px; line-height:1.5;">'+selectedSvc.priceNote+'</div>';
    stdPricing += '</div>';
  }

  return '<h3>'+t('bookStep1Title')+'</h3>' +
    '<p class="sub">'+t('bookStep1Sub')+'</p>' +
    '<div class="svc-radio">' +
      svcs.map(function(s) {
        return '<div class="svc-opt '+(bookingData.service===s.id?'selected':'')+'" onclick="bookingData.service=\''+s.id+'\'; renderBooking();">' +
          '<div style="flex:1;">' +
            '<div class="name">'+s.name+'</div>' +
            '<div style="font-size:12px; color:var(--muted); margin-top:4px;">'+s.duration+'</div>' +
            (s.id==='scan' ? '<div style="font-size:11px; color:var(--bronze-deep); margin-top:4px; font-style:italic;">'+recLabel+'</div>' : '') +
          '</div>' +
          '<div class="price" style="text-align:right; font-size:13px;">'+(s.pricing && s.pricing[0] ? s.pricing[0].value : s.sessions)+'</div>' +
        '</div>';
      }).join('') +
    '</div>' +
    laserTable + stdPricing +
    '<div style="margin-top:28px; display:flex; justify-content:flex-end;">' +
      '<button class="btn btn-primary" '+(!bookingData.service?'disabled style="opacity:0.4; cursor:not-allowed;"':'')+' onclick="if(bookingData.service){bookingStep=2; renderBooking();}">'+t('bookDateNext')+'</button>' +
    '</div>';
}
function bookingStep2() {
  // Generate next 14 available dates (skip Sundays)
  var upcoming = [];
  var d = new Date();
  d.setDate(d.getDate() + 1); // start from tomorrow
  while (upcoming.length < 14) {
    if (d.getDay() !== 0) { // skip Sunday
      upcoming.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  var monthNames = currentLang==='nl'
    ? ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december']
    : ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var dayNames = currentLang==='nl'
    ? ['Zo','Ma','Di','Wo','Do','Vr','Za']
    : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  // Group dates by month
  var currentMonth = upcoming[0].getMonth();
  var currentYear = upcoming[0].getFullYear();
  var monthLabel = monthNames[currentMonth] + ' ' + currentYear;
  var endMonth = upcoming[upcoming.length-1].getMonth();
  if (endMonth !== currentMonth) {
    monthLabel += ' / ' + monthNames[endMonth] + ' ' + upcoming[upcoming.length-1].getFullYear();
  }
  // Time slots every 15 min from 09:00 to 18:00
  var timeSlots = [];
  for (var h = 9; h <= 18; h++) {
    for (var m = 0; m < 60; m += 15) {
      if (h === 18 && m > 0) break;
      timeSlots.push((h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m);
    }
  }
  var customLabel = currentLang==='nl' ? 'Ander tijdstip...' : 'Other time...';
  return `
    <h3>${t('bookStep2Title')}</h3>
    <p class="sub">${t('bookStep2Sub')}</p>
    <div style="font-size:13px; color:var(--bronze-deep); font-family:var(--serif); margin-bottom:12px; font-style:italic;">${monthLabel}</div>
    <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:8px; margin-bottom:24px;">
      ${upcoming.map(dt => {
        var key = dt.toISOString().slice(0,10);
        return '<div class="slot '+(bookingData.date===key?'selected':'')+'" onclick="bookingData.date=\''+key+'\'; renderBooking();">' +
          '<div style="font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:var(--muted); margin-bottom:4px;">'+dayNames[dt.getDay()]+'</div>' +
          '<div>'+dt.getDate()+'</div>' +
        '</div>';
      }).join('')}
    </div>
    <span class="eyebrow" style="display:block; margin-bottom:12px;">${t('timeLabel')}</span>
    <div class="slot-grid" style="max-height:160px; overflow-y:auto; padding-right:4px;">
      ${timeSlots.map(tt => '<div class="slot '+(bookingData.slot===tt?'selected':'')+'" onclick="bookingData.slot=\''+tt+'\'; renderBooking();">'+tt+'</div>').join('')}
    </div>
    <div style="margin-top:12px;">
      <input type="time" id="b-custom-time" style="font-size:14px; padding:8px 12px; border:1px solid var(--line); border-radius:4px; font-family:var(--sans);" onchange="bookingData.slot=this.value; renderBooking();" placeholder="${customLabel}" value="${bookingData.slot && !timeSlots.includes(bookingData.slot) ? bookingData.slot : ''}">
      <span style="font-size:12px; color:var(--muted); margin-left:8px;">${customLabel}</span>
    </div>
    <div style="margin-top:28px; display:flex; justify-content:space-between;">
      <button class="btn btn-ghost" onclick="bookingStep=1; renderBooking();">${t('bookBack')}</button>
      <button class="btn btn-primary" ${(!bookingData.date||!bookingData.slot)?'disabled style="opacity:0.4; cursor:not-allowed;"':''} onclick="if(bookingData.date&&bookingData.slot){bookingStep=3; renderBooking();}">${t('bookDetailsNext')}</button>
    </div>
  `;
}
function bookingStep3() {
  var fnLabel = currentLang==='nl' ? 'Voornaam' : 'First name';
  var lnLabel = currentLang==='nl' ? 'Achternaam' : 'Last name';
  var fnPh = currentLang==='nl' ? 'Voornaam' : 'First name';
  var lnPh = currentLang==='nl' ? 'Achternaam' : 'Last name';
  var reqNote = currentLang==='nl' ? '* Verplicht' : '* Required';
  return `
    <h3>${t('bookStep3Title')}</h3>
    <p class="sub">${t('bookStep3Sub')}</p>
    <div style="font-size:11px; color:var(--muted); margin-bottom:12px;">${reqNote}</div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div class="form-field"><label>${fnLabel} *</label><input type="text" id="b-fname" value="${bookingData.firstName}" oninput="bookingData.firstName=this.value; updateBookingBtn();" placeholder="${fnPh}"></div>
      <div class="form-field"><label>${lnLabel} *</label><input type="text" id="b-lname" value="${bookingData.lastName}" oninput="bookingData.lastName=this.value; updateBookingBtn();" placeholder="${lnPh}"></div>
    </div>
    <div class="form-field"><label>${t('bookEmailLabel')} *</label><input type="email" id="b-email" value="${bookingData.email}" oninput="bookingData.email=this.value; updateBookingBtn();" placeholder="you@example.com"></div>
    <div class="form-field"><label>${t('bookPhoneLabel')} *</label><input type="tel" id="b-phone" value="${bookingData.phone}" oninput="bookingData.phone=this.value; updateBookingBtn();" placeholder="+31 6 ..."></div>
    <div class="form-field"><label>${t('bookNoteLabel')}</label><textarea id="b-note" placeholder="${t('bookNotePh')}"></textarea></div>
    <div style="margin-top:12px; display:flex; justify-content:space-between;">
      <button class="btn btn-ghost" onclick="bookingStep=2; renderBooking();">${t('bookBack')}</button>
      <button class="btn btn-primary" id="b-confirm-btn" disabled style="opacity:0.4; cursor:not-allowed;" onclick="if(bookingData.firstName&&bookingData.lastName&&bookingData.email&&bookingData.phone){bookingStep=4; renderBooking();}">${t('bookConfirm')}</button>
    </div>
  `;
}

function updateBookingBtn() {
  var btn = document.getElementById('b-confirm-btn');
  if (!btn) return;
  var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.email);
  var phoneValid = /^[+]?[\d\s()-]{7,}$/.test(bookingData.phone);
  var ok = bookingData.firstName && bookingData.lastName && bookingData.email && emailValid && bookingData.phone && phoneValid;
  btn.disabled = !ok;
  btn.style.opacity = ok ? '1' : '0.4';
  btn.style.cursor = ok ? 'pointer' : 'not-allowed';
  // Show inline validation hints
  var emailEl = document.getElementById('b-email');
  var phoneEl = document.getElementById('b-phone');
  if (emailEl) emailEl.style.borderColor = bookingData.email && !emailValid ? '#c44' : '';
  if (phoneEl) phoneEl.style.borderColor = bookingData.phone && !phoneValid ? '#c44' : '';
}
function bookingStep4() {
  const svcs = currentLang==='en' ? SERVICES_EN : SERVICES;
  const svc = svcs.find(s => s.id === bookingData.service);
  var note = document.querySelector('#b-note') ? document.querySelector('#b-note').value : '';
  var fullName = (bookingData.firstName + ' ' + bookingData.lastName).trim();
  // Format date nicely
  var dateDisplay = bookingData.date;
  try {
    var dp = new Date(bookingData.date + 'T12:00:00');
    var monthNames = currentLang==='nl'
      ? ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    dateDisplay = dp.getDate() + ' ' + monthNames[dp.getMonth()] + ' ' + dp.getFullYear();
  } catch(e){}
  var fd = new FormData();
  fd.append('_form_type', 'booking');
  fd.append('_subject', 'Boekingsverzoek — ' + (svc ? svc.name : bookingData.service));
  fd.append('service', svc ? svc.name : bookingData.service);
  fd.append('preferred_date', bookingData.date);
  fd.append('preferred_time', bookingData.slot);
  fd.append('name', fullName);
  fd.append('first_name', bookingData.firstName);
  fd.append('last_name', bookingData.lastName);
  fd.append('email', bookingData.email);
  fd.append('phone', bookingData.phone);
  fd.append('note', note);
  fetch('https://formspree.io/f/xzdodkva', { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } }).catch(function(){});
  return `
    <div style="text-align:center; padding:20px 0 12px;">
      <div style="width:64px; height:64px; margin:0 auto 24px; border-radius:50%; border:1px solid var(--bronze-deep); display:grid; place-items:center; color:var(--bronze-deep); font-family:var(--serif); font-size:28px; font-style:italic;">✓</div>
      <h3 style="text-align:center;">${t('bookStep4Title')}</h3>
      <p class="sub" style="text-align:center;">${currentLang==='nl'?'Wij hebben je voorkeur ontvangen en nemen zo snel mogelijk contact met je op via':'We have received your preference and will contact you as soon as possible at'} ${bookingData.email}.</p>
    </div>
    <div style="background:var(--cream-deep); padding:24px; border-radius:4px; margin-bottom:24px;">
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--line);"><span style="color:var(--muted); font-size:12px; letter-spacing:0.1em; text-transform:uppercase;">${t('bookServiceLabel')}</span><span style="font-family:var(--serif); font-size:16px;">${svc?svc.name:'—'}</span></div>
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--line);"><span style="color:var(--muted); font-size:12px; letter-spacing:0.1em; text-transform:uppercase;">${t('bookDateLabel')}</span><span style="font-family:var(--serif); font-size:16px;">${dateDisplay}</span></div>
      <div style="display:flex; justify-content:space-between; padding:8px 0;"><span style="color:var(--muted); font-size:12px; letter-spacing:0.1em; text-transform:uppercase;">${t('bookTimeLabel')}</span><span style="font-family:var(--serif); font-size:16px;">${bookingData.slot}</span></div>
    </div>
    <p style="font-size:12px; color:var(--muted); text-align:center; margin-bottom:20px; line-height:1.6;">${currentLang==='nl'?'Dit is een voorkeur, geen definitieve afspraak. Wij bevestigen je boeking per e-mail.':'This is a preference, not a confirmed appointment. We will confirm your booking by email.'}</p>
    <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="closeBooking()">${t('bookClose')}</button>
  `;
}

function handleContact(e) {
  e.preventDefault();
  var form = e.target;
  // Client-side validation
  var email = form.querySelector('input[name="email"]');
  var phone = form.querySelector('input[name="phone"]');
  var errors = [];
  if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.push(currentLang === 'nl' ? 'Voer een geldig e-mailadres in.' : 'Please enter a valid email address.');
  }
  if (phone && phone.value && !/^[+]?[\d\s()-]{7,}$/.test(phone.value)) {
    errors.push(currentLang === 'nl' ? 'Voer een geldig telefoonnummer in.' : 'Please enter a valid phone number.');
  }
  // Check honeypot
  var honeypot = form.querySelector('input[name="_gotcha"]');
  if (honeypot && honeypot.value) { return; }
  if (errors.length) {
    var existing = form.querySelector('.form-errors');
    if (existing) existing.remove();
    var errDiv = document.createElement('div');
    errDiv.className = 'form-errors';
    errDiv.style.cssText = 'background:var(--cream);border:1px solid #c44;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#a33;line-height:1.6;';
    errDiv.innerHTML = errors.join('<br>');
    form.insertBefore(errDiv, form.firstChild);
    return;
  }
  // Clear any previous errors
  var prevErr = form.querySelector('.form-errors');
  if (prevErr) prevErr.remove();
  var btn = form.querySelector('button[type="submit"]');
  var origText = btn.textContent;
  btn.textContent = currentLang === 'nl' ? 'Verzenden...' : 'Sending...';
  btn.disabled = true;
  var data = new FormData(form);
  fetch('https://formspree.io/f/xzdodkva', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(r) {
    if (r.ok) {
      form.innerHTML = '<div style="padding:60px 0; text-align:center;">' +
        '<div style="width:64px; height:64px; margin:0 auto 24px; border-radius:50%; border:1px solid var(--bronze-deep); display:grid; place-items:center; color:var(--bronze-deep); font-family:var(--serif); font-size:28px; font-style:italic;">\u2713</div>' +
        '<h3 style="font-family:var(--serif); font-size:32px; font-weight:400; margin-bottom:12px;">' + (currentLang==='nl' ? 'Bedankt!' : 'Thank you!') + '</h3>' +
        '<p style="color:var(--muted); font-size:15px; line-height:1.7; max-width:400px; margin:0 auto;">' + (currentLang==='nl' ? 'We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.' : 'We have received your message and will get back to you as soon as possible.') + '</p>' +
        '</div>';
    } else {
      btn.textContent = origText;
      btn.disabled = false;
      alert(currentLang === 'nl' ? 'Er ging iets mis. Probeer het opnieuw of mail info@skintechclinic.nl.' : 'Something went wrong. Please try again or email info@skintechclinic.nl.');
    }
  }).catch(function() {
    btn.textContent = origText;
    btn.disabled = false;
    alert(currentLang === 'nl' ? 'Geen verbinding. Controleer je internet en probeer opnieuw.' : 'No connection. Check your internet and try again.');
  });
}

/* ===================== Nav scroll + mobile ===================== */
function handleScroll() {
  const nav = document.getElementById('siteNav');
  if (window.scrollY > 40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
}
window.addEventListener('scroll', handleScroll);

function toggleMobile() {
  var toggle = document.querySelector('.mobile-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  // simple toggle that reveals links as a dropdown
  const links = document.querySelector('.nav-links');
  if (!links) return;
  if (links.style.display === 'flex') { links.style.display = ''; return; }
  links.style.display = 'flex';
  links.style.position = 'absolute';
  links.style.top = '100%';
  links.style.left = 0;
  links.style.right = 0;
  links.style.flexDirection = 'column';
  links.style.background = 'var(--cream)';
  links.style.padding = '28px 24px';
  links.style.gap = '18px';
  links.style.borderBottom = '1px solid var(--line)';
}

/* ===================== Tweaks ===================== */
const TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "charcoal",
  "typeScale": "editorial",
  "density": "spacious"
}/*EDITMODE-END*/;

const ACCENTS = {
  bronze: { bronze:'#B8956A', bronzeDeep:'#8C6B44', bronzePale:'#D4B896' },
  charcoal: { bronze:'#6E6359', bronzeDeep:'#4A423A', bronzePale:'#B5AA9D' },
  moss: { bronze:'#8A9476', bronzeDeep:'#5F6A4E', bronzePale:'#C0C8AE' },
  rose: { bronze:'#B88E85', bronzeDeep:'#8C5F56', bronzePale:'#D9B9B1' },
};

function applyTweaks() {
  const root = document.documentElement;
  const c = ACCENTS[TWEAKS.accent] || ACCENTS.bronze;
  root.style.setProperty('--bronze', c.bronze);
  root.style.setProperty('--bronze-deep', c.bronzeDeep);
  root.style.setProperty('--bronze-pale', c.bronzePale);
  document.body.style.setProperty('font-size', TWEAKS.typeScale === 'editorial' ? '16px' : TWEAKS.typeScale === 'compact' ? '14px' : '17px');
}
function renderTweaks() {
  const panel = document.getElementById('tweaksPanel');
  panel.innerHTML = `
    <h4>Tweaks</h4>
    <div class="tweaks-sub">Live visual variations</div>
    <div class="tweak-group">
      <div class="tweak-label">Accent tone</div>
      <div class="swatch-row">
        ${Object.keys(ACCENTS).map(k => `
          <div class="swatch ${TWEAKS.accent===k?'active':''}" title="${k}" style="background:${ACCENTS[k].bronze}" onclick="setTweak('accent','${k}')"></div>
        `).join('')}
      </div>
    </div>
    <div class="tweak-group">
      <div class="tweak-label">Type scale</div>
      <div class="tweak-row">
        ${['compact','editorial','grand'].map(v => `
          <button class="tweak-chip ${TWEAKS.typeScale===v?'active':''}" onclick="setTweak('typeScale','${v}')">${v}</button>
        `).join('')}
      </div>
    </div>
    <div class="tweak-group">
      <div class="tweak-label">Density</div>
      <div class="tweak-row">
        ${['tight','spacious','airy'].map(v => `
          <button class="tweak-chip ${TWEAKS.density===v?'active':''}" onclick="setTweak('density','${v}')">${v}</button>
        `).join('')}
      </div>
    </div>
  `;
}
function setTweak(key, val) {
  TWEAKS[key] = val;
  applyTweaks();
  renderTweaks();
  try { window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[key]: val}}, '*'); } catch(e){}
}
window.addEventListener('message', (e) => {
  if (!e.data || !e.data.type) return;
  if (e.data.type === '__activate_edit_mode') { document.getElementById('tweaksPanel').classList.add('visible'); renderTweaks(); }
  if (e.data.type === '__deactivate_edit_mode') { document.getElementById('tweaksPanel').classList.remove('visible'); }
});
try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(e){}


try { if(localStorage.getItem('sk_cookies')) document.getElementById('cookieBanner').classList.add('hidden'); } catch(e){}
// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
  let h = window.location.hash.replace('#','');
  // Parse language from hash: #en/about or #about
  if (h.startsWith('en/')) { if (currentLang !== 'en') setLang('en'); h = h.slice(3); }
  else if (h.startsWith('nl/')) { if (currentLang !== 'nl') setLang('nl'); h = h.slice(3); }
  else if (currentLang === 'en' && !h.startsWith('en')) { setLang('nl'); }
  const target = h && routes[h] ? h : 'home';
  if (target !== currentRoute) {
    currentRoute = target;
    const app = document.getElementById('app');
    app.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'page-enter';
    el.innerHTML = routes[target] ? routes[target]() : renderHome();
    app.appendChild(el);
    const footer = document.createElement('footer');
    footer.className = 'site';
    footer.innerHTML = renderFooter();
    app.appendChild(footer);
    const darkOpener = target === 'home' || target === 'results';
    document.getElementById('siteNav').classList.toggle('on-dark', darkOpener);
    window.scrollTo(0, 0);
  document.getElementById('app').focus({preventScroll: true});
    bindPageInteractions();
  }
});

/* ===================== Init ===================== */
applyTweaks();
// Always start on home page
let hashRaw = window.location.hash.replace('#','');
// Parse language from initial hash
if (hashRaw.startsWith('en/')) { currentLang = 'en'; try { localStorage.setItem('sk_lang','en'); } catch(e){} hashRaw = hashRaw.slice(3); }
else if (hashRaw.startsWith('en')) { currentLang = 'en'; try { localStorage.setItem('sk_lang','en'); } catch(e){} if (hashRaw === 'en') hashRaw = 'home'; }
// Also support clean URLs (/about, /services, etc.)
if (!hashRaw) {
  var path = window.location.pathname.slice(1).split('/')[0];
  if (path && routes[path]) hashRaw = path;
}
const hashRoute = hashRaw;
const initRoute = hashRoute && routes[hashRoute] ? hashRoute : 'home';
currentRoute = initRoute;
navigate(initRoute);




window._jsLoaded = true;
