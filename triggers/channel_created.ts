import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import workflow from "../workflows/new_channel_workflow.ts";

const trigger: Trigger<typeof workflow.definition> = {
  type: TriggerTypes.Event,
  name: "Channel Creation Trigger",
  workflow: `#/workflows/${workflow.definition.callback_id}`,
  event: { event_type: TriggerEventTypes.ChannelCreated },
  inputs: {
    channel_id: { value: TriggerContextData.Event.ChannelCreated.channel_id },
    creator_id: { value: TriggerContextData.Event.ChannelCreated.creator_id },
  },
};

export default trigger;
