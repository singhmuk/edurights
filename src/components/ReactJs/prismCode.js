import React from "react"
import Prism from "prismjs"
import '../dashboard/blog/styles.css'

export default class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.highlight()
  }

  componentDidUpdate() {
    this.highlight()
  }

  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }

  render() {
    const { code, plugins, language } = this.props
    return (
      <pre className="code-prism">
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    )
  }
}