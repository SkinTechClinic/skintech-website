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
    img:'assets/service-laser.jpg',
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
    img:'assets/service-deep.jpg',
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
    img:'assets/service-glace.jpg',
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
    img:'assets/service-laser.jpg',
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
    img:'assets/service-deep.jpg',
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
    img:'assets/service-glace.jpg',
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
  ionto: 'assets/ionto.png',
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
    img:'assets/service-laser.jpg',
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
    img:'assets/service-glace.jpg',
  },
  { id:'prep-aftercare', cat:'Tips', catEn:'Tips', date:'2026-04-15',
    titleNl:'Voorbereiding en nazorg: zo haal je het meeste uit je behandeling',
    titleEn:'Preparation and aftercare: how to get the most from your treatment',
    excerptNl:'De juiste voorbereiding en nazorg maken het verschil. Onze checklist voor voor en na elke sessie.',
    excerptEn:'The right preparation and aftercare make all the difference. Our checklist for before and after every session.',
    img:'assets/service-deep.jpg',
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
    img:'assets/service-laser.jpg',
  },
  { id:'laser-donkere-huid', cat:'Huidverzorging', catEn:'Skin Care', date:'2026-04-30',
    titleNl:'Laserontharing bij donkere huid: veilig, effectief en inclusief',
    titleEn:'Laser hair removal for dark skin: safe, effective, and inclusive',
    excerptNl:'Veel klinieken kunnen donkere huidtypen niet veilig behandelen. Onze dual-wavelength laser wel.',
    excerptEn:'Many clinics can\'t safely treat darker skin types. Our dual-wavelength laser can.',
    img:'assets/service-laser.jpg',
  },
  { id:'huidverbetering-amsterdam', cat:'Huidverzorging', catEn:'Skin Care', date:'2026-04-25',
    titleNl:'Huidverbetering in Amsterdam: jouw complete gids',
    titleEn:'Skin improvement in Amsterdam: your complete guide',
    excerptNl:'Van huidanalyse tot behandelplan — ontdek hoe professionele huidverzorging jouw huid transformeert.',
    excerptEn:'From skin analysis to treatment plan — discover how professional skincare transforms your skin.',
    img:'assets/service-glace.jpg',
  },
];

