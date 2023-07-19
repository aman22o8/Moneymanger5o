// Write your code here
import './index.css'
import {Component} from 'react'

class MoneyDetails extends Component {
  //   gettingincome = () => {
  //     const {historyitem} = this.props

  //       const myincome = historyitem.filter(each => each.activetype === 'INCOME')

  //       return this.setState(prevState => ({
  //         initialbalance:
  //           sum[...prevState.initialbalance, parseInt(historyitem[myincome].amount)],
  //       }))
  //   }

  render() {
    // const totalincome = this.gettingincome()
    // console.log(totalincome)
    const {yourincome, yourbalance, yourexpense} = this.props
    return (
      <div className="moneydetail_card">
        <div className="my_details green_detail">
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div>
            <p className="mybalance">Your Balance</p>
            <p data-testid="balanceAmount" className="mybalance2">
              Rs {yourbalance}
            </p>
          </div>
        </div>
        <div className="my_details blue_detail">
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <div>
            <p className="mybalance ">Your Income</p>
            <p data-testid="incomeAmount" className="mybalance2">
              Rs {yourincome}
            </p>
          </div>
        </div>
        <div className="my_details violet_detail">
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div>
            <p className="mybalance ">Your Expenses</p>
            <p data-testid="expensesAmount" className="mybalance2">
              Rs {yourexpense}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
