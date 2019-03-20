import { YoutubeEPipe } from './youtube-e.pipe';

describe('YoutubeEPipe', () => {
  it('create an instance', () => {
    const pipe = new YoutubeEPipe();
    expect(pipe).toBeTruthy();
  });
});
