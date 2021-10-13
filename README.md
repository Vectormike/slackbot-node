# Slack Bot

## Features

- Send a happy birthday wish
- Send an anniversary reminder

## Software Requirements

- Node.js **8+**
- Slack Bolt API

## How to install

### Using Git (recommended)

1.  Clone the project from github.

```bash
git clone https://github.com/Vectormike/slackbot-node slackbot
```

### Install npm dependencies after installing (Git or manual download)

```bash
cd slackbot
npm install
```

### Setting up environments

1. You will find a file named `.env.example` on root directory of project.
2. Create a new file by copying and pasting the file and then renaming it to just `.env`
   ```bash
   cp .env.example .env
   ```
3. The file `.env` is already ignored, so you never commit your credentials.
4. Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

## Project structure

## How to run

### Running API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`
