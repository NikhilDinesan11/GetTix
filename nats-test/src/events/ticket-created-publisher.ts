import { Publisher } from "@ndtickets/common";
import { TicketCreatedEvent } from "@ndtickets/common";
import { Subjects } from "@ndtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
