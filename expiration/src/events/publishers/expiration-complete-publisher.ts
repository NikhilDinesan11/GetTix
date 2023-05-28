import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ndtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
