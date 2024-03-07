import { applicationJson } from './application-json';

describe('ApplicationJosn Inut Test', () => {
  it('should be call application/json', () => {
    expect(applicationJson).toEqual('application/json');
  });
});
