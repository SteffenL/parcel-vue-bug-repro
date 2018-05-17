const posthtml = require('posthtml');

const html = `
<span>A
    <ComponentB />
    <ComponentC />
</span>
`;

const result = posthtml()
  .process(html, {
    sync: true,
    //xmlMode: true
  }).html;

console.log(result);
