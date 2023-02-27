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

| Command                   | Description                   |
| ------------------------- | ----------------------------- |
| `npm run start`           | Open local server             |
| `npm run build`           | Create optimized build        |
| `npm run test`            | Run tests                     |
| `npm run eject`           | Eject CRA                     |

## Project content

- presenting a list of products
- presenting details of product
- filtering and pagination of products
- shopping cart (add / remove item, change quantity)
- checkout form
- integration with card payment
- generic implementation of api call
- implementation taking into account RWD 

## Live

https://store-app-lukaszszymczyk.vercel.app/

## Screenshots
Product list view:
<p align="center" style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221596878-273231a3-24c7-4226-ad24-1ff79c73e6b2.png" alt="Screen Shot">
</p>

Product details view:
<p align="center" style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221591872-69f6d2db-e33e-425f-9d89-da5a5d7291dd.png" alt="Screen Shot">
</p>

Search product by a phrase:
<p align="center" style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221596862-ca4a9280-d7b0-463c-9331-8f338311056d.png" alt="Screen Shot">
</p>

Shopping cart with change quantity option:
<p align="center" style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221591905-28a454f6-0cf7-4905-b025-f670febd3d87.png" alt="Screen Shot">
</p>

Checkout form with validation:
<p align="center" style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221592198-f24d37dd-5f4d-4b89-a700-4985da6422fc.png" alt="Screen Shot">
</p>

Integration with stripe payment:
<p align="center" style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221592224-ec945aba-a14e-406b-8e04-9bd6beed9c1b.png" alt="Screen Shot">
</p>

Mobile view:
<p style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221598605-922f16b7-e746-4adc-a318-9fa8daca784a.png" alt="Screen Shot">
</p>

Mobile view:
<p style="padding: 0 16px">
    <img src="https://user-images.githubusercontent.com/15704051/221598314-19b50667-326d-42a6-bc1b-b30181f33a8f.png" alt="Screen Shot">
</p>