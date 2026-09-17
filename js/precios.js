/* ============================================================
   OBYRA — Precios publicados
   ------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA CAMBIAR PRECIOS.
   Se usa en la home (sección Precios) y en la página /precios/.
   ============================================================ */

window.OBYRA_PRECIOS = {

  /* Fecha que se muestra al pie de la sección de precios. */
  actualizado: '17/09/2026',

  /* Leyenda impositiva. Brenda es Responsable Monotributo, así que
     NO corresponde "IVA incluido". */
  leyendaFiscal: 'Precios expresados en pesos argentinos. Operación no alcanzada por IVA — Responsable Monotributo.',

  planes: [

    {
      id: 'gastronomico',
      etiqueta: 'OBYRA Gastronómico',
      nombre: 'Tienda online y panel de pedidos',
      modalidad: 'Comisión sobre ventas',
      /* Lo que se cobra por Mobbex. */
      monto: '4%',
      periodo: 'de la facturación mensual del local',
      detalle: 'Se factura por mes vencido sobre las ventas efectivamente cobradas.',
      destacado: true,
      filas: [
        ['Modalidad', 'Comisión mensual sobre ventas'],
        ['Usuarios incluidos', 'Sin límite dentro del local'],
        ['Puesta en marcha', 'Inversión inicial según el tamaño del local'],
        ['Actualizaciones', 'Incluidas'],
        ['Soporte', 'Incluido por WhatsApp']
      ],
      cta: { texto: 'Pedir una demo', href: '/#contacto' }
    },

    {
      id: 'construccion-profesional',
      etiqueta: 'OBYRA Construcción',
      nombre: 'Plan Profesional',
      modalidad: 'Suscripción mensual',
      monto: '$420.000',
      periodo: 'ARS / mes',
      /* TODO (Brenda): confirmar el monto en pesos. Sale de los USD 300/mes
         publicados en /construccion/ a la cotización usada ahí (1 USD = $1.400). */
      detalle: 'Equivale a USD 300 + IVA por mes. Actualización trimestral por IPC.',
      filas: [
        ['Modalidad', 'Suscripción mensual'],
        ['Usuarios incluidos', '15'],
        ['Obras', 'Ilimitadas'],
        ['Prueba gratuita', '30 días, sin tarjeta'],
        ['Actualizaciones', 'Incluidas'],
        ['Soporte', 'Incluido']
      ],
      cta: { texto: 'Empezar prueba gratis', href: 'https://app.obyra.com.ar/auth/register' }
    },

    {
      id: 'construccion-licencia',
      etiqueta: 'OBYRA Construcción',
      nombre: 'Licencia 5 años',
      modalidad: 'Pago único',
      monto: '$16.660.000',
      periodo: 'ARS (pago único)',
      /* TODO (Brenda): confirmar el monto en pesos. Sale de los USD 11.900
         publicados en /construccion/ a la misma cotización (1 USD = $1.400). */
      detalle: 'Equivale a USD 11.900 + IVA, por 60 meses de servicio.',
      filas: [
        ['Modalidad', 'Pago único'],
        ['Usuarios incluidos', '15'],
        ['Obras', 'Ilimitadas'],
        ['Prueba gratuita', '30 días, sin tarjeta'],
        ['Actualizaciones', 'Incluidas por 5 años'],
        ['Soporte', 'Incluido']
      ],
      cta: { texto: 'Consultar por WhatsApp', href: 'https://wa.me/5491173685175?text=Hola%2C%20quiero%20info%20sobre%20la%20licencia%205%20a%C3%B1os%20de%20OBYRA' }
    },

    {
      id: 'a-medida',
      etiqueta: 'Software a medida',
      nombre: 'Sistemas para otros rubros',
      modalidad: 'Presupuesto a medida',
      monto: 'Presupuesto',
      periodo: 'a medida',
      detalle: 'El precio depende del alcance. La primera reunión de diagnóstico no tiene costo.',
      filas: [
        ['Modalidad', 'Proyecto cerrado o por etapas'],
        ['Diagnóstico', 'Sin costo'],
        ['Prototipo', 'Antes de desarrollar'],
        ['Soporte', 'Incluido después de la puesta en marcha']
      ],
      cta: { texto: 'Contar mi problema', href: '/#contacto' }
    }

  ]
};

/* ------------------------------------------------------------
   Dibuja las tarjetas dentro de cualquier elemento con
   id="precios-grilla". Si no existe, no hace nada.
   ------------------------------------------------------------ */
(function () {
  'use strict';

  function texto(valor) {
    var span = document.createElement('span');
    span.textContent = valor;
    return span.innerHTML;
  }

  function dibujar() {
    var grilla = document.getElementById('precios-grilla');
    if (!grilla || !window.OBYRA_PRECIOS) return;

    grilla.innerHTML = window.OBYRA_PRECIOS.planes.map(function (plan) {
      var filas = plan.filas.map(function (f) {
        return '<li><dt>' + texto(f[0]) + ':</dt> <dd>' + texto(f[1]) + '</dd></li>';
      }).join('');

      return '' +
        '<article class="plan' + (plan.destacado ? ' plan--destacado' : '') + '" id="plan-' + texto(plan.id) + '">' +
          '<p class="plan__etiqueta">' + texto(plan.etiqueta) + '</p>' +
          '<h3>' + texto(plan.nombre) + '</h3>' +
          '<p class="plan__modalidad">' + texto(plan.modalidad) + '</p>' +
          '<p class="plan__monto"><span class="plan__numero">' + texto(plan.monto) + '</span>' +
            '<span class="plan__periodo">' + texto(plan.periodo) + '</span></p>' +
          '<p class="plan__detalle">' + texto(plan.detalle) + '</p>' +
          '<dl class="plan__lista">' + filas + '</dl>' +
          '<a class="btn btn--primario btn--chico" href="' + texto(plan.cta.href) + '">' + texto(plan.cta.texto) + '</a>' +
        '</article>';
    }).join('');

    var nota = document.getElementById('precios-nota');
    if (nota) {
      nota.textContent = window.OBYRA_PRECIOS.leyendaFiscal +
        ' Precios vigentes al ' + window.OBYRA_PRECIOS.actualizado + '.';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', dibujar);
  } else {
    dibujar();
  }
})();
