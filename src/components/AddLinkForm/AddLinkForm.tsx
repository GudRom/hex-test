import { FormEvent, useState } from "react";
import Input from "../Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createShortLink } from "../../utils/requests/url";
import Button from "../Button";

type Props = {
  className: string;
};

const AddLinkForm = ({ className }: Props) => {
  const [link, setLink] = useState("");
  const [isLinkError, setIsLinkError] = useState(false);

  const client = useQueryClient();

  const {
    mutate: create,
    isError,
    error,
    status,
  } = useMutation({
    mutationFn: () => createShortLink(link),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["links"] });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (link.trim()) {
      create();
      setLink("");
    } else {
      setIsLinkError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex items-center justify-center gap-2">
        <Input
          className="p-2 border border-green-500 rounded-md w-96"
          type="url"
          name={"link"}
          placeholder="вставьте ссылку сюда"
          isValidateError={isLinkError}
          onFocus={() => setIsLinkError(false)}
          value={link}
          onChange={(e) => setLink(e.currentTarget.value)}
        />
        <Button type="submit" disabled={isError || status === "pending"}>
          Добавить
        </Button>
      </div>
      {isError && <p>{error.message}</p>}
      {status === "pending" && <p>Loading...</p>}
    </form>
  );
};

export default AddLinkForm;
