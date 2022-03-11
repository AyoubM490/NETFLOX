import commentCount from '../api-comment/comment-count.js';

const dataArray = [1, 2];
const item = document.createElement('div');

describe('Testing comment count function', () => {
  test('count on array', () => {
    commentCount(item, dataArray);
    expect(item.innerHTML).toBe('2');
  });
});
