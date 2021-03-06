describe('ES2015 features', () => {

  it('String template', () => {
    let name = 'Bob';

    expect(`Hello ${name}`).toEqual('Hello Bob');
  });

  it('Destructuring', () => {
    let [a, ,b] = [1,2,3];

    expect(a).toEqual(1);
    expect(b).toEqual(3);

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

  it('Promises', done => {
    let p = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });

    p.then(done);    
  });

  it('Reflect API', () => {
    var object = {a: 1};
    Object.defineProperty(object, 'b', {value: 2});

    expect(Reflect.ownKeys(object)).toEqual(['a', 'b']);
  });

});
