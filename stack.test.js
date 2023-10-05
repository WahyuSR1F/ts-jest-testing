// proses testing

const Stack = require('./stack');
const stack = new Stack();
test('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
});

test('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    stack.push('🌽');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');
});

test.todo('can pop off');
