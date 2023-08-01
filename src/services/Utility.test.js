import { tagFilter } from './Utility';

const mockData = [{
  "id": 1,
  "name": "CNN",
  "tags": ['news', "world News"],
}, {
  "id": 2,
  "name": "Hits",
  "tags": ["top", "music"],
}, {
  "id": 3,
  "name": "afrobeats",
  "tags": ["music", "afro"],
}]


describe("Utility", ()=>{
  test('tagFilter', () => {
    let result = tagFilter(mockData, 'music');
    expect(result.length).toEqual(2);
  });

});
