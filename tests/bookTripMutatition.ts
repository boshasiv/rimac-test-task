import { expect } from 'chai';
import apollo from '../src/apollo-client/apollo';

describe('Book trips mutation', () => {

    before(async () => {
        await apollo.login("bohdan@apollographql.com");
    })

    it(`Should successfully book trip`, async () => {
        const response = await apollo.bookTrips(101);
        expect(response.bookTrips.success).to.be.true;
    });
})