import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User } from "../models/user.model.js"; // Import the User model
import { addUserToPublicChannels, deleteStreamUser, upsertStreamUser } from "./stream.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "convo-camp" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "webhook-integration/user.created" },  // ✅ CHANGED
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } = event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      image: image_url,
    };

    await User.create(newUser);

    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      image: newUser.image,
    });

    await addUserToPublicChannels(newUser.clerkId.toString());
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "webhook-integration/user.deleted" },  // ✅ CHANGED
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });

    await deleteStreamUser(id.toString());
  }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser, deleteUserFromDB];