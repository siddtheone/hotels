import {dateFormat} from './utils';

describe('Utils test', () => {
  it('Should format date', () => {
    expect(dateFormat(1577383271716)).toEqual('26th Dec 2019');
  });
});
