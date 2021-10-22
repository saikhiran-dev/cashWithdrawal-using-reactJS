import './index.css'

const DenominationItem = props => {
  const {denominationsList, updateBalance} = props
  const {value} = denominationsList
  const onClickDenominate = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={onClickDenominate}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
