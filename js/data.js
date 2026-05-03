/* =========================================================================
 * SkinTech Laser Clinic — Data & Translations
 * ========================================================================= */

/* Signature "S" glyph — lifted from the Skintech logo.
   Two stacked spiral chambers with wavy skin-ridge lines threading between them. */
const fingerprintSVG = `
<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.95">
    <!-- Upper chamber (outer spiral) -->
    <path d="M250 90 Q 270 115 255 145 Q 235 175 195 175 Q 155 175 140 150 Q 128 125 145 105 Q 165 82 200 82 Q 232 82 245 100"/>
    <!-- Upper chamber (inner ridge) -->
    <path d="M235 110 Q 245 130 230 148 Q 212 164 188 160 Q 165 154 160 138 Q 158 122 172 112 Q 190 102 212 108"/>
    <!-- Upper chamber (innermost curl) -->
    <path d="M210 128 Q 220 138 208 148 Q 192 154 182 142 Q 178 132 190 126"/>

    <!-- Lower chamber (outer spiral) -->
    <path d="M150 310 Q 130 285 145 255 Q 165 225 205 225 Q 245 225 260 250 Q 272 275 255 295 Q 235 318 200 318 Q 168 318 155 300"/>
    <!-- Lower chamber (inner ridge) -->
    <path d="M165 290 Q 155 270 170 252 Q 188 236 212 240 Q 235 246 240 262 Q 242 278 228 288 Q 210 298 188 292"/>
    <!-- Lower chamber (innermost curl) -->
    <path d="M190 272 Q 180 262 192 252 Q 208 246 218 258 Q 222 268 210 274"/>

    <!-- Connecting S-stroke between chambers -->
    <path d="M215 178 Q 240 190 225 205 Q 205 218 185 218 Q 168 218 175 210"/>

    <!-- Left skin-ridge waves (water lines) -->
    <path d="M30 195 Q 55 182 75 195 Q 95 208 115 195 Q 130 186 148 194"/>
    <path d="M40 210 Q 62 200 82 210 Q 102 220 120 210"/>

    <!-- Right skin-ridge waves (water lines) -->
    <path d="M252 195 Q 272 186 290 194 Q 310 204 330 194 Q 350 184 370 196"/>
    <path d="M275 210 Q 295 220 315 210 Q 335 200 358 210"/>
  </g>
</svg>`;

