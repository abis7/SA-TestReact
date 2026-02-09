# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
* **@vitejs/plugin-react** uses Babel (or oxc when used in rolldown-vite) for Fast Refresh.
* **@vitejs/plugin-react-swc** uses SWC for Fast Refresh.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see this documentation.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.

---

# GuitarLA - Proyecto React
Proyecto de tienda de guitarras desarrollado para profundizar en los fundamentos de React, gestión de estados y persistencia de datos en el navegador.

## Sobre React
* **Origen**: Creada por Facebook en 2013.
* **Propósito**: Creación de interfaces de usuario interactivas y dinámicas.
* **Filosofía**: Se basa en componentes reutilizables, que tienen un estado (State Hook).
* **Escalabilidad**: Permite crear apps grandes a partir de pequeñas piezas aisladas.
* **Casos de éxito**: Utilizada por empresas como Netflix, Instagram, Airbnb y WhatsApp Web.

## Ventajas de usar React
* **Virtual DOM**: Solo se renderiza lo estrictamente necesario, optimizando el rendimiento.
* **Componentes Reutilizables**: Se crean bloques independientes que se pueden usar en varios lugares.
* **Comunidad Activa**: Abundante documentación, librerías, mantenimiento y actualizaciones constantes.

## Lógica y funcionalidades del Proyecto

### Gestión de Estados y Props
La aplicación utiliza un flujo de datos de padre a hijo (componentes):
* **App.jsx (Padre)**: Centraliza el estado del carrito y la base de datos.
* **Funciones de Lógica**: Se implementaron funciones de incremento (+), decremento (-), eliminación y vaciado del carrito.
* **Comunicación**: Las funciones y estados se pasan a los componentes hijos (Header, Card, Item) mediante props.

### Persistencia con LocalStorage
Para asegurar que los datos no se borren al refrescar la página, se generó la persistencia del carrito:
* **Verificación**: Al cargar, la app verifica si hay datos en el LocalStorage para inicializar el estado.
* **Sincronización**: Se utiliza un `useEffect` para guardar el carrito automáticamente cada vez que el usuario realiza un cambio.

## Requisitos e Instalación

### Requisitos Previos
* **Node.js**: Versión 22 en adelante.
* **NPM o Yarn**: Para instalar las dependencias del proyecto.

### Métodos de Creación e Instalación

#### Opción A: Create React App (CRA)
* **Estándar**: `npx create-react-app mi-proyecto`
* **Template en blanco**:
```bash
npx create-react-app mi-proyecto --template react
cd mi-proyecto
npm run dev
```

#### Opción B: Método con Vite (Utilizado en este proyecto)
Es la opción recomendada para nuevos proyectos por estar optimizada y detectar dependencias no usadas.

```bash
npm create vite@latest mi-proyecto
cd mi-proyecto
npm install
npm run dev
```
Estructura del Proyecto
/public: Contiene los archivos estáticos.

/src: Contiene los componentes y la lógica principal.

App.js/jsx: Es el componente principal. React generalmente hace 2 renderizados por seguridad (Strict Mode).

package.json: Archivo de configuración para la ejecución de dependencias
