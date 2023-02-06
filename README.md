# Store App

This project includes implementation of store application. As a user you can view list of products, details of them and also use the shopping cart functionality.
The project has integration with Stripe payment so use has a possibility to pay for shopping by credit card.

## Used technologies

| Tech                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| [React](https://reactjs.org/)                           | Library for building user interfaces     |
| [Typescript](https://www.typescriptlang.org/)           | Javascript superset language             |
| [React Router](https://reacttraining.com/react-router/) | Declarative routing for React            |
| [Sass](https://https://sass-lang.com//)                 | Preprocessor CSS                         |
| [Fake Store API](https://https://fakestoreapi.com/)     | Fake store rest API                      |
| [React Hook Form](https://react-hook-form.com/)         | Forms with easy-to-use validation.       |
| [Context API](https://reactjs.org/docs/context.html/)   | Share data with multiple components      |
| [Cypress](https://https://www.cypress.io/)              | Frontend testing tool                    |
| [Stripe](https://stripe.com//)                          | Payment infrastructure                   |
| [Eslint](https://eslint.org/)                           | Javascript Linter                        |
| [Prettier](https://prettier.io/)                        | Code formatter                           |

## Installation

```bash
git clone https://github.com/lukaszszymczyk/store_app.git
npm install
npm run start
```

## Available scripts

| Command                   | Description                   |     |
| ------------------------- | ----------------------------- | --- |
| `npm run start`           | Open local server             |     |
| `npm run build`           | Create optimized build        |     |
| `npm run test`            | Run tests                     |     |
| `npm run eject`           | Eject CRA                     |     |

## Project content

- presenting a list of products
- presenting details of product
- shopping cart (add / remove item, change quantity)
- purchase form
- integration with card payment
- search for products by phrase
- generic implementation of api call

## Live

https://store-app-lukaszszymczyk.vercel.app/

## Screenshots of code
Example of React component (element of cart):
<p align="center">
    <img src="https://user-images.githubusercontent.com/15704051/216964034-8c7bc4ef-25d3-46f4-87db-1a02775125b2.png" alt="Screen Shot">
</p>

Custom hook provides cart functionality (includes useReducer hook):
<p align="center">
    <img src="https://user-images.githubusercontent.com/15704051/216964540-4d08d104-e8c9-45db-b913-3d13add7888f.png" alt="Screen Shot">
</p>

UseRequestCreator - implementation of generic use http request:
<p align="center">
    <img src="https://user-images.githubusercontent.com/15704051/216964563-f19863aa-2239-43b0-b95a-766fe29da8bf.png" alt="Screen Shot">
</p>