import React, { Component } from 'react'
import PickYourNode from './pickYourNode'
import FirstPage from "./page1"
import SecondPage from './page2'
import ThirdPage from './page3'
import { connect } from "react-redux";
import { handleCreditCheckout, handleCryptoCheckout } from "../../../store/actions"


class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 0
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { page } = this.state
    return (
      <div>
        {page === 0 && <PickYourNode onsubmit={this.nextPage} /> }
        {page === 1 && <FirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <SecondPage
            previousPage={this.previousPage}
            handleCryptoCheckout={handleCryptoCheckout}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <ThirdPage
            previousPage={this.previousPage}
            onSubmit={handleCreditCheckout}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = {
    handleCreditCheckout,
    handleCryptoCheckout
}
export default connect(mapStateToProps,mapDispatchToProps)(WizardForm);

