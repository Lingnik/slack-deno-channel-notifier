import { Manifest } from "deno-slack-sdk/mod.ts";
import workflow from "./workflows/new_channel_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "new-channel-notifier",
  description:
    "Use a workflow and trigger to announce new channels to a channel of your choice.",
  icon: "assets/loaf.png",
  workflows: [workflow],
  outgoingDomains: [],
  features: {
    appHome: {
      messagesTabEnabled: false,
      messagesTabReadOnlyEnabled: false,
    },
  },
  botScopes: ["commands", "chat:write", "chat:write.public", "channels:read"],
});
