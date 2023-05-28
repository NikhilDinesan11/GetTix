import { Subjects, Publisher, OrderCancelledEvent } from "@ndtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
