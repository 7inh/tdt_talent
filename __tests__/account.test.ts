import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";
import getToken from "./mocks";

let mockToken: string = "";

chai.use(chaiHttp);
//Our parent block
describe("Account route", () => {
    beforeEach(async () => {
        const token = await getToken();
        token && (mockToken = token);
    });

    describe("/login", () => {
        it("it should return a user information", (done) => {
            chai.request(app)
                .get("/api/account/login")
                .set("Content-Type", "application/json")
                .auth(mockToken, { type: "bearer" })
                .send({})
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.property("email");
                    done();
                });
        });

        it("it should not return a user information", (done) => {
            chai.request(app)
                .get("/api/account/login")
                .set("Content-Type", "application/json")
                .auth("", { type: "bearer" })
                .send({})
                .end((err: any, res: any) => {
                    expect(err).to.eql(null);
                    expect(res.status).to.equal(400);
                    done();
                });
        });
    });
});
