/* eslint-disable no-undef */
/**
 * Created by sanu on 28/2/18.
 */
/*jslint es6 */
"use strict"
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
chai.should();
chai.use(chaiHttp);
let jwt_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbnVAZ21haWwuY29tIiwiaWF0IjoxNTE5ODMyMTU0LCJleHAiOjMwMTk4MzIxNTR9.YGHeh_Q9a6Kx0huHls09M-PXdVUtuvGRaY943MY-iNg";
let imageUrl = "https://images-na.ssl-images-amazon.com/images/I/51siK7RY4rL.jpg";

//Including Winston
let winston = require("winston");
require("winston-loggly-bulk");

describe("JSON Patch", function() {
    this.timeout(15000);
    it("Sends a JSON Document and a JSON Patch and verifies the returned document", function(done) {
        chai
            .request(server)
            .post("/api/jsonPatch")
            .set("Authorization", jwt_token)
            .send({
                document: { foo: [1, 3] },
                patch: [{ op: "add", path: "/foo/1", value: 2 }]
            })
            .end(function(err, res) {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.have.property("document");
                    res.body.document.should.have.property("foo");
                    res.body.document.foo.should.be.a("array");
                    res.body.document.foo[0].should.be.equal(1);
                    res.body.document.foo[1].should.be.equal(2);
                    res.body.document.foo[2].should.be.equal(3);
                    done();
                }
            });
    });
});

describe("Thumbnail Resize", function() {
    this.timeout(30000);
    it("Takes a public image url as arguement and resizes it to X*X Format and returns base 64 and url", function(done) {
        chai
            .request(server)
            .post("/api/thumbnail")
            .set("Authorization", jwt_token)
            .send({ imageUrl: imageUrl })
            .end(function(err, res) {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.have.property("image64");
                    res.body.should.have.property("result");
                    res.body.result.should.have.property("public_id");
                    res.body.result.should.have.property("version");
                    res.body.result.should.have.property("signature");
                    res.body.result.should.have.property("width");
                    res.body.result.should.have.property("height");
                    res.body.result.should.have.property("url");
                    res.body.result.should.have.property("secure_url");
                    res.body.result.should.have.property("bytes");
                    done();
                }
            });
    });
});