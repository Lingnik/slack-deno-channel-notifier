import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import channel_created_workflow from "../workflows/channel_created_workflow.ts";

const trigger: Trigger<typeof channel_created_workflow.definition> = {
  type: TriggerTypes.Event,
  name: "Channel Creation Trigger",
  workflow: `#/workflows/${channel_created_workflow.definition.callback_id}`,
  event: { event_type: TriggerEventTypes.ChannelCreated },
  inputs: {
    channel_id: { value: TriggerContextData.Event.ChannelCreated.channel_id },
    creator_id: { value: TriggerContextData.Event.ChannelCreated.creator_id },
  },
};

export default trigger;
