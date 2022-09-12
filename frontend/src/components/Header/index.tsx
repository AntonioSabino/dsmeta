import logo from '../../assets/images/logo.svg'
import './styles.css'

export default function Header() {
  return (
    <header className="logo-container">
      <img src={logo} alt="DSMeta" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por
        <a href="https://www.instagram.com/sabinooantonio" target="_blank"> @sabinooantonio</a>
      </p>
      <p>
        Durante a masterclass do
        <a href="https://www.instagram.com/devsuperior.ig" target="_blank"> @devsuperior.ig</a>
      </p>
    </header>
  )
}
