# Cómo personalizar y publicar tu portafolio

## 1. Personalízalo
Abre **`data.js`** y cambia tus datos: nombre, bio, estudios, logros, certificaciones y proyectos.
No necesitas tocar ningún otro archivo.

- **Foto:** pon `foto.jpg` en esta carpeta y escribe `foto: "foto.jpg"`.
- **CV:** pon `cv.pdf` en esta carpeta y escribe `cv: "cv.pdf"`.
- **Imágenes de proyectos:** crea una carpeta `img/`, guarda capturas ahí y pon `imagen: "img/mi-proyecto.jpg"`.
- **Links de proyectos:** llena `demo` (la página en vivo) y `codigo` (el repositorio).

Para verlo, abre `index.html` con doble clic.

---

## 2. Publícalo gratis en GitHub Pages (recomendado)

1. Crea una cuenta en https://github.com (si no tienes).
2. Crea un repositorio nuevo llamado exactamente **`tuusuario.github.io`**
   (cambia `tuusuario` por tu nombre de usuario). Márcalo como **Public**.
3. Dentro del repositorio: **Add file → Upload files** y arrastra todos los archivos
   de esta carpeta (`index.html`, `styles.css`, `main.js`, `data.js`, tu foto, etc.). Pulsa **Commit changes**.
4. Ve a **Settings → Pages** y en *Branch* elige `main` y `/ (root)`. Guarda.
5. En 1–2 minutos tu portafolio estará en: **https://tuusuario.github.io** 🎉

### Tus otros proyectos
Cada proyecto puede tener su propia página gratis:
1. Crea un repositorio por proyecto (ej. `galeria-piedra`) y sube sus archivos.
2. Activa **Settings → Pages** igual que antes.
3. Quedará en `https://tuusuario.github.io/galeria-piedra`.
4. Pon ese link en el campo `demo` del proyecto dentro de `data.js`.

---

## Otras opciones gratis (sin Vercel)
| Servicio | Cómo | Dirección que obtienes |
|---|---|---|
| **Cloudflare Pages** | pages.cloudflare.com → arrastra la carpeta | `tunombre.pages.dev` |
| **Netlify** | app.netlify.com/drop → arrastra la carpeta | `tunombre.netlify.app` |

**Dominio propio** (ej. `tunombre.com`): cómpralo (≈ 10 USD/año en Cloudflare o Namecheap)
y conéctalo en la sección *Custom domain* de cualquiera de los servicios de arriba.
