describe('ES2015 features', () => {

  it('String template', () => {
    let name = 'Bob';

    expect(`Hello ${name}`).toEqual('Hello Bob');
  });

  it('Destructuring', () => {
    let [a, ,b] = [1,2,3];

    expect(a).toEqual(1);
    expect(b).toEqual(3);

    //
    function fn( {name: n}) {
      return n;
    }

    let person = {name: 'Bob'};
    expect( fn(person) ).toEqual('Bob');
  });

  it('Default value', () => {
    function sum(x, y=12) {
      return x + y;
    }

    expect(sum(1,2)).toEqual(3);
    expect(sum(1)).toEqual(13);
  });

  it('Rest', () => {
    function max(...v) {
      let biggest = false;
      v.forEach(item => {
        if(!biggest || item > biggest){
          biggest = item;
        }
      });

      return biggest;
    }

    expect(max(1, 2, 3, -2, 7, 1.2)).toEqual(7);
  });

  it('Spread', () => {
    function fn(a, b, c) {
      return a + b + c;
    }

    expect(fn(1, 2, 3)).toEqual(6);
    expect(fn(...[1, 2, 3])).toEqual(6);
  });

  it('Proxy', () => {
    var target = {
      msg: '',
      toString: () => {
        return this.msg.trim();
      }
    };
    var handler = {
      get: function (receiver, name) {
        receiver.msg += ' ' + name;
        return receiver;
      }
    };

    var p = new Proxy(target, handler);
    expect( p.this.is.a.test.toString() ).toEqual('this is a test');
  });
});
