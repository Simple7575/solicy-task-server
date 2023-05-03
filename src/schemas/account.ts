import { Schema, model } from "mongoose";

interface AccountInterface {
    id: number;
    name: string;
    owner: string;
}

const AccountSchema = new Schema<AccountInterface>(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        owner: { type: String, required: true },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
        bufferCommands: false,
        autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
    }
);

const Account = model("Account", AccountSchema);

export { Account, AccountInterface };
