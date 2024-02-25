# Folders

Umumiy componentlar `src/component` folder-ida joylashgan bo'ladi. Qolganlari fayllar o'zini `page/component` da bo'ladi.

```
- public
- src
--- app
--- features
--- components
--- types
```

# Files

** Faylni nomi `kebab-case` da yozilishi kerak **

```
User.ts => bad
user.ts => good

loginCard.ts => bad
LoginCard.ts => bad
login-card.ts => good
```

** Component nomi `folder` da yoziladi, o'zi esa `CamelCase` da index.tsx faylda nima ko'd turishiga qarab nomlanadi**

```
Usercomponent => bad
UserComponent => good

// Good another examples:
auth-slice.ts
```

** `index.ts` da faqat re-export bo'lishi kerak **

```ts
export { Component } from './component'
```

# Components

** Komponentlar PascalCase-da elon qilinishi kerak **

```tsx
<UserComponent />
```

# Types

** Type va Interface lar quyidagi usulda yozilishi kerak **

- Agar `component` da ishlatiladigan type kichik bo'lsa, o'sha komponentaning ichida yozilsin, aks holda `types` folder ichida quyidagi formatda yozilsin \*

`component.types.ts`

# Hooks

** custom hook-lar use prefix-i bilan boshlanib PascalCase-da yoziladi **

```ts
const useUserProps
```

# Import

** `import` larda maksimal darajada `alias` larni ishlatish kerak **
