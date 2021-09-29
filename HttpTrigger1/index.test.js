const httpFunction= require('./index');
const context = require('../testing/Context')

test('Http trigger example' , async () => {
    const request = {
        query: { name: 'schuc' }
    };

    await httpFunction(context,request);
    expect(context.res.body).toEqual('Hello, schuc');
    expect(context.log.mock.calls.length).toBe(1);
})