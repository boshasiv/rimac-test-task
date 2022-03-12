import { expect } from 'chai';
import apollo from '../src/apollo-client/apollo';

describe('Login mutation', async () => {
    let emails = [
        "bohdan@apollographql.com",
        "anotherEmail@apollographql.com"
    ];

    emails.forEach(email => {
        it(`Should successfully log in with '${email}' email`, async () => {
            await apollo.login(email);
            const data = await apollo.me();
            expect(data.me.email).to.equal(email);
        })
    })
})