/* ===================== App data ===================== */
const SERVICES = [
  { id:'laser', num:'01', name:'Laserontharing', italic:'ontharing', nav:'Laserontharing', duration:'30–60 min', sessions:'6–8 sessies',
    img:'assets/service-laser.webp',
    blurb:'Precisie-laserbehandeling voor blijvend gladde huid, geschikt voor elk huidtype.',
    desc:'Ons signature-protocol met de GentleMax Pro Plus zorgt voor duurzame haarreductie met minimaal ongemak. Afgestemd op jouw huidtype en ontworpen voor zichtbaar resultaat vanaf de eerste sessies.',
    forWho:'Voor iedereen die blijvend gladde huid wil, zonder de onderhoudsroutine — veilig voor Fitzpatrick-huidtypes I t/m VI.',
    benefits:['Zichtbare reductie vanaf de eerste sessies','Comfortabel dankzij geïntegreerde koeling','Veilig voor elk huidtype, ook donkerder tinten','Elke sessie opnieuw gekalibreerd'],
    expect:'Een kort consult, een patchtest en een behandeling die voelt als een warme puls tegen koele lucht.',
    pricing:[
      {label:'Bovenlip / kin / oksels', value:'Vanaf €35'},
      {label:'Bikinilijn / onderarmen', value:'Vanaf €55'},
      {label:'Onderbenen / rug', value:'Vanaf €125'},
      {label:'Volledige benen', value:'Vanaf €225'},
      {label:'Full body premium', value:'Vanaf €465'},
      {label:'Kuur van 6 sessies', value:'Ca. 15–20% voordeliger'},
    ],
    laserPricing:{
      women:{
        face:[
          {area:'Bovenlip',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Kin',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Bovenlip + kin',single:'€55',pkg6:'€285',pkg8:'€350'},
          {area:'Bakkebaarden',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Wangen',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Nek',single:'€50',pkg6:'€260',pkg8:'€320'},
          {area:'Volledig gezicht',single:'€95',pkg6:'€495',pkg8:'€610'},
        ],
        upperBody:[
          {area:'Oksels',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Halve armen',single:'€85',pkg6:'€440',pkg8:'€540'},
          {area:'Volledige armen',single:'€145',pkg6:'€755',pkg8:'€925'},
          {area:'Handen / vingers',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Tepels',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Buiklijn',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Volledige buik',single:'€75',pkg6:'€390',pkg8:'€480'},
          {area:'Onderrug',single:'€80',pkg6:'€415',pkg8:'€510'},
          {area:'Volledige rug',single:'€145',pkg6:'€755',pkg8:'€925'},
        ],
        bikini:[
          {area:'Bikinilijn klein',single:'€55',pkg6:'€285',pkg8:'€350'},
          {area:'Bikinilijn uitgebreid',single:'€75',pkg6:'€390',pkg8:'€480'},
          {area:'Brazilian / Hollywood',single:'€95',pkg6:'€495',pkg8:'€610'},
          {area:'Bilnaad',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Volledige billen',single:'€85',pkg6:'€440',pkg8:'€540'},
        ],
        legs:[
          {area:'Onderbenen',single:'€125',pkg6:'€650',pkg8:'€800'},
          {area:'Bovenbenen',single:'€135',pkg6:'€700',pkg8:'€860'},
          {area:'Volledige benen',single:'€225',pkg6:'€1.170',pkg8:'€1.440'},
          {area:'Voeten / tenen',single:'€35',pkg6:'€180',pkg8:'€220'},
        ],
        combos:[
          {area:'Oksels + bikinilijn klein',single:'€90',pkg6:'€470',pkg8:'€575'},
          {area:'Oksels + bikini uitgebreid',single:'€110',pkg6:'€570',pkg8:'€700'},
          {area:'Oksels + Brazilian/Hollywood',single:'€130',pkg6:'€675',pkg8:'€830'},
          {area:'Onderbenen + oksels',single:'€155',pkg6:'€805',pkg8:'€990'},
          {area:'Volledige benen + oksels',single:'€250',pkg6:'€1.300',pkg8:'€1.600'},
          {area:'Full body basis',single:'€315',pkg6:'€1.640',pkg8:'€2.015'},
          {area:'Full body premium',single:'€465',pkg6:'€2.420',pkg8:'€2.975'},
        ],
      },
      men:{
        face:[
          {area:'Baardlijn shaping',single:'€65',pkg6:'€340',pkg8:'€420'},
          {area:'Nek voor/achter',single:'€65',pkg6:'€340',pkg8:'€420'},
          {area:'Oren',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Neus',single:'€30',pkg6:'€155',pkg8:'€190'},
          {area:'Volledig gezicht / baardreductie',single:'€125',pkg6:'€650',pkg8:'€800'},
        ],
        upperBody:[
          {area:'Oksels',single:'€55',pkg6:'€285',pkg8:'€350'},
          {area:'Schouders',single:'€95',pkg6:'€495',pkg8:'€610'},
          {area:'Borst',single:'€130',pkg6:'€675',pkg8:'€830'},
          {area:'Buik',single:'€120',pkg6:'€625',pkg8:'€770'},
          {area:'Borst + buik',single:'€220',pkg6:'€1.145',pkg8:'€1.410'},
          {area:'Bovenrug',single:'€125',pkg6:'€650',pkg8:'€800'},
          {area:'Onderrug',single:'€110',pkg6:'€570',pkg8:'€700'},
          {area:'Volledige rug',single:'€220',pkg6:'€1.145',pkg8:'€1.410'},
          {area:'Volledige armen',single:'€165',pkg6:'€860',pkg8:'€1.055'},
        ],
        lowerBody:[
          {area:'Onderbenen',single:'€145',pkg6:'€755',pkg8:'€925'},
          {area:'Bovenbenen',single:'€160',pkg6:'€830',pkg8:'€1.020'},
          {area:'Volledige benen',single:'€265',pkg6:'€1.380',pkg8:'€1.695'},
          {area:'Billen',single:'€125',pkg6:'€650',pkg8:'€800'},
        ],
        combos:[
          {area:'Rug + schouders',single:'€275',pkg6:'€1.430',pkg8:'€1.760'},
          {area:'Borst + buik',single:'€220',pkg6:'€1.145',pkg8:'€1.410'},
          {area:'Rug + borst + buik',single:'€395',pkg6:'€2.055',pkg8:'€2.530'},
          {area:'Volledige armen + oksels',single:'€195',pkg6:'€1.015',pkg8:'€1.250'},
          {area:'Volledige benen + oksels',single:'€295',pkg6:'€1.535',pkg8:'€1.890'},
        ],
      },
    },
    priceNote:'Alle prijzen zijn inclusief 21% btw. Exacte tarieven worden tijdens de gratis huidscan met je besproken.'
  },
  { id:'deep', num:'02', name:'Deep Cleansing Facial', italic:'Cleansing', nav:'Deep Cleansing Facial', duration:'60 min', sessions:'Maandelijks ritueel',
    img:'assets/service-deep.webp',
    blurb:'Een verhelderend ritueel dat verstopte, gevoelige of vermoeide huid reset.',
    desc:'Een herstellende, clinical-grade gezichtsbehandeling die de huid grondig reinigt zonder haar uit balans te brengen. Opgebouwd rond de actuele staat van jouw huid — nooit volgens een vast script.',
    forWho:'Verstopte, vette, doffe of reactieve huid die toe is aan een professionele reset.',
    benefits:['Diepgaande poriënreiniging','Zachtere textuur en verfijnde huidtoon','Kalmerend, niet-reactief eindresultaat','Gepersonaliseerd op basis van een huidscan'],
    expect:'Dubbele reiniging, huidanalyse, extracties, masker en een afsluitende massage. Zestig minuten rust.',
    pricing:[
      {label:'Enkele behandeling', value:'€95'},
      {label:'Kuur van 3 behandelingen', value:'€255'},
      {label:'Add-on: LED / kalmerend masker', value:'€25–€35'},
    ],
    priceNote:'Inclusief huidanalyse en een persoonlijk verzorgingsadvies voor thuis. Alle prijzen incl. 21% btw.'
  },
  { id:'glace', num:'03', name:'Glacē Glow Facial', italic:'Glow', nav:'Glacē Glow Facial', duration:'45–60 min', sessions:'Seizoensgebonden',
    img:'assets/service-glace.webp',
    blurb:'Cryo-geïnfuseerde lichtheid met een verfijnde, lit-from-within afwerking.',
    desc:'Onze signature cold-therapy-behandeling combineert cryo-modulatie met een voedende infusie. De huid oogt direct fris, gelift en zichtbaar stralend.',
    forWho:'Voor iedereen die zich voorbereidt op een moment — of gewoon een betere spiegel wenst op een doordeweekse dag.',
    benefits:['Direct zichtbaar gelift effect','Minder zwelling en roodheid','Helderdere, gelijkmatiger huidtoon','Geen hersteltijd'],
    expect:'Een koele, bijna ceremoniële behandeling waarbij Glacē en Cryo 7 in stille afwisseling samenwerken.',
    pricing:[
      {label:'Enkele behandeling', value:'€125'},
      {label:'Kuur van 3 behandelingen', value:'€330'},
      {label:'SkinTech Signature Glow (Deep Cleansing + Glacē)', value:'€165'},
      {label:'Add-on: Glacē finish na laser/facial', value:'€45'},
    ],
    priceNote:'Aanrader in aanloop naar een event, seizoenswissel of een fotoshoot. Alle prijzen incl. 21% btw.'
  },
  { id:'scan', num:'04', name:'Gratis huidscan & consult', italic:'huidscan', nav:'Gratis huidscan', duration:'45 min', sessions:'Jaarlijks',
    img:'assets/service-scan.webp',
    blurb:'Een technologie-gedreven lezing van je huid, van oppervlak tot diepere lagen.',
    desc:'Een diagnostische sessie met onze Sylton Observ 520x, die pigmentatie, hydratatie, textuur en onderliggende kenmerken in kaart brengt. Je verlaat de kliniek met een geschreven verzorgingsplan — geen verkoopgesprek.',
    forWho:'Voor iedereen die een behandeltraject start, of gewoon helderheid wil over wat de huid werkelijk nodig heeft.',
    benefits:['Multi-spectrum beeldvorming','Persoonlijk, geschreven behandelplan','Vrijblijvend consult','Nulmeting voor voortgangscontrole'],
    expect:'Een rustig gesprek, een korte scan en een volwassen advies waar je op kunt bouwen.',
    pricing:[
      {label:'Laserconsult + patchtest', value:'Gratis'},
      {label:'Huidanalyse / facial-consult', value:'Gratis'},
      {label:'Uitgebreid consult met behandelplan', value:'€35'},
      {label:'No-show / late annulering', value:'€25'},
    ],
    priceNote:'Onze standaard huidscan en laserconsult zijn altijd gratis en vrijblijvend. Alle prijzen incl. 21% btw.'
  },
  { id:'combo', num:'05', name:'Op maat — behandelplan', italic:'op maat', nav:'Behandelplan op maat', duration:'Op maat', sessions:'Traject',
    img:'assets/service-combo.webp',
    blurb:'Multidisciplinaire trajecten, afgestemd op jouw huid en agenda.',
    desc:'Voor cliënten die streven naar duurzaam resultaat in plaats van losse sessies. We combineren laser, facials en analyse in een kwartaalritme dat bij je leven past.',
    forWho:'Cliënten die zich committeren aan blijvende huidgezondheid en zichtbare verfijning op de lange termijn.',
    benefits:['Geïntegreerde multi-device-protocollen','Kwartaalritme met jaarlijkse evaluatie','Voorrang bij boekingen','Eén vaste specialist'],
    expect:'Een uitgebreid startconsult, gevolgd door een plan dat volledig rond jouw doelen is opgebouwd.',
    pricing:[
      {label:'Startconsult & behandelplan', value:'Gratis'},
      {label:'Trajectprijs per kwartaal', value:'Vanaf €495'},
      {label:'Signature Glow (Deep Cleansing + Glacē)', value:'€165 / 3x €450'},
      {label:'Jaarprogramma', value:'Op aanvraag'},
    ],
    priceNote:'Prijs wordt samengesteld op basis van de gekozen behandelingen; altijd transparant en zonder verrassingen. Alle prijzen incl. 21% btw.'
  },
];

const TECH = [
  { id:'gentlemax', name:'GentleMax Pro Plus', sub:'Dual-wavelength laserplatform', type:'Laserontharing', region:'Alle lichaamszones', tones:'Huidtypes I–VI',
    p1:'De klinische gouden standaard voor ontharing en vasculaire behandelingen. De combinatie van 755nm Alexandriet en 1064nm Nd:YAG maakt het mogelijk om élk huidtype veilig te behandelen — inclusief donkere tinten, waar minder geavanceerde lasers tekortschieten.',
    p2:'De geïntegreerde dynamische koeling maakt elke puls kort en goed te verdragen, nooit straf. We kalibreren ieder bezoek opnieuw; een standaardprotocol bestaat hier niet.'
  },
  { id:'cryo7', name:'Cryo 7', sub:'Gecontroleerde koudetherapie', type:'Cryo', region:'Gezicht & lichaam', tones:'Alle huidtypes',
    p1:'Klinisch gedoseerde koude vermindert ontsteking, kalmeert een reactieve huid en zorgt voor die onmiddellijk geliftte, ontzwollen finish die onze behandelingen typeert. Inzetbaar naast facials en als losse herstelstap.',
    p2:'Koude is hier geen straf — het is sculpting. De huid voelt wakker en verfijnd, zonder de roodheid die warmtebehandelingen achterlaten.'
  },
  { id:'glace', name:'Glacē', sub:'Cryo-infusion facial systeem', type:'Signature facial', region:'Gezicht, hals, décolleté', tones:'Alle huidtypes',
    p1:'De kern van ons Glow-protocol. Glacē combineert koudetherapie met een gerichte infusie van actieve ingrediënten, waardoor werkzame stoffen dieper worden opgenomen terwijl het oppervlak tot rust komt. Het resultaat: de verfijnde, lit-from-within uitstraling die je op de dag zelf direct ziet.',
    p2:'Geen hersteltijd, direct zichtbaar effect, veilig voor de gevoelige huid.'
  },
  { id:'ionto', name:'IONTO Beauty Tower + Peel Sono', sub:'Professioneel multi-modaliteit station', type:'Facial support', region:'Gezicht', tones:'Alle huidtypes',
    p1:'Ons behandeltorencomplex bundelt vapor, galvanische en hoogfrequente stromen, Peel Sono-ultrasoon en microdermabrasie in één clinical-grade unit. Het vormt de ruggengraat van elke facial die we leveren — van diepe reiniging tot verfijnde afwerking.',
    p2:'Het is, kortweg, het stille werkpaard van de behandelruimte. De huid krijgt er precies wat ze nodig heeft, zonder overbehandeling.'
  },
  { id:'scanner', name:'Sylton Observ 520x', sub:'Multi-spectrum huidanalyse', type:'Consult', region:'Gezicht', tones:'Alle huidtypes',
    p1:'Onze huidscanner leest pigmentatie, vasculaire patronen, hydratatie en porietoestand uit op meerdere lichtspectra. Het is het startpunt van elk doordacht behandelplan — en een nulmeting waar we op lange termijn steeds naar terugkeren.',
    p2:'Jouw huid, gemeten — niet ingeschat.'
  },
];

const FAQS = [
  { q:'Hoeveel laserontharing-sessies heb ik nodig?', a:'De meeste cliënten hebben 6 tot 8 sessies nodig, met een tussenpauze van 4–6 weken voor het gezicht en 6–8 weken voor het lichaam. Haar groeit in cycli en de laser werkt alleen in op haar in de actieve groeifase — geduld is onderdeel van het protocol. Eén of twee onderhoudsbehandelingen per jaar houden het resultaat in stand.' },
  { q:'Is de behandeling geschikt voor mijn huidtype?', a:'Ja. De GentleMax Pro Plus is gekalibreerd voor Fitzpatrick-huidtypes I tot en met VI, inclusief donkere en reactieve huid. Elke sessie begint met een huidlezing en een instelling op maat — we werken niet met één standaardprotocol.' },
  { q:'Voel ik veel tijdens de behandeling?', a:'De laser voelt voor de meeste mensen als een warme elastische knip, verzacht door de geïntegreerde koeling. Facials zijn kalmerend of verfrissend-koel. Verdoving is in de regel niet nodig, en we pauzeren op elk moment dat jij dat wilt.' },
  { q:'Hoe bereid ik me voor op mijn eerste sessie?', a:'Vermijd directe zon en zelfbruiner twee weken van tevoren, en laat de behandelzone vier weken met rust (niet harsen of epileren). Scheer de zone 24 uur voor je afspraak. Kom met een schone huid — geen crème of deodorant in de zone. Je ontvangt bij je boeking een volledig voorbereidings­advies.' },
  { q:'Hoe ziet de nazorg eruit?', a:'Reken op milde warmte of roodheid gedurende enkele uren. Gebruik de eerste week SPF 50, vermijd sauna, intensief sporten en hete douches de eerste 24 uur, en laat actieve ingrediënten (retinol, zuren) 3 tot 5 dagen achterwege. Drink goed en wees zacht voor de huid — van binnen en van buiten.' },
  { q:'Wat is het verschil tussen de Deep Cleansing en de Glacē Glow?', a:'De Deep Cleansing Facial is een verhelderende reset, opgebouwd rond extracties en het herstellen van de balans — ideaal wanneer de huid verstopt of reactief aanvoelt. De Glacē Glow is een koudetherapieritueel dat lift, ontzwelt en direct laat stralen. Veel cliënten wisselen beide behandelingen per seizoen af.' },
  { q:'Heb ik een consult nodig vóór de behandeling?', a:'Ja — elke nieuwe cliënt begint met een huidscan en consult. Zo kunnen we je huid lezen, je doelen begrijpen en een onderbouwd plan schrijven. De huidscan is altijd gratis en volledig vrijblijvend.' },
  { q:'Wat kost een behandeling?', a:'Onze tarieven liggen in lijn met wat je van een boutique laserkliniek mag verwachten. Exacte prijzen verschillen per zone, huidtype en behandeldoel en bespreken we transparant tijdens de gratis huidscan. Kuren zijn altijd voordeliger dan losse sessies.' },
  { q:'Kan ik online boeken?', a:'Ja. Online boeken is mogelijk voor alle behandelingen, met live beschikbaarheid. Voor combinatieplannen en eerste consulten raden we WhatsApp of telefoon aan, zodat we de volgorde van behandelingen correct kunnen inplannen.' },
  { q:'Waar bevindt de kliniek zich?', a:'SkinTech Laser Clinic vind je in hartje Amsterdam. Het adres en de routebeschrijving ontvang je bij het bevestigen van je afspraak.' },
];


let currentRoute = 'home';
let bookingOpen = false;
let currentLang = (()=>{ try { return localStorage.getItem('sk_lang') || 'nl'; } catch(e){ return 'nl'; } })();

/* ---- Translation helper ---- */
const T = {
  nl: {
    navHome:'Home', navAbout:'Over ons', navServices:'Behandelingen', navTech:'Technologie', navFaq:'FAQ', navContact:'Contact',
    navScan:'Gratis huidscan', navBook:'Boek nu',
    heroEyebrow:'Amsterdam · Est. 2026',
    heroH1:'Premium laser- en<br/>huidbehandelingen<br/>in <i>Amsterdam.</i>',
    heroIntro:'Voor een gladdere huid, meer comfort en zichtbaar verzorgde resultaten — met geavanceerde technologie, persoonlijke aandacht en een rustige clinic experience.',
    heroBook:'Boek nu', heroScan:'Gratis huidscan',
    heroSub:'Geavanceerde technologie · Persoonlijke huidanalyse · Rustige clinic-ervaring',
    stat1:'Behandelingen', stat2:'Huidtypes behandeld', stat3:'Specialist per cliënt',
    footerCta:'Begin met een <i>gratis huidscan</i> — <a href="#" onclick="navigate(\'contact\')">boek hier →</a>',
    footerColTreat:'Behandelingen', footerColClinic:'Kliniek', footerColFollow:'Volg ons',
    footerJournal:'Journal — binnenkort', footerLegal:'© 2026 SkinTech Laser Clinic · Amsterdam', footerLegal2:'Privacybeleid · Algemene voorwaarden · KvK 42039525',
    bookStep1Title:'Kies een <i>behandeling.</i>', bookStep1Sub:'Eerste bezoek? We raden een gratis huidscan aan.',
    bookStep2Title:'Kies een <i>datum.</i>', bookStep2Sub:'Eerstvolgende beschikbaarheid in onze Amsterdamse clinic.',
    bookStep3Title:'Jouw <i>gegevens.</i>', bookStep3Sub:'We sturen een bevestiging en verzorgingsadvies naar je e-mail.',
    bookStep4Title:'Aanvraag <i>ontvangen.</i>',
    bookDateNext:'Datum kiezen →', bookBack:'← Terug', bookDetailsNext:'Jouw gegevens →', bookConfirm:'Boeking bevestigen →', bookClose:'Sluiten',
    bookNameLabel:'Volledige naam', bookEmailLabel:'E-mail', bookPhoneLabel:'Telefoon (optioneel)', bookNoteLabel:'Iets wat we moeten weten? (optioneel)',
    bookNamePh:'Jouw naam', bookNotePh:'Eerdere behandelingen, huidgevoeligheid, doelen...',
    bookServiceLabel:'Behandeling', bookDateLabel:'Datum', bookTimeLabel:'Tijd',
    days:['Di','Wo','Do','Vr','Za','Ma','Di'],
    timeLabel:'— Tijdstip',
  },
  en: {
    navHome:'Home', navAbout:'About', navServices:'Treatments', navTech:'Technology', navFaq:'FAQ', navContact:'Contact',
    navScan:'Free skin scan', navBook:'Book now',
    heroEyebrow:'Amsterdam · Est. 2026',
    heroH1:'Premium laser and<br/>skin treatments<br/>in <i>Amsterdam.</i>',
    heroIntro:'For smoother skin, lasting comfort and visibly refined results — with advanced technology, personal attention and a calm clinic experience.',
    heroBook:'Book now', heroScan:'Free skin scan',
    heroSub:'Advanced technology · Personal skin analysis · Premium clinic experience',
    stat1:'Treatments', stat2:'Skin types treated', stat3:'Specialist per client',
    footerCta:'Begin with a <i>free skin scan</i> — <a href="#" onclick="navigate(\'contact\')">book here →</a>',
    footerColTreat:'Treatments', footerColClinic:'Clinic', footerColFollow:'Follow',
    footerJournal:'Journal — coming soon', footerLegal:'© 2026 SkinTech Laser Clinic · Amsterdam', footerLegal2:'Privacy policy · Terms · KvK 42039525',
    bookStep1Title:'Choose a <i>treatment.</i>', bookStep1Sub:'First visit? We recommend starting with a free skin scan.',
    bookStep2Title:'Pick a <i>date.</i>', bookStep2Sub:'Next available openings at our Amsterdam clinic.',
    bookStep3Title:'Your <i>details.</i>', bookStep3Sub:'We\'ll send confirmation and pre-care notes to your email.',
    bookStep4Title:'Request <i>received.</i>',
    bookDateNext:'Choose date →', bookBack:'← Back', bookDetailsNext:'Your details →', bookConfirm:'Confirm booking →', bookClose:'Close',
    bookNameLabel:'Full name', bookEmailLabel:'Email', bookPhoneLabel:'Phone (optional)', bookNoteLabel:'Anything we should know? (optional)',
    bookNamePh:'Your name', bookNotePh:'Prior treatments, skin sensitivity, goals...',
    bookServiceLabel:'Treatment', bookDateLabel:'Date', bookTimeLabel:'Time',
    days:['Tue','Wed','Thu','Fri','Sat','Mon','Tue'],
    timeLabel:'— Time',
  }
};
function t(key) { return (T[currentLang] || T.nl)[key] || key; }


const SERVICES_EN = [
  { id:'laser', num:'01', name:'Laser Hair Removal', italic:'Removal', nav:'Laser Hair Removal', duration:'30–60 min', sessions:'6–8 sessions',
    img:'assets/service-laser.webp',
    blurb:'Precision laser treatment for lasting smoothness, safe for all skin types.',
    desc:'Our GentleMax Pro Plus protocol delivers lasting hair reduction with minimal discomfort. Calibrated to your skin type for visible results from the first sessions.',
    forWho:'Anyone seeking permanent, low-maintenance smoothness — suitable for Fitzpatrick skin types I–VI.',
    benefits:['Visible reduction from the first sessions','Comfortable thanks to integrated cooling','Safe for all skin tones including darker ones','Re-calibrated at every session'],
    expect:'A brief consultation and patch test, followed by a treatment that feels like a warm pulse against cool air.',
    pricing:[
      {label:'Upper lip / chin / underarms', value:'From €35'},
      {label:'Bikini line / half arms', value:'From €55'},
      {label:'Lower legs / back', value:'From €125'},
      {label:'Full legs', value:'From €225'},
      {label:'Full body premium', value:'From €465'},
      {label:'Course of 6 sessions', value:'~15–20% discount'},
    ],
    laserPricing:{
      women:{
        face:[
          {area:'Upper lip',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Chin',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Upper lip + chin',single:'€55',pkg6:'€285',pkg8:'€350'},
          {area:'Sideburns',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Cheeks',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Neck',single:'€50',pkg6:'€260',pkg8:'€320'},
          {area:'Full face',single:'€95',pkg6:'€495',pkg8:'€610'},
        ],
        upperBody:[
          {area:'Underarms',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Half arms',single:'€85',pkg6:'€440',pkg8:'€540'},
          {area:'Full arms',single:'€145',pkg6:'€755',pkg8:'€925'},
          {area:'Hands / fingers',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Nipples',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Abdomen line',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Full abdomen',single:'€75',pkg6:'€390',pkg8:'€480'},
          {area:'Lower back',single:'€80',pkg6:'€415',pkg8:'€510'},
          {area:'Full back',single:'€145',pkg6:'€755',pkg8:'€925'},
        ],
        bikini:[
          {area:'Bikini line small',single:'€55',pkg6:'€285',pkg8:'€350'},
          {area:'Bikini line extended',single:'€75',pkg6:'€390',pkg8:'€480'},
          {area:'Brazilian / Hollywood',single:'€95',pkg6:'€495',pkg8:'€610'},
          {area:'Buttock line',single:'€45',pkg6:'€235',pkg8:'€290'},
          {area:'Full buttocks',single:'€85',pkg6:'€440',pkg8:'€540'},
        ],
        legs:[
          {area:'Lower legs',single:'€125',pkg6:'€650',pkg8:'€800'},
          {area:'Upper legs',single:'€135',pkg6:'€700',pkg8:'€860'},
          {area:'Full legs',single:'€225',pkg6:'€1,170',pkg8:'€1,440'},
          {area:'Feet / toes',single:'€35',pkg6:'€180',pkg8:'€220'},
        ],
        combos:[
          {area:'Underarms + bikini small',single:'€90',pkg6:'€470',pkg8:'€575'},
          {area:'Underarms + bikini extended',single:'€110',pkg6:'€570',pkg8:'€700'},
          {area:'Underarms + Brazilian/Hollywood',single:'€130',pkg6:'€675',pkg8:'€830'},
          {area:'Lower legs + underarms',single:'€155',pkg6:'€805',pkg8:'€990'},
          {area:'Full legs + underarms',single:'€250',pkg6:'€1,300',pkg8:'€1,600'},
          {area:'Full body basic',single:'€315',pkg6:'€1,640',pkg8:'€2,015'},
          {area:'Full body premium',single:'€465',pkg6:'€2,420',pkg8:'€2,975'},
        ],
      },
      men:{
        face:[
          {area:'Beard line shaping',single:'€65',pkg6:'€340',pkg8:'€420'},
          {area:'Neck front/back',single:'€65',pkg6:'€340',pkg8:'€420'},
          {area:'Ears',single:'€35',pkg6:'€180',pkg8:'€220'},
          {area:'Nose',single:'€30',pkg6:'€155',pkg8:'€190'},
          {area:'Full face / beard reduction',single:'€125',pkg6:'€650',pkg8:'€800'},
        ],
        upperBody:[
          {area:'Underarms',single:'€55',pkg6:'€285',pkg8:'€350'},
          {area:'Shoulders',single:'€95',pkg6:'€495',pkg8:'€610'},
          {area:'Chest',single:'€130',pkg6:'€675',pkg8:'€830'},
          {area:'Abdomen',single:'€120',pkg6:'€625',pkg8:'€770'},
          {area:'Chest + abdomen',single:'€220',pkg6:'€1,145',pkg8:'€1,410'},
          {area:'Upper back',single:'€125',pkg6:'€650',pkg8:'€800'},
          {area:'Lower back',single:'€110',pkg6:'€570',pkg8:'€700'},
          {area:'Full back',single:'€220',pkg6:'€1,145',pkg8:'€1,410'},
          {area:'Full arms',single:'€165',pkg6:'€860',pkg8:'€1,055'},
        ],
        lowerBody:[
          {area:'Lower legs',single:'€145',pkg6:'€755',pkg8:'€925'},
          {area:'Upper legs',single:'€160',pkg6:'€830',pkg8:'€1,020'},
          {area:'Full legs',single:'€265',pkg6:'€1,380',pkg8:'€1,695'},
          {area:'Buttocks',single:'€125',pkg6:'€650',pkg8:'€800'},
        ],
        combos:[
          {area:'Back + shoulders',single:'€275',pkg6:'€1,430',pkg8:'€1,760'},
          {area:'Chest + abdomen',single:'€220',pkg6:'€1,145',pkg8:'€1,410'},
          {area:'Back + chest + abdomen',single:'€395',pkg6:'€2,055',pkg8:'€2,530'},
          {area:'Full arms + underarms',single:'€195',pkg6:'€1,015',pkg8:'€1,250'},
          {area:'Full legs + underarms',single:'€295',pkg6:'€1,535',pkg8:'€1,890'},
        ],
      },
    },
    priceNote:'All prices include 21% VAT. Exact pricing is discussed during your free skin scan.'
  },
  { id:'deep', num:'02', name:'Deep Cleansing Facial', italic:'Cleansing', nav:'Deep Cleansing Facial', duration:'60 min', sessions:'Monthly ritual',
    img:'assets/service-deep.webp',
    blurb:'A clarifying ritual that resets congested, reactive, or tired skin.',
    desc:"A restorative, clinical-grade facial that removes impurities without stripping. Built around your skin's current state — never a fixed script.",
    forWho:'Congested, oily, dull or reactive skin in need of a professional reset.',
    benefits:['Deep pore purification','Smoother texture and refined tone','Calming, non-reactive finish','Personalised via skin scan'],
    expect:'Double cleanse, skin analysis, extractions, mask and a closing massage. Sixty minutes of calm.',
    pricing:[
      {label:'Single treatment', value:'€95'},
      {label:'Course of 3 treatments', value:'€255'},
      {label:'Add-on: LED / calming mask', value:'€25–€35'},
    ],
    priceNote:'Includes skin analysis and a personalised at-home care recommendation. All prices include 21% VAT.'
  },
  { id:'glace', num:'03', name:'Glacē Glow Facial', italic:'Glow', nav:'Glacē Glow Facial', duration:'45–60 min', sessions:'Seasonal',
    img:'assets/service-glace.webp',
    blurb:'Cryo-infused luminosity with a refined, lit-from-within finish.',
    desc:'Our signature cold-therapy facial combines cryo modulation with nutrient infusion. Skin looks immediately fresh, lifted and visibly glowing.',
    forWho:'Anyone preparing for a moment — or simply wanting a better mirror on an ordinary day.',
    benefits:['Instantly visible lift','Reduced swelling and redness','Brighter, more even skin tone','Zero downtime'],
    expect:'A cool, ceremonial experience with the Glacē and Cryo 7 systems working in quiet sequence.',
    pricing:[
      {label:'Single treatment', value:'€125'},
      {label:'Course of 3 treatments', value:'€330'},
      {label:'SkinTech Signature Glow (Deep Cleansing + Glacē)', value:'€165'},
      {label:'Add-on: Glacē finish after laser/facial', value:'€45'},
    ],
    priceNote:'Ideal before an event, seasonal change or photoshoot. All prices include 21% VAT.'
  },
  { id:'scan', num:'04', name:'Free Skin Scan & Consultation', italic:'Skin Scan', nav:'Free skin scan', duration:'45 min', sessions:'Annual',
    img:'assets/service-scan.webp',
    blurb:'A technology-led reading of your skin, from surface to deeper layers.',
    desc:'A diagnostic session with our Sylton Observ 520x, mapping pigmentation, hydration, texture and underlying concerns. You leave with a written care plan — not a sales pitch.',
    forWho:'Anyone starting a treatment journey or wanting clarity on what their skin actually needs.',
    benefits:['Multi-spectrum imaging','Personal written treatment plan','No-obligation consultation','Baseline for progress tracking'],
    expect:'A calm conversation, a quick scan and a considered recommendation you can build on.',
    pricing:[
      {label:'Laser consultation + patch test', value:'Free'},
      {label:'Skin analysis / facial consultation', value:'Free'},
      {label:'Extended consultation with treatment plan', value:'€35'},
      {label:'No-show / late cancellation fee', value:'€25'},
    ],
    priceNote:'Our standard skin scan and laser consultation are always free and no-obligation. All prices include 21% VAT.'
  },
  { id:'combo', num:'05', name:'Tailored Treatment Plans', italic:'Tailored', nav:'Tailored Treatment Plan', duration:'Bespoke', sessions:'Programme',
    img:'assets/service-combo.webp',
    blurb:'Multi-modality programmes shaped to your skin and your calendar.',
    desc:'For clients who want lasting results rather than one-off sessions. We combine laser, facials and analysis in a quarterly rhythm that suits your life.',
    forWho:'Clients committed to long-term skin health and visible, sustained improvement.',
    benefits:['Integrated multi-device protocols','Quarterly rhythm with annual review','Priority booking','Dedicated specialist'],
    expect:'An extended opening consultation, then a programme built entirely around your goals.',
    pricing:[
      {label:'Opening consultation & plan', value:'Free'},
      {label:'Quarterly programme price', value:'From €495'},
      {label:'Signature Glow (Deep Cleansing + Glacē)', value:'€165 / 3x €450'},
      {label:'Annual programme', value:'On request'},
    ],
    priceNote:'Price is composed from your chosen treatments — always transparent, no surprises. All prices include 21% VAT.'
  },
];

const TECH_EN = [
  { id:'gentlemax', name:'GentleMax Pro Plus', sub:'Dual-wavelength laser platform', type:'Laser Hair Removal', region:'All body zones', tones:'Skin types I–VI',
    p1:'The clinical gold standard for hair removal and vascular treatments. The combination of 755nm Alexandrite and 1064nm Nd:YAG allows us to safely treat every skin type — including darker tones where less advanced lasers fall short.',
    p2:'Integrated dynamic cooling makes each pulse brief and comfortable. We re-calibrate every visit; a default protocol does not exist here.'
  },
  { id:'cryo7', name:'Cryo 7', sub:'Controlled cold therapy', type:'Cryo', region:'Face & body', tones:'All skin types',
    p1:'Clinically dosed cold reduces inflammation, calms reactive skin and creates the immediately lifted, visibly de-puffed finish that defines our treatments. Used alongside facials and as a standalone recovery step.',
    p2:"Cold isn't punishment here — it's sculpting. Skin feels awake and refined, without the redness that heat-based alternatives leave behind."
  },
  { id:'glace', name:'Glacē', sub:'Cryo-infusion facial system', type:'Signature facial', region:'Face, neck, décolleté', tones:'All skin types',
    p1:'The core of our Glow protocol. Glacē combines cold therapy with targeted active infusion, driving ingredients deeper while calming the surface. The result: the refined, lit-from-within appearance you see on the day itself.',
    p2:'Zero downtime, immediate visible effect, safe for sensitive skin.'
  },
  { id:'ionto', name:'IONTO Beauty Tower + Peel Sono', sub:'Professional multi-modality station', type:'Facial support', region:'Face', tones:'All skin types',
    p1:'Our treatment tower combines vapour, galvanic and high-frequency currents, Peel Sono ultrasound and microdermabrasion in one clinical-grade unit. It forms the backbone of every facial we deliver.',
    p2:'It is, simply put, the quiet workhorse of the treatment room. The skin receives exactly what it needs, without over-treatment.'
  },
  { id:'scanner', name:'Sylton Observ 520x', sub:'Multi-spectrum skin analysis', type:'Consultation', region:'Face', tones:'All skin types',
    p1:"Our skin scanner reads pigmentation, vascular patterns, hydration and pore status across multiple light spectra. It's the starting point of every considered treatment plan — and a baseline we return to over time.",
    p2:'Your skin, measured — not estimated.'
  },
];

const FAQS_EN = [
  { q:'How many laser hair removal sessions will I need?', a:'Most clients require 6 to 8 sessions, spaced 4–6 weeks apart for the face and 6–8 weeks for the body. Hair grows in cycles and the laser only targets hair in the active growth phase — patience is part of the protocol. One or two maintenance sessions per year sustain results.' },
  { q:'Is the treatment suitable for my skin type?', a:'Yes. The GentleMax Pro Plus is calibrated for Fitzpatrick skin types I through VI, including darker and reactive skin. Every session begins with a skin reading and a customised setting — we do not use a single default protocol.' },
  { q:'Will I feel much during treatment?', a:'Laser is typically described as a warm elastic snap, softened by integrated cooling. Facials are calming or refreshingly cool. Numbing cream is not usually needed, and we pause at any point you ask.' },
  { q:'How do I prepare for my first session?', a:"Avoid direct sun and self-tanner for two weeks, do not wax or epilate for four weeks, and shave the zone 24 hours before your appointment. Come with clean skin — no cream or deodorant on the area. You'll receive a full pre-care guide when you book." },
  { q:'What does aftercare look like?', a:'Expect mild warmth or redness for a few hours. Use SPF 50 for the first week, avoid sauna, intense exercise and hot showers for 24 hours, and leave active ingredients (retinol, acids) aside for 3–5 days. Hydrate generously, inside and out.' },
  { q:"What's the difference between Deep Cleansing and Glacē Glow?", a:'Deep Cleansing is a clarifying reset built around extractions and rebalancing — ideal when skin feels congested or reactive. Glacē Glow is a cold-therapy ritual that lifts, depuffs and brightens on the day. Many clients alternate between the two seasonally.' },
  { q:'Do I need a consultation before treatment?', a:'Yes — every new client begins with a skin scan and consultation. We read your skin, understand your goals and write a plan. The skin scan is always free and completely no-obligation.' },
  { q:'What does a treatment cost?', a:"Our pricing is in line with what you'd expect from a boutique laser clinic. Exact prices vary by zone, skin type and treatment goal and are discussed transparently during the free skin scan. Courses are always more affordable than individual sessions." },
  { q:'Can I book online?', a:'Yes. Online booking is available for all treatments with live availability. For combination plans and first consultations, we recommend WhatsApp or phone so we can sequence your treatments correctly.' },
  { q:'Where is the clinic?', a:"SkinTech Laser Clinic is located in central Amsterdam. You'll receive the address and directions when your appointment is confirmed." },
];

/* ===================== Technology ===================== */
const TECH_IMG = {
  gentlemax: 'assets/gentlemax.webp',
  cryo7: 'assets/cryo7.webp',
  glace: 'assets/glace.webp',
  ionto: 'assets/ionto.avif',
  scanner: 'assets/scanner.png',
};
function techIllus(id) {
  const src = TECH_IMG[id];
  if (!src) return '';
  return `<img class="tech-photo" src="${src}" alt="" loading="lazy"/>`;
}



const ARTICLES = [
  { id:'laser-guide', cat:'Behandelingen', catEn:'Treatments', date:'2026-05-01',
    titleNl:'Laserontharing: alles wat je moet weten voor je eerste sessie',
    titleEn:'Laser hair removal: everything you need to know before your first session',
    excerptNl:'Van voorbereiding tot nazorg — een compleet overzicht van wat je kunt verwachten bij laserontharing met de GentleMax Pro Plus.',
    excerptEn:'From preparation to aftercare — a complete overview of what to expect from laser hair removal with the GentleMax Pro Plus.',
    img:'assets/service-laser.webp',
  },
  { id:'skin-types', cat:'Huidverzorging', catEn:'Skin Care', date:'2026-04-28',
    titleNl:'Huidtype I t/m VI: waarom het uitmaakt voor jouw behandeling',
    titleEn:'Skin type I to VI: why it matters for your treatment',
    excerptNl:'Niet elke huid reageert hetzelfde. We leggen uit hoe we de GentleMax Pro Plus kalibreren voor elk Fitzpatrick-huidtype.',
    excerptEn:'Not every skin responds the same way. We explain how we calibrate the GentleMax Pro Plus for every Fitzpatrick skin type.',
    img:'assets/service-scan.webp',
  },
  { id:'glace-glow', cat:'Behandelingen', catEn:'Treatments', date:'2026-04-20',
    titleNl:'Glacē Glow Facial: de wetenschap achter de glow',
    titleEn:'Glacē Glow Facial: the science behind the glow',
    excerptNl:'Hoe de Candela Glacē met vortex-technologie jouw huid reinigt, exfolieert en laat stralen.',
    excerptEn:'How the Candela Glacē uses vortex technology to cleanse, exfoliate, and make your skin glow.',
    img:'assets/service-glace.webp',
  },
  { id:'prep-aftercare', cat:'Tips', catEn:'Tips', date:'2026-04-15',
    titleNl:'Voorbereiding en nazorg: zo haal je het meeste uit je behandeling',
    titleEn:'Preparation and aftercare: how to get the most from your treatment',
    excerptNl:'De juiste voorbereiding en nazorg maken het verschil. Onze checklist voor voor en na elke sessie.',
    excerptEn:'The right preparation and aftercare make all the difference. Our checklist for before and after every session.',
    img:'assets/service-deep.webp',
  },
  { id:'deep-vs-glace', cat:'Vergelijking', catEn:'Comparison', date:'2026-04-10',
    titleNl:'Deep Cleansing vs. Glacē Glow: welke facial past bij jou?',
    titleEn:'Deep Cleansing vs. Glacē Glow: which facial suits you?',
    excerptNl:'Twee signature facials, elk met een eigen doel. We helpen je kiezen op basis van jouw huidtype en wensen.',
    excerptEn:'Two signature facials, each with a distinct purpose. We help you choose based on your skin type and goals.',
    img:'assets/service-combo.webp',
  },
  { id:'sylton-scan', cat:'Technologie', catEn:'Technology', date:'2026-04-05',
    titleNl:'De Sylton Observ 520x: jouw huid in beeld',
    titleEn:'The Sylton Observ 520x: your skin in focus',
    excerptNl:'Wat onze huidscanner ziet dat het blote oog mist — en waarom dat de basis vormt van elk behandelplan.',
    excerptEn:'What our skin scanner sees that the naked eye misses — and why that forms the foundation of every treatment plan.',
    img:'assets/sylton-scan.png',
  },
  { id:'ipl-vs-laser', cat:'Vergelijking', catEn:'Comparison', date:'2026-05-01',
    titleNl:'IPL vs. laser: wat is het verschil en wat werkt beter?',
    titleEn:'IPL vs. laser: what\'s the difference and which works better?',
    excerptNl:'Intense Pulsed Light en echte laser worden vaak door elkaar gehaald. We leggen de wetenschappelijke verschillen uit.',
    excerptEn:'Intense Pulsed Light and true laser are often confused. We explain the scientific differences.',
    img:'assets/service-laser.webp',
  },
  { id:'laser-donkere-huid', cat:'Huidverzorging', catEn:'Skin Care', date:'2026-04-30',
    titleNl:'Laserontharing bij donkere huid: veilig, effectief en inclusief',
    titleEn:'Laser hair removal for dark skin: safe, effective, and inclusive',
    excerptNl:'Veel klinieken kunnen donkere huidtypen niet veilig behandelen. Onze dual-wavelength laser wel.',
    excerptEn:'Many clinics can\'t safely treat darker skin types. Our dual-wavelength laser can.',
    img:'assets/service-laser.webp',
  },
  { id:'huidverbetering-amsterdam', cat:'Huidverzorging', catEn:'Skin Care', date:'2026-04-25',
    titleNl:'Huidverbetering in Amsterdam: jouw complete gids',
    titleEn:'Skin improvement in Amsterdam: your complete guide',
    excerptNl:'Van huidanalyse tot behandelplan — ontdek hoe professionele huidverzorging jouw huid transformeert.',
    excerptEn:'From skin analysis to treatment plan — discover how professional skincare transforms your skin.',
    img:'assets/service-glace.webp',
  },
];

// Article content is lazy-loaded from articles-content.js
let ARTICLE_CONTENT = {};
let _articlesLoaded = false;
function loadArticleContent() {
  if (_articlesLoaded) return Promise.resolve();
  return new Promise(function(resolve) {
    var s = document.createElement('script');
    s.src = 'js/articles-content.min.js';
    s.onload = function() { _articlesLoaded = true; resolve(); };
    s.onerror = function() { _articlesLoaded = true; resolve(); };
    document.head.appendChild(s);
  });
}




