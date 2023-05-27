import { Manifest } from "deno-slack-sdk/mod.ts";
import channel_created_workflow from "./workflows/channel_created_workflow.ts";
import channel_unarchived_workflow from "./workflows/channel_unarchived_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "channel-notifier",
  description: "Announces new and unarchived channels.",
  icon: "assets/loaf.png",
  workflows: [channel_created_workflow, channel_unarchived_workflow],
  outgoingDomains: [],
  features: {
    appHome: {
      messagesTabEnabled: false,
      messagesTabReadOnlyEnabled: false,
    },
  },
  botScopes: ["commands", "chat:write", "chat:write.public", "channels:read"],
});
