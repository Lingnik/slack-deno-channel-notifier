import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

/**
 * This workflow posts an announcement in a channel when a new channel is created.
 */

const announcementChannel = "C0JEXA9D1";

const workflow = DefineWorkflow({
  callback_id: "new-channel-announcement-workflow",
  title: "New Channel Announcement Workflow",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
        description: "The channel ID passed from this workflow's trigger",
      },
      creator_id: {
        type: Schema.slack.types.user_id,
        description: "The creator ID passed from this workflow's trigger",
      },
    },
    required: ["channel_id"],
  },
});

// Send a message in a channel using the built-in function
workflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: announcementChannel,
  message:
    `Channel <#${workflow.inputs.channel_id}> was created by <@${workflow.inputs.creator_id}>`,
});

export default workflow;
