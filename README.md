# dbank

A simple compounding bank app following a tutorial by Angela Yu.

## Dependencies

- dfk
- npm
- Node.js 16 (bugs with 17+ as of 22/07/2022)


## Getting Started

To install `dfx` run: 

```bash
DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

# Verify that dfk version 0.9.3 has been installed correctly
dfk --version
```

Clone the repo. 

```bash
git clone https://github.com/finnformica/dbank.git
```

To start the app use the following commands:

```bash
# Starts the replica (server), running in the background
dfx start --background

# Deploys canisters to the replica and generates candid interface
dfx deploy
```
Start a development server with:

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

For more information visit `https://internetcomputer.org/docs/current/developer-docs/quickstart/hello10mins`

## Features

- Orthogonal persistance
- Designed to be deployed on the ICP blockchain
