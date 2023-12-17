import { FilterByArtistPipe } from './filter-by-artist.pipe';

describe('FilterByArtistPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByArtistPipe();
    expect(pipe).toBeTruthy();
  });
});
