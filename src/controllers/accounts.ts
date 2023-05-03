import { Request, Response } from "express";
import { Account } from "../schemas/account.js";

export const getAccounts = async (req: Request, res: Response) => {
    try {
        const accounts = await Account.find({});

        if (!accounts.length) {
            res.status(200).send("There is no accounts yet.");
        } else {
            res.status(200).json(accounts);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).send(error.message);
        }
    }
};

export const getAccount = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const accountID = req.params.id;
        const account = await Account.findOne({ id: accountID });

        if (!account) {
            res.status(404).send("Account with this ID is not found.");
        } else {
            res.status(200).json(account);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).send(error.message);
        }
    }
};
