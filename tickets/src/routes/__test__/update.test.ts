import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("returns a 404 if provided id does not exist", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", signin())
    .send({
      title: "adadaf",
      price: 20,
    })
    .expect(404);
});

it("returns a 401 if user is not authenticated", async () => {});

it("returns a 401 if user does not own the ticket", async () => {});

it("returns a 400 if user provides invalid price or title", async () => {});

it("updates the ticket provided valid input", async () => {});
