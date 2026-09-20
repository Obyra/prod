/* ============================================================
   OBYRA — Precios publicados
   ------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA CAMBIAR PRECIOS.
   Se usa en la home (sección Precios) y en la página /precios/.
   ============================================================ */

window.OBYRA_PRECIOS = {

  /* Fecha que se muestra al pie de la sección de precios. */
  actualizado: '20/09/2026',

  /* Leyenda impositiva. Brenda es Responsable Monotributo, así que
     NO corresponde "IVA incluido". */
  leyendaFiscal: 'Precios expresados en pesos argentinos. Operación no alcanzada por IVA — Responsable Monotributo.',

  planes: [

    {
      id: 'pedidos',
      etiqueta: 'OBYRA Pedidos',
      nombre: 'Tienda online y panel de pedidos',
      modalidad: 'Comisión sobre ventas',
      /* Escalones del modelo vigente (decidido el 20/09/2026). El porcentaje
         del tramo se aplica a TODO lo vendido, no por tramos acumulados: asi
         la factura coincide con la tabla y se explica en una frase. */
      monto: '3,90%',
      periodo: 'de lo que vendas por mes',
      detalle: 'Baja a 3,50%, 3% y 2,50% a medida que vendés más. Sin abono mensual fijo.',
      destacado: true,
      filas: [
        ['Hasta $2.000.000 por mes', '3,90%'],
        ['De $2 a $5 millones', '3,50%'],
        ['De $5 a $10 millones', '3,00%'],
        ['Más de $10 millones', '2,50%'],
        ['Prueba gratuita', '14 días desde que se publica tu tienda'],
        ['Si armás la tienda vos', 'Alta sin costo'],
        ['Si te la armamos nosotros', '$100.000 por única vez'],
        ['Usuarios incluidos', 'Sin límite dentro del local'],
        ['Actualizaciones', 'Incluidas'],
        ['Soporte', 'Incluido por WhatsApp']
      ],
      cta: { texto: 'Creá tu tienda', href: 'https://pedidos.obyra.com.ar/crear-tienda' }
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
