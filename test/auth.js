/* eslint-disable no-undef */
/**
 * Created by sanu on 28/2/18.
 */
/*jslint es6 */
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

let winston = require("winston");
require("winston-loggly-bulk");

chai.should();
chai.use(chaiHttp);

describe('Login', function() {
    this.timeout(15000);
    winston.log("info", "Running Unit Test Login");
    it('should login when email and password is correct on /login', function(done) {
        chai
            .request(server)
            .post("/login")
            .send({ email: "sanudatta11@gmail.com", password: "123456" })
            .end(function(err, res) {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.have.property("access_token");
                    done();
                }
            });
    })
});