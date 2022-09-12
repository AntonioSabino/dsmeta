import icon from '../../assets/images/notification-icon.svg'
import './styles.css'

export default function NotificationButton() {
  return (
    <div className='red-btn-container'>
      <button type='button' className="red-btn">
        <img src={icon} alt="Notificar" />
      </button>
    </div>
  )
}
