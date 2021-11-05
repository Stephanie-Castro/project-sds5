import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { getAllSalesWithPagination } from "../../services/apiService";

const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    totalElements: 0,
    totalPages: 0,
    number: 0,
    first: true,
    last: true,
  });

  useEffect(() => {
    getAllSalesWithPagination(0, 10).then((data) => {
      setPage(data);
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map((item, index) => (
            <tr key={index}>
              <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
              <td>{item.seller.name}</td>
              <td>{item.visited}</td>
              <td>{item.deals}</td>
              <td>{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
