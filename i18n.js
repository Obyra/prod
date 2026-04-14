/**
 * OBYRA Landing - Client-side i18n (complete)
 * Dropdown language selector + full page translation
 */

var LANG_META = {
  es: { flag: '🇪🇸', code: 'ES', name: 'Español' },
  en: { flag: '🇬🇧', code: 'EN', name: 'English' },
  de: { flag: '🇩🇪', code: 'DE', name: 'Deutsch' }
};

var T = {
  es: {
    'nav.inicio':'Inicio','nav.funcionalidades':'Funcionalidades','nav.beneficios':'Beneficios','nav.precios':'Precios','nav.contacto':'Contacto','nav.acceder':'Acceder a la App',
    'hero.badge':'Nueva App Web','hero.titulo':'Gestiona tus obras de forma inteligente','hero.subtitulo':'OBYRA es la plataforma integral para empresas constructoras. Administrá presupuestos, inventario, tareas, clientes y reportes desde cualquier dispositivo.','hero.cta1':'Comenzar ahora','hero.cta2':'Ver funcionalidades','hero.cta3':'Reservá tu demo sin cargo',
    'feat.titulo':'Todo lo que necesitás en un solo lugar','feat.sub':'Herramientas potentes para optimizar cada aspecto de tus proyectos de construcción',
    'feat.1t':'Presupuestos Inteligentes','feat.1d':'Creá presupuestos detallados con nuestra calculadora IA. Generá comparativas en USD y ARS automáticamente.',
    'feat.2t':'Control de Inventario','feat.2d':'Gestioná materiales, herramientas y equipos. Controlá stock, traslados entre depósitos y alertas de mínimo.',
    'feat.3t':'Gestión de Obras','feat.3d':'Administrá múltiples obras simultáneamente. Seguimiento de avance, tareas asignadas y documentación.',
    'feat.4t':'Clientes y Proveedores','feat.4d':'Mantené un registro organizado de todos tus contactos comerciales con historial de operaciones.',
    'feat.5t':'Reportes y Métricas','feat.5d':'Visualizá el rendimiento de tus proyectos con dashboards interactivos y reportes exportables.',
    'feat.6t':'Multi-usuario y Roles','feat.6d':'Creá equipos con diferentes niveles de acceso. Administradores, supervisores y operarios.',
    'ben.titulo':'Resultados que importan','ben.sub':'Empresas constructoras confían en OBYRA para optimizar sus operaciones',
    'ben.1':'Ahorro en tiempo de gestión','ben.2':'Acceso desde cualquier dispositivo','ben.3':'Disponibilidad de la plataforma','ben.4':'Instalación requerida',
    'pwa.titulo':'Funciona como una app nativa','pwa.desc':'OBYRA es una Progressive Web App (PWA). Instalala en tu celular o computadora y usala sin conexión a internet.',
    'pwa.1':'Instalala directamente desde el navegador','pwa.2':'Funciona sin conexión a internet','pwa.3':'Recibí notificaciones push','pwa.4':'Actualizaciones automáticas','pwa.5':'Sin ocupar espacio en app stores','pwa.cta':'Instalar OBYRA',
    'precio.titulo':'Planes y Precios','precio.sub':'Una sola plataforma con todo lo que tu constructora necesita.','precio.restriccion':'Sin restricciones de usuarios ni obras.',
    'precio.popular':'MÁS POPULAR','precio.mensual':'Suscripción Mensual','precio.licencia':'Licencia 5 Años','precio.profesional':'OBYRA Profesional','precio.pago_unico':'OBYRA Profesional - Pago único',
    'precio.m1':'Acceso completo a la plataforma','precio.m2':'Sin restricciones de usuarios ni obras','precio.m3':'30 días de prueba gratis','precio.m4':'Sin tarjeta para empezar','precio.m5':'Cancelás cuando quieras','precio.m6':'Soporte por WhatsApp',
    'precio.l1':'60 meses de servicio incluidos','precio.l2':'Sin restricciones de usuarios ni obras','precio.l3':'Mismas funcionalidades que mensual','precio.l4':'Renovación 20% anual desde año 6','precio.l5':'Soporte preferencial','precio.l6':'Pago seguro por transferencia',
    'precio.cta_mensual':'EMPEZAR PRUEBA GRATIS','precio.cta_licencia':'SOLICITAR POR WHATSAPP','precio.ahorro':'Ahorrás 38% vs mensual',
    'precio.dudas':'¿Dudas? Escribinos por WhatsApp:',
    'cta.titulo':'Comenzá a gestionar tus obras hoy','cta.sub':'Registrate gratis y descubrí cómo OBYRA puede transformar la gestión de tus proyectos de construcción.','cta.btn1':'Crear cuenta gratis','cta.btn2':'Iniciar sesión',
    'contact.titulo':'Contactanos','contact.desc':'Estamos para ayudarte','contact.desc2':'¿Tenés preguntas sobre OBYRA? Nuestro equipo está listo para ayudarte a optimizar la gestión de tus obras.',
    'contact.form_titulo':'Envianos un mensaje','contact.ph_nombre':'Nombre y apellido','contact.ph_email':'Email','contact.ph_empresa':'Empresa (opcional)','contact.ph_mensaje':'Tu mensaje','contact.btn_enviar':'Enviar mensaje',
    'contact.email':'Email','contact.whatsapp':'WhatsApp','contact.ubicacion':'Ubicación',
    'footer.desc':'Plataforma inteligente de planificación y compras para obras en LATAM','footer.copy':'2025 OBYRA IA. Todos los derechos reservados.',
  },
  en: {
    'nav.inicio':'Home','nav.funcionalidades':'Features','nav.beneficios':'Benefits','nav.precios':'Pricing','nav.contacto':'Contact','nav.acceder':'Open App',
    'hero.badge':'New Web App','hero.titulo':'Manage your construction projects intelligently','hero.subtitulo':'OBYRA is the all-in-one platform for construction companies. Manage budgets, inventory, tasks, clients and reports from any device.','hero.cta1':'Get Started','hero.cta2':'See Features','hero.cta3':'Book a Free Demo',
    'feat.titulo':'Everything you need in one place','feat.sub':'Powerful tools to optimize every aspect of your construction projects',
    'feat.1t':'Smart Budgeting','feat.1d':'Create detailed budgets with our AI calculator. Automatically generate comparisons in USD and local currency.',
    'feat.2t':'Inventory Control','feat.2d':'Manage materials, tools and equipment. Track stock levels, warehouse transfers and low-stock alerts.',
    'feat.3t':'Project Management','feat.3d':'Manage multiple projects simultaneously. Track progress, assigned tasks and documentation.',
    'feat.4t':'Clients & Suppliers','feat.4d':'Keep an organized record of all your business contacts with full operation history.',
    'feat.5t':'Reports & Analytics','feat.5d':'Visualize project performance with interactive dashboards and exportable reports.',
    'feat.6t':'Multi-user & Roles','feat.6d':'Build teams with different access levels. Administrators, supervisors and field workers.',
    'ben.titulo':'Results that matter','ben.sub':'Construction companies trust OBYRA to streamline their operations',
    'ben.1':'Time saved on management','ben.2':'Access from any device','ben.3':'Platform availability','ben.4':'No installation required',
    'pwa.titulo':'Works like a native app','pwa.desc':'OBYRA is a Progressive Web App (PWA). Install it on your phone or computer and use it even without an internet connection.',
    'pwa.1':'Install directly from your browser','pwa.2':'Works offline','pwa.3':'Receive push notifications','pwa.4':'Automatic updates','pwa.5':'No app store download needed','pwa.cta':'Install OBYRA',
    'precio.titulo':'Plans & Pricing','precio.sub':'One platform with everything your construction company needs.','precio.restriccion':'No user or project restrictions.',
    'precio.popular':'MOST POPULAR','precio.mensual':'Monthly Subscription','precio.licencia':'5-Year License','precio.profesional':'OBYRA Professional','precio.pago_unico':'OBYRA Professional — One-time Payment',
    'precio.m1':'Full platform access','precio.m2':'No user or project restrictions','precio.m3':'30-day free trial','precio.m4':'No credit card required','precio.m5':'Cancel anytime','precio.m6':'WhatsApp support',
    'precio.l1':'60 months of service included','precio.l2':'No user or project restrictions','precio.l3':'Same features as monthly plan','precio.l4':'20% annual renewal from year 6','precio.l5':'Priority support','precio.l6':'Secure bank transfer payment',
    'precio.cta_mensual':'START FREE TRIAL','precio.cta_licencia':'REQUEST VIA WHATSAPP','precio.ahorro':'Save 38% vs monthly',
    'precio.dudas':'Questions? Reach out on WhatsApp:',
    'cta.titulo':'Start managing your projects today','cta.sub':'Sign up for free and discover how OBYRA can transform your construction project management.','cta.btn1':'Create Free Account','cta.btn2':'Sign In',
    'contact.titulo':'Contact Us','contact.desc':'We\'re here to help','contact.desc2':'Have questions about OBYRA? Our team is ready to help you optimize your construction management.',
    'contact.form_titulo':'Send us a message','contact.ph_nombre':'Full name','contact.ph_email':'Email','contact.ph_empresa':'Company (optional)','contact.ph_mensaje':'Your message','contact.btn_enviar':'Send Message',
    'contact.email':'Email','contact.whatsapp':'WhatsApp','contact.ubicacion':'Location',
    'footer.desc':'Smart planning and procurement platform for construction in LATAM','footer.copy':'2025 OBYRA. All rights reserved.',
  },
  de: {
    'nav.inicio':'Startseite','nav.funcionalidades':'Funktionen','nav.beneficios':'Vorteile','nav.precios':'Preise','nav.contacto':'Kontakt','nav.acceder':'Zur App',
    'hero.badge':'Neue Web-App','hero.titulo':'Verwalten Sie Ihre Bauprojekte intelligent','hero.subtitulo':'OBYRA ist die All-in-One-Plattform für Bauunternehmen. Verwalten Sie Budgets, Inventar, Aufgaben, Kunden und Berichte von jedem Gerät aus.','hero.cta1':'Jetzt starten','hero.cta2':'Funktionen ansehen','hero.cta3':'Kostenlose Demo buchen',
    'feat.titulo':'Alles, was Sie brauchen — an einem Ort','feat.sub':'Leistungsstarke Werkzeuge zur Optimierung aller Aspekte Ihrer Bauprojekte',
    'feat.1t':'Intelligente Kalkulation','feat.1d':'Erstellen Sie detaillierte Budgets mit unserem KI-Rechner. Automatische Vergleiche in USD und Landeswährung.',
    'feat.2t':'Inventarverwaltung','feat.2d':'Verwalten Sie Materialien, Werkzeuge und Geräte. Bestandskontrolle, Transfers zwischen Lagern und Mindestmengen-Alarme.',
    'feat.3t':'Projektverwaltung','feat.3d':'Verwalten Sie mehrere Projekte gleichzeitig. Fortschrittsverfolgung, zugewiesene Aufgaben und Dokumentation.',
    'feat.4t':'Kunden & Lieferanten','feat.4d':'Führen Sie ein organisiertes Verzeichnis aller Geschäftskontakte mit vollständiger Vorgangshistorie.',
    'feat.5t':'Berichte & Kennzahlen','feat.5d':'Visualisieren Sie die Projektleistung mit interaktiven Dashboards und exportierbaren Berichten.',
    'feat.6t':'Mehrbenutzer & Rollen','feat.6d':'Erstellen Sie Teams mit unterschiedlichen Zugriffsebenen. Administratoren, Bauleiter und Facharbeiter.',
    'ben.titulo':'Ergebnisse, die zählen','ben.sub':'Bauunternehmen vertrauen auf OBYRA zur Optimierung ihrer Abläufe',
    'ben.1':'Zeitersparnis bei der Verwaltung','ben.2':'Zugriff von jedem Gerät','ben.3':'Plattformverfügbarkeit','ben.4':'Keine Installation nötig',
    'pwa.titulo':'Funktioniert wie eine native App','pwa.desc':'OBYRA ist eine Progressive Web App (PWA). Installieren Sie sie auf Ihrem Smartphone oder Computer und nutzen Sie sie auch ohne Internetverbindung.',
    'pwa.1':'Direkt im Browser installieren','pwa.2':'Funktioniert auch offline','pwa.3':'Push-Benachrichtigungen erhalten','pwa.4':'Automatische Updates','pwa.5':'Kein App-Store-Download nötig','pwa.cta':'OBYRA installieren',
    'precio.titulo':'Pläne & Preise','precio.sub':'Eine Plattform mit allem, was Ihr Bauunternehmen braucht.','precio.restriccion':'Keine Benutzer- oder Projektbeschränkungen.',
    'precio.popular':'AM BELIEBTESTEN','precio.mensual':'Monatsabonnement','precio.licencia':'5-Jahres-Lizenz','precio.profesional':'OBYRA Professionell','precio.pago_unico':'OBYRA Professionell — Einmalzahlung',
    'precio.m1':'Voller Plattformzugriff','precio.m2':'Keine Benutzer- oder Projektbeschränkungen','precio.m3':'30 Tage kostenlos testen','precio.m4':'Keine Kreditkarte erforderlich','precio.m5':'Jederzeit kündbar','precio.m6':'WhatsApp-Support',
    'precio.l1':'60 Monate Service inklusive','precio.l2':'Keine Benutzer- oder Projektbeschränkungen','precio.l3':'Gleiche Funktionen wie beim Monatsabo','precio.l4':'20% jährliche Verlängerung ab Jahr 6','precio.l5':'Bevorzugter Support','precio.l6':'Sichere Banküberweisung',
    'precio.cta_mensual':'KOSTENLOS TESTEN','precio.cta_licencia':'PER WHATSAPP ANFRAGEN','precio.ahorro':'38% Ersparnis gegenüber monatlich',
    'precio.dudas':'Fragen? Kontaktieren Sie uns per WhatsApp:',
    'cta.titulo':'Starten Sie noch heute mit der Projektverwaltung','cta.sub':'Registrieren Sie sich kostenlos und entdecken Sie, wie OBYRA Ihre Bauprojektverwaltung transformieren kann.','cta.btn1':'Kostenloses Konto erstellen','cta.btn2':'Anmelden',
    'contact.titulo':'Kontakt','contact.desc':'Wir sind für Sie da','contact.desc2':'Haben Sie Fragen zu OBYRA? Unser Team hilft Ihnen gerne bei der Optimierung Ihrer Bauprojektverwaltung.',
    'contact.form_titulo':'Nachricht senden','contact.ph_nombre':'Vollständiger Name','contact.ph_email':'E-Mail','contact.ph_empresa':'Unternehmen (optional)','contact.ph_mensaje':'Ihre Nachricht','contact.btn_enviar':'Nachricht senden',
    'contact.email':'E-Mail','contact.whatsapp':'WhatsApp','contact.ubicacion':'Standort',
    'footer.desc':'Intelligente Planungs- und Beschaffungsplattform für Bauprojekte in Lateinamerika','footer.copy':'2025 OBYRA. Alle Rechte vorbehalten.',
  }
};

