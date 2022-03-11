import reservationCount from "../api-reservation/reservation-count.js"

const dataArray = [1, 2];
const item = document.createElement('div');

describe('Testing comment count function', () => {
  test('count on array', () => {
    reservationCount(item, dataArray);
    expect(item.innerHTML).toBe('2');
  });
});