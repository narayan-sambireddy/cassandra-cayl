const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['host1', 'host2'], keyspace: 'keyspace1' });
