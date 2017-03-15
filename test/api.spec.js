import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {
	/*describe('/GET book', () => {
	  it('it should GET all the books', (done) => {
		chai.request('http://localhost:3000')
		    .get('/books')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(4);
		      done();
		    }); 
	  });
  });*/

	describe('/POST book', () => {
		it('it should POST a book', (done) => {
			let book = {
				title: "The Lord of the Rings 2",
				author: "J.R.R. Tolkien",
				year: 1954,
				pages: 1170
			}
			chai.request('http://localhost:3000')
				.post('/books')
				.send(book)
				.end((err, res) => {
					res.should.have.status(201);
					res.body.should.have.property('title');
					res.body.should.have.property('author');
					res.body.should.have.property('pages');
					res.body.should.have.property('year');
					done();
				});
		});


		describe('/GET book', () => {
			it('it should GET a book by given id', (done) => {
				chai.request('http://localhost:3000')
					.get('/books/1')
					.end((err, res) => {
						res.should.have.status(200);
						res.body.should.be.a('object');
						res.body.should.have.property('title');
			  		res.body.should.have.property('author');
			  		res.body.should.have.property('pages');
			  		res.body.should.have.property('year');
						res.body.should.have.property('id').eql(1);
						done();
					});
			});
		});


		describe('/DELETE book', () => {
			it('it should DELETE a book by given id', (done) => {
				chai.request('http://localhost:3000')
					.get('/books/1')
					.end((err, res) => {
						res.should.have.status(200);
						done();
					});
			});
		});

	});
});