import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import channel_unarchived_workflow from "../workflows/channel_unarchived_workflow.ts";

const trigger: Trigger<typeof channel_unarchived_workflow.definition> = {
  type: TriggerTypes.Event,
  name: "Channel Unarchived Trigger",
  workflow: `#/workflows/${channel_unarchived_workflow.definition.callback_id}`,
  event: { event_type: TriggerEventTypes.ChannelUnarchived },
  inputs: {
    channel_id: { value: TriggerContextData.Event.ChannelUnarchived.channel_id },
    user_id: { value: TriggerContextData.Event.ChannelUnarchived.user_id },
  },
};

export default trigger;
