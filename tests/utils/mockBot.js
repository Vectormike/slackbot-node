import { slashCommand } from '@slack-wrench/fixtures';
import JestReceiver from '@slack-wrench/jest-bolt-receiver';
import { MockedWebClient, MockWebClient } from '@slack-wrench/jest-mock-web-client';
import delay from 'delay';

// Import your app that creates a Slack Bolt App.
import MyApp from './app';

describe('My Awesome App', () => {
  let receiver: JestReceiver;
  let app: MyApp;
  let client: MockWebClient; // Using a mock slack client so we can spy on it

  beforeEach(() => {
    // Pass in this receiver instead of yours or the default express one
    receiver = new JestReceiver();
    app = new MyApp({ receiver });
    client = MockedWebClient.mock.instances[0];
  });

  it('Can handle a slash command', async () => {
    const message = '@slack-wrench makes testing easy!';
    receiver.send(slashCommand('/echo', { text: message }));
    await delay(0); // Wait for anything async.

    // Test what should have happened.
    expect(client.chat.postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        text: message,
      })
    );
  });
});
