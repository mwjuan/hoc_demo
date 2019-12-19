高阶组件就是接受一个组件作为参数并返回一个新组件的函数。这里需要注意高阶组件是一个函数，并不是组件。



const WithSubscription = (MyComponent, data) => {
    return class extends Component {
      render() {
        return <MyComponent data={data}/>
      }
    }
}
