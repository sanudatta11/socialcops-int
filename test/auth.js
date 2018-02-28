/* eslint-disable no-undef */
/**
 * Created by sanu on 28/2/18.
 */

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');
chai.use(chaiHttp);

describe('Login', function() {
    this.timeout(15000);
    it('should login when email and password is correct on /login', function(done) {
        chai
            .request(server)
            .post("/login")
            .send({ email: "sanudatta11@gmail.com", password: "123456" })
            .end(function(err, res) {
                if (err) {
                    return null;
                }
                res.should.have.status(200);
                res.body.should.have.property("status");
                res.body.should.have.property("token");
                done();
            });
    })
});