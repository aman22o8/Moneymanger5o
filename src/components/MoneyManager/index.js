import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyitem: [],
    title: '',
    amount: '',
    activetype: transactionTypeOptions[0].optionId,
  }

  titlechange = event => {
    // console.log(event.target.value)
    this.setState({title: event.target.value})
  }

  amountchange = event => {
    // console.log(event.target.value)
    this.setState({amount: event.target.value})
  }

  typechange = event => {
    // console.log(event.target.value)
    this.setState({activetype: event.target.value})
  }

  onsubmitting = event => {
    event.preventDefault()
    const {title, amount, activetype} = this.state
    const optiontype = transactionTypeOptions.find(
      each => each.optionId === activetype,
    )
    const {displayText} = optiontype
    const newItemAdded = {id: uuidv4(), title, amount, type: displayText}
    this.setState(myprevvalue => ({
      historyitem: [...myprevvalue.historyitem, newItemAdded],
      title: '',
      amount: '',
      activetype: transactionTypeOptions[0].optionId,
    }))
  }

  removeitem = id => {
    const {historyitem} = this.state
    const result = historyitem.filter(each => each.id !== id)
    return this.setState({historyitem: result})
  }

  getincome = () => {
    const {historyitem} = this.state
    let incomed = 0

    historyitem.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomed += parseInt(each.amount)
      }
    })
    return incomed
  }

  getexpense = () => {
    const {historyitem} = this.state
    let expensed = 0
    historyitem.forEach(each => {
      if (each.type !== transactionTypeOptions[0].displayText) {
        expensed += parseInt(each.amount)
      }
    })
    return expensed
  }

  getbalance = () => {
    const {historyitem} = this.state
    let incomed = 0
    let balanced = 0
    let expensed = 0
    historyitem.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomed += parseInt(each.amount)
      } else {
        expensed += parseInt(each.amount)
      }
    })
    balanced = incomed - expensed

    return balanced
  }

  render() {
    const {historyitem, title, amount, activetype} = this.state
    const yourincome = this.getincome()
    const yourbalance = this.getbalance()
    const yourexpense = this.getexpense()
    console.log(yourbalance, yourincome, yourexpense)
    return (
      <div className="bg_container">
        <div className="name_card">
          <h1 className="name">Hi,Richard</h1>
          <p className="description">
            Welcome back to your,
            <span className="span_heading">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          yourincome={yourincome}
          yourbalance={yourbalance}
          yourexpense={yourexpense}
          // historyitem={historyitem}
        />

        <div className="footer_container">
          <form onSubmit={this.onsubmitting} className="input_container">
            <h1 className="input_heading">Add Transaction</h1>
            <label htmlFor="TITLE" className="input_subheading">
              TITLE
            </label>
            <input
              id="TITLE"
              onChange={this.titlechange}
              value={title}
              placeholder="TITLE"
              className="input_1"
              type="text"
            />
            <label htmlFor="AMOUNT" className="input_subheading">
              AMOUNT
            </label>
            <input
              id="AMOUNT"
              onChange={this.amountchange}
              placeholder="AMOUNT"
              value={amount}
              className="input_1"
              type="text"
            />
            <label htmlFor="TYPE" className="input_subheading">
              TYPE
            </label>
            <select
              id="TYPE"
              onChange={this.typechange}
              value={activetype}
              className="type_name"
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="Add_btn">
              Add
            </button>
          </form>
          <div className="input_container history_container">
            <h1 className="history_heading">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell ">Type</p>
                  <p className="invisible">pitle</p>
                </li>
                {historyitem.map(each => (
                  <TransactionItem
                    key={each.id}
                    mydeletedlist={this.removeitem}
                    eachlist={each}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
