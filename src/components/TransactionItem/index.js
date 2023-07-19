// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachlist, mydeletedlist} = props
  const {id, title, amount, type} = eachlist
  //   console.log(id, eachlist)
  const deleteitem = () => {
    mydeletedlist(id)
  }
  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">{amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        data-testid="delete"
        onClick={deleteitem}
        className="sublist btndelete"
        type="button"
      >
        <img
          className="img_delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