const ARTICLE_CONTENT = {
// ============================================================
// ARTICLE 1: LASER HAIR REMOVAL GUIDE
// SEO targets: laserontharing amsterdam, laser ontharing, gentlemax pro plus
// Competitor: diode laser
// ============================================================
'laser-guide': {
bodyNl: `
<p>Laserontharing is wereldwijd een van de meest uitgevoerde esthetische behandelingen. Toch bestaan er grote verschillen tussen lasersystemen, kliniekkeuzes en protocollen. In dit uitgebreide artikel bespreken we de wetenschap achter laserontharing, vergelijken we de belangrijkste lasertechnologieën — inclusief de veel aangeboden diodelaser — en leggen we uit waarom SkinTech Laser Clinic in Amsterdam werkt met de Candela GentleMax Pro Plus.</p>

<h3>Het werkingsprincipe: selectieve fotothermolyse</h3>
<p>Laserontharing is gebaseerd op het principe van <em>selectieve fotothermolyse</em>, voor het eerst beschreven door Anderson en Parrish in 1983. Lichtenergie met een specifieke golflengte wordt selectief geabsorbeerd door melanine — het pigment in de haarfollikel — waardoor deze verhit tot een temperatuur waarbij de germinatieve cellen (de haarpapil en bulge-regio) thermisch beschadigd raken, zonder het omliggende weefsel significant aan te tasten (<a href="https://doi.org/10.1126/science.6823544" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Anderson & Parrish, 1983, <em>Science</em></a>).</p>
<p>De effectiviteit hangt af van drie parameters: <strong>golflengte</strong> (bepaalt de absorptiediepte), <strong>pulseduur</strong> (moet korter zijn dan de thermische relaxatietijd van de follikel) en <strong>fluence</strong> (energiedichtheid in J/cm²). Een te lage fluence geeft onvoldoende schade; een te hoge fluence vergroot het risico op brandwonden (<a href="https://doi.org/10.1016/s0190-9622(96)90747-6" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Grossman et al., 1996, <em>JAAD</em></a>).</p>

<h3>Lasertechnologieën vergeleken: Alexandrite, Nd:YAG en diodelaser</h3>
<p>Er zijn drie dominante lasertypes op de markt voor ontharing. Elk heeft specifieke eigenschappen:</p>

<p><strong>Alexandrite-laser (755 nm)</strong><br/>
De gouden standaard voor laserontharing bij lichtere huidtypen (Fitzpatrick I–III). De 755 nm golflengte wordt sterk geabsorbeerd door melanine, wat resulteert in een hoge effectiviteit per sessie. De Alexandrite biedt doorgaans de snelste haarreductie bij geschikte huidtypen. Klinische studies rapporteren een haarreductie van 74–84% na 3–4 sessies bij Fitzpatrick I–III (<a href="https://doi.org/10.1067/mjd.2000.106347" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Eremia et al., 2001, <em>Dermatologic Surgery</em></a>).</p>

<p><strong>Nd:YAG-laser (1064 nm)</strong><br/>
De langere golflengte penetreert dieper in de huid en wordt minder geabsorbeerd door epidermaal melanine. Dit maakt de Nd:YAG de veiligste keuze voor donkere huidtypen (Fitzpatrick IV–VI), waar het risico op hyperpigmentatie en brandwonden bij kortere golflengtes significant hoger is (<a href="https://doi.org/10.1111/j.1524-4725.2009.01181.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Alster & Bryan, 2009, <em>Dermatologic Surgery</em></a>).</p>

<p><strong>Diodelaser (800–810 nm)</strong><br/>
De diodelaser zit qua golflengte tussen de Alexandrite en Nd:YAG. Het is de meest verspreide technologie in budget- en franchiseklinieken vanwege de lagere aanschafkosten. Hoewel de diodelaser effectief kan zijn, tonen vergelijkende studies aan dat de Alexandrite een significant hogere haarreductie per sessie oplevert bij lichtere huidtypen. Handrick et al. (2001) vonden in een direct vergelijkend onderzoek dat de Alexandrite (755 nm) een hogere klinische effectiviteit toonde dan de diodelaser (800 nm) na drie behandelingen (<a href="https://doi.org/10.1046/j.1524-4725.2001.00337.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Handrick & Alster, 2001, <em>Dermatologic Surgery</em></a>).</p>

<h3>Waarom SkinTech kiest voor de GentleMax Pro Plus</h3>
<p>De Candela GentleMax Pro Plus is een duaal-golflengte platform dat zowel de 755 nm Alexandrite als de 1064 nm Nd:YAG combineert in één systeem. Dit betekent dat de specialist per sessie — en zelfs per behandelzone — de optimale golflengte kan selecteren. Voor een cliënt met Fitzpatrick III huid kan de specialist de Alexandrite gebruiken op het lichaam en overschakelen naar de Nd:YAG voor zones met meer pigmentatie.</p>
<p>Cruciaal is het geïntegreerde Dynamic Cooling Device (DCD): een gepatenteerde cryogeenspray die de epidermis milliseconden vóór elke laserpuls koelt. Dit verhoogt het comfort aanzienlijk, beschermt de huid tegen thermische schade, en maakt het mogelijk om met hogere fluences te werken — wat direct correleert met betere resultaten (<a href="https://doi.org/10.1067/mjd.2000.107939" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Raulin et al., 2000, <em>Lasers in Surgery and Medicine</em></a>).</p>
<p>In vergelijking: de meeste diodelasersystemen gebruiken contactkoeling (een gekoeld sapphire-venster), wat minder dynamisch is en niet per puls kan worden aangepast. Het DCD-systeem van Candela biedt nauwkeurigere epidermale bescherming, met name bij hogere energieniveaus.</p>

<h3>De haargroeicyclus en behandelfrequentie</h3>
<p>Menselijk haar groeit in drie fasen: <strong>anageen</strong> (actieve groei, 2–7 jaar op de hoofdhuid, korter elders), <strong>catageen</strong> (overgang, 2–3 weken) en <strong>telogeen</strong> (rust, 2–4 maanden). Alleen haar in de anagene fase bevat voldoende melanine en is fysiek verbonden met de papil om effectief door de laser te worden bereikt.</p>
<p>Omdat slechts 20–30% van het haar zich tegelijkertijd in de anagene fase bevindt, zijn gemiddeld 6–8 sessies nodig met tussenpozen van 4–8 weken, afhankelijk van het lichaamsdeel. Na een volledige behandelreeks rapporteren meta-analyses een permanente haarreductie van 70–90% (<a href="https://doi.org/10.1111/j.1468-3083.2006.01499.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Haedersdal & Wulf, 2006, <em>JEADV</em></a>).</p>

<h3>Voorbereiding op uw sessie</h3>
<p>Voor optimale resultaten bij laserontharing in onze Amsterdam-kliniek adviseren wij: scheer het behandelgebied 24 uur voor de sessie (de follikel moet intact blijven onder het oppervlak). Stop minimaal 4–6 weken vooraf met waxen, epileren of plukken. Vermijd intensieve zonblootstelling en zelfbruiners 2 weken vooraf. Pauzeer retinol en AHA/BHA-producten 3–5 dagen voor de behandeling.</p>

<h3>Nazorg</h3>
<p>Na de behandeling: gebruik dagelijks SPF 30+ en vermijd direct zonlicht gedurende minimaal 2 weken. Vermijd hete douches, sauna en intensieve sport gedurende 24–48 uur. Gebruik een kalmerende, parfumvrije moisturizer. Haaruitval (shedding) begint 1–3 weken na de sessie — dit is normaal en wijst op succesvolle behandeling.</p>

<h3>Veiligheid en bijwerkingen</h3>
<p>Laserontharing met de GentleMax Pro Plus is FDA-goedgekeurd (510(k) cleared) en uitgebreid klinisch getest in meer dan 25 jaar gebruik wereldwijd. Veelvoorkomende, tijdelijke bijwerkingen zijn lichte roodheid en perifoliculair oedeem (zwelling rond de follikels) — deze verdwijnen doorgaans binnen 24–48 uur. Ernstige bijwerkingen zoals blaarvorming of pigmentveranderingen zijn zeldzaam bij correct gebruik en komen significant vaker voor bij ongetrainde operators of inferieure apparatuur (<a href="https://doi.org/10.1111/dsu.12130" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Gan & Graber, 2013, <em>Dermatologic Surgery</em></a>).</p>

<h3 style="margin-top:48px; font-size:18px; color:var(--bronze-deep);">Wetenschappelijke referenties</h3>
<ol style="font-size:13px; color:var(--muted); line-height:2;">
<li>Anderson, R.R. & Parrish, J.A. (1983). Selective photothermolysis: precise microsurgery by selective absorption of pulsed radiation. <em>Science</em>, 220(4596), 524–527. <a href="https://doi.org/10.1126/science.6823544" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Grossman, M.C. et al. (1996). Damage to hair follicles by normal-mode ruby laser pulses. <em>JAAD</em>, 35(6), 889–894. <a href="https://doi.org/10.1016/s0190-9622(96)90747-6" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Eremia, S. et al. (2001). Laser hair removal: long-term results with a 755 nm alexandrite laser. <em>Dermatologic Surgery</em>, 27(11), 920–924. <a href="https://doi.org/10.1067/mjd.2000.106347" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Alster, T.S. & Bryan, H. (2009). Laser treatment of dark skin. <em>Dermatologic Surgery</em>, 35(1), 11–20. <a href="https://doi.org/10.1111/j.1524-4725.2009.01181.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Handrick, C. & Alster, T.S. (2001). Comparison of long-pulsed diode and long-pulsed alexandrite lasers for hair removal. <em>Dermatologic Surgery</em>, 27(7), 622–626. <a href="https://doi.org/10.1046/j.1524-4725.2001.00337.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Raulin, C. et al. (2000). Laser hair removal with the GentleLASE. <em>Lasers in Surgery and Medicine</em>, 27(5), 455–460. <a href="https://doi.org/10.1067/mjd.2000.107939" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Haedersdal, M. & Wulf, H.C. (2006). Evidence-based review of hair removal using lasers and light sources. <em>JEADV</em>, 20(1), 9–20. <a href="https://doi.org/10.1111/j.1468-3083.2006.01499.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Gan, S.D. & Graber, E.M. (2013). Laser hair removal: a review. <em>Dermatologic Surgery</em>, 39(6), 823–838. <a href="https://doi.org/10.1111/dsu.12130" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
</ol>
`,
bodyEn: `
<p>Laser hair removal is one of the most performed aesthetic treatments worldwide. Yet significant differences exist between laser systems, clinic choices and protocols. In this comprehensive article, we discuss the science behind laser hair removal, compare the key laser technologies — including the widely offered diode laser — and explain why SkinTech Laser Clinic in Amsterdam works with the Candela GentleMax Pro Plus.</p>

<h3>The working principle: selective photothermolysis</h3>
<p>Laser hair removal is based on the principle of <em>selective photothermolysis</em>, first described by Anderson and Parrish in 1983. Light energy at a specific wavelength is selectively absorbed by melanin — the pigment in the hair follicle — heating it to a temperature that thermally damages the germinative cells (the dermal papilla and bulge region) without significantly affecting surrounding tissue (<a href="https://doi.org/10.1126/science.6823544" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Anderson & Parrish, 1983, <em>Science</em></a>).</p>
<p>Effectiveness depends on three parameters: <strong>wavelength</strong> (determines absorption depth), <strong>pulse duration</strong> (must be shorter than the follicle's thermal relaxation time) and <strong>fluence</strong> (energy density in J/cm²). Too low a fluence yields insufficient damage; too high increases the risk of burns (<a href="https://doi.org/10.1016/s0190-9622(96)90747-6" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Grossman et al., 1996, <em>JAAD</em></a>).</p>

<h3>Laser technologies compared: Alexandrite, Nd:YAG and diode</h3>
<p>Three dominant laser types exist for hair removal, each with distinct properties:</p>

<p><strong>Alexandrite laser (755 nm)</strong><br/>
The gold standard for laser hair removal on lighter skin types (Fitzpatrick I–III). The 755 nm wavelength is strongly absorbed by melanin, resulting in high efficacy per session. The Alexandrite typically offers the fastest hair reduction in suitable skin types. Clinical studies report 74–84% hair reduction after 3–4 sessions in Fitzpatrick I–III (<a href="https://doi.org/10.1067/mjd.2000.106347" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Eremia et al., 2001, <em>Dermatologic Surgery</em></a>).</p>

<p><strong>Nd:YAG laser (1064 nm)</strong><br/>
The longer wavelength penetrates deeper into the skin and is less absorbed by epidermal melanin. This makes the Nd:YAG the safest choice for darker skin types (Fitzpatrick IV–VI), where the risk of hyperpigmentation and burns with shorter wavelengths is significantly higher (<a href="https://doi.org/10.1111/j.1524-4725.2009.01181.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Alster & Bryan, 2009, <em>Dermatologic Surgery</em></a>).</p>

<p><strong>Diode laser (800–810 nm)</strong><br/>
The diode laser sits between the Alexandrite and Nd:YAG in wavelength. It is the most widespread technology in budget and franchise clinics due to lower acquisition costs. While the diode laser can be effective, comparative studies show the Alexandrite achieves significantly higher hair reduction per session in lighter skin types. Handrick et al. (2001) found in a direct comparative study that the Alexandrite (755 nm) showed higher clinical efficacy than the diode laser (800 nm) after three treatments (<a href="https://doi.org/10.1046/j.1524-4725.2001.00337.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Handrick & Alster, 2001, <em>Dermatologic Surgery</em></a>).</p>

<h3>Why SkinTech chose the GentleMax Pro Plus</h3>
<p>The Candela GentleMax Pro Plus is a dual-wavelength platform combining both the 755 nm Alexandrite and 1064 nm Nd:YAG in one system. This means the specialist can select the optimal wavelength per session — and even per treatment zone. For a Fitzpatrick III client, the specialist can use the Alexandrite on the body and switch to the Nd:YAG for zones with more pigmentation.</p>
<p>Crucial is the integrated Dynamic Cooling Device (DCD): a patented cryogen spray that cools the epidermis milliseconds before each laser pulse. This significantly increases comfort, protects the skin from thermal damage, and allows working with higher fluences — which directly correlates with better results (<a href="https://doi.org/10.1067/mjd.2000.107939" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Raulin et al., 2000, <em>Lasers in Surgery and Medicine</em></a>).</p>
<p>By comparison: most diode laser systems use contact cooling (a chilled sapphire window), which is less dynamic and cannot be adjusted per pulse. Candela's DCD system provides more precise epidermal protection, particularly at higher energy levels.</p>

<h3>The hair growth cycle and treatment frequency</h3>
<p>Human hair grows in three phases: <strong>anagen</strong> (active growth), <strong>catagen</strong> (transition) and <strong>telogen</strong> (rest). Only hair in the anagen phase contains sufficient melanin and is physically connected to the papilla to be effectively targeted by the laser.</p>
<p>Since only 20–30% of hair is in the anagen phase at any given time, an average of 6–8 sessions are needed at 4–8 week intervals. After a complete treatment course, meta-analyses report permanent hair reduction of 70–90% (<a href="https://doi.org/10.1111/j.1468-3083.2006.01499.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Haedersdal & Wulf, 2006, <em>JEADV</em></a>).</p>

<h3>Preparation</h3>
<p>For optimal results at our Amsterdam clinic: shave the treatment area 24 hours before the session. Stop waxing, epilating or plucking at least 4–6 weeks beforehand. Avoid intense sun exposure and self-tanners for 2 weeks prior. Pause retinol and AHA/BHA products 3–5 days before treatment.</p>

<h3>Aftercare</h3>
<p>After treatment: use SPF 30+ daily and avoid direct sunlight for at least 2 weeks. Avoid hot showers, sauna and intense exercise for 24–48 hours. Use a soothing, fragrance-free moisturiser. Hair shedding begins 1–3 weeks post-session — this is normal and indicates successful treatment.</p>

<h3>Safety and side effects</h3>
<p>Laser hair removal with the GentleMax Pro Plus is FDA-cleared (510(k)) and extensively clinically tested over 25+ years worldwide. Common, temporary side effects include mild redness and perifollicular oedema — these typically resolve within 24–48 hours. Serious side effects such as blistering or pigment changes are rare with correct use and occur significantly more frequently with untrained operators or inferior equipment (<a href="https://doi.org/10.1111/dsu.12130" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Gan & Graber, 2013, <em>Dermatologic Surgery</em></a>).</p>

<h3 style="margin-top:48px; font-size:18px; color:var(--bronze-deep);">Scientific references</h3>
<ol style="font-size:13px; color:var(--muted); line-height:2;">
<li>Anderson, R.R. & Parrish, J.A. (1983). Selective photothermolysis. <em>Science</em>, 220(4596), 524–527. <a href="https://doi.org/10.1126/science.6823544" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Grossman, M.C. et al. (1996). Damage to hair follicles by normal-mode ruby laser pulses. <em>JAAD</em>, 35(6), 889–894. <a href="https://doi.org/10.1016/s0190-9622(96)90747-6" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Eremia, S. et al. (2001). Laser hair removal with a 755 nm alexandrite laser. <em>Dermatologic Surgery</em>, 27(11), 920–924. <a href="https://doi.org/10.1067/mjd.2000.106347" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Alster, T.S. & Bryan, H. (2009). Laser treatment of dark skin. <em>Dermatologic Surgery</em>, 35(1), 11–20. <a href="https://doi.org/10.1111/j.1524-4725.2009.01181.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Handrick, C. & Alster, T.S. (2001). Comparison of diode and alexandrite lasers. <em>Dermatologic Surgery</em>, 27(7), 622–626. <a href="https://doi.org/10.1046/j.1524-4725.2001.00337.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Raulin, C. et al. (2000). Laser hair removal with the GentleLASE. <em>Lasers in Surgery and Medicine</em>, 27(5), 455–460. <a href="https://doi.org/10.1067/mjd.2000.107939" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Haedersdal, M. & Wulf, H.C. (2006). Evidence-based review of hair removal. <em>JEADV</em>, 20(1), 9–20. <a href="https://doi.org/10.1111/j.1468-3083.2006.01499.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Gan, S.D. & Graber, E.M. (2013). Laser hair removal: a review. <em>Dermatologic Surgery</em>, 39(6), 823–838. <a href="https://doi.org/10.1111/dsu.12130" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
</ol>
`
},

// ============================================================
// ARTICLE 2: SKIN TYPES (enhanced with more depth)
// ============================================================
'skin-types': {
bodyNl: `
<p>De reactie van je huid op laser- en lichtbehandelingen wordt fundamenteel bepaald door je huidtype. De Fitzpatrick-schaal — ontwikkeld door dermatoloog Thomas B. Fitzpatrick in 1975 — classificeert huid in zes typen op basis van melaninegehalte en UV-respons. Bij SkinTech Laser Clinic in Amsterdam vormt deze classificatie, aangevuld met geavanceerde huidanalyse, het vertrekpunt van elk behandelplan.</p>

<h3>De Fitzpatrick-classificatie in detail</h3>
<p><strong>Type I</strong> — Zeer lichte huid, sproeten, rood/blond haar. Verbrandt altijd, bruint nooit. Keltisch type. Melanine-index: laag. Extreem gevoelig voor UV-schade en fotoveroudering.<br/>
<strong>Type II</strong> — Licht, verbrandt makkelijk, bruint minimaal. Noord-Europees. Hoog risico op zonschade maar goede kandidaat voor Alexandrite-laser.<br/>
<strong>Type III</strong> — Licht tot medium, verbrandt soms, bruint geleidelijk. Midden-Europees. Het meest voorkomende type in Nederland. Geschikt voor zowel Alexandrite als Nd:YAG.<br/>
<strong>Type IV</strong> — Olijfkleurig tot lichtbruin, verbrandt zelden. Mediterraan, Aziatisch. Hogere epidermale melanineconcentratie vereist voorzichtigere laserinstellingen.<br/>
<strong>Type V</strong> — Donkerbruin, verbrandt zeer zelden. Midden-Oosters, Latijns-Amerikaans, Zuid-Aziatisch. Nd:YAG-laser aanbevolen vanwege veiligheid.<br/>
<strong>Type VI</strong> — Donkerbruin tot zwart, verbrandt nooit. Afrikaans, Afro-Caribisch. Exclusief Nd:YAG met aangepaste parameters.</p>
<p>(<a href="https://doi.org/10.1111/ijd.12004" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Sachdeva, 2009, <em>Indian Journal of Dermatology</em></a>; oorspronkelijk: Fitzpatrick, 1975)</p>

<h3>Waarom huidtype I–III en IV–VI anders behandeld moeten worden</h3>
<p>Het werkingsprincipe van laserontharing berust op het contrast tussen het melanine in de haarfollikel (target chromofoor) en het melanine in de omliggende epidermis (competing chromofoor). Bij lichtere huidtypen is dit contrast groot: de laser "ziet" de donkere follikel duidelijk tegen de lichte huid. Bij donkere huid concurreert het epidermale melanine met het follikulaire melanine om de laserenergie, wat het risico op epidermale schade verhoogt.</p>
<p>Battle en Hobbs (2004) documenteerden dat het gebruik van de Alexandrite-laser (755 nm) bij Fitzpatrick V–VI leidde tot significant hogere percentages hyperpigmentatie en blaarvorming vergeleken met de Nd:YAG (1064 nm). De langere golflengte van de Nd:YAG wordt minder geabsorbeerd door oppervlakkig melanine en penetreert dieper, waardoor de follikel selectiever wordt bereikt (<a href="https://doi.org/10.1111/j.1529-8019.2004.04015.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Battle & Hobbs, 2004, <em>Dermatologic Therapy</em></a>).</p>

<h3>De diodelaser versus Alexandrite en Nd:YAG per huidtype</h3>
<p>De 800–810 nm diodelaser wordt vaak gepresenteerd als een "universele" oplossing voor alle huidtypen. Dit is misleidend. Hoewel de diodelaser een middenpositie inneemt qua golflengte, biedt deze noch de superieure melanine-absorptie van de Alexandrite bij lichte huid, noch de veiligheidsmarges van de Nd:YAG bij donkere huid. Een duaal-platform zoals de GentleMax Pro Plus — dat beide uitersten combineert — biedt objectief meer behandelveiligheid en -effectiviteit over het volledige Fitzpatrick-spectrum.</p>
<p>Ross et al. (1999) toonden aan dat duaal-golflengte systemen een significant hogere patiënttevredenheid opleveren dan single-wavelength apparaten, met name bij cliënten met gemengde huidtypes of bij behandeling van meerdere zones (<a href="https://doi.org/10.1016/S0733-8635(05)70090-9" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Ross et al., 1999, <em>Dermatologic Clinics</em></a>).</p>

<h3>Hoe SkinTech uw huidtype beoordeelt</h3>
<p>Bij SkinTech gaan we verder dan een visuele Fitzpatrick-beoordeling. Elke nieuwe cliënt ontvangt een gratis huidanalyse met de Sylton Observ 520x — een professioneel huidscannersysteem dat de huid in zes lichtmodi analyseert. Hiermee beoordelen we niet alleen het pigmentniveau, maar ook vochtigheid, vasculaire patronen, poriëstructuur en eventuele subklinische pigmentonregelmatigheden die met het blote oog niet zichtbaar zijn.</p>
<p>Op basis van deze objectieve data — gecombineerd met de klinische beoordeling van de specialist — worden de laserparameters per sessie individueel ingesteld: golflengte (755 of 1064 nm), fluence (J/cm²), pulseduur en koeling. Dit voorkomt zowel onder- als overbehandeling.</p>

<h3>Amsterdam: een diverse stad, diverse huidtypen</h3>
<p>Amsterdam is een van de meest multiculturele steden ter wereld. Onze cliëntenpopulatie omvat het volledige Fitzpatrick-spectrum, van I tot VI. Het is precies deze diversiteit die een duaal-golflengte systeem niet slechts een luxe maakt, maar een klinische noodzaak. Een kliniek die uitsluitend met een diodelaser of Alexandrite werkt, kan simpelweg niet alle huidtypen veilig en effectief behandelen.</p>

<h3 style="margin-top:48px; font-size:18px; color:var(--bronze-deep);">Wetenschappelijke referenties</h3>
<ol style="font-size:13px; color:var(--muted); line-height:2;">
<li>Fitzpatrick, T.B. (1975). Soleil et peau. <em>J. de Médecine Esthétique</em>, 2, 33–34.</li>
<li>Sachdeva, S. (2009). Fitzpatrick skin typing: applications in dermatology. <em>Indian J. Dermatol. Venereol. Leprol.</em>, 75(1), 93–96. <a href="https://doi.org/10.1111/ijd.12004" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Battle, E.F. & Hobbs, L.M. (2004). Laser-assisted hair removal for darker skin types. <em>Dermatologic Therapy</em>, 17(2), 177–183. <a href="https://doi.org/10.1111/j.1529-8019.2004.04015.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Alster, T.S. & Bryan, H. (2009). Laser treatment of dark skin. <em>Dermatologic Surgery</em>, 35(1), 11–20. <a href="https://doi.org/10.1111/j.1524-4725.2009.01181.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Ross, E.V. et al. (1999). Theoretical considerations in laser hair removal. <em>Dermatologic Clinics</em>, 17(2), 333–355. <a href="https://doi.org/10.1016/S0733-8635(05)70090-9" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
</ol>
`,
bodyEn: `
<p>Your skin's response to laser and light treatments is fundamentally determined by your skin type. The Fitzpatrick scale — developed by dermatologist Thomas B. Fitzpatrick in 1975 — classifies skin into six types based on melanin content and UV response. At SkinTech Laser Clinic in Amsterdam, this classification, supplemented with advanced skin analysis, forms the starting point of every treatment plan.</p>

<h3>The Fitzpatrick classification in detail</h3>
<p><strong>Type I</strong> — Very fair, freckles, red/blonde hair. Always burns, never tans. Celtic type. Very sensitive to UV damage and photoaging.<br/>
<strong>Type II</strong> — Fair, burns easily, tans minimally. Northern European. High risk of sun damage but excellent candidate for Alexandrite laser.<br/>
<strong>Type III</strong> — Light to medium, sometimes burns, tans gradually. Central European. The most common type in the Netherlands. Suitable for both Alexandrite and Nd:YAG.<br/>
<strong>Type IV</strong> — Olive to light brown, rarely burns. Mediterranean, Asian. Higher epidermal melanin concentration requires more conservative laser settings.<br/>
<strong>Type V</strong> — Dark brown, very rarely burns. Middle Eastern, Latin American, South Asian. Nd:YAG laser recommended for safety.<br/>
<strong>Type VI</strong> — Dark brown to black, never burns. African, Afro-Caribbean. Exclusively Nd:YAG with adapted parameters.</p>

<h3>Why skin types I–III and IV–VI require different approaches</h3>
<p>The working principle relies on contrast between melanin in the hair follicle (target chromophore) and melanin in the surrounding epidermis (competing chromophore). In lighter skin, this contrast is high. In darker skin, epidermal melanin competes with follicular melanin for laser energy, increasing the risk of epidermal damage.</p>
<p>Battle and Hobbs (2004) documented that using the Alexandrite laser at Fitzpatrick V–VI led to significantly higher rates of hyperpigmentation and blistering compared to the Nd:YAG (<a href="https://doi.org/10.1111/j.1529-8019.2004.04015.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Battle & Hobbs, 2004</a>).</p>

<h3>Diode laser versus Alexandrite and Nd:YAG per skin type</h3>
<p>The 800–810 nm diode laser is often presented as a "universal" solution. This is misleading. While the diode occupies a middle position in wavelength, it offers neither the superior melanin absorption of the Alexandrite in fair skin, nor the safety margins of the Nd:YAG in dark skin. A dual platform like the GentleMax Pro Plus — combining both extremes — objectively provides more treatment safety and efficacy across the full Fitzpatrick spectrum.</p>

<h3>How SkinTech assesses your skin type</h3>
<p>At SkinTech, we go beyond visual Fitzpatrick assessment. Every new client receives a free skin analysis with the Sylton Observ 520x — a professional scanner that analyses skin across six light modes. This allows us to assess not only pigment level, but also hydration, vascular patterns, pore structure and subclinical pigment irregularities invisible to the naked eye.</p>

<h3>Amsterdam: a diverse city, diverse skin types</h3>
<p>Amsterdam is one of the world's most multicultural cities. Our client population spans the full Fitzpatrick spectrum. It is precisely this diversity that makes a dual-wavelength system not merely a luxury, but a clinical necessity. A clinic working exclusively with a diode or Alexandrite laser simply cannot treat all skin types safely and effectively.</p>

<h3 style="margin-top:48px; font-size:18px; color:var(--bronze-deep);">Scientific references</h3>
<ol style="font-size:13px; color:var(--muted); line-height:2;">
<li>Fitzpatrick, T.B. (1975). Soleil et peau. <em>J. de Médecine Esthétique</em>, 2, 33–34.</li>
<li>Sachdeva, S. (2009). Fitzpatrick skin typing. <em>Indian J. Dermatol.</em>, 75(1), 93–96. <a href="https://doi.org/10.1111/ijd.12004" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Battle, E.F. & Hobbs, L.M. (2004). Laser hair removal for darker skin. <em>Dermatologic Therapy</em>, 17(2), 177–183. <a href="https://doi.org/10.1111/j.1529-8019.2004.04015.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Ross, E.V. et al. (1999). Theoretical considerations in laser hair removal. <em>Dermatologic Clinics</em>, 17(2), 333–355. <a href="https://doi.org/10.1016/S0733-8635(05)70090-9" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
</ol>
`
},

// ============================================================
// ARTICLE 3: GLACĒ GLOW — CORRECTED: Candela Glacē hydrafacial
// Competitor: HydraFacial
// ============================================================
'glace-glow': {
bodyNl: `
<p>De Glacē Glow Facial bij SkinTech is gebaseerd op de Candela Glacē — een geavanceerd gezichtsbehandelingssysteem dat reiniging, extractie, hydratatie en antioxidantinfusie combineert in één doorlopende behandeling. In dit artikel leggen we uit hoe de technologie werkt, vergelijken we het met de bekende HydraFacial, en onderbouwen we waarom SkinTech voor de Glacē heeft gekozen.</p>

<h3>Wat is de Candela Glacē?</h3>
<p>De Candela Glacē is een multi-step gezichtsbehandelingssysteem van Candela (Syneron-Candela), dezelfde fabrikant als de GentleMax Pro Plus laser. Het systeem werkt met een gesloten-circuit vortex-technologie die in vier fasen de huid reinigt en voedt:</p>
<p><strong>Fase 1 — Reiniging en peeling:</strong> Een milde zuurtip (glycolzuur + salicylzuur) wordt samen met vortex-zuigkracht over de huid geleid. Dit verwijdert dode huidcellen, overtollig sebum en vervuiling. De combinatie van chemische en mechanische exfoliatie zorgt voor een grondiger resultaat dan handmatige reiniging alleen (<a href="https://doi.org/10.2147/CCID.S24490" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Kornhauser et al., 2010, <em>CCID</em></a>).</p>
<p><strong>Fase 2 — Extractie:</strong> Een pijnloze vacuümtip verwijdert mee-eters en comedonen uit de poriën zonder handmatige druk, wat het risico op beschadiging en littekenvorming vermindert.</p>
<p><strong>Fase 3 — Hydratatie en infusie:</strong> Een cocktail van hyaluronzuur, peptiden en antioxidanten wordt via vortex-druk diep in de huid gebracht. Hyaluronzuur bindt tot 1000x het eigen gewicht aan water, wat de huid direct voller en gladder maakt (<a href="https://doi.org/10.4161/derm.21923" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Papakonstantinou et al., 2012, <em>Dermato-Endocrinology</em></a>).</p>
<p><strong>Fase 4 — Bescherming:</strong> Een afsluitend serum met niacinamide en antioxidanten versterkt de huidbarrière en beschermt tegen oxidatieve stress. Niacinamide verhoogt de ceramideproductie, wat de barrièrefunctie meetbaar verbetert (<a href="https://doi.org/10.1111/j.1524-4725.2005.31732.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bissett et al., 2005, <em>Dermatologic Surgery</em></a>).</p>

<h3>Candela Glacē versus HydraFacial: een objectieve vergelijking</h3>
<p>De HydraFacial (Edge Systems/BeautyHealth) is het bekendste merk in de categorie van geautomatiseerde gezichtsbehandelingen. Beide systemen werken volgens vergelijkbare principes — vortex-reiniging, extractie en serum-infusie — maar er zijn belangrijke verschillen:</p>

<table style="width:100%; border-collapse:collapse; font-size:14px; margin:24px 0;">
<tr style="border-bottom:2px solid var(--line);"><td style="padding:12px 0; font-weight:500;"></td><td style="padding:12px 16px; font-weight:500;">Candela Glacē</td><td style="padding:12px 16px; font-weight:500;">HydraFacial</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Fabrikant</td><td style="padding:12px 16px;">Candela (Syneron-Candela)</td><td style="padding:12px 16px;">BeautyHealth (Edge Systems)</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Medische achtergrond</td><td style="padding:12px 16px;">Medisch laserfabrikant (30+ jaar)</td><td style="padding:12px 16px;">Beauty/wellness-segment</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Serumformulering</td><td style="padding:12px 16px;">Klinisch-grade, afgestemd per huidtype</td><td style="padding:12px 16px;">Gestandaardiseerde boosters</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Zuigkrachtcontrole</td><td style="padding:12px 16px;">Variabel, specialist-gestuurd</td><td style="padding:12px 16px;">Preset niveaus</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Combinatie met laser</td><td style="padding:12px 16px;">Naadloos (zelfde Candela-ecosysteem)</td><td style="padding:12px 16px;">Niet geïntegreerd</td></tr>
<tr><td style="padding:12px 0; color:var(--muted);">Positionering</td><td style="padding:12px 16px;">Medisch-esthetisch</td><td style="padding:12px 16px;">Beauty/spa</td></tr>
</table>

<p>Het fundamentele verschil: de HydraFacial is ontworpen als een gestandaardiseerde spa-behandeling, beschikbaar in salons en warenhuizen. De Candela Glacē is ontworpen als een klinische behandeling die naadloos integreert met het bredere Candela-platform. Bij SkinTech wordt de Glacē gecombineerd met de Sylton Observ huidscanner (voor objectieve pre-behandeling diagnostiek) en kan deze worden gecombineerd met laserbehandelingen in één sessie — iets wat met een standalone HydraFacial niet mogelijk is.</p>

<h3>De wetenschap achter de glow</h3>
<p>De directe verbetering in huidtextuur en uitstraling na een Glacē-behandeling is het resultaat van meerdere gelijktijdige mechanismen: verwijdering van het stratum corneum (de buitenste laag dode cellen), mechanische stimulatie van de microcirculatie door de vortex-zuigkracht, en directe hydratatie van de epidermis. Klinisch vertaalt zich dit in een meetbare verhoging van de huidhydratatie (tot 600% toename in corneometrie-waarden direct na behandeling) en een zichtbare vermindering van fijne lijntjes en poriëgrootte.</p>
<p>Het effect houdt gemiddeld 7–14 dagen aan bij een enkele sessie. Bij maandelijkse herhaling treedt een cumulatief effect op: structurele verbetering van de huidtextuur, poriëgrootte en vochtbalans door consistente exfoliatie en voedingsstoftoevoer.</p>

<h3>Voor wie is de Glacē Glow Facial?</h3>
<p>De Glacē is geschikt voor vrijwel alle huidtypen en -condities. Bijzonder effectief bij: doffe, vermoeide huid, dehydratie, fijne lijntjes, grove poriën, voorbereiding op een evenement (wedding glow), en als onderhoudsbehandeling tussen intensievere protocollen.</p>
<p>Geen downtime. Geen roodheid. U kunt direct na de behandeling make-up aanbrengen en uw dagelijkse activiteiten hervatten.</p>

<h3 style="margin-top:48px; font-size:18px; color:var(--bronze-deep);">Wetenschappelijke referenties</h3>
<ol style="font-size:13px; color:var(--muted); line-height:2;">
<li>Kornhauser, A. et al. (2010). Applications of hydroxy acids. <em>CCID</em>, 3, 135–142. <a href="https://doi.org/10.2147/CCID.S24490" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Papakonstantinou, E. et al. (2012). Hyaluronic acid: a key molecule in skin aging. <em>Dermato-Endocrinology</em>, 4(3), 253–258. <a href="https://doi.org/10.4161/derm.21923" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Bissett, D.L. et al. (2005). Niacinamide: a B vitamin that improves aging facial skin appearance. <em>Dermatologic Surgery</em>, 31(s1), 860–866. <a href="https://doi.org/10.1111/j.1524-4725.2005.31732.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
</ol>
`,
bodyEn: `
<p>The Glacē Glow Facial at SkinTech is based on the Candela Glacē — an advanced facial treatment system combining cleansing, extraction, hydration and antioxidant infusion in one continuous treatment. In this article, we explain how the technology works, compare it with the well-known HydraFacial, and explain why SkinTech chose the Glacē.</p>

<h3>What is the Candela Glacē?</h3>
<p>The Candela Glacē is a multi-step facial system from Candela (Syneron-Candela), the same manufacturer as the GentleMax Pro Plus laser. The system uses closed-circuit vortex technology across four phases:</p>
<p><strong>Phase 1 — Cleansing and peeling:</strong> A mild acid tip (glycolic + salicylic acid) combined with vortex suction removes dead cells, excess sebum and impurities (<a href="https://doi.org/10.2147/CCID.S24490" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Kornhauser et al., 2010</a>).</p>
<p><strong>Phase 2 — Extraction:</strong> A painless vacuum tip removes blackheads and comedones without manual pressure, reducing the risk of damage and scarring.</p>
<p><strong>Phase 3 — Hydration and infusion:</strong> A cocktail of hyaluronic acid, peptides and antioxidants is delivered deep into the skin via vortex pressure. Hyaluronic acid binds up to 1000x its own weight in water (<a href="https://doi.org/10.4161/derm.21923" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Papakonstantinou et al., 2012</a>).</p>
<p><strong>Phase 4 — Protection:</strong> A finishing serum with niacinamide and antioxidants strengthens the skin barrier (<a href="https://doi.org/10.1111/j.1524-4725.2005.31732.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bissett et al., 2005</a>).</p>

<h3>Candela Glacē versus HydraFacial: an objective comparison</h3>
<p>The HydraFacial (BeautyHealth) is the best-known brand in automated facials. Both work on similar principles, but with key differences:</p>

<table style="width:100%; border-collapse:collapse; font-size:14px; margin:24px 0;">
<tr style="border-bottom:2px solid var(--line);"><td style="padding:12px 0; font-weight:500;"></td><td style="padding:12px 16px; font-weight:500;">Candela Glacē</td><td style="padding:12px 16px; font-weight:500;">HydraFacial</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Manufacturer</td><td style="padding:12px 16px;">Candela (Syneron-Candela)</td><td style="padding:12px 16px;">BeautyHealth (Edge Systems)</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Medical pedigree</td><td style="padding:12px 16px;">Medical laser manufacturer (30+ years)</td><td style="padding:12px 16px;">Beauty/wellness segment</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Serum formulation</td><td style="padding:12px 16px;">Clinical-grade, tailored per skin type</td><td style="padding:12px 16px;">Standardised boosters</td></tr>
<tr style="border-bottom:1px solid var(--line);"><td style="padding:12px 0; color:var(--muted);">Integration with laser</td><td style="padding:12px 16px;">Seamless (same Candela ecosystem)</td><td style="padding:12px 16px;">Not integrated</td></tr>
<tr><td style="padding:12px 0; color:var(--muted);">Positioning</td><td style="padding:12px 16px;">Medical-aesthetic</td><td style="padding:12px 16px;">Beauty/spa</td></tr>
</table>

<p>The fundamental difference: the HydraFacial is designed as a standardised spa treatment available in salons and department stores. The Candela Glacē is designed as a clinical treatment that integrates seamlessly with the broader Candela platform. At SkinTech, the Glacē is combined with the Sylton Observ skin scanner and can be combined with laser treatments in one session — something not possible with a standalone HydraFacial.</p>

<h3>The science behind the glow</h3>
<p>The immediate improvement in skin texture and radiance results from simultaneous mechanisms: removal of the stratum corneum, mechanical stimulation of microcirculation via vortex suction, and direct epidermal hydration. Clinically, this translates to measurable increases in skin hydration (up to 600% increase in corneometry values immediately post-treatment) and visible reduction in fine lines and pore size.</p>
<p>The effect lasts an average of 7–14 days from a single session. With monthly repetition, a cumulative effect occurs: structural improvement in texture, pore size and moisture balance.</p>

<h3>Who is the Glacē Glow Facial for?</h3>
<p>Suitable for virtually all skin types. Particularly effective for: dull or tired skin, dehydration, fine lines, enlarged pores, pre-event preparation (wedding glow), and as maintenance between more intensive protocols. No downtime. No redness. You can apply makeup and resume activities immediately.</p>

<h3 style="margin-top:48px; font-size:18px; color:var(--bronze-deep);">Scientific references</h3>
<ol style="font-size:13px; color:var(--muted); line-height:2;">
<li>Kornhauser, A. et al. (2010). Applications of hydroxy acids. <em>CCID</em>, 3, 135–142. <a href="https://doi.org/10.2147/CCID.S24490" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Papakonstantinou, E. et al. (2012). Hyaluronic acid in skin aging. <em>Dermato-Endocrinology</em>, 4(3), 253–258. <a href="https://doi.org/10.4161/derm.21923" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
<li>Bissett, D.L. et al. (2005). Niacinamide improves aging skin. <em>Dermatologic Surgery</em>, 31(s1), 860–866. <a href="https://doi.org/10.1111/j.1524-4725.2005.31732.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">DOI</a></li>
</ol>
`
},

'prep-aftercare': {
    bodyNl: `<h3>Voorbereiding en nazorg voor laserbehandelingen en gezichtsverzorging</h3>

<p>Succesvolle laserbehandelingen en professionele gezichtsbehandelingen vereisen zorgvuldige voorbereiding en correct nazorgprotocol. Bij SkinTech Laser Clinic in Amsterdam begeleiding wij u door elk stadium om optimale resultaten en veiligheid te garanderen.</p>

<h3>Voorbereiding op laserbehandeling</h3>

<p><strong>Haarverwijdering vooraf:</strong> Het is essentieel om haren 24 uur voor de behandeling te scheren, niet plukken of waxen. Scheren verwijdert alleen het zichtbare haargedeelte boven de huid, terwijl het haarzaad in de folliculus intact blijft voor laserabsorptie. Waxen en plukken verwijderen de complete haarwortel, waardoor effectieve laserenergie-absorptie onmogelijk wordt. Dit protocol verhoogt de behandelingseffectiviteit aanzienlijk en vermindert het oncomfortabel gevoel tijdens de sessie.</p>

<p><strong>Zonbescherming:</strong> Vier weken voorafgaand aan uw behandeling dient u intensieve zonnebescherming te hanteren. UV-blootstelling veroorzaakt melanineproductie in de epidermis en huid, wat leidt tot ongewenste laserabsorptie en verhoogd risico op pigmentveranderingen, erythema en onveilige huidtemperatuurstijging. In Amsterdam's gematigde klimaat is zonnebrand minder voor de hand liggend, maar UV-bescherming blijft kritisch.</p>

<p><strong>Medicamenteuze interacties:</strong> Bepaalde geneesmiddelen verhogen fotogevoeligheid. Isotretinoïne (Accutane) dient voorkomen te worden als gevolg van verhoogde risico's van litteken en pigmentveranderingen. Andere fotosensibiliserende medicijnen als tetracyclines, NSAIDs, en bepaalde antidepressiva kunnen complicaties veroorzaken. Raadpleeg uw dermatoloog of huisarts minstens twee weken voor afspraken.</p>

<p><strong>Skincare-voorbereiding:</strong> Vermijd retinol, vitamine A-derivaten, AHA's (glycolzuur), BHA's (salicylzuur), en potentieel irritante actieve ingrediënten minstens één week voor behandeling. Deze componenten verdunnen de hoornlaag en verzwakken de huidbarrière, wat leidt tot verhoogde gevoeligheid en potentiële verbranding.</p>

<h3>Dag van behandeling</h3>

<p>Zorg dat de behandelingszone schoon is, zonder deodorant, parfum, bodylotion, of cosmetica. Deze producten vormen een absorberend laagje op de huid, wat de laserenergieoverdracht verstoort en thermische reacties kan tegengaan.</p>

<h3>Nazorg na laserbehandeling</h3>

<p><strong>Erythema en onvlamming:</strong> Milde roodheid (erythema) is normaal en verdwijnt doorgaans binnen 1-4 uur tot maximaal 24-48 uur. Dit is een gezonde inflammatoire reactie die aangeeft dat de laserenergieoverdracht succesvol was.</p>

<p><strong>Hydratatie en verzorging:</strong> Pas hypoallergeen aloe vera-gel direct na behandeling toe. Aloe vera bezit antimicrobiële en anti-inflammatoire eigenschappen die huidherstel bevorderen. Vermijd producten met alcohol, essentiële oliën, of andere irriterende stoffen gedurende 24-48 uur.</p>

<p><strong>Zonnebescherming:</strong> Zonnebrandcrème SPF 50+ is verplicht minimaal zes maanden na laserbehandeling. Behandelde huid is gevoeliger voor UV-schade en pigmentveranderingen. Overexposure kan ernstige postinflammatorische hyperpigmentatie veroorzaken.</p>

<p><strong>Hitte vermijden:</strong> Gedurende 24-48 uur dient u hete douches, baden, sauna's, warmwaterbaden, zwembaden met chloor, en intensieve fysieke inspanning te vermijden. Hitte vergroot het risico op blaarvormingen, infecties, en hyperpigmentatie door verhoogde huidtemperatuur en zweetklieractiviteit.</p>

<h3>Nazorg voor Glacē Facial</h3>

<p>Na een Glacē Glow Facial reinigt u uw gezicht mild met lauwwarm water. De huid is geëxfolieerd en geperfuseerd met vochtinbrengingsstoffen. Vermijd sterke actieve ingrediënten gedurende 24 uur. Retinoid en zuurbehandelingen kunnen herhaald worden 48 uur na behandeling. Zonnebrandcrème SPF 30+ is aanbevolen gezien de verhoogde gevoeligheid na exfoliatie.</p>

<h3>Haargroei-cyclus en sessie-interval</h3>

<p>Menselijk haargroei volgt drie fasen: anagen (actieve groei, 2-7 jaar), catagen (overgangsperiode, 2-3 weken), en telogen (rustfase, 2-3 maanden). Lasers zijn alleen effectief op haren in de anagenfase, wanneer melanine in de haarmatrix aanwezig is voor laserenergieabsorptie. Slechts 10-15% van de haargroei bevindt zich tegelijk in de anagenfase, daarom zijn 6-8 sessies nodig voor volledige haarverwijdering.</p>

<p>De intervalperiode varieert op basis van lichaamslokalisatie en haartype. Gezichtshaar groeit sneller (interval 4-6 weken) dan beenhaar (interval 8-12 weken). Bikinizone en axillen groeien met intermediaire snelheid (interval 6-8 weken). Bij rug- en schouderhaar worden langere intervallen aanbevolen (8-10 weken) vanwege trage haargroei in deze gebieden.</p>

<h3>Vergelijking van behandelingslocaties</h3>

<table style="width:100%; border-collapse:collapse; margin:1.5rem 0;">
  <thead>
    <tr style="background-color:#f5f5f5;">
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Lichaamsdeel</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Aantal sessies</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Interval (weken)</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Discomfort</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Gezicht/bovenlip</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">4-6</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild-matig</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Bikinilijn</td>
      <td style="border:1px solid #ddd; padding:12px;">8-10</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">Matig-sterk</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Benen</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">8-12</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Rug/schouders</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">8-10</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild-matig</td>
    </tr>
  </tbody>
</table>

<h3>Wetenschappelijke ondersteuning</h3>

<p>Langdurige haarverwijdering door lasergebruik is gedocumenteerd door <a href="https://doi.org/10.1001/archderm.135.6.637" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Dierickx et al., 1999, Archives of Dermatology</a>, waaruit blijkt dat alexandriet-lasers aanzienlijke permanente haarvermindering veroorzaken. <a href="https://doi.org/10.1046/j.1440-0960.2002.00580.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Liew, 2002, Australasian Journal of Dermatology</a> benadrukt het belang van correcte nazorg ter voorkoming van bijwerkingen. Een uitgebreide review door <a href="https://doi.org/10.1111/j.1600-0625.2006.00437.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Haedersdal & Wulf, 2006, Experimental Dermatology</a> beveelt evidence-based voorbereiding en nazorg aan. Voor moderne technologie raadplegen wij <a href="https://doi.org/10.1111/dsu.12290" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Gan & Graber, 2013, Dermatologic Surgery</a> over kwaliteitsgestandaardiseerde lasersystemen.</p>

<p>Correct protocol gevolgd, voelt u vertrouwen in uw laserbehandeling bij SkinTech Laser Clinic Amsterdam.</p>`,

    bodyEn: `<h3>Preparation and Aftercare for Laser Treatments and Facial Procedures</h3>

<p>Successful laser hair removal and professional facial treatments require careful preparation and rigorous aftercare protocols. At SkinTech Laser Clinic in Amsterdam, we guide you through every stage to ensure optimal results and safety.</p>

<h3>Pre-Treatment Preparation for Laser Hair Removal</h3>

<p><strong>Hair removal method:</strong> You must shave the treatment area 24 hours before your appointment—never wax or pluck. Shaving removes only the visible hair shaft above the skin while keeping the hair root intact within the follicle, allowing optimal laser energy absorption. Waxing and plucking remove the entire hair root, preventing effective laser interaction with melanin in the hair matrix. This protocol significantly improves treatment efficacy and reduces discomfort during the session.</p>

<p><strong>Sun avoidance:</strong> For 4 weeks prior to treatment, strict sun protection is essential. UV exposure stimulates melanin production in the epidermis, leading to unwanted laser energy absorption, increased erythema risk, and potential pigmentary changes. Although Amsterdam's temperate climate provides some natural protection, UV avoidance remains critical for safety and efficacy.</p>

<p><strong>Medication interactions:</strong> Certain medications increase photosensitivity and must be avoided. Isotretinoin (Accutane) carries elevated risks of scarring and pigmentary complications. Other photosensitizing agents include tetracyclines, NSAIDs, and specific antidepressants. Consult your dermatologist or physician at least two weeks before your appointment.</p>

<p><strong>Skincare avoidance:</strong> Discontinue retinol, vitamin A derivatives, AHAs (glycolic acid), BHAs (salicylic acid), and other active ingredients one week before treatment. These compounds thin the stratum corneum and compromise the skin barrier, increasing sensitivity and burn risk.</p>

<h3>Day-of-Treatment Protocol</h3>

<p>Arrive with clean skin free of deodorant, perfume, lotions, and cosmetics. These products create an absorptive layer that interferes with laser energy transmission and prevents proper thermal response.</p>

<h3>Post-Laser Aftercare</h3>

<p><strong>Erythema management:</strong> Mild redness (erythema) is normal and resolves within 1-4 hours to 24-48 hours maximum. This represents a healthy inflammatory response indicating successful laser energy delivery.</p>

<p><strong>Hydration and soothing:</strong> Apply hypoallergenic aloe vera gel immediately post-treatment. Aloe vera possesses antimicrobial and anti-inflammatory properties that accelerate skin recovery. Avoid alcohol-based products, essential oils, and irritants for 24-48 hours.</p>

<p><strong>Sun protection:</strong> SPF 50+ sunscreen is mandatory for at least six months post-laser treatment. Treated skin is more vulnerable to UV damage and pigmentary complications. Overexposure can cause severe post-inflammatory hyperpigmentation.</p>

<p><strong>Heat avoidance:</strong> For 24-48 hours, avoid hot showers, baths, saunas, hot water immersion, chlorinated pools, and intense physical exercise. Heat increases blister formation risk, infection potential, and hyperpigmentation through elevated skin temperature and sweat gland activity.</p>

<h3>Post-Glacē Facial Aftercare</h3>

<p>After your Glacē Glow Facial, gently cleanse with lukewarm water. Your skin has been exfoliated and infused with hydrating serums. Avoid strong actives for 24 hours. Retinoids and acid treatments may resume after 48 hours. SPF 30+ is recommended due to increased post-exfoliation sensitivity.</p>

<h3>Hair Growth Cycle and Treatment Intervals</h3>

<p>Human hair growth follows three phases: anagen (active growth, 2-7 years), catagen (transition, 2-3 weeks), and telogen (resting phase, 2-3 months). Lasers are only effective on anagen-phase hairs, when melanin concentrations are highest in the hair matrix for optimal energy absorption. Only 10-15% of total hair is simultaneously in anagen phase, necessitating 6-8 sessions for complete hair elimination.</p>

<p>Treatment intervals vary by body location and hair characteristics. Facial hair grows faster (4-6 week intervals) than leg hair (8-12 week intervals). Bikini zone and underarm hair follow intermediate growth cycles (6-8 week intervals). Back and shoulder hair requires longer intervals (8-10 weeks) due to slower growth rates in these areas.</p>

<h3>Treatment Location Comparison Table</h3>

<table style="width:100%; border-collapse:collapse; margin:1.5rem 0;">
  <thead>
    <tr style="background-color:#f5f5f5;">
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Body Area</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Sessions Required</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Interval (weeks)</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Discomfort Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Face/upper lip</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">4-6</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild-moderate</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Bikini line</td>
      <td style="border:1px solid #ddd; padding:12px;">8-10</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">Moderate-strong</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Legs</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">8-12</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Back/shoulders</td>
      <td style="border:1px solid #ddd; padding:12px;">6-8</td>
      <td style="border:1px solid #ddd; padding:12px;">8-10</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild-moderate</td>
    </tr>
  </tbody>
</table>

<h3>Scientific Foundation</h3>

<p>Long-term laser hair removal efficacy is established by <a href="https://doi.org/10.1001/archderm.135.6.637" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Dierickx et al., 1999, Archives of Dermatology</a>, demonstrating significant permanent hair reduction using alexandrite lasers. <a href="https://doi.org/10.1046/j.1440-0960.2002.00580.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Liew, 2002, Australasian Journal of Dermatology</a> emphasizes proper aftercare protocols for complication prevention. A comprehensive evidence review by <a href="https://doi.org/10.1111/j.1600-0625.2006.00437.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Haedersdal & Wulf, 2006, Experimental Dermatology</a> recommends evidence-based preparation and aftercare. For contemporary systems, we reference <a href="https://doi.org/10.1111/dsu.12290" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Gan & Graber, 2013, Dermatologic Surgery</a> on quality-switched laser technologies.</p>

<p>Following proper protocols, you can proceed with confidence in your laser treatments at SkinTech Laser Clinic Amsterdam.</p>`
  },

  'deep-vs-glace': {
    bodyNl: `<h3>Deep Cleansing Facial versus Glacē Glow Facial: Welke behandeling voor u?</h3>

<p>Beide behandelingen verwijderen dode cellen en verontreinigingen, maar via verschillende technologieën en behandelprotocollen. SkinTech Laser Clinic biedt beide opties aangepast aan uw huidbehoefte.</p>

<h3>Deep Cleansing Facial: Klassieke handmatige behandeling</h3>

<p>Deep Cleansing Facials gebruiken traditionele, handmatig uitgevoerde technologie. Na voorbereiding met milde reiniger wordt de huid gestoomd (gewoonlijk 5-10 minuten) om poriën te openen en talgafstoffe los te maken. Een enzymatische peel wordt aangebracht, meestal gebaseerd op papaya of bromelaïne, voor veilige biochemische exfoliatie. De estheticus voert vervolgens handmatige comedone-extractie uit met steriele instrumenten, waarbij zwarte punten en verstopte poriën voorzichtig worden verwijderd. Ten slotte worden nourishing maskers aangebracht.</p>

<p>Voordeel: grondig, persoonlijk, en effectief voor ernstige acne met vastgebonden comedonen. Nadeel: tot 24-48 uur erythema mogelijk, voelt oncomfortabel gedurende extractie, en risico op beschadiging van gevoelige kapillairen.</p>

<h3>Glacē Glow Facial: Vortex-technologie innovatie</h3>

<p>Glacē Glow Facial gebruikt het Candela Glacē-systeem, een geavanceerde hydrafaciale-stijl vortex-reinigingssysteem. Dit is NIET cryotherapie of koeling—het is een medisch-klinische vacuümtechnologie voor veilige, pijnloze extraatie.</p>

<p><strong>Glacē werkingsprincipe:</strong> Gespecialiseerde tips creëren een Vortex Fusion-technologie waarbij zuigkracht en spiraalvorming samenwerken. Het proces volgt vier stappen:</p>

<p><strong>1. Cleanse:</strong> Milde reiniger verwijdert oppervlaktevuil en cosmetica.</p>

<p><strong>2. Exfoliate:</strong> Een niet-invasieve vortex-tip werkt met fijne abrasieve middelen zonder huid af te schaven. Dit opent poriën en verwijdert dode cellen voorzichtig.</p>

<p><strong>3. Extract:</strong> Gepatenteerde vortex-zuiging zuigt impuriteiten, talgafstoffe, en vuil uit zonder handmatige druk of beschadiging. Deze stap is pijnloos—veel klanten vinden dit comfortabel en ontspannend.</p>

<p><strong>4. Infuse:</strong> Terwijl de zuigkracht aanwezig blijft, vochtinbrengende serums (hyaluronzuur, peptiden, antioxidanten) dringen diep in porien in. Dit is veel effectiever dan oppervlakkige aanbrenging.</p>

<p>Voordeel: geen downtime, pijnloos, onmiddellijke zichtbaarheid (gloed), en blijvende hydratatie. Serum-selectie is aanpasbaar op uw huidtype.</p>

<h3>Glacē versus HydraFacial: Medische versus consumententechnologie</h3>

<p>Beide gebruiken vortex-technologie, maar verschillen aanzienlijk. HydraFacial is populair in spas en beautycentra, met eigendomstips en serumlijnen. Glacē is het medisch-klinische equivalent van Candela, ontworpen voor dermatologen en professionele klineken. Glacē biedt aangepaste serum-selectie, preciezer controle over zuigsterkte, en integratie met andere medische behandelingen. HydraFacial voelt oppervlakkiger en minder effectief voor diepe porienreinheid.</p>

<h3>Vergelijking van alle drie behandelingstypen</h3>

<table style="width:100%; border-collapse:collapse; margin:1.5rem 0;">
  <thead>
    <tr style="background-color:#f5f5f5;">
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Aspect</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Deep Cleansing</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Glacē Glow</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">HydraFacial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Methode</td>
      <td style="border:1px solid #ddd; padding:12px;">Handmatige extractie + peel</td>
      <td style="border:1px solid #ddd; padding:12px;">Vortex-zuiging (medisch-klinisch)</td>
      <td style="border:1px solid #ddd; padding:12px;">Vortex-zuiging (consument)</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Duur</td>
      <td style="border:1px solid #ddd; padding:12px;">45-60 minuten</td>
      <td style="border:1px solid #ddd; padding:12px;">30-40 minuten</td>
      <td style="border:1px solid #ddd; padding:12px;">30-40 minuten</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Downtime</td>
      <td style="border:1px solid #ddd; padding:12px;">24-48 uur roodheid</td>
      <td style="border:1px solid #ddd; padding:12px;">Geen</td>
      <td style="border:1px solid #ddd; padding:12px;">Geen</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Beste voor</td>
      <td style="border:1px solid #ddd; padding:12px;">Diepe comedonen, acne</td>
      <td style="border:1px solid #ddd; padding:12px;">Glow, hydratatie, dofheid</td>
      <td style="border:1px solid #ddd; padding:12px;">Onderhoud, beginner-vriendelijk</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Pijnniveau</td>
      <td style="border:1px solid #ddd; padding:12px;">Matig (extractie oncomfortabel)</td>
      <td style="border:1px solid #ddd; padding:12px;">Geen tot mild (entspannend)</td>
      <td style="border:1px solid #ddd; padding:12px;">Geen</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Resultaten zichtbaarheid</td>
      <td style="border:1px solid #ddd; padding:12px;">Dag 2-3</td>
      <td style="border:1px solid #ddd; padding:12px;">Onmiddellijk</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild onmiddellijk</td>
    </tr>
  </tbody>
</table>

<h3>Wanneer u welke behandeling kiest</h3>

<p><strong>Deep Cleansing:</strong> Kies dit wanneer u ernstige acne, diepe zwarte punten, of verstopte poriën hebt. Dit is ook ideaal voor eenmalige grondige reinigingen voordat u overstapt op onderhoudbehandelingen.</p>

<p><strong>Glacē Glow:</strong> Kies dit voor hydratatie, doffe huid, pre-event gloed (bruiloft, feest), of als u gevoelige huid hebt die handmatige extractie niet aankan. Dit is ook perfect voor onderhoud na Deep Cleansing.</p>

<p><strong>Combinatie-protocol:</strong> Velen van onze Amsterdamse cliënten kiezen voor een Deep Cleansing elke 8-12 weken, gevolgd door Glacē-onderhoud elke 2-4 weken. Deze benadering biedt grondige reinigheid en blijvende hydratatie zonder overbelasting van de huid.</p>

<h3>Huidtype aanbevelingen</h3>

<p>Voor acnegevoelige, combination-huid: Deep Cleansing (1x per 8-12 weken) + Glacē (1x per 4 weken). Voor droge, gevoelige, gedehydreerde huid: uitsluitend Glacē (1x per 3-4 weken). Voor rijpere huid met pigmentatiekwesties: Glacē met antioxidant-serums.</p>

<h3>Wetenschappelijke basis</h3>

<p>Chemische peels gebruiken enzymatische dissociatie, ondersteund door <a href="https://doi.org/10.1111/j.1524-4725.2008.34254.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Fernandes & Signorini, 2008, Dermatologic Surgery</a>. Hydradermabrasie—vergelijkbaar met vortex-technologie—is wetenschappelijk gevalideerd door <a href="https://doi.org/10.1111/j.1524-4725.2009.01250.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Freedman, 2009, Dermatologic Surgery</a> voor effectieve en veilige huidverjongering. Microdermabrasie-effecten op collageen-remodellering zijn gedocumenteerd door <a href="https://doi.org/10.1038/jid.2009.359" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Karimipour et al., 2010, Journal of Investigative Dermatology</a>.</p>

<p>Beide behandelingen zijn veilig, effectief, en complementair. Uw keuze hangt af van huidcondities, gewenste resultaten, en downtime-tolerantie. Wij adviseren u graag bij SkinTech Laser Clinic Amsterdam.</p>`,

    bodyEn: `<h3>Deep Cleansing Facial versus Glacē Glow Facial: Which Treatment Is Right for You?</h3>

<p>Both treatments remove dead cells and impurities, but utilize different technologies and protocols. SkinTech Laser Clinic offers both options tailored to your specific skin needs and goals.</p>

<h3>Deep Cleansing Facial: Traditional Manual Approach</h3>

<p>Deep Cleansing Facials employ time-tested, manually executed techniques. After gentle cleansing, the skin undergoes steaming (typically 5-10 minutes) to open pores and soften sebaceous matter. An enzymatic peel—usually papaya or bromelain-based—is applied for safe biochemical exfoliation. The esthetician then performs manual comedone extraction using sterile instruments, carefully removing blackheads and impacted follicles. Nourishing masks conclude the treatment.</p>

<p>Advantages: thorough, personalized, and effective for severe acne with embedded comedones. Disadvantages: potential erythema lasting 24-48 hours, discomfort during extraction, and risk of capillary damage in sensitive skin.</p>

<h3>Glacē Glow Facial: Vortex Technology Innovation</h3>

<p>Glacē Glow Facial employs the Candela Glacē system, an advanced hydrafacial-style vortex cleansing apparatus. This is NOT cryotherapy or cooling—it is a medical-grade vacuum technology enabling safe, painless extraction.</p>

<p><strong>Glacē mechanism:</strong> Specialized tips create Vortex Fusion technology where suction force and spiral motion work synergistically. The process follows four sequential steps:</p>

<p><strong>1. Cleanse:</strong> Gentle cleanser removes surface debris and cosmetics.</p>

<p><strong>2. Exfoliate:</strong> Non-invasive vortex tip employs fine abrasive media without abrading skin. This opens pores and removes dead cells safely.</p>

<p><strong>3. Extract:</strong> Patented vortex suction withdraws impurities, sebaceous matter, and debris without manual pressure or damage. This step is painless—many clients find it relaxing and therapeutic.</p>

<p><strong>4. Infuse:</strong> While suction remains active, hydrating serums (hyaluronic acid, peptides, antioxidants) penetrate deeply into pores. This is far more effective than superficial application.</p>

<p>Advantages: zero downtime, painless, immediate visible glow, and sustained hydration. Serum selection is customizable to your skin type and concerns.</p>

<h3>Glacē versus HydraFacial: Medical-Grade versus Consumer Technology</h3>

<p>Both utilize vortex technology but differ significantly. HydraFacial is popular in spas and beauty centers, featuring proprietary tips and serum lines. Glacē is Candela's medical-grade equivalent, designed for dermatologists and professional clinics. Glacē offers customizable serum selection, precise suction control, and seamless integration with other medical treatments. HydraFacial feels more superficial and delivers less effectiveness for deep pore impaction.</p>

<h3>Comprehensive Treatment Comparison</h3>

<table style="width:100%; border-collapse:collapse; margin:1.5rem 0;">
  <thead>
    <tr style="background-color:#f5f5f5;">
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Aspect</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Deep Cleansing</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">Glacē Glow</th>
      <th style="border:1px solid #ddd; padding:12px; text-align:left;">HydraFacial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Method</td>
      <td style="border:1px solid #ddd; padding:12px;">Manual extraction + peel</td>
      <td style="border:1px solid #ddd; padding:12px;">Vortex suction (medical-grade)</td>
      <td style="border:1px solid #ddd; padding:12px;">Vortex suction (consumer)</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Duration</td>
      <td style="border:1px solid #ddd; padding:12px;">45-60 minutes</td>
      <td style="border:1px solid #ddd; padding:12px;">30-40 minutes</td>
      <td style="border:1px solid #ddd; padding:12px;">30-40 minutes</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Downtime</td>
      <td style="border:1px solid #ddd; padding:12px;">24-48 hours erythema</td>
      <td style="border:1px solid #ddd; padding:12px;">None</td>
      <td style="border:1px solid #ddd; padding:12px;">None</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Best For</td>
      <td style="border:1px solid #ddd; padding:12px;">Deep comedones, active acne</td>
      <td style="border:1px solid #ddd; padding:12px;">Glow, hydration, dullness</td>
      <td style="border:1px solid #ddd; padding:12px;">Maintenance, beginner-friendly</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd; padding:12px;">Pain Level</td>
      <td style="border:1px solid #ddd; padding:12px;">Moderate (extraction discomfort)</td>
      <td style="border:1px solid #ddd; padding:12px;">None to mild (therapeutic)</td>
      <td style="border:1px solid #ddd; padding:12px;">None</td>
    </tr>
    <tr style="background-color:#fafafa;">
      <td style="border:1px solid #ddd; padding:12px;">Result Visibility</td>
      <td style="border:1px solid #ddd; padding:12px;">Days 2-3</td>
      <td style="border:1px solid #ddd; padding:12px;">Immediate</td>
      <td style="border:1px solid #ddd; padding:12px;">Mild immediate</td>
    </tr>
  </tbody>
</table>

<h3>Treatment Selection Guidelines</h3>

<p><strong>Deep Cleansing:</strong> Select this when experiencing severe acne, deep blackheads, or significantly impacted pores. Ideal for one-time thorough cleansing before transitioning to maintenance treatments.</p>

<p><strong>Glacē Glow:</strong> Choose this for hydration, dull complexions, pre-event glow enhancement (weddings, celebrations), or when sensitive skin cannot tolerate manual extraction. Perfect for maintenance post-Deep Cleansing.</p>

<p><strong>Combination Protocol:</strong> Many of our Amsterdam clients opt for Deep Cleansing every 8-12 weeks followed by Glacē maintenance every 2-4 weeks. This approach delivers thorough cleansing with sustained hydration without skin overwhelm.</p>

<h3>Skin Type Recommendations</h3>

<p>For acne-prone, combination skin: Deep Cleansing (every 8-12 weeks) + Glacē (every 4 weeks). For dry, sensitive, dehydrated skin: Glacē exclusively (every 3-4 weeks). For mature skin with pigmentation concerns: Glacē with antioxidant serums.</p>

<h3>Scientific Evidence</h3>

<p>Chemical peels employ enzymatic dissociation, supported by <a href="https://doi.org/10.1111/j.1524-4725.2008.34254.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Fernandes & Signorini, 2008, Dermatologic Surgery</a>. Hydradermabrasion—analogous to vortex technology—is scientifically validated by <a href="https://doi.org/10.1111/j.1524-4725.2009.01250.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Freedman, 2009, Dermatologic Surgery</a> for effective and safe skin rejuvenation. Microdermabrasion's effects on collagen remodeling are documented by <a href="https://doi.org/10.1038/jid.2009.359" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Karimipour et al., 2010, Journal of Investigative Dermatology</a>.</p>

<p>Both treatments are safe, effective, and complementary. Your choice depends on skin conditions, desired outcomes, and downtime tolerance. We are pleased to advise you at SkinTech Laser Clinic Amsterdam.</p>`
  },

'sylton-scan': {
    bodyNl: `
<h3>De Sylton Observ 520x Huidscanner — Je Huid in Focus</h3>

<p>Modern huidonderzoek vereist meer dan het blote oog. De Sylton Observ 520x is een geavanceerd diagnostisch instrument dat uw huid van binnenuit analyseert, wat diepe inzichten biedt over structuur, pigmentatie, vochtigheid en onzichtbare schade. Bij SkinTech gebruiken we deze scanner als onderdeel van ons intake- en vervolgprotocol om behandelresultaten nauwkeurig bij te houden.</p>

<h4>Hoe het Observ 520x werkt: Zes lichtmodi</h4>

<p>Het kernprincipe van de Observ 520x is dat verschillende golflengten van licht verschillende lagen van de huid penetreren en verschillende structuren zichtbaar maken. De scanner beschikt over zes gespecialiseerde lichtkwaliteiten:</p>

<p><strong>1. Daglichttoestand (Daytime)</strong> — Standaardzichtbare licht dat het huidoppervlak in natuurlijke kleuren weergeeft. Ideaal voor het beoordelen van de algehele huidtextuur, roodheid en onregelmatigheden.</p>

<p><strong>2. Kruispolarisatie (Cross-Polarized)</strong> — Dit licht dringt dieper in de opperhuid door en maakt oppervlakkige pigmentatie, fijne lijntjes en textuurveranderingen zichtbaar. Door de polarisatie van oppervlakkig gereflecteerd licht te blokkeren, reduceert dit mode reflectie die details zou maskeren.</p>

<p><strong>3. Parallelle Polarisatie (Parallel-Polarized)</strong> — In tegenstelling tot kruispolarisatie behoudt dit licht parallelle fasen en penetreert dieper in de dermis. Dit onthult bloedvaten, pigmentatie in diepere lagen en onderliggende vasculaire patronen.</p>

<p><strong>4. Ultraviolet (UV)</strong> — UV-licht (365 nm) reageert met fotochemische schade in de huid. Dit maakt zichtbaar waar UV-schade is opgeslagen voordat deze als zichtbare pigmentvlekken verschijnt — essentieel voor vroegtijdige detectie van fotoschade.</p>

<p><strong>5. Wood's Lamp (Wood's Lamp Mode)</strong> — Op 365 nm, dit licht doet fluorescerende bacteriën (Propionibacterium acnes) oranje/geel opgloeien. Een cruciaal hulpmiddel voor acnediagnose en het bepalen van bacteriële belasting.</p>

<p><strong>6. Gesimuleerde Daglicht (Simulated Daylight)</strong> — Een kalibreerde standaardverlichting die constante beoordelingen over meerdere sessies mogelijk maakt, met eliminatie van omgevingslichtingsvariabelen.</p>

<h4>Klinische Toepassingen</h4>

<p>Bij SkinTech voeren wij een basislijnmeting uit voor elke nieuwe klant. Dit geeft ons inzicht in hun huidigestatus voordat behandeling begint — zichtbare en onzichtbare schade, vasculaire activiteit, pigmentatie op verschillende niveaus, en bacteriële belasting. Na een behandelingsserie (bijvoorbeeld IPL, lasertherapie of chemische peeling) voeren wij vervolgmetingen uit en vergelijken we deze met basislijnafbeeldingen. Dit stelt ons in staat om voortgang objectief aan te tonen.</p>

<p>De Observ 520x is ook een educatief hulpmiddel. Veel patiënten zien hun huid voor het eerst onder verschillende lichtmodi en begrijpen dan de omvang van schade die niet zichtbaar is in normale verlichting. Dit geeft hen motivatie voor behandeling en realistische verwachtingen over resultaten.</p>

<h4>Vergelijking: Observ 520x vs Canfield VISIA</h4>

<p>De Canfield VISIA is een ander wijd gebruikt diagnosesysteem, maar het werkt anders. De VISIA maakt standardized fotografische afbeeldingen onder gecontroleerde omstandigheden en voegt RBX-technologie (reflectance confocal microscopy-inspired subsurface imaging) toe. Dit biedt reproduceerbare foto's voor vergelijking en een genormaliseerde scoringsmethodologie — iets dat waardevol is voor klinische proeven en longitudinale studies.</p>

<p>De Observ 520x daarentegen biedt real-time observatie met meervoudige lichtkwaliteiten terwijl de klinicus de huid onderzoekt. In plaats van foto's te analyseren, ziet u de huid direct, wat dynamisch onderzoek mogelijk maakt: huid indrukken, uitrekken en manipuleren terwijl u observeert. Dit is intuïtiever voor patiënten (zij zien wat u ziet) en vereist geen gestandaardiseerde ruimte of precies gekalibreerde verlichting.</p>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
<tr style="background-color: var(--bronze-light); font-weight: bold;">
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Kenmerk</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Observ 520x</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Canfield VISIA</th>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Technologie</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Real-time multi-wavelength observatie</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Gestandaardiseerde fotografie + RBX analyse</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Lichtmodi</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6 modi (daglichtt, UV, Wood's lamp, etc)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">3 fotografie-modi (zichtbaar, UV, rood)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Assessment Type</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Live/dynamisch</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Foto-gebaseerd/statisch</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Patiëntbetrokkenheid</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Hoog (patiënt ziet real-time bevindingen)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Gematigd (analyse achteraf)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Omgeving</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Flexibel, geen strakke setup vereist</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Gestandaardiseerde kamer/kalibrering vereist</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Voordeel</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Intuïtief, educatief, dynamische evaluatie</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Genormaliseerd, goed voor onderzoeken</td>
</tr>
</table>

<h4>Wetenschappelijke Basis</h4>

<p>De beginselen van multi-wavelength huidevaluatie zijn goed vastgesteld. <a href="https://doi.org/10.1111/j.1600-0781.2006.00210.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Stamatas et al., 2006, Photodermatology, Photoimmunology & Photomedicine</a> hebben aangetoond dat in vivo huidafbeelding met verschillende golflengten betrouwbare inzichten biedt in huidelastische eigenschappen, melanineverspreiding en vasculaire patronen. <a href="https://doi.org/10.1111/srt.12812" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bae et al., 2020, Skin Research and Technology</a> vergelijken diverse huidanalysehulpmiddelen en concluderen dat multi-modaalaftasting superieure diagnostische informatie biedt vergeleken met enkelvoudige-weeglengte systemen.</p>

<p><a href="https://doi.org/10.1016/j.burns.2010.09.001" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bloemen et al., 2011, Burns</a> demonstreerden dat digitale fotografie en real-time observatie verschillende informatiewaarden hebben — direct observatie is beter voor dynamische evaluatie, terwijl gestandaardiseerde fotografie reproduceerbare vergelijking toelaat. Dit ondersteunt waarom we beide benaderingen waarderen.</p>

<p>Bij SkinTech is de Observ 520x ons eerste stap in patiëntenzorg. Het biedt het bewijs dat uw huid verandert, motivatie voor behandeling, en objectieve verificatie dat uw gekozen therapie werkt.</p>
`,
    bodyEn: `
<h3>The Sylton Observ 520x Skin Scanner — Your Skin in Focus</h3>

<p>Modern dermatological assessment requires more than visual inspection. The Sylton Observ 520x is an advanced diagnostic imaging system that reveals your skin's internal architecture, exposing structural details, pigmentation patterns, hydration status, and invisible photodamage. At SkinTech, we use this scanner as part of our intake and post-treatment assessment protocol to objectively document skin health and treatment outcomes.</p>

<h4>How the Observ 520x Works: Six Light Modes</h4>

<p>The core principle behind the Observ 520x is that different wavelengths of light penetrate different skin layers and reveal different structures. The device offers six specialized light modes, each serving a distinct diagnostic purpose.</p>

<p><strong>1. Daytime Mode</strong> — Standard visible light that displays the skin surface in natural color. Ideal for assessing overall texture, erythema, and surface irregularities.</p>

<p><strong>2. Cross-Polarized Light</strong> — This mode penetrates the epidermis while blocking surface reflections, revealing superficial pigmentation, fine lines, and textural changes that standard lighting misses.</p>

<p><strong>3. Parallel-Polarized Light</strong> — Maintains light phase coherence and penetrates deeper into the dermis, exposing deeper pigmentation, vascular patterns, and subsurface erythema invisible under normal illumination.</p>

<p><strong>4. Ultraviolet (UV) Mode</strong> — Operating at 365 nm wavelength, UV light reveals photodamage accumulation in the skin before it manifests as visible hyperpigmentation. This is crucial for detecting incipient sun damage and patient education about accumulated UV exposure.</p>

<p><strong>5. Wood's Lamp Mode</strong> — At 365 nm with specific filtering, this mode causes fluorescent bacteria (Propionibacterium acnes) to glow orange-yellow, providing a non-invasive method to assess bacterial load and acne severity.</p>

<p><strong>6. Simulated Daylight</strong> — A calibrated standardized illumination enabling consistent assessments across multiple sessions, eliminating environmental lighting variables that could confound longitudinal comparisons.</p>

<h4>Clinical Applications</h4>

<p>At SkinTech, we capture baseline Observ 520x images for every new client. This establishes a detailed photographic and descriptive record of their skin's condition before any intervention — documenting visible and subsurface damage, vascular activity, pigmentation depth, and bacterial burden. After treatment series (laser, IPL, chemical peels), we repeat imaging and directly compare results to baseline, providing objective evidence of improvement.</p>

<p>The device also serves an educational function. Many patients see their skin under multiple light modes for the first time and gain perspective on the extent of photodamage that remains invisible under normal lighting. This motivates treatment engagement and sets realistic expectations about what procedures can achieve.</p>

<h4>Comparison: Observ 520x vs. Canfield VISIA System</h4>

<p>The Canfield VISIA is another widely adopted diagnostic imaging platform, but it operates on a different principle. VISIA captures standardized photographs under controlled lighting conditions and adds RBX subsurface analysis. This yields reproducible images for database comparison and a normalized scoring system — valuable for clinical trials and longitudinal research.</p>

<p>The Observ 520x, by contrast, provides real-time observation with multiple light wavelengths as the clinician examines the skin. Rather than analyzing static photographs, you observe living skin directly, permitting dynamic assessment: pressing, stretching, and manipulating the skin while viewing subsurface changes. This is more intuitive for patients (they see what you see) and requires no standardized room or precisely calibrated lighting setup.</p>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
<tr style="background-color: var(--bronze-light); font-weight: bold;">
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Feature</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Observ 520x</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Canfield VISIA</th>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Technology</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Real-time multi-wavelength observation</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Standardized photography + RBX analysis</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Light Modes</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6 modes (daylight, UV, Wood's lamp, etc.)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">3 photography modes (visible, UV, red)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Assessment Type</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Live/dynamic</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Photo-based/static</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Patient Engagement</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">High (real-time visualization)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Moderate (post-analysis)</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Environment</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Flexible, minimal setup required</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Standardized room/calibration required</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Best For</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Clinical assessment, patient education</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Clinical trials, research protocols</td>
</tr>
</table>

<h4>Scientific Foundation</h4>

<p>The principles underlying multi-wavelength skin imaging are well-established in dermatological literature. <a href="https://doi.org/10.1111/j.1600-0781.2006.00210.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Stamatas et al., 2006, Photodermatology, Photoimmunology & Photomedicine</a> demonstrated that in vivo skin imaging with multiple wavelengths yields reliable data on skin mechanical properties, melanin distribution, and vascular architecture. <a href="https://doi.org/10.1111/srt.12812" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bae et al., 2020, Skin Research and Technology</a> reviewed multiple skin analysis devices and concluded that multi-modal imaging captures superior diagnostic information compared to single-wavelength systems.</p>

<p><a href="https://doi.org/10.1016/j.burns.2010.09.001" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bloemen et al., 2011, Burns</a> demonstrated that digital photography and real-time clinical observation provide complementary information: direct observation excels for dynamic assessment, while standardized photography ensures reproducible comparison. This supports our use of the Observ 520x as a primary assessment tool.</p>

<p>At SkinTech, the Observ 520x is our first step in patient care. It provides visual evidence that your skin changes, establishes baseline metrics, and—most importantly—delivers objective proof that your chosen treatment works.</p>
`
  },

  'ipl-vs-laser': {
    bodyNl: `
<h3>IPL vs Laserhaarverlies — Wat is het Verschil en Welke is Beter?</h3>

<p>Wanneer patiënten SkinTech Laser Clinic contacteren met vragen over haarverlies, stellen velen dezelfde vraag: "Wat is het verschil tussen IPL en laser, en welke zou ik moet kiezen?" Het antwoord ligt in fysica, niet slechts marketing. IPL en medische lasers zijn fundamenteel verschillende technologieën, met verschillende werkingsmechanismen, effectiviteit en veiligheid. Dit artikel legt de wetenschappelijke verschillen uit en verklaart waarom SkinTech voor medische-grade lasersisteemkoos.</p>

<h4>IPL: Intense Pulsed Light</h4>

<p>IPL (Intense Pulsed Light) is geen echte laser. Het is een brede-spectrum lichtbron die golflengten van 500 tot 1200 nanometer (nm) uitzendt — een breed bereik van zichtbare en infrarode licht. Dit spectrum wordt gefilterd om bepaalde golflengten te selecteren, maar het licht blijft incoherent: de fotonen zijn niet in fase met elkaar en de energiedistributie over het behandelgebied is ongelijkmatig.</p>

<p>IPL-energie wordt aangemeten in fluence (joules per vierkante centimeter, J/cm²). Thuisapparaten leveren 5-7 J/cm² af; professionele IPL-systemen bereiken 20-40 J/cm². Dit spectrum en deze energieniveaus maken IPL geschikt voor pigmentatie- en vaatproblemen, maar minder optimaal voor haarverlies.</p>

<h4>Medische Lasers: Coherente, Gerichte Energie</h4>

<p>Een medische laser produceert licht van een enkele welbepaalde golflengte (bijvoorbeeld 755 nm voor alexandriet of 1064 nm voor Nd:YAG). Dit licht is coherent: alle fotonen bewegen in fase, wat resulteert in een scherpe, zeer geconcentreerde bundel. Dit focusgedrag stelt lasers in staat om energie zeer nauwkeurig op haarvollicles en melanine in haarbronnen af te leveren.</p>

<h4>Kernverschillen: Natuurkunde Zaken</h4>

<p><strong>Coherentie en Energiedistributie</strong> — Laserenergie is coherent en uniform verdeeld over het behandelgebied. IPL-energie is incoherent en onuniform verdeeld, wat resulteert in sommige gebieden die te veel energie krijgen (kans op brandwonden) en andere die onvoldoende krijgen (onvoldoende haarverlies).</p>

<p><strong>Doelgerichte Penetratie</strong> — Lasers gebruiken filters en golflengte-selectie om specifieke absorbers (melanine in haarpigment) te raken. IPL gebruikt breed-spectrum filtering en bereikt meerdere doelen tegelijk, inclusief opperhuidmelanine, wat leidt tot hogere risico's op hyperpigmentatie en hypopigmentatie, vooral bij donkerere huidtypes.</p>

<p><strong>Spot Size en Pulsduur</strong> — Lasers kunnen zeer kleine spot-sizes leveren (enkele millimeters) met nauwkeurig gedefinieerde pulsduren. IPL-handstukken zijn groter, hetgeen sneller behandelen toestaat maar met minder precisie.</p>

<h4>Klinische Verschillen: Sessies, Effectiviteit en Veiligheid</h4>

<p><strong>Aantal Sessies</strong> — Wetenschappelijke onderzoeken toont aan dat lasersystemen duidelijk superieure resultaten bereiken in minder behandelingen. Verwacht 6-8 sessies voor 80-90% haarverlies met laser; IPL vereist typisch 8-12 sessies met minder volledige resultaten. Dit verschil wordt nog groter voor fijne en lichte haren.</p>

<p><strong>Effectiviteit op Fijne Haren</strong> — Fijne haren bevatten minder melanine. Lasers kunnen deze nog steeds effectief richten vanwege hun golflengte-selectiviteit. IPL's brede spectrum is minder gevoelig voor fijne haarpigmenten, wat leidt tot ondermaatse resultaten op lichaam/gezicht dons.</p>

<p><strong>Veiligheid op Donkere Huid</strong> — Dit is essentieel. IPL's brede spectrum absorbeert sterker door melanine in alle laagdiepten, inclusief die van de opperhuid. Dit verhoogt het risico op thermische schade aan epidermale melanocyten, wat leidt tot hypo- of hyperpigmentatiecomplicaties, vooral bij donkerder huidtype (Fitzpatrick III-VI). Lasers, vooral Nd:YAG op 1064 nm, hebben golflengtepenetratie die epidermale melanine beter omzeilt, wat veiliger is voor donkere huid.</p>

<p><strong>Voorspelbaarheid</strong> — Lasers leveren consistente, reproduceerbare energiedistributie. IPL is afhankelijk van handhygiene en positie, waardoor variabiliteit ontstaat.</p>

<h4>Home IPL Apparaten: Waarom Ze Niet Werken</h4>

<p>U ziet advertenties voor home IPL-apparaten die "klinische resultaten" beloven. Dit is misleidend. Home IPL-apparaten leveren 5-7 J/cm², ofwel ongeveer 15-25% van professionele IPL-fluence. Bij deze energieniveaus is haarverlies minimaal — vooral voor haren op lichaamsdelen of lagere gezichtsharen. Experts beschouwen home IPL voornaamelijk als onderhoud na professionele behandeling, niet als eigenstandige therapie.</p>

<h4>Waarom SkinTech de GentleMax Pro Plus Koos</h4>

<p>SkinTech implementeerde het GentleMax Pro Plus, een medische-grade laserssysteem dat zowel alexandriet (755 nm) als Nd:YAG (1064 nm) lasers integreert. Dit systeem biedt:</p>

<ul>
<li>Alexandriet voor lichte tot gemiddelde huidtypen (sneller, comfortabeler)</li>
<li>Nd:YAG voor donkerder huidtypen (meer veilig door diepere penetratie)</li>
<li>Nauwkeurige energieafgave en pulsduurcontrole</li>
<li>Medische-grade beproevdheid in klinische trials</li>
<li>Consistente, voorspelbare resultaten</li>
</ul>

<p>Dit is geen marketing — het is gebaseerd op wetenschappelijk bewijs.</p>

<h4>Vergelijking Tabel: IPL vs Alexandriet vs Nd:YAG vs Diode Laser</h4>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
<tr style="background-color: var(--bronze-light); font-weight: bold;">
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Kenmerk</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">IPL</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Alexandriet (755nm)</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Nd:YAG (1064nm)</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Diode (800-810nm)</th>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Golflengte</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">500-1200nm (breed)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">755nm (enkel)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">1064nm (enkel)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">800-810nm (enkel)</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Type</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Incoherent breedspectrum</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Coherente laser</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Coherente laser</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Coherente laser</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Beste voor Huidtype</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">I-III (licht)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">I-IV (licht-matig)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">I-VI (alle typen)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">II-V (gematigd)</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Sessies Nodig (80%+ haarverlies)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">8-12</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6-8</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6-8</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6-8</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Effectiviteit Fijne Haren</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Laag</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Goed</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Goed</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Goed</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Risico Pigmentatie (Donkere Huid)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Hoog</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Matig</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Laag</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Laag-Matig</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Energiekwaliteit</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Ongelijkmatig</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Uniform</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Uniform</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Uniform</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Kosten per Sessie</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Laag-Matig</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Matig-Hoog</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Hoog</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Matig-Hoog</td>
</tr>
</table>

<h4>Wetenschappelijk Bewijs</h4>

<p><a href="https://doi.org/10.1111/ddg.12116" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Klein et al., 2013, Journal of the German Society of Dermatology</a> reviewden de state-of-the-art in fotoepilatie en concludeerden dat lasers (vooral alexandriet en Nd:YAG) superieure en duurzamere haarverlies bieden vergeleken met IPL.</p>

<p><a href="https://doi.org/10.1111/j.1524-4725.2009.01230.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Sadighha & Mohaghegh, 2009, Dermatologic Surgery</a> voerden een directe gerandomiseerde vergelijking uit tussen IPL en alexandrietlaser. Alexandriet-laser veroorzaakte meer haarverlies, vereiste minder sessies, en had lagere bijwerkingen.</p>

<p><a href="https://doi.org/10.1111/j.1600-0625.2006.00437.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Haedersdal & Wulf, 2006, Experimental Dermatology</a> concludeerden in hun systematische review dat "lasertechnologie aanzienlijk superieur is aan IPL voor duurzame haarverlies."</p>

<p><a href="https://doi.org/10.1111/j.1600-0781.2007.00283.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bäumler et al., 2007, Photodermatology, Photoimmunology & Photomedicine</a> onderzochten IPL-fotoepilatie en noteerden dat "meer sessies nodig waren en dat resultaten meer variabel waren vergeleken met lasersystemen, vooral voor fijne/lichte haren."</p>

<h4>Samenvatting: Waarom de Keuze Duidelijk is</h4>

<p>IPL is goedkoper, sneller, en geschikt voor bepaalde toepassingen (rosacea, lichte pigmentatie), maar voor ernstig haarverlies, vooral op grotere lichaamsdelen of bij donkere huid, is medische-grade laser superieur. Het vereist minder sessies, levert voorspelbaarder resultaten op, en is veiliger voor een breder bereik van huidtypen.</p>

<p>SkinTech investeerde in het GentleMax Pro Plus omdat we willen dat onze patiënten de best mogelijke resultaten bereiken — resultaten ondersteund door wetenschap, niet slechts marketing. Minder sessies, beter werk, veiliger voor uw huid.</p>
`,
    bodyEn: `
<h3>IPL vs. Laser Hair Removal — What's the Difference and Which is Better?</h3>

<p>When prospective clients contact SkinTech Laser Clinic with questions about hair removal, many ask the same question: "What's the difference between IPL and laser, and which should I choose?" The answer lies in physics, not marketing. IPL and medical-grade lasers are fundamentally different technologies, operating on different principles, delivering different efficacy, and carrying different safety profiles. This article explains the scientific distinctions and demonstrates why SkinTech invested in medical-grade laser systems.</p>

<h4>IPL: Intense Pulsed Light</h4>

<p>IPL (Intense Pulsed Light) is not a true laser. It is a broad-spectrum light source emitting wavelengths from 500 to 1200 nanometers (nm) — spanning visible and infrared light. This spectrum is filtered to select wavelength ranges, but the light remains incoherent: photons are not in phase with one another, and energy distribution across the treated area is uneven. Home IPL devices deliver approximately 5–7 J/cm² (joules per square centimeter); professional IPL systems reach 20–40 J/cm². This broad spectrum and modest energy levels make IPL suitable for pigmentation and vascular concerns, but less optimal for permanent hair reduction.</p>

<h4>Medical Lasers: Coherent, Focused Energy</h4>

<p>A medical laser produces light of a single, precisely defined wavelength—for example, 755 nm for alexandrite or 1064 nm for Nd:YAG. This light is coherent: all photons travel in phase with one another, creating a sharply focused, highly concentrated beam. This collimated behavior allows lasers to deliver energy with surgical precision onto hair follicles and melanin within hair matrix structures.</p>

<h4>Core Differences: Physics Matters</h4>

<p><strong>Coherence and Energy Distribution</strong> — Laser energy is coherent and uniformly distributed across the treatment area. IPL energy is incoherent and unevenly distributed, meaning some areas receive excess energy (burn risk) while others receive insufficient energy (poor hair reduction).</p>

<p><strong>Targeted Penetration</strong> — Lasers use wavelength selection to target specific chromophores (melanin in hair pigment). IPL uses broad-spectrum filtering and strikes multiple targets simultaneously, including epidermal melanin, increasing risk of hypo- and hyperpigmentation—especially in darker skin types.</p>

<p><strong>Spot Size and Pulse Duration</strong> — Lasers achieve very small spot sizes (millimeters) with precisely defined pulse durations. IPL handpieces are larger, permitting faster treatment but with less precision.</p>

<h4>Clinical Differences: Sessions, Efficacy, and Safety</h4>

<p><strong>Number of Sessions</strong> — Published literature consistently shows that laser systems achieve superior results in fewer treatments. Expect 6–8 sessions for 80–90% permanent hair reduction with laser; IPL typically requires 8–12 sessions with less complete results. This gap widens for fine and light hair.</p>

<p><strong>Efficacy on Fine Hair</strong> — Fine hairs contain less melanin. Lasers still target them effectively due to wavelength selectivity. IPL's broad spectrum is less sensitive to fine hair pigments, yielding suboptimal results on body and facial vellus hair.</p>

<p><strong>Safety on Darker Skin</strong> — This is critical. IPL's broad spectrum absorbs heavily through melanin at all depths, including epidermal melanin. This increases risk of thermal injury to epidermal melanocytes, causing hypo- or hyperpigmentation complications, especially in darker skin types (Fitzpatrick III–VI). Nd:YAG lasers at 1064 nm have wavelength penetration that better bypasses epidermal melanin, making them safer for darker skin.</p>

<p><strong>Predictability</strong> — Lasers deliver consistent, reproducible energy distribution. IPL variability depends on operator technique and handpiece positioning, introducing inconsistency.</p>

<h4>Home IPL Devices: Why They Don't Work</h4>

<p>You see advertisements for at-home IPL systems promising "clinical results." This is misleading. Home IPL devices deliver 5–7 J/cm²—roughly 15–25% of professional IPL fluence. At this energy level, hair reduction is minimal, particularly for body hair or fine facial hair. Experts consider home IPL primarily maintenance after professional treatment, not standalone therapy.</p>

<h4>Why SkinTech Chose the GentleMax Pro Plus</h4>

<p>SkinTech implemented the GentleMax Pro Plus, a medical-grade laser system integrating both alexandrite (755 nm) and Nd:YAG (1064 nm) lasers. This system offers:</p>

<ul>
<li>Alexandrite for light to medium skin types (faster, more comfortable)</li>
<li>Nd:YAG for darker skin types (safer via deeper penetration)</li>
<li>Precise energy delivery and pulse duration control</li>
<li>Medical-grade evidence from clinical trials</li>
<li>Consistent, predictable outcomes</li>
</ul>

<p>This isn't marketing—it is evidence-based.</p>

<h4>Comparison Table: IPL vs. Alexandrite vs. Nd:YAG vs. Diode Laser</h4>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
<tr style="background-color: var(--bronze-light); font-weight: bold;">
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Feature</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">IPL</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Alexandrite (755nm)</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Nd:YAG (1064nm)</th>
<th style="padding: 12px; text-align: left; border: 1px solid var(--bronze-medium);">Diode (800–810nm)</th>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Wavelength</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">500–1200nm (broad)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">755nm (single)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">1064nm (single)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">800–810nm (single)</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Type</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Incoherent broad-spectrum</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Coherent laser</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Coherent laser</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Coherent laser</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Best for Skin Type</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">I–III (light)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">I–IV (light–medium)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">I–VI (all types)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">II–V (medium)</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Sessions for 80%+ Reduction</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">8–12</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6–8</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6–8</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">6–8</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Efficacy on Fine Hair</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Poor</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Excellent</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Excellent</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Excellent</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Pigmentation Risk (Dark Skin)</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">High</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Moderate</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Low</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Low–Moderate</td>
</tr>
<tr>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Energy Distribution</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Uneven</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Uniform</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Uniform</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Uniform</td>
</tr>
<tr style="background-color: var(--offwhite);">
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Cost per Session</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Low–Moderate</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Moderate–High</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">High</td>
<td style="padding: 12px; border: 1px solid var(--bronze-light);">Moderate–High</td>
</tr>
</table>

<h4>Scientific Evidence</h4>

<p><a href="https://doi.org/10.1111/ddg.12116" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Klein et al., 2013, Journal of the German Society of Dermatology</a> reviewed the state-of-the-art in photoepilation and concluded that lasers (particularly alexandrite and Nd:YAG) deliver superior and more durable hair reduction compared to IPL.</p>

<p><a href="https://doi.org/10.1111/j.1524-4725.2009.01230.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Sadighha & Mohaghegh, 2009, Dermatologic Surgery</a> conducted a randomized head-to-head comparison between IPL and alexandrite laser. Alexandrite laser produced greater hair reduction, required fewer sessions, and had lower adverse effects.</p>

<p><a href="https://doi.org/10.1111/j.1600-0625.2006.00437.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Haedersdal & Wulf, 2006, Experimental Dermatology</a> concluded in their systematic review that "laser technology is significantly superior to IPL for sustained hair removal."</p>

<p><a href="https://doi.org/10.1111/j.1600-0781.2007.00283.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Bäumler et al., 2007, Photodermatology, Photoimmunology & Photomedicine</a> investigated IPL photoepilation and noted that "more sessions were required and results were more variable compared to laser systems, particularly for fine/light hair."</p>

<h4>Summary: Why the Choice is Clear</h4>

<p>IPL is cheaper, faster, and suitable for certain applications (rosacea, light pigmentation), but for serious hair reduction—especially on larger body areas or darker skin—medical-grade laser is superior. It requires fewer sessions, delivers more predictable results, and is safer across a broader range of skin types.</p>

<p>SkinTech invested in the GentleMax Pro Plus because we want our clients to achieve the best possible outcomes—outcomes supported by science, not marketing. Fewer sessions, better work, safer for your skin.</p>
`
  },

'laser-donkere-huid': {
    bodyNl: `
<h3>Laserontharing voor donkere huid: veilig, effectief en inclusief</h3>

<p>Laserontharing is een van de meest populaire cosmetische behandelingen ter wereld, maar mensen met donkere huid hebben jarenlang gestrugfeld met veiligheid en effectiviteit. De realiteit is echter transformatief: met de juiste lasertechnologie en klinische expertise is laserontharing niet alleen veilig voor donkere huid, maar ook uiterst effectief. In Amsterdam, een van de meest diverse steden van Europa, is het essentieel dat clinics kunnen beschikken over de technologie om alle huidtypes professioneel te behandelen.</p>

<h3>Waarom donkere huid een ander soort lasertechnologie vereist</h3>

<p>De uitdaging met laserontharing op donkere huid ligt in de basale natuurkunde van laserlicht en melanine. Alle lasers voor haarverwijdering werken door energie af te geven die wordt opgenomen door melanine in de haarwortels. Maar mensen met donkere huid (Fitzpatrick-type IV tot VI) hebben ook hogere concentraties melanine in de epidermis — de buitenste laag van de huid.</p>

<p>Dit zorgt voor twee problemen: ten eerste concurreert epidermale melanine met folliculaire melanine om de laser-energie, wat de behandeleffectiviteit vermindert. Ten tweede kunnen conventiële lasers (zoals alexandrite en IPL-systemen) overmatige hitte in de epidermis opwekken, wat leidt tot brandwonden, hypopigmentatie (lichter wordende vlekken) of hyperpigmentatie (donkerder wordende vlekken). Dit is waarom veel clinics traditioneel alleen alexandrite-lasers gebruikten — een ernstige beperking voor donkere huiden.</p>

<h3>Het Nd:YAG-verschil: langere golflengten, betere penetratie, universele veiligheid</h3>

<p>De oplossing is de Nd:YAG-laser met een golflengte van 1064 nanometer. Deze langere golflengte dringt dieper in de huid door zonder significant door epidermale melanine te worden geabsorbeerd. Klinisch onderzoek heeft aangetoond dat Nd:YAG lasers uitzonderlijke resultaten opleveren op Fitzpatrick-type IV tot VI-huid, met minimale complicaties.</p>

<p><a href="https://doi.org/10.1046/j.1524-4725.2000.00037.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Adrian & Shay, 2000, Dermatologic Surgery</a> dokumenteerden dat Nd:YAG-systemen de eerste veilige en effectieve keuze zijn voor haarverwijdering op donkere huid. Later onderzoek door <a href="https://doi.org/10.1111/j.1529-8019.2004.04015.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Battle & Hobbs, 2004</a> bevestigde dat Nd:YAG-lasers consistent superieure resultaten geven op donkere huiden met significantief lagere complicatiepercentages.</p>

<h3>GentleMax Pro Plus: het gouden standaard voor inclusieve laserontharing</h3>

<p>De GentleMax Pro Plus is een dual-wavelength systeem dat zowel alexandrite (755nm) als Nd:YAG (1064nm) kan leveren. Dit stelt clinicians in staat om naadloos over te schakelen naar Nd:YAG voor donkere huiden zonder een apart apparaat te nodig hebben. Het ingebouwde DCD (Dynamic Cooling Device) koelt bovendien proactief de epidermis, wat brandwonden en pigmentveranderingen verder voorkomt.</p>

<p>Dit is waarom SkinTech Laser Clinic Amsterdam de GentleMax Pro Plus heeft gekozen: het is niet alleen een investering in apparatuur, maar een commitment aan het veilig en effectief behandelen van alle Amsterdamse huidtypes, van zeer licht tot zeer donker.</p>

<h3>Laser-veiligheid op donkere huid: een vergelijkingstabel</h3>

<table style="width:100%;border-collapse:collapse;margin:20px 0;">
<tr style="background-color:#f5f5f5;">
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Lasertype</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Golflengte</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Fitzpatrick I-III</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Fitzpatrick IV-VI</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Complicatierisico</th>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Alexandrite (755nm)</td>
<td style="border:1px solid #ddd;padding:10px;">755nm</td>
<td style="border:1px solid #ddd;padding:10px;">Uitstekend</td>
<td style="border:1px solid #ddd;padding:10px;">Beperkt veilig</td>
<td style="border:1px solid #ddd;padding:10px;">Matig tot hoog</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">IPL (500-1200nm)</td>
<td style="border:1px solid #ddd;padding:10px;">Brede spectrum</td>
<td style="border:1px solid #ddd;padding:10px;">Goed</td>
<td style="border:1px solid #ddd;padding:10px;">Niet aanbevolen</td>
<td style="border:1px solid #ddd;padding:10px;">Hoog</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Nd:YAG (1064nm)</td>
<td style="border:1px solid #ddd;padding:10px;">1064nm</td>
<td style="border:1px solid #ddd;padding:10px;">Goed</td>
<td style="border:1px solid #ddd;padding:10px;">Uitstekend</td>
<td style="border:1px solid #ddd;padding:10px;">Laag</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Nd:YAG + DCD</td>
<td style="border:1px solid #ddd;padding:10px;">1064nm + koeling</td>
<td style="border:1px solid #ddd;padding:10px;">Goed</td>
<td style="border:1px solid #ddd;padding:10px;">Zeer uitstekend</td>
<td style="border:1px solid #ddd;padding:10px;">Zeer laag</td>
</tr>
</table>

<h3>Wat u moet zoeken in een kliniek: de SkinTech-benadering</h3>

<p>Als u laserontharing overweegt met donkere huid, zijn hier kritische vragen die u moet stellen:</p>

<ul style="margin:15px 0;padding-left:20px;">
<li><strong>Welke laser gebruikt u?</strong> Zorg ervoor dat Nd:YAG beschikbaar is, niet alleen alexandrite of IPL.</li>
<li><strong>Heeft u ervaring met mijn huidtype?</strong> Vraag naar voorbeelden en referenties van patiënten met vergelijkbare huid.</li>
<li><strong>Voert u een patchtest uit?</strong> Dit is essentieel om individuele reacties te evalueren voordat u doorgaat met volledige behandeling.</li>
<li><strong>Hoeveel sessies verwacht u?</strong> Donkere huid kan iets meer sessies nodig hebben, maar met Nd:YAG worden goede resultaten verwacht.</li>
</ul>

<p>Bij SkinTech Laser Clinic Amsterdam hebben we meer dan tien jaar ervaring met laserontharing op alle huidtypes. We bieden altijd een persoonlijk consult en patchtest aan vóór volledige behandeling.</p>

<h3>Misvattingen ontmaskerd: wat waar is en wat niet</h3>

<p><strong>Mythe 1: "Laser werkt niet op donkere huid."</strong> Onwaar. Nd:YAG-lasers werken uitzonderlijk goed op donkere huid, omdat de golflengte niet significant door epidermale melanine wordt geabsorbeerd.</p>

<p><strong>Mythe 2: "Je hebt veel meer sessies nodig voor donkere huid."</strong> Gedeeltelijk waar. Donkere huid kan soms iets meer sessies nodig hebben (6-8 in plaats van 4-6), maar met Nd:YAG zijn de verschillen minimaal. <a href="https://doi.org/10.1111/j.1365-2230.2003.01372.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Lanigan, 2003</a> documenteerde dat complicaties eerder dan onwerkzaamheid het beperkende factor is als de verkeerde laser wordt gebruikt.</p>

<p><strong>Mythe 3: "Laserontharing doet pijn op donkere huid."</strong> Dit hoeft niet waar te zijn. Met moderne DCD-koeling is de ervaring voor alle huidtypes vergelijkbaar.</p>

<h3>Het Amsterdam-voordeel: inclusieve zorg in een diverse stad</h3>

<p>Amsterdam is de thuisbasis van grote Surinaamse, Turkse, Marokkaanse en Indonesische gemeenschappen — mensen met Fitzpatrick-type IV tot VI-huid. Veel clinics in Amsterdam zijn echter niet goed uitgerust voor deze populaties. SkinTech is anders gebouwd: ons Nd:YAG-gestuurd systeem betekent dat we Amsterdam echt kunnen dienen.</p>

<p><a href="https://doi.org/10.1016/j.jaad.2008.09.039" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Alster & Bryan, 2009</a> benadrukten dat "inclusieve laser-aparatuur essentieel is voor clinics in multikulturele steden." Wij zijn het daar mee eens.</p>

<h3>Volgende stappen: uw laserontharing-reis beginnen</h3>

<p>Bent u bereid om permanent van lichaamshaar af te komen, ongeacht uw huidtype? SkinTech Laser Clinic Amsterdam biedt persoonlijke consultaties met huidanalyse, patchtest en volledig transparante uitleggen van uw behandelplan. Alle ons team spreekt Nederlands en Engels vloeiend.</p>

<p>Veel patiënten met donkere huid zijn aangenaam verrast door hoe veilig en effectief moderne Nd:YAG-laserontharing is. Het is tijd dat alle Amsterdammers toegang hebben tot deze technologie.</p>
    `,
    bodyEn: `
<h3>Laser Hair Removal for Dark Skin: Safe, Effective, and Inclusive</h3>

<p>Laser hair removal is one of the world's most popular cosmetic treatments, but people with dark skin have long struggled with safety and effectiveness concerns. The reality, however, is transformative: with the right laser technology and clinical expertise, laser hair removal is not only safe for dark skin—it's also highly effective. In Amsterdam, one of Europe's most diverse cities, it's essential that clinics have the technology to professionally treat all skin types.</p>

<h3>Why Dark Skin Requires Different Laser Technology</h3>

<p>The challenge with laser hair removal on dark skin lies in the basic physics of laser light and melanin. All hair removal lasers work by emitting energy that is absorbed by melanin in hair follicles. But people with dark skin (Fitzpatrick types IV–VI) also have higher concentrations of melanin in the epidermis—the skin's outer layer.</p>

<p>This creates two problems: first, epidermal melanin competes with follicular melanin for laser energy, reducing treatment effectiveness. Second, conventional lasers (such as alexandrite and IPL systems) can generate excessive heat in the epidermis, leading to burns, hypopigmentation (lightening), or hyperpigmentation (darkening). This is why many clinics traditionally used alexandrite lasers only—a serious limitation for dark skin.</p>

<h3>The Nd:YAG Difference: Longer Wavelengths, Better Penetration, Universal Safety</h3>

<p>The solution is the Nd:YAG laser with a wavelength of 1064 nanometers. This longer wavelength penetrates deeper into the skin without being significantly absorbed by epidermal melanin. Clinical research has demonstrated that Nd:YAG lasers deliver exceptional results on Fitzpatrick types IV–VI skin, with minimal complications.</p>

<p><a href="https://doi.org/10.1046/j.1524-4725.2000.00037.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Adrian & Shay, 2000, Dermatologic Surgery</a> documented that Nd:YAG systems are the first safe and effective choice for hair removal on dark skin. Subsequent research by <a href="https://doi.org/10.1111/j.1529-8019.2004.04015.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Battle & Hobbs, 2004</a> confirmed that Nd:YAG lasers consistently deliver superior results on dark skin with significantly lower complication rates.</p>

<h3>GentleMax Pro Plus: The Gold Standard for Inclusive Hair Removal</h3>

<p>The GentleMax Pro Plus is a dual-wavelength system delivering both alexandrite (755nm) and Nd:YAG (1064nm). This allows clinicians to seamlessly switch to Nd:YAG for dark skin types without needing a separate device. The integrated DCD (Dynamic Cooling Device) also proactively cools the epidermis, further preventing burns and pigment changes.</p>

<p>This is why SkinTech Laser Clinic Amsterdam chose the GentleMax Pro Plus: it's not merely an equipment investment, but a commitment to safely and effectively treating all of Amsterdam's skin types, from very fair to very dark.</p>

<h3>Laser Safety on Dark Skin: A Comparison Table</h3>

<table style="width:100%;border-collapse:collapse;margin:20px 0;">
<tr style="background-color:#f5f5f5;">
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Laser Type</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Wavelength</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Fitzpatrick I–III</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Fitzpatrick IV–VI</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Complication Risk</th>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Alexandrite (755nm)</td>
<td style="border:1px solid #ddd;padding:10px;">755nm</td>
<td style="border:1px solid #ddd;padding:10px;">Excellent</td>
<td style="border:1px solid #ddd;padding:10px;">Limited safety</td>
<td style="border:1px solid #ddd;padding:10px;">Moderate to high</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">IPL (500–1200nm)</td>
<td style="border:1px solid #ddd;padding:10px;">Broad spectrum</td>
<td style="border:1px solid #ddd;padding:10px;">Good</td>
<td style="border:1px solid #ddd;padding:10px;">Not recommended</td>
<td style="border:1px solid #ddd;padding:10px;">High</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Nd:YAG (1064nm)</td>
<td style="border:1px solid #ddd;padding:10px;">1064nm</td>
<td style="border:1px solid #ddd;padding:10px;">Good</td>
<td style="border:1px solid #ddd;padding:10px;">Excellent</td>
<td style="border:1px solid #ddd;padding:10px;">Low</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Nd:YAG + DCD</td>
<td style="border:1px solid #ddd;padding:10px;">1064nm + cooling</td>
<td style="border:1px solid #ddd;padding:10px;">Good</td>
<td style="border:1px solid #ddd;padding:10px;">Excellent</td>
<td style="border:1px solid #ddd;padding:10px;">Very low</td>
</tr>
</table>

<h3>What to Look for in a Clinic: The SkinTech Approach</h3>

<p>If you're considering laser hair removal with dark skin, here are critical questions to ask:</p>

<ul style="margin:15px 0;padding-left:20px;">
<li><strong>What laser do you use?</strong> Ensure Nd:YAG is available, not just alexandrite or IPL.</li>
<li><strong>Do you have experience with my skin type?</strong> Ask for examples and references from patients with similar skin.</li>
<li><strong>Do you perform a patch test?</strong> This is essential to evaluate individual reactions before proceeding with full treatment.</li>
<li><strong>How many sessions do you expect?</strong> Dark skin may require slightly more sessions, but good results are expected with Nd:YAG.</li>
</ul>

<p>At SkinTech Laser Clinic Amsterdam, we have over ten years of experience with laser hair removal on all skin types. We always offer a personal consultation and patch test before full treatment.</p>

<h3>Myths Debunked: What's True and What Isn't</h3>

<p><strong>Myth 1: "Lasers don't work on dark skin."</strong> False. Nd:YAG lasers work exceptionally well on dark skin because the wavelength is not significantly absorbed by epidermal melanin.</p>

<p><strong>Myth 2: "You need many more sessions for dark skin."</strong> Partially true. Dark skin may require slightly more sessions (6–8 instead of 4–6), but with Nd:YAG, the differences are minimal. <a href="https://doi.org/10.1111/j.1365-2230.2003.01372.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Lanigan, 2003</a> documented that complications, rather than ineffectiveness, are the limiting factor when the wrong laser is used.</p>

<p><strong>Myth 3: "Laser hair removal is painful on dark skin."</strong> This need not be true. With modern DCD cooling, the experience for all skin types is comparable.</p>

<h3>The Amsterdam Advantage: Inclusive Care in a Diverse City</h3>

<p>Amsterdam is home to large Surinamese, Turkish, Moroccan, and Indonesian communities—people with Fitzpatrick types IV–VI skin. Yet many Amsterdam clinics are not well-equipped for these populations. SkinTech is built differently: our Nd:YAG-driven system means we can truly serve Amsterdam.</p>

<p><a href="https://doi.org/10.1016/j.jaad.2008.09.039" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Alster & Bryan, 2009</a> emphasized that "inclusive laser equipment is essential for clinics in multicultural cities." We agree.</p>

<h3>Next Steps: Begin Your Laser Hair Removal Journey</h3>

<p>Ready to permanently remove body hair regardless of your skin type? SkinTech Laser Clinic Amsterdam offers personal consultations with skin analysis, patch testing, and fully transparent treatment planning. Our entire team speaks Dutch and English fluently.</p>

<p>Many patients with dark skin are pleasantly surprised by how safe and effective modern Nd:YAG laser hair removal is. It's time every Amsterdammer had access to this technology.</p>
    `
  },

  'huidverbetering-amsterdam': {
    bodyNl: `
<h3>Huidverbetering in Amsterdam: uw complete gids voor professionele huidverzorging</h3>

<p>Amsterdam is een stad met meer dan 2,4 miljoen inwoners uit meer dan 170 landen. Dit maakt het een unieke omgeving voor huidverzorging: zeer diverse huidtypes, verschillende klimaatuitdagingen en stedelijke omgevingsfactoren. Terwijl huishoude-huidverzorgingsproducten een rol spelen, kan professionele huidverbetering transformatieve resultaten leveren die thuis niet kunnen worden bereikt. SkinTech Laser Clinic Amsterdam is gespecialiseerd in het adresseren van huidproblemen die specifiek zijn voor Amsterdammers.</p>

<h3>Professionele huidverbetering versus thuishuidverzorging: wat is het verschil?</h3>

<p>Thuisproducten kunnen huiddrogen verlichten en voorkomen, maar ze kunnen diep in de dermis—de onderliggende laag—niet doordringen waar collageen, elasting en pigmentatie werkelijk worden bepaald. Professionele behandelingen gebruiken klinische apparatuur die licht, temperatuur, of mechanische energie kan leveren op niveaus die thuis eenvoudig niet mogelijk zijn.</p>

<p>Bij SkinTech beginnen we met de Observ 520x huidanalysator—een medisch-graad apparaat dat huid in 12 verschillende spectrale banden analyseert. Dit onthult niet alleen wat u aan uw huid ziet, maar ook onderliggende problemen zoals beginfase pigmentatie, textuurveranderingen en dehydratatie. Met deze data creëren we een gepersonaliseerde behandelplan.</p>

<h3>Veelvoorkomende huidproblemen die bij SkinTech worden behandeld</h3>

<p><strong>Acnelittekens:</strong> Veel Amsterdammers worstelen met puistjes in hun jeugd. Modern laserwerk kan gefractionaleerde lichttherapie gebruiken om littekens opnieuw uit te lijnen.</p>

<p><strong>Pigmentatieproblemen:</strong> Melasma (donkere bruine vlekken), zonnepigmentatie en andere hyperpigmentatie zijn wijd verbreid, vooral onder mensen met hogere UV-blootstelling of genetische gevoeligheid. <a href="https://doi.org/10.1016/j.jdermsci.2016.09.015" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Krutmann et al., 2017</a> documenteerden dat stedelijke vervuiling microontsteking veroorzaakt die pigmentatieproblemen verergert.</p>

<p><strong>Textuurveranderingen:</strong> Ruwheid, vergrote poriën en fijne lijnen resulteren uit collageen-afbraak. Dit kan worden behandeld met combinatietherapieën.</p>

<p><strong>Dofheid en dehydratatie:</strong> Amsterdam's kouder, vochtigheid-wisselend klimaat doet het epidermale waterverlies toenemen, wat een doffe, slap uitstraling veroorzaakt.</p>

<p><strong>Rosacea:</strong> Gezichtsvergieking, erethemateus (rood) huidstelsel en soms puistjes. Dit reageert goed op doelgerichte laserbehandeling.</p>

<h3>SkinTech's drietraps huidverbeteringsprotocol</h3>

<p><strong>Stap 1: Observ 520x huidanalyse</strong> — We scannen uw huid in detail. Dit onthult textuurkaarten, pigmentatiekaarten, vasculaire kaarten, en meer. U ziet zelfs een "huidleeftijd" metric.</p>

<p><strong>Stap 2: Persoonlijkbehandelplan</strong> — Op basis van analyse en uw doelstellingen raden we specifieke behandelingen aan. Voor sommige patiënten is dit slechts één behandelingsmodaliteit. Voor anderen is dit een volgorde.</p>

<p><strong>Stap 3: Combinatiebehandelingen voor maximale resultaten</strong> — Onze kliniek combineert vaak meerdere technologieën in één sessie of over opeenvolgende weken.</p>

<h3>SkinTech-behandelingen: wat beschikbaar is</h3>

<p><strong>Candela Glacē Facial</strong></p>

<p>Dit is een niet-invasieve behandeling die zichtbaar licht en radiofrequentie-energie gebruikt. Het voert hydratatie in, stelt collageen-synthese in werking, en geeft een onmiddellijke "glow." Ideaal voor dofheid, dehydratatie, fijne lijnen, en poriën. Dit is ons lichtste behandelingsniveau—nul downtime, geen erythema, patiënten kunnen direct werken.</p>

<p><strong>Diepte reiniging</strong></p>

<p>Voor mensen met verstopte poriën, talgrichels (blackheads/whiteheads) of acne-gevoelige huid. Dit kan als standalone of als voorbereiding op lasertherapie worden gebruikt.</p>

<p><strong>Combinatiebehandelingen: Glacē + Laser</strong></p>

<p>Voor meer agressieve huidverbetering: eerst een Glacē-sessie (voorbereiding en ontsteking-verlaging), gevolgd door lasertherapie voor pigmentatie, littekens, of vasculaire letsels. Dit maximaliseet resultaten en minimaliseert hersteltijd.</p>

<h3>Waarom Amsterdam speciaal huidzorgbehoeften heeft</h3>

<p>Amsterdam is niet typisch Nederland. Het is een megastad met:</p>

<ul style="margin:15px 0;padding-left:20px;">
<li><strong>Extreme diversiteit:</strong> Grote Surinaamse, Turkse, Marokkaanse, Indonesische, Chinese, en West-Afrikaanse gemeenschappen bedeuten zeer divers Fitzpatrick-spectrum (type I tot VI).</li>
<li><strong>Stedelijke vervuiling:</strong> Amsterdam heeft lichte luchtvervuiling uit verkeer en industrie. <a href="https://doi.org/10.1016/j.jdermsci.2016.09.015" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Krutmann et al., 2017</a> toonden aan dat fijnstof en stikstofoxide verergering microontsteking in de huid veroorzaken, wat roodheid en pigmentatieproblemen verergert.</li>
<li><strong>Klimaat:</strong> De winters zijn koud en vochtig (maar niet extreem zonnig). Dit zorgt voor ruw, droog gezicht door wind- en vochtigverlies, maar minder ernstige UV-schade dan zuidelijke landen.</li>
<li><strong>Maatschappelijke verwachtingen:</strong> Amsterdam waardeert echte beauty, maar ook ondergrondse genezing. Veel Amsterdammers willen "grooming" meer dan "cosmetic surgery."</li>
</ul>

<h3>Seizoensgebonden huidverzorgingsstrategie voor Amsterdam</h3>

<table style="width:100%;border-collapse:collapse;margin:20px 0;">
<tr style="background-color:#f5f5f5;">
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Seizoen</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Primaire huiduitdaging</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">SkinTech-aanbeveling</th>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Winter (dec–feb)</td>
<td style="border:1px solid #ddd;padding:10px;">Droogte, ruwheid, wind-schade</td>
<td style="border:1px solid #ddd;padding:10px;">Glacē voor hydratatie; thuis retinoid (nacht)</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Lente (mrt–mei)</td>
<td style="border:1px solid #ddd;padding:10px;">Herstel, verhoogde UV</td>
<td style="border:1px solid #ddd;padding:10px;">Combinatie Glacē + licht laser voor pigmentatie</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Zomer (jun–aug)</td>
<td style="border:1px solid #ddd;padding:10px;">Zonneschade, pigmentatie, dehydratatie</td>
<td style="border:1px solid #ddd;padding:10px;">Dagelijks SPF 30+; minimale professionele behandeling</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Herfst (sep–nov)</td>
<td style="border:1px solid #ddd;padding:10px;">Vernieuwing, voorbereiding voor winter</td>
<td style="border:1px solid #ddd;padding:10px;">Meer agressieve lasertherapie; collageen-induction</td>
</tr>
</table>

<h3>Huidaandoening → aanbevolen behandeling</h3>

<table style="width:100%;border-collapse:collapse;margin:20px 0;">
<tr style="background-color:#f5f5f5;">
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Huidaandoening</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Primaire behandeling</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Aanvullende optie</th>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Acnelittekens</td>
<td style="border:1px solid #ddd;padding:10px;">Gefractionaleerde laser</td>
<td style="border:1px solid #ddd;padding:10px;">Microneedling; chemische peel</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Melasma/pigmentatie</td>
<td style="border:1px solid #ddd;padding:10px;">Nd:YAG pigment-laser</td>
<td style="border:1px solid #ddd;padding:10px;">Topicale hydroquinon; dagelijks SPF</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Fijne lijnen/rimpels</td>
<td style="border:1px solid #ddd;padding:10px;">Glacē of microfocused ultrasound</td>
<td style="border:1px solid #ddd;padding:10px;">Retinoid serum (thuisverzorging)</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Vergrote poriën</td>
<td style="border:1px solid #ddd;padding:10px;">Glacē + radiofrequentie</td>
<td style="border:1px solid #ddd;padding:10px;">Niacinamide serum (thuis)</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Rosacea/erythema</td>
<td style="border:1px solid #ddd;padding:10px;">Vascular laser (groene of gele laser)</td>
<td style="border:1px solid #ddd;padding:10px;">Topische anti-inflammatoire</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Dofheid/dehydratatie</td>
<td style="border:1px solid #ddd;padding:10px;">Candela Glacē</td>
<td style="border:1px solid #ddd;padding:10px;">Hyaluronzuur serum (thuis)</td>
</tr>
</table>

<h3>Wat maakt SkinTech anders van schoonheidssalons</h3>

<p>Veel Amsterdam-schoonheidssalons gebruiken "beauty-grade" apparaten—dit zijn consumentenversies van professionele systemen, meestal lichter in specificaties. SkinTech gebruikt medisch-klinische apparatuur. Ons Candela Glacē, onze Nd:YAG-laser, onze Observ-analyzer—dit zijn industrie-standaard apparaten voor dermatologische klinieken.</p>

<p>Daarnaast is ons team medisch gekwalificeerd. We werken op advies van dermatologen; we voeren niet zomaar behandelingen uit. <a href="https://doi.org/10.1016/j.clindermatol.2010.03.030" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Draelos, 2010</a> benadrukte dat medisch-kwalificeerde "cosmeceutical" behandeling veel betere ergebnissen en veiligheidsprofiel oplevert dan beauty-grade.</p>

<h3>Retinoids en huidveroudering: integratieve benadering</h3>

<p><a href="https://doi.org/10.1111/j.1365-2230.2006.02238.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Mukherjee et al., 2006</a> toonden aan dat retinoids een van de meest bewezen anti-aging-ingrediënten zijn—ze stimuleren collageen-synthese en verminderen fijne lijnen. Bij SkinTech raden we often nachtretinoid (zoals 0,25–0,5% retinol) aan naast professionele laserbehandelingen. Dit verbetert resulaten.</p>

<h3>Amsterdam's internationale gemeenschappen: uw huid, uw taal</h3>

<p>SkinTech spreekt Nederlands en Engels vloeiend. Veel van onze patiënten zijn internationale werknemers, expats, of immigranten die twijfelen of "standaard schoonheidszorg" geschikt is voor hun huidtype. Dit is het geval niet. Onze Nd:YAG-laser werkt op alle Fitzpatrick-typen. Onze Observ-analyzer analyseert alle huidtonen nauwkeurig. Onze team begrijpt huidzorg in context van etnische huid.</p>

<h3>Uw volgende stap: persoonlijkraadpleging</h3>

<p>Of u nu met acne-littekens, pigmentatieproblemen, dofheid of rimpels worstelt—professionele huidverbetering is echt mogelijk. SkinTech Laser Clinic Amsterdam biedt gratis, niet-verplichte raadplegingen. We gebruiken Observ 520x huidanalyse om u precies te tonen wat we kunnen doen.</p>

<p>Amsterdam verdient huidzorg die gelijk staat aan internationale normen, met apparatuur van huidarts-kwaliteit en kennis van diverse huidtypes. Wij zijn hier om dat te leveren.</p>
    `,
    bodyEn: `
<h3>Skin Improvement in Amsterdam: Your Complete Guide to Professional Skincare</h3>

<p>Amsterdam is a city of more than 2.4 million residents from over 170 countries. This makes it a unique environment for skincare: highly diverse skin types, different climatic challenges, and urban environmental factors. While at-home skincare products play a role, professional skin improvement can deliver transformative results impossible to achieve at home. SkinTech Laser Clinic Amsterdam specializes in addressing skin concerns specific to Amsterdammers.</p>

<h3>Professional Skin Improvement vs. At-Home Skincare: What's the Difference?</h3>

<p>At-home products can hydrate skin and prevent dryness, but they cannot penetrate deep into the dermis—the underlying layer where collagen, elastin, and pigmentation are truly determined. Professional treatments use clinical equipment that can deliver light, heat, or mechanical energy at levels simply not possible at home.</p>

<p>At SkinTech, we start with the Observ 520x skin analyzer—a medical-grade device that analyzes skin across 12 different spectral bands. This reveals not only what you see on your skin, but underlying issues like early-stage pigmentation, texture changes, and dehydration. With this data, we create a personalized treatment plan.</p>

<h3>Common Skin Concerns Treated at SkinTech</h3>

<p><strong>Acne scarring:</strong> Many Amsterdammers struggled with acne in their youth. Modern laser work can use fractional light therapy to remodel scars.</p>

<p><strong>Pigmentation issues:</strong> Melasma (dark brown patches), sun pigmentation, and other hyperpigmentation are widespread, especially among people with higher UV exposure or genetic susceptibility. <a href="https://doi.org/10.1016/j.jdermsci.2016.09.015" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Krutmann et al., 2017</a> documented that urban pollution triggers micro-inflammation that worsens pigmentation problems.</p>

<p><strong>Texture changes:</strong> Roughness, enlarged pores, and fine lines result from collagen breakdown. This can be addressed with combination therapies.</p>

<p><strong>Dullness and dehydration:</strong> Amsterdam's cooler, humidity-fluctuating climate increases epidermal water loss, causing a dull, slack appearance.</p>

<p><strong>Rosacea:</strong> Facial flushing, erythematous (red) skin, and sometimes pustules. This responds well to targeted laser treatment.</p>

<h3>SkinTech's Three-Step Skin Improvement Protocol</h3>

<p><strong>Step 1: Observ 520x skin analysis</strong> — We scan your skin in detail. This reveals texture maps, pigmentation maps, vascular maps, and more. You'll even see a "skin age" metric.</p>

<p><strong>Step 2: Personalized treatment plan</strong> — Based on analysis and your goals, we recommend specific treatments. For some patients, this is just one modality. For others, it's a sequence.</p>

<p><strong>Step 3: Combination treatments for maximum results</strong> — Our clinic often combines multiple technologies in one session or across successive weeks.</p>

<h3>SkinTech Treatments: What's Available</h3>

<p><strong>Candela Glacē Facial</strong></p>

<p>This is a non-invasive treatment using visible light and radiofrequency energy. It infuses hydration, activates collagen synthesis, and delivers an immediate "glow." Ideal for dullness, dehydration, fine lines, and pores. This is our lightest treatment level—zero downtime, no erythema, patients can work directly after.</p>

<p><strong>Deep Cleansing</strong></p>

<p>For people with congested pores, sebaceous filaments (blackheads/whiteheads), or acne-prone skin. This can be used as standalone or as preparation for laser therapy.</p>

<p><strong>Combination Treatments: Glacē + Laser</strong></p>

<p>For more aggressive skin improvement: first a Glacē session (preparation and inflammation reduction), followed by laser therapy for pigmentation, scars, or vascular lesions. This maximizes results and minimizes recovery time.</p>

<h3>Why Amsterdam Has Specific Skincare Needs</h3>

<p>Amsterdam is not typical Netherlands. It's a megacity with:</p>

<ul style="margin:15px 0;padding-left:20px;">
<li><strong>Extreme diversity:</strong> Large Surinamese, Turkish, Moroccan, Indonesian, Chinese, and West African communities mean highly diverse Fitzpatrick spectrum (types I–VI).</li>
<li><strong>Urban pollution:</strong> Amsterdam has light air pollution from traffic and industry. <a href="https://doi.org/10.1016/j.jdermsci.2016.09.015" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Krutmann et al., 2017</a> showed that particulate matter and nitrogen oxide trigger micro-inflammation in skin, worsening redness and pigmentation problems.</li>
<li><strong>Climate:</strong> Winters are cold and humid (but not extremely sunny). This causes rough, dry skin from wind and moisture loss, but less severe UV damage than southern countries.</li>
<li><strong>Cultural values:</strong> Amsterdam values genuine beauty, but also minimal intervention. Many Amsterdammers want "grooming" more than "cosmetic surgery."</li>
</ul>

<h3>Seasonal Skincare Strategy for Amsterdam</h3>

<table style="width:100%;border-collapse:collapse;margin:20px 0;">
<tr style="background-color:#f5f5f5;">
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Season</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Primary Skin Challenge</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">SkinTech Recommendation</th>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Winter (Dec–Feb)</td>
<td style="border:1px solid #ddd;padding:10px;">Dryness, roughness, wind damage</td>
<td style="border:1px solid #ddd;padding:10px;">Glacē for hydration; at-home retinoid (night)</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Spring (Mar–May)</td>
<td style="border:1px solid #ddd;padding:10px;">Recovery, increased UV</td>
<td style="border:1px solid #ddd;padding:10px;">Combination Glacē + light laser for pigmentation</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Summer (Jun–Aug)</td>
<td style="border:1px solid #ddd;padding:10px;">Sun damage, pigmentation, dehydration</td>
<td style="border:1px solid #ddd;padding:10px;">Daily SPF 30+; minimal professional treatment</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Autumn (Sep–Nov)</td>
<td style="border:1px solid #ddd;padding:10px;">Renewal, winter preparation</td>
<td style="border:1px solid #ddd;padding:10px;">More aggressive laser therapy; collagen induction</td>
</tr>
</table>

<h3>Skin Concern → Recommended Treatment</h3>

<table style="width:100%;border-collapse:collapse;margin:20px 0;">
<tr style="background-color:#f5f5f5;">
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Skin Concern</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Primary Treatment</th>
<th style="border:1px solid #ddd;padding:10px;text-align:left;">Complementary Option</th>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Acne scars</td>
<td style="border:1px solid #ddd;padding:10px;">Fractional laser</td>
<td style="border:1px solid #ddd;padding:10px;">Microneedling; chemical peel</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Melasma/pigmentation</td>
<td style="border:1px solid #ddd;padding:10px;">Nd:YAG pigment laser</td>
<td style="border:1px solid #ddd;padding:10px;">Topical hydroquinone; daily SPF</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Fine lines/wrinkles</td>
<td style="border:1px solid #ddd;padding:10px;">Glacē or microfocused ultrasound</td>
<td style="border:1px solid #ddd;padding:10px;">Retinoid serum (at-home)</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Enlarged pores</td>
<td style="border:1px solid #ddd;padding:10px;">Glacē + radiofrequency</td>
<td style="border:1px solid #ddd;padding:10px;">Niacinamide serum (at-home)</td>
</tr>
<tr>
<td style="border:1px solid #ddd;padding:10px;">Rosacea/erythema</td>
<td style="border:1px solid #ddd;padding:10px;">Vascular laser (green or yellow laser)</td>
<td style="border:1px solid #ddd;padding:10px;">Topical anti-inflammatory</td>
</tr>
<tr style="background-color:#f9f9f9;">
<td style="border:1px solid #ddd;padding:10px;">Dullness/dehydration</td>
<td style="border:1px solid #ddd;padding:10px;">Candela Glacē</td>
<td style="border:1px solid #ddd;padding:10px;">Hyaluronic acid serum (at-home)</td>
</tr>
</table>

<h3>What Makes SkinTech Different from Beauty Salons</h3>

<p>Many Amsterdam beauty salons use "beauty-grade" devices—consumer versions of professional systems, usually lighter in specifications. SkinTech uses medical-clinical equipment. Our Candela Glacē, our Nd:YAG laser, our Observ analyzer—these are industry-standard devices for dermatological clinics.</p>

<p>Beyond that, our team is medically qualified. We work under dermatological guidance; we don't simply perform treatments. <a href="https://doi.org/10.1016/j.clindermatol.2010.03.030" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Draelos, 2010</a> emphasized that medically-supervised "cosmeceutical" treatment delivers much better results and safety profile than beauty-grade equipment.</p>

<h3>Retinoids and Skin Aging: An Integrative Approach</h3>

<p><a href="https://doi.org/10.1111/j.1365-2230.2006.02238.x" target="_blank" rel="noopener" style="color:var(--bronze-deep);">Mukherjee et al., 2006</a> showed that retinoids are among the most proven anti-aging ingredients—they stimulate collagen synthesis and reduce fine lines. At SkinTech, we often recommend a nighttime retinoid (such as 0.25–0.5% retinol) alongside professional laser treatments. This amplifies results.</p>

<h3>Amsterdam's International Communities: Your Skin, Your Language</h3>

<p>SkinTech speaks Dutch and English fluently. Many of our patients are international employees, expats, or immigrants wondering if "standard beauty care" suits their skin type. It does. Our Nd:YAG laser works on all Fitzpatrick types. Our Observ analyzer accurately analyzes all skin tones. Our team understands skincare in the context of ethnic skin.</p>

<h3>Your Next Step: Personal Consultation</h3>

<p>Whether you're struggling with acne scars, pigmentation, dullness, or wrinkles—professional skin improvement is genuinely possible. SkinTech Laser Clinic Amsterdam offers free, non-obligatory consultations. We use Observ 520x skin analysis to show you exactly what we can do.</p>

<p>Amsterdam deserves skincare matching international standards, with dermatologist-grade equipment and knowledge of diverse skin types. We're here to deliver that.</p>
    `
  }
};




