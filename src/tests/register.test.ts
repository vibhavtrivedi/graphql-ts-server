import { request } from "graphql-request";
import { host } from "./constants";
import { User } from "../entity/User";
import { AppDataSource2 } from "../data-source";

const email = "vibhav15@gmail.com";
const password = "asjbdas";

const mutation = `
    mutation {
        register(email: "${email}", password: "${password}")
    }
`
test("Register user", async() => {
    const response = await request(host, mutation);
    expect(response).toEqual({ register: true });
    await AppDataSource2.initialize();
    const users = await User.find({ where: { email } });
    expect(users).toHaveLength(1);
    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);
});

//use a test db
//drop all data once test is done
//when yarn test is run, it also starts the server