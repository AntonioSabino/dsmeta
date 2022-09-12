import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

export default function SalesCard() {
  const minInitialDate = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(minInitialDate);
  const [maxDate, setMaxDate] = useState(new Date());

  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <DatePicker
        selected={minDate}
        onChange={(date: Date) => setMinDate(date)}
        className="date-control date-control-container"
        dateFormat="dd/MM/yyyy"
      />
      <DatePicker
        selected={maxDate}
        onChange={(date: Date) => setMaxDate(date)}
        className="date-control date-control-container"
        dateFormat="dd/MM/yyyy"
      />


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
