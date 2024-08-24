export function CreateZapMapper({ actions, trigger }: any) {
  return {
    trigger: {
      availableTriggerId: trigger.id,
      eventId: trigger.eventId,
    },
    actions: actions.map((x: any) => ({
      availableActionId: x.id,
      eventId: x.eventId,
    })),
  };
}
