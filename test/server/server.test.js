const proxyquire = require('proxyquire');
const request = require('supertest');
const assert = require('assert');

describe('server', () => {
    let propertiesSerivceMock = {
        getProperties: null,
        addProperty: null
    };

    before(() => {
        proxyquire('../../src/server/controllers/api', { '../services/propertiesSerivce': propertiesSerivceMock });
    });

    describe('GET /api/properties', () => {
        it('should return list of owners with properties', async () => {
            const expectedData = [
                {
                    "owner": "carlos",
                    "address": {
                        "line1": "Flat 5",
                        "line4": "7 Westbourne Terrace",
                        "postcode": "W2 3UL",
                        "city": "London",
                        "country": "U.K."
                    },
                    "incomeGenerated": 2000.34
                }
            ];
            propertiesSerivceMock.getProperties = () => Promise.resolve(expectedData);

            const { server } = require('../../src/server/server')
            const response = await request(server).get('/api/properties');

            assert.deepEqual(response.body, expectedData);
            assert.equal(response.status, 200)
        });

        it(`should return header 'content-type:application/json'`, async () => {
            propertiesSerivceMock.getProperties = () => Promise.resolve();

            const { server } = require('../../src/server/server');
            const response = await request(server).get('/api/properties');

            assert.equal(response.header['content-type'], 'application/json');
            assert.equal(response.status, 200)
        });

        it('should return InvalidStateError(500) when exception occurs', async () => {
            propertiesSerivceMock.getProperties = () => Promise.reject(new Error());

            const { server } = require('../../src/server/server');
            const response = await request(server).get('/api/properties');

            assert.equal(response.status, 500);
        });
    });

    describe('POST /api/properties ', () => {
        it('should return return 201 status when property created', async () => {
            propertiesSerivceMock.addProperty = () => Promise.resolve();

            const { server } = require('../../src/server/server');
            const response = await request(server).post('/api/properties');

            assert.equal(response.status, 201);
        });

        it('should return InvalidStateError(500) when exception occurs', async () => {
            propertiesSerivceMock.addProperty = () => Promise.reject(new Error());

            const { server } = require('../../src/server/server');
            const response = await request(server).post('/api/properties');

            assert.equal(response.status, 500);
        });
    });
});
