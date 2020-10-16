# EStore Full-Stack MERN application
 
# [Live Demo on Heroku](https://mern-estore.herokuapp.com/).

## About

This is a GitHub repo for the EStore MERN application. It is a application which allows the user register, browse products available on the platform, and place orders which the transaction is handled by the thid-party API from PayPal. 

### How it works

This is a full-stack application which `Express.js` is used for the backend. The source code of the backend can be found at the `backend` folder. The frontend is written in `React.js` via `create-react-app`. The source code can be found inside the `frontend` folder. It is styled with the aid of `React Bootstrap`.  This application consumes `MongoDB Altas` as the cloud NoSQL Database.

## Features

- Node.js web server using [Express.js](https://npm.im/express)
- NoSQL Database using [MongoDB Altas](https://www.mongodb.com/cloud/atlas)
- Web user interface using [React.js](https://reactjs.org/) for templating and `React Bootstrap` for UI
- User interface to connect with the backend API, which the latter communicates with the NoSQL Database.
- Project specific environment variables using `.env`.

## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- A MongoDB Altas account - [sign up](https://www.mongodb.com/cloud/atlas)

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone <url>
cd <url>
```

2. Install dependencies

```bash
npm install
```

3. Set your environment variables

You may setup the .env file at the root folder, which is the only file consumes environment variables in this application.

1. Run the application

```bash
npm run dev
```

5. Navigate to [http://localhost:3000](http://localhost:3000) for the frontend ; [http://localhost:5000](http://localhost:5000) for the backend API.

That's it!

## Contributing

This template is open source and welcomes contributions. 

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
