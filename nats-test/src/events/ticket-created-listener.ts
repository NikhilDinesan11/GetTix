import { Listener } from "@ndtickets/common";
import { Message } from "node-nats-streaming";
import { TicketCreatedEvent } from "@ndtickets/common";
import { Subjects } from "@ndtickets/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";
  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data", data);
    msg.ack();
  }
}
