import NotificationButton from '../NotificationButton'
import './styles.css'

export default function SalesCard() {
  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <form>
        <input className="form-control form-control-container" type="text" />
        <input className="form-control form-control-container" type="text" />
      </form>

      <table className="sales-table">
        <thead>
          <tr>
            <th className="show992">ID</th>
            <th className="show576">Data</th>
            <th>Vendedor</th>
            <th className="show992">Visitas</th>
            <th className="show992">Vendas</th>
            <th>Total</th>
            <th>Notificar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <NotificationButton />
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <NotificationButton />
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <NotificationButton />
            </td>
          </tr>
        </tbody>

      </table>
    </div>


  )
}
