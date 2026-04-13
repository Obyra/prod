/**
 * OBYRA Landing - Client-side i18n
 * Traducciones para la landing page estatica (www.obyra.com.ar)
 */

var TRANSLATIONS = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.funcionalidades': 'Funcionalidades',
    'nav.beneficios': 'Beneficios',
    'nav.precios': 'Precios',
    'nav.contacto': 'Contacto',
    'nav.acceder': 'Acceder a la App',
    'hero.badge': 'Nueva App Web',
    'hero.titulo': 'Gestiona tus obras de forma inteligente',
    'hero.subtitulo': 'OBYRA es la plataforma integral para empresas constructoras. Administra presupuestos, inventario, tareas, clientes y reportes desde cualquier dispositivo.',
    'hero.cta1': 'Comenzar ahora',
    'hero.cta2': 'Ver funcionalidades',
    'hero.cta3': 'Reserva tu demo sin cargo',
    'features.titulo': 'Todo lo que necesitas en un solo lugar',
    'features.subtitulo': 'Herramientas potentes para optimizar cada aspecto de tus proyectos de construccion',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.funcionalidades': 'Features',
    'nav.beneficios': 'Benefits',
    'nav.precios': 'Pricing',
    'nav.contacto': 'Contact',
    'nav.acceder': 'Open App',
    'hero.badge': 'New Web App',
    'hero.titulo': 'Manage your projects intelligently',
    'hero.subtitulo': 'OBYRA is the all-in-one platform for construction companies. Manage budgets, inventory, tasks, clients and reports from any device.',
    'hero.cta1': 'Get started',
    'hero.cta2': 'See features',
    'hero.cta3': 'Book a free demo',
    'features.titulo': 'Everything you need in one place',
    'features.subtitulo': 'Powerful tools to optimize every aspect of your construction projects',
  },
  de: {
    'nav.inicio': 'Startseite',
    'nav.funcionalidades': 'Funktionen',
    'nav.beneficios': 'Vorteile',
    'nav.precios': 'Preise',
    'nav.contacto': 'Kontakt',
    'nav.acceder': 'Zur App',
    'hero.badge': 'Neue Web-App',
    'hero.titulo': 'Verwalten Sie Ihre Bauprojekte intelligent',
    'hero.subtitulo': 'OBYRA ist die All-in-One-Plattform für Bauunternehmen. Verwalten Sie Budgets, Inventar, Aufgaben, Kunden und Berichte von jedem Gerät aus.',
    'hero.cta1': 'Jetzt starten',
    'hero.cta2': 'Funktionen ansehen',
    'hero.cta3': 'Kostenlose Demo buchen',
    'features.titulo': 'Alles was Sie brauchen an einem Ort',
    'features.subtitulo': 'Leistungsstarke Werkzeuge zur Optimierung aller Aspekte Ihrer Bauprojekte',
  }
};

function getLang() {
  // Leer cookie 'lang' (compartida con app.obyra.com.ar)
  var match = document.cookie.match(/(?:^|;\s*)lang=(\w+)/);
  return (match && TRANSLATIONS[match[1]]) ? match[1] : 'es';
}

function setLang(lang) {
  document.cookie = 'lang=' + lang + ';path=/;max-age=' + (365*24*60*60) + ';domain=.obyra.com.ar;SameSite=Lax';
  applyTranslations(lang);
  updateFlagOpacity(lang);
}

function applyTranslations(lang) {
  var t = TRANSLATIONS[lang] || TRANSLATIONS['es'];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}

function updateFlagOpacity(lang) {
  ['es', 'en', 'de'].forEach(function(l) {
    var flag = document.getElementById('flag-' + l);
    if (flag) {
      flag.style.opacity = (l === lang) ? '1' : '0.4';
    }
  });
}

// Aplicar al cargar
document.addEventListener('DOMContentLoaded', function() {
  var lang = getLang();
  applyTranslations(lang);
  updateFlagOpacity(lang);
});
