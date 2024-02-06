import BodyRow from "./components/BodyRow";
import Header from "./components/Header";
import Button from "../Button";
import { useLinksQuery } from "../../hooks/useLinksQuery";
import { useLinkStore } from "../../pages/DashboardPage/linkStore";
import { LIMIT_PER_PAGE } from "../../utils/configs/config";

const Table = () => {
  const { currentPage, increasePage, decreasePage, short, counter, target } =
    useLinkStore();

  const request = new URLSearchParams({
    offset: currentPage.toString(),
    limit: LIMIT_PER_PAGE.toString(),
  });

  [short, counter, target].forEach((el) => {
    if (el) {
      request.append("order", el);
    }
  });

  const { data, isLoading, isSuccess, isError, error } = useLinksQuery(
    request.toString()
  );

  return (
    <table>
      <Header />
      <tbody>
        {isSuccess &&
          data.map((linkEl) => <BodyRow linkEl={linkEl} key={linkEl.id} />)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            <Button onClick={decreasePage} disabled={currentPage === 0}>
              Назад
            </Button>
            <span className="m-2">{currentPage + 1}</span>
            <Button onClick={increasePage}>Вперед</Button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
