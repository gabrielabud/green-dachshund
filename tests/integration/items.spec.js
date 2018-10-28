process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const should = chai.should();

const server = require('../../src').app;
const knex = require('../../src/db/knex');

describe('routes: /search', () => {
  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => { return knex.migrate.latest(); })
      .then(() => { return knex.seed.run(); });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('GET /search', () => {
    context('SUCCESS: Send GET request by providing only query string: searchTerm=camera', () => {
      it('should only return items which name includes the word searched', (done) => {
        chai.request(server)
          .get('/search')
          .query({
            searchTerm: 'camera'
          })
          .end((err, res) => {
            should.not.exist(err);
            res.status.should.eql(200);
            res.type.should.eql('application/json');
            const itemsFiltered = res.body;
            itemsFiltered.should.have.length.below(21);
            itemsFiltered.forEach((item) => {
              item.should.have.property('item_name');
              item.item_name.toLowerCase().should.contain('camera');
            });
            done();
          });
      });
    });

    context('SUCCESS: Send GET request by searching for a camera in central Bucharest', () => {
      it('should only return items which name includes the searchTerm and within 10 miles of the coordinates provided', (done) => {
        chai.request(server)
          .get('/search')
          .query({
            searchTerm: 'camera',
            lat: 44.4377401, /* Bucharest coordinates */
            lng: 25.9545539
          })
          .end((err, res) => {
            should.not.exist(err);
            res.status.should.eql(200);
            res.type.should.eql('application/json');
            const itemsFiltered = res.body;
            itemsFiltered.should.have.length.below(3);
            itemsFiltered.forEach((item) => {
              item.should.have.property('item_name');
              item.item_name.toLowerCase().should.contain('camera');
            });
            done();
          });
      });
    });
  });

  context('SUCCESS: Send GET request by searching for camera very close central Bucharest', () => {
    it('should only return items which name includes the searchTerm and within 10 miles of downtown', (done) => {
      chai.request(server)
        .get('/search')
        .query({
          searchTerm: 'camera',
          lat: 44.4665392, /* area close to central Bucharest */
          lng: 26.0999633
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          const itemsFiltered = res.body;
          itemsFiltered.should.have.length.below(3);
          itemsFiltered.forEach((item) => {
            item.should.have.property('item_name');
            item.item_name.toLowerCase().should.contain('camera');
          });
          done();
        });
    });
  });
});
