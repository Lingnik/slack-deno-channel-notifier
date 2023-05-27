import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

/**
 * This workflow posts an announcement in a channel when a channel is unarchived.
 */

const announcementChannel = "C0JEXA9D1";
// const announcementChannel = "C04BW0JFV5L"; // dev

const channel_unarchived_workflow = DefineWorkflow({
  callback_id: "channel-unarchived-announcement-workflow",
  title: "Channel Unarchived Announcement Workflow",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
        description: "The channel ID passed from this workflow's trigger",
      },
      user_id: {
        type: Schema.slack.types.user_id,
        description: "The user ID passed from this workflow's trigger",
      },
    },
    required: ["channel_id"],
  },
});

// Send a message in a channel using the built-in function
channel_unarchived_workflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: announcementChannel,
  message:
    `Channel <#${channel_unarchived_workflow.inputs.channel_id}> was unarchived by <@${channel_unarchived_workflow.inputs.user_id}>`,
});

export default channel_unarchived_workflow;
