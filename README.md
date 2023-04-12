## Create a Project

```
npm create vite@latest
```

move to project folder

```
npm install
```

## Install Tailwind CSS

https://tailwindcss.com/docs/guides/vite#react

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install Router

```
npm install react-router-dom
```

