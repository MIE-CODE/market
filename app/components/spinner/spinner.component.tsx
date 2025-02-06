import classNames from "classnames";

type SpinnerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Spinner = (props: SpinnerProps) => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center after:border-dotted after:content-[''] after:border-[5px] after:border-transparent after:animate-spin   after:p-2 after:border-slate-700 after:rounded-[50%] ",
        props.className
      )}
    ></div>
  );
};
