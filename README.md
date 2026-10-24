# Del Bosque — propuesta web

Sitio estático en HTML, CSS y JavaScript. Rama de revisión `desarrollo-web`; no fusionar con `main` hasta aprobación del cliente.

## Editar
- `productos.json`: catálogo base. `price: null` muestra «Precio a consultar». No cargar precios hasta confirmar presentación e IVA.
- `generar.py`: contenido y plantillas. Ejecutar `python3 generar.py` después de editar productos o contenido; genera las seis páginas HTML.
- `style.css`: diseño responsive, sin dependencias externas.
- `script.js`: menú, búsqueda, filtros, selección y cantidades, preparación de WhatsApp.
- Servir el directorio mediante un servidor estático. GitHub Pages puede servir los HTML sin ejecutar Python.

Los gráficos son composiciones tipográficas, no fotografías ni representaciones del envase real. La marca tipográfica es provisional. No hay checkout, backend, analítica ni almacenamiento de datos del formulario. La consulta se pierde al recargar o abandonar la página; no se envía automáticamente ningún mensaje.

## Antecedentes confirmados por Javier
- La empresa fabrica y distribuye de forma directa.
- WhatsApp: +56 9 9822 0830. Dirección: Vecinal 797, El Bosque, Santiago.
- Cliente informado: MSA Ltda. Pendiente autorización para publicar su nombre o logo y lista completa de clientes. No se muestra todavía en la página.
- Posible cobertura: todo Santiago, sin confirmar. El sitio solicita consultar cobertura por comuna.
- Logo existente aún no recibido. Evaluar rediseño o creación de identidad como servicio adicional en la propuesta comercial; mantener marca tipográfica provisional.

## Pendientes del cliente
1. Obtener logo existente y evaluar propuesta de identidad; fotografías y envases reales.
2. Confirmar razón social y RUT, copiados de la landing original. Teléfono y dirección ya confirmados.
3. Recibir historia, año de inicio e hitos verificables. Se retiró el año 2019 y cifras de experiencia hasta validación.
4. Clientes autorizados, logos y testimonios con consentimiento. No se inventaron referencias.
5. Productos finales: nombre, categoría, descripción aprobada, SKU, formatos, precio por formato, IVA, disponibilidad, imágenes, fichas técnicas, HDS, etiquetas y registros aplicables.
6. Condiciones de entrega/retiro, cobertura, mínimo de compra, horario y medios de pago.
7. Validar el texto comercial antes de fusionar y publicar.

## Referencias regulatorias revisadas el 24-10-2026
- D.S. 57/2019: https://www.bcn.cl/leychile/Navegar?idNorma=1155752
- ISP, plaguicidas y desinfectantes (D.S. 157/2005): https://www.ispch.cl/ambientes-y-alimentos/unidad-de-plaguicidas-y-desinfectantes/
- ISP, registro: https://www.ispch.gob.cl/ambientes-y-alimentos/unidad-de-plaguicidas-y-desinfectantes/registro/

Las referencias generales no son prueba de cumplimiento de la empresa. Aplicabilidad, exclusiones, plazos y documentación deben revisarse por producto. No se incluyeron promesas de eficacia, dosificaciones, certificaciones FDA ni propiedades ecológicas sin respaldo.

## Validación
Sintaxis JavaScript y enlaces internos comprobados. Verificación en navegador de selección de producto, búsqueda sin tilde, estado sin resultados, cambio de cantidad reflejado en URL de WhatsApp y preparación del formulario sin envío. Diseño responsive implementado; falta revisión en dispositivos móviles reales. No se enviaron mensajes de prueba.
