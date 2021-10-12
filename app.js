const { App } = require('@slack/bolt');
require('dotenv').config();

// Initialize app with bot token, signing secret and socket mode.
// Socket mode activates websocket over HTTPS
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

(async () => {
  const port = 5000;

  await app.start(process.env.PORT || port);
  console.log(`Slack Bot is running on port ${port}!`);
})();

// Test
app.command('/know', async ({ command, ack, say }) => {
  try {
    await ack();
    await say('I know nothing bruh!');
  } catch (error) {
    console.log(`Error ${error}`);
  }
});

// ID for General Channel
const generalChannellId = 'C02H9C5E50W';

// Send birthday wish to #general
// subscribe to `message.channels` event in App Config
// channels:read scope acrivated
app.message('birthday', async ({ message, say, client }) => {
  const result = await client.chat.postMessage({
    channel: generalChannellId,
    text: `Happy birthday to you`,
  });
  console.log(result);
});

// Send anniversary wish to #general
// subscribe to `message.channels` event in App Config
// channels:read scope acrivated
app.message('anniversary', async ({ message, say, client }) => {
  const result = await client.chat.postMessage({
    channel: generalChannellId,
    text: `Happy work anniversary`,
  });
  console.log(result);
});

module.exports = app;
