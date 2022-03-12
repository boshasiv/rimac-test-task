import { expect } from 'chai';
import apollo from '../src/apollo-client/apollo';

describe('Launch query', () => {
    let testData = [
        {
            id: 100, data: {
                launch: {
                    site: "CCAFS SLC 40",
                    mission: {
                        name: "Starlink-10 (v1.0) & SkySat 19-21"
                    },
                    rocket: {
                        name: "Falcon 9"
                    }
                }
            }
        },
        {
            id: 101, data: {
                launch: {
                    site: "CCAFS SLC 40",
                    mission: {
                        name: "SAOCOM 1B, GNOMES-1, Tyvak-0172"
                    },
                    rocket: {
                        name: "Falcon 9"
                    }
                }
            }
        }]

    testData.forEach(testData => {
        it(`Should successfully get launch data by id ${testData.id}`, async () => {
            const response = await apollo.launch(testData.id);
            expect(response).to.deep.equal(testData.data);
        });
    })
})

describe('Launches query', () => {
    let pageSize = Math.floor(Math.random() * 21);


    it(`Should successfully get ${pageSize} launches`, async () => {
        const response = await apollo.getLaunches(pageSize);
        expect(response.launches.launches).to.have.lengthOf(pageSize);
    });
})