/* ---- Language functions ---- */

function getLang() {
  // Read from localStorage only (no cross-domain cookie leaks)
  try {
    var saved = localStorage.getItem('obyra_lang');
    if (saved && T[saved]) return saved;
  } catch(e) {}
  return 'es';
}

function setLang(lang) {
  try { localStorage.setItem('obyra_lang', lang); } catch(e) {}
  // Clear legacy cookie to avoid stale translations
  document.cookie = 'lang=;path=/;max-age=0;domain=.obyra.com.ar';
  document.cookie = 'lang=;path=/;max-age=0';
  applyTranslations(lang);
  updateLangButton(lang);
  closeLangMenu();
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  var t = T[lang] || T['es'];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key]) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
}

function updateLangButton(lang) {
  var meta = LANG_META[lang] || LANG_META['es'];
  var flagEl = document.getElementById('langCurrentFlag');
  var textEl = document.getElementById('langCurrentText');
  if (flagEl) flagEl.textContent = meta.flag;
  if (textEl) textEl.textContent = meta.code;
}

function toggleLangMenu() {
  var selector = document.getElementById('langSelector');
  if (selector) selector.classList.toggle('open');
}

function closeLangMenu() {
  var selector = document.getElementById('langSelector');
  if (selector) selector.classList.remove('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  var selector = document.getElementById('langSelector');
  if (selector && !selector.contains(e.target)) {
    selector.classList.remove('open');
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Clear legacy cross-domain cookie that caused mixed-language issues
  document.cookie = 'lang=;path=/;max-age=0;domain=.obyra.com.ar';
  document.cookie = 'lang=;path=/;max-age=0';

  var lang = getLang();
  applyTranslations(lang);
  updateLangButton(lang);
});
