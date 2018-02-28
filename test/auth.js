/* eslint-disable no-undef */
/**
 * Created by sanu on 28/2/18.
 */

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.should();
chai.use(chaiHttp);

describe('Login', function() {
    this.timeout(15000);
    it('should login when email and password is correct on /login', function(done) {
        chai
            .request(server)
            .post("/login")
            .send({ email: "sanudatta11@gmail.com", password: "123456" })
            .end(done);
    })
});