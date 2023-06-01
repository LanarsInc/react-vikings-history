# Vikings - Historical overview
## Static site with animated transitions

### Made in [LANARS](https://lanars.com/)

# Preview

### Main preview

### Burger menu preview

# Overview
This repo provides implementation of static site with animated transitions using React with:
* [Vite](https://vitejs.dev/)
* Typescript
* SCSS
* [Framer Motion](https://www.framer.com/motion/)

# Code example of basic animation via Framer motion
```
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

# Development server
Run ***npm run dev*** a basic development server

# Build
Run ***npm run build*** to build the project
