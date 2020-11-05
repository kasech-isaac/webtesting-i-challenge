const enhancer = require('./enhancer.js');
// test away!

describ("enhancer unit test",()=>{

    it ("repairs", ()=>{
expect(enhancer.repair({
    name:"kasech",
    enhancement:7,
    durability:60,
}))
    })
})
