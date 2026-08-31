# 🚀 Página Web Moderna - Jonathan Vargas Roa

Una página web moderna y animada con interacciones fluidas para presentar tu portafolio.

## 📁 Estructura

```
├── index.html       # Página HTML principal
├── styles.css       # Estilos y animaciones CSS
├── script.js        # Interactividad y efectos JavaScript
└── src/             # Recursos (GIFs y imágenes)
```

## ✨ Características Principales

### Animaciones y Transiciones
- **Hero Section**: Gradientes animados, partículas flotantes y efectos de brillo
- **Navbar**: Deslizamiento suave, efecto hover en enlaces con subrayado animado
- **Botones**: Efecto ripple, cambio de color fluido, transiciones de escala
- **Tarjetas**: Elevación al pasar el ratón, bordes brillantes, transiciones suaves
- **Carrusel de imágenes**: Desplazamiento automático de imágenes en "Acerca de Mí"

### Interactividad
- **AOS (Animate On Scroll)**: Las secciones se animan al desplazarse
- **Navegación suave**: Scroll fluido entre secciones
- **Menú responsivo**: Hamburguesa para dispositivos móviles
- **Efectos de paralaje**: Fondos que se mueven con el scroll
- **Atajos de teclado**: 'h' (inicio), 'a' (acerca de), 's' (habilidades), 'g' (estadísticas)

### Diseño Responsivo
- Optimizado para desktop, tablet y móvil
- Animaciones reducidas en dispositivos móviles para mejor rendimiento
- Menú adaptable con hamburguesa

## 🎯 Secciones

1. **Navbar Fija**: Navegación siempre visible con logo y menú
2. **Hero**: Presentación principal con botones de CTA
3. **Acerca de Mí**: Carrusel de imágenes + tarjetas informativas
4. **Habilidades**: Grid de tecnologías organizadas por categoría
5. **Estadísticas**: Widgets de GitHub Stats y Snake Animation
6. **Elementos Flotantes**: Galería con efectos de hover
7. **Footer**: Enlaces sociales

## 🎨 Paleta de Colores

```css
--primary: #2bbc8a (Verde esmeralda)
--secondary: #1a1a2e (Azul oscuro)
--accent: #16213e (Azul más oscuro)
--text: #eaeaea (Gris claro)
```

## 📦 Dependencias Externas

- **AOS (Animate On Scroll)**: Para animaciones al desplazarse
  - CDN: `https://unpkg.com/aos@2.3.1/dist/aos.js`
- **Font Awesome**: Para iconos
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

## 🚀 Cómo Usar

### Localmente
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Disfruta de las animaciones!

### En GitHub Pages
1. Asegúrate de que el repositorio tenga GitHub Pages habilitado
2. Configura la rama `main` como fuente
3. La página estará disponible en: `https://jonathanvargasroa.github.io`

## ⚙️ Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #2bbc8a;      /* Cambiar color principal */
    --secondary: #1a1a2e;
    --accent: #16213e;
}
```

### Modificar Animaciones
En `styles.css` busca `@keyframes` para ajustar:
- Duración: `1s`, `2s`, etc.
- Easing: `ease-out`, `ease-in-out`, etc.
- Efectos: `translateY`, `scale`, `rotate`, etc.

### Agregar Nuevas Secciones
1. Agrega HTML en `index.html`
2. Añade estilos en `styles.css`
3. Usa `data-aos="fade-up"` para animaciones al scroll

## 📱 Optimizaciones

- **Rendimiento**: Animaciones GPU-aceleradas (transform, opacity)
- **Accesibilidad**: Contraste de colores adecuado, estructura semántica
- **SEO**: Meta tags, estructura HTML semántica
- **Responsive**: Mobile-first design

## 🔧 Características Técnicas

- CSS Grid y Flexbox
- CSS Custom Properties (Variables)
- CSS Animations y Transitions
- JavaScript vanilla (sin dependencias de framework)
- Intersection Observer API para lazy animations
- Media Queries para responsividad

## 📝 Notas

- Las imágenes externas se cargan desde GIPHY y GitHub
- Las estadísticas de GitHub se cargan desde `github-readme-stats.vercel.app`
- La animación de serpiente viene de `github-contribution-grid-snake.svg`
- Las animaciones se pausan cuando la pestaña no está enfocada

## 🎓 Recursos Usados

- [CSS Animations](https://developer.mozilla.org/es/docs/Web/CSS/animation)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Font Awesome Icons](https://fontawesome.com/)
- [CSS Gradients](https://developer.mozilla.org/es/docs/Web/CSS/gradient)

## 📄 Licencia

Este proyecto es parte del portafolio de Jonathan Vargas Roa.

---

✨ **¡Disfruta de tu nueva página web moderna!** ✨
