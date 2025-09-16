# Landing Page de Ponyvet

Sitio informativo desarrollado con [Astro](https://astro.build/) para presentar los servicios veterinarios a domicilio de Ponyvet en San Salvador, Hidalgo. El contenido del sitio está orientado a comunidades rurales y destaca horarios de atención, zona de cobertura y datos de contacto.

## 🚀 Características

- Diseño estático generado con Astro y estilos globales en CSS.
- Datos centralizados en `src/data/company-info.json` para actualizar fácilmente información de la empresa y medios de contacto.
- Componentes reutilizables que muestran horarios, estadísticas y cobertura de servicio.

## 📁 Estructura del proyecto

```
/
├── public/               # Archivos estáticos
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes Astro y UI
│   ├── data/             # Información de la empresa (company-info.json)
│   ├── layouts/          # Plantillas base del sitio
│   └── pages/            # Páginas públicas
├── astro.config.mjs
├── package.json
└── pnpm-lock.yaml
```

## 🛠️ Desarrollo local

Todos los comandos se ejecutan desde la raíz del proyecto.

| Comando         | Descripción                                                   |
| --------------- | ------------------------------------------------------------- |
| `pnpm install`  | Instala las dependencias                                      |
| `pnpm dev`      | Inicia el servidor de desarrollo en `http://localhost:4321`   |
| `pnpm build`    | Genera la versión optimizada de producción en `dist/`         |
| `pnpm preview`  | Sirve localmente la compilación de producción                 |

## 🧩 Personalización

1. Edita `src/data/company-info.json` para actualizar textos, zonas de cobertura o datos de contacto mostrados en el sitio.
2. Agrega estilos personalizados en `src/assets` o componentes en `src/components` según se requiera.
3. Ejecuta `pnpm build` antes de desplegar para verificar que no existan errores.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
