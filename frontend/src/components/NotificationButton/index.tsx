import icon from '../../assets/images/notification-icon.svg'
import './styles.css'

export default function NotificationButton() {
  return (
    <button type='button' className="red-btn">
      <img src={icon} alt="Notificar" />
    </button>
  )
}
