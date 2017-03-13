import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  describe('/GET user', () => {
	  it('it should GET all the users', (done) => {
		chai.request('http://localhost:8080')
		    .get('/users')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(0);
		      done();
		    }); 
	  });
  });
});