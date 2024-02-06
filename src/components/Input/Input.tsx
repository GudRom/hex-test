import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isValidateError: boolean;
};

const Input = ({ isValidateError, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <input {...props} />
      {isValidateError ? (
        <span className="text-red-400">Не правильно заполнено</span>
      ) : null}
    </div>
  );
};

export default Input;
