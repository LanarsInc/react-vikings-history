# Vikings - Historical overview
### Static site with animated transitions
### You can check it out [here](https://react-vikings-history.lanars-open-source.com/)
### Made in [LANARS](https://lanars.com/)

# Preview

### Main preview
https://github.com/LanarsInc/react-vikings-history/assets/40457361/345424cc-5352-4acb-a3a1-d287a7214e45

### Burger menu preview
https://github.com/LanarsInc/react-vikings-history/assets/40457361/c097aef0-241b-43bb-a74c-ac36a0a4d354

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
