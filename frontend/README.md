# EStore Frontend Application

## About

This is a GitHub repo for the frontend component of the EStore application. It is a application which allows the user register, browse products available on the platform, and place orders which the transaction is handled by the thid-party API from PayPal. 

### How it works
The frontend is written in `React.js` via `create-react-app`. The source code can be found inside the `frontend` folder. It is styled with the aid of `React Bootstrap`.

## Features
- Web user interface using [React.js](https://reactjs.org/) for templating and [React Bootstrap](react-bootstrap.github.io) for UI
- User interface to register, login, browse products availabilty, and place orders.
- Project specific environment variables using `.env` at the root folder.

## Set up

### Requirements

- [Node.js](https://nodejs.org/)

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone <url>
cd <url>/frontend
```

2. Install dependencies

```bash
npm install
```

3. Set your environment variables

You may setup the .env file or manually, which is the only file consumes environment variables in this application.

1. Run the application

```bash
npm run dev
```

5. Navigate to [http://localhost:3000](http://localhost:3000)

That's it!

## Contributing

This template is open source and welcomes contributions. 

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
