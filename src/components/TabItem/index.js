// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetail, changeTab, isActive} = props
  const {displayText, tabId} = tabDetail

  const onTabClick = () => {
    changeTab(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onTabClick} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
