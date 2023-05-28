import { Publisher, Subjects, TicketUpdatedEvent } from "@ndtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
