import { useLinkStore } from "../../../../pages/DashboardPage/linkStore";

const Header = () => {
  const { short, counter, target, toggleCounter, toggleShort, toggleTarget } =
    useLinkStore();

  const getArrow = (state: string) => {
    if (!state) return null;
    if (state.includes("desc")) {
      return <span>&#9650;</span>;
    } else {
      return <span>&#9660;</span>;
    }
  };

  return (
    <thead>
      <tr>
        <th>{"id"}</th>
        <th className="cursor-pointer" onClick={toggleTarget}>
          {`исходная ссылка`}
          {getArrow(target)}
        </th>
        <th className="cursor-pointer" onClick={toggleShort}>
          {`короткая ссылка`}
          {getArrow(short)}
        </th>
        <th className="cursor-pointer" onClick={toggleCounter}>
          {`количество переходов`}
          {getArrow(counter)}
        </th>
      </tr>
    </thead>
  );
};

export default Header;
