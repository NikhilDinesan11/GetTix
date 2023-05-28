import { Subjects, Publisher, PaymentCreatedEvent } from "@ndtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
