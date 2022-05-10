import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";

const mockToken =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlYmYxMDBlYWRkYTMzMmVjOGZlYTU3ZjliNWJjM2E2YWIyOWY1NTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGR0dGFsZW50IiwiYXVkIjoidGR0dGFsZW50IiwiYXV0aF90aW1lIjoxNjUyMTgzMjI2LCJ1c2VyX2lkIjoiNVdnamVjVmlxN1dsYjhoWkR5U2ttSTJNNGg2MiIsInN1YiI6IjVXZ2plY1ZpcTdXbGI4aFpEeVNrbUkyTTRoNjIiLCJpYXQiOjE2NTIxODMyMjYsImV4cCI6MTY1MjE4NjgyNiwiZW1haWwiOiJsaW5odHEudGVjaEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibGluaHRxLnRlY2hAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.aOvdaC4K8Sa_vW-Im-x1lOuGvIhyYEMeZFtR5Vro_YZPGmpSwPUkEthKYmaxh9HUQnXut_32FjnE0iM9YrVNKRkkhpptypFJiyWZlk-TsFxBnQHXx2byjHbuCCbvTabjDb95H_NRZH6os_wDqp-Glxf3rR_L7NH4hogh1HiYIDcWqWoOci76BUESBNJYmdVEyI4RJ-fiNBvagB_9Q4JAEanbXqocFJ3BBxJ_nu0VQPAvcaiG0O83WarYqP9XFfiAyyLLFgPlS9ezyKUN8WDG5W7ClgOmMAikvxT1XsP3N5uoZbS9MyuEyGJRnwY6_OMg1DNPt9l3bS_WC_F_XvmQIQ";

chai.use(chaiHttp);
//Our parent block
describe("Account route", () => {
    beforeEach((done) => {
        done();
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
                    expect(res.body).to.have.property('email');
                    done();
                });
        });
    });
});
