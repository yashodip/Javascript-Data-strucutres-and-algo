let a = 10;

function hello() {
  console.log("hello");
  function a() {
    console.log("a");
  }
  a();
}

hello();
