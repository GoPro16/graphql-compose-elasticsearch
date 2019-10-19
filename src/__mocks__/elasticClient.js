/* @flow */

import elasticsearch from '@elastic/elasticsearch';

const elasticClient = new elasticsearch.Client({
  host: 'http://localhost:9200',
  apiVersion: '6.8',
  // log: 'trace',
});

export default elasticClient;
