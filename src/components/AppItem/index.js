// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetail} = props
  const {appName, imageUrl} = appDetail

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
