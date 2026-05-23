# Campus Virtual - Dashboard EVA

Proyecto: clon funcional del dashboard EVA Zegel.

## Archivos

```
campus-virtual/
├── index.html        → Login
├── dashboard.html    → Dashboard principal
├── css/style.css     → Todos los estilos (login + dashboard + responsive)
├── js/main.js        → Toda la lógica (login, dashboard, menús)
└── README.md         ← este archivo
```

## Funcionalidades

### Login (`index.html`)
- Usuario: `admin` / Contraseña: `123456`
- Cualquier usuario/contraseña también funciona (simulación)
- Guarda el nombre en `localStorage` (`campus_user`) y redirige a `dashboard.html`

### Dashboard (`dashboard.html`)
- Sidebar izquierdo con logo EVA + 10 items de navegación
- "Inicio" activo por defecto (resaltado en magenta `#FE004E`)
- Barra superior con íconos de búsqueda, notificaciones, mail y perfil de usuario
- Panel central: tabs "Mis clases" / "Mi horario", mensaje vacío, tarjeta de pendientes
- Panel derecho: "Publicaciones" (vacío, listo para llenar) + botón Chat S.A.E (link WhatsApp)

### Sidebar responsive con hamburguesa
- **>768px**: sidebar fija a la izquierda (232px)
- **≤768px**: sidebar oculta, botón ☰ en la barra superior, se abre como un cajón deslizable con capa oscura atrás
- Cierra al tocar la ✕, la capa oscura, o cualquier item

### Perfil de usuario
- Muestra el nombre que ingresaste en login (dinámico)
- Al hacer clic en el avatar/nombre → dropdown con "Cerrar sesión"
- "Cerrar sesión" borra `localStorage` y redirige al login

### Responsive
- Breakpoints: 1200px, 992px, 768px, 576px, 380px
- Se adapta a cualquier pantalla (desktop, tablet, celular)
- En mobile: sidebar drawer, paneles en columna, textos más chicos

## Próximos pasos (pendientes)
- [ ] Agregar publicaciones reales en el panel derecho
- [ ] Poner el número de WhatsApp real en el botón Chat S.A.E (`href="https://wa.me/..."`)
- [ ] Conexión a API real (actualmente mock en localStorage)
- [ ] Funcionalidad de búsqueda, notificaciones, mail
- [ ] Submenús en items con ▾ (Mis unidades, Biblioteca, etc.)

## Notas
- Color accent: `#FE004E` (magenta)
- Fuente: Inter (Google Fonts)
- Sin dependencias externas (solo Google Fonts)
- Todos los estilos están en `css/style.css`
- Toda la lógica JS está en `js/main.js`
- Las imágenes descargadas están en `images/` (zegel.svg, logo-eva-black.svg, new-banner-zegel.webp)
