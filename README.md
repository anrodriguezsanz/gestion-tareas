# Gestión de Tareas

Aplicación de gestión de tareas construida con React, TypeScript y Jotai, siguiendo la arquitectura del proyecto real.

## Stack Tecnológico

- React 18 con TypeScript
- Jotai para estado global
- Ant Design para componentes UI
- React Router para navegación
- Vite como build tool
- Yarn como gestor de paquetes

## Funcionalidades

**Requeridas**: 

- Listado de tareas en tabla
- Filtrado por estado y título
- Cambio de estado de tareas
- Añadir nuevas tareas mediante formulario
- Ver detalles de cada tarea

**Extra**: 

- Eliminar tareas
- Persistencia en localStorage

## Estructura del Proyecto

```
src/
├── core/
│   ├── router.tsx
│   └── constants.ts
├── features/
│   ├── modules/
│   │   └── task-management/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── models/
│   │       ├── services/
│   │       └── utils/
│   ├── pages/
│   └── shared/
└── main.tsx
```

## Arquitectura

He intentado seguir una arquitectura similar a la del proyecto real, con separación de responsabilidades:

- **Models**: Definición de tipos e interfaces TypeScript
- **Services**: Lógica y persistencia de datos
- **Hooks**: Lógica reutilizable
  - `useTaskOperations`: Operaciones CRUD
  - `useTaskFilters`: Lógica de filtrado
  - `useModal`: Control de modales
- **Components**: Componentes UI
- **Shared**: Componentes y hooks genéricos reutilizables

## Decisiones técnicas

### Persistencia con localStorage síncrono

He optado por usar localStorage para la persistencia de datos en el navegador de forma síncrona.
Estuve considerando usar herramientas como JSON Server o bien simular llamadas a una API con funciones
asíncronas, pero añadía complejidad innecesaria al proyecto. 

Tengo en cuenta que, en un proyecto real con backend, las funciones asíncronas serían necesarias.

## Instalación y ejecución

### Prerrequisitos
- Node.js >= 18
- Yarn >= 1.22

### Instrucciones

```bash
# Clonar el repositorio
git clone <https://github.com/anrodriguezsanz/gestion-tareas>
cd gestion-tareas

# Instalar dependencias
yarn install

# Ejecutar en modo desarrollo
yarn dev
```

La aplicación estará disponible en el puerto que indique la consola.


## Autor

Andrea Rodríguez
