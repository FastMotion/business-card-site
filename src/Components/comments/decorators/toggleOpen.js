import React,{Component} from 'react'

export default (OriginalComponent)=> class WrapperComment extends Component {
  state = {
    isOpen:true
  }
    render() {
      return <OriginalComponent  {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }
  toggleOpen = (ev) => {
      ev && ev.preventDefault && ev.preventDefault()
    this.setState({
      isOpen:!this.state.isOpen
    })
  }
}