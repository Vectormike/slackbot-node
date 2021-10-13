const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

const port = 5000;

const setupTestBoltApi = () => {
  beforeAll(async () => {
    await app.start(process.env.PORT || port);
  });

  beforeEach(async () => {
    await Promise.all();
  });

  afterAll(async () => {});
};

module.exports = setupTestBoltApi;
