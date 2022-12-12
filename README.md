# HealthandFit App

A simple, customized health and core fitness delivery to customers.


## Demo

https://healthandfit-d4b6a.web.app/


## Documentation

[Documentation](https://docs.google.com/document/d/1SaWXYS4fhLqigF63IQDasRwfJff-NWAuk1pYcnoGCRY/edit?usp=sharing)


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MySql

**Hosting:** Firebase

## Run Locally

Clone the project

```bash
  git clone https://github.com/saadhanag13/Health-Fit-App.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Signin Users

```http
  POST /api/signin
```

| Description                |
| :------------------------- |
| Email & Password must be provided as body to sign in |

#### signup Users

```http
  POST /api/signup
```

| Description                |
| :------------------------- |
| Email, Username, Phone number, Age, OTP, Password & Confirm password must be provided as body to sign up|


#### authenticate & validate User

```http
  GET /api/user/validate
```

| Description                |
| :------------------------- |
| Must provide user token as authorization in header fields to Authenticate|

```http
  POST /api/user/validate
```

| Description                |
| :------------------------- |
| Must provide user email as body to send email.|

#### completepayment

```http
  POST /api/user/completepayment
```

| Description                |
| :------------------------- |
| Must provide the Card details to complete the payment details|

## Database Schema
![Screenshot_20221212_020557](https://user-images.githubusercontent.com/87087654/207060000-ca985773-7979-4874-a935-b2ffb1b7dca8.png)
![Screenshot_20221212_030025](https://user-images.githubusercontent.com/87087654/207060009-0f5ad346-ad46-4094-bdb0-7688a332e579.png)

## ER diagram 
![Blank diagram](https://user-images.githubusercontent.com/87087654/207060181-169cee25-469a-40b7-8a2b-74437e156522.png)


## Screenshots
![Screenshot_20221212_122141](https://user-images.githubusercontent.com/87087654/207059483-b7c579c9-2a1e-48cc-9564-420be322dd91.png)
![Screenshot_20221212_011314](https://user-images.githubusercontent.com/87087654/207059496-8fe265e4-b0ff-42ee-9f5d-a8e6959f9f2d.png)
![Screenshot_20221212_011329](https://user-images.githubusercontent.com/87087654/207059507-5269a26d-b00f-46ab-8bd4-a27ccb1574cf.png)
![Screenshot_20221212_011339](https://user-images.githubusercontent.com/87087654/207059517-6801a4a0-a2cf-48d5-b9ee-d2e69c659932.png)
![Screenshot_20221212_011400](https://user-images.githubusercontent.com/87087654/207059529-68104a2c-a58a-4461-8eef-38f799188d8a.png)
![Screenshot_20221212_011412](https://user-images.githubusercontent.com/87087654/207059541-23781864-c07c-477f-ac7b-e8e9fe73146e.png)
![Screenshot_20221212_011422](https://user-images.githubusercontent.com/87087654/207059557-244c6dbc-ad86-4d88-b151-f433905a8869.png)
![Screenshot_20221212_022423](https://user-images.githubusercontent.com/87087654/207059583-6645aa17-56eb-44f4-a92b-2874535d7c21.png)
![Screenshot_20221212_025816](https://user-images.githubusercontent.com/87087654/207059595-efe14861-b4b9-4a39-aadb-a9c39d7b4fa9.png)

## Feedback

If you have any feedback, please reach out to us at saadhana.ganesh13@gmail.com

