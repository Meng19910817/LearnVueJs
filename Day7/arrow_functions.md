### Arrow Functions

```js
const app = function(){
  
}

const app = ()=>{
  
}

const app = function(num1, num2){
  return num1 + num2
}

const app = (num1, num2) => num1 + num2

const app = num1 => console.log(num1)
```

### this

```js
setTimeout(function(){
  console.log(this)//window
})

setTimeout(()=>{
  console.log(this)//windows
})

const obj = {
  app(){
    setTimeout(function(){
      console.log(this)//window
    })
    
    setTimeout(()=>{
      console.log(this)//obj
    })
  }
}
```



