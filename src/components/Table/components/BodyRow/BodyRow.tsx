import { useState } from "react";
import { LinkModel } from "../../../../utils/types/model/LinkModel";
import Button from "../../../Button";

interface Props {
  linkEl: LinkModel;
}

const BodyRow = ({ linkEl }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const shortlink = `https://front-test.hex.team/s/${linkEl.short}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shortlink).then(() => setIsCopied(true));
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <tr>
      <td>{linkEl.id}</td>
      <td className="text-left">
        <a href={linkEl.target} target="_blank" rel="noopener noreferrer">
          {linkEl.target}
        </a>
      </td>
      <td className="text-left">
        <a href={shortlink} target="_blank" rel="noopener noreferrer">
          {shortlink}
        </a>
        <Button className="p-1 ml-2" onClick={handleCopy}>
          {isCopied ? "copied" : "copy"}
        </Button>
      </td>
      <td>{linkEl.counter}</td>
    </tr>
  );
};

export default BodyRow;
