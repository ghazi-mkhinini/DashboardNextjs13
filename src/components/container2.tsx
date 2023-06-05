import { ReactNode } from "react";

interface propsType {
  id?: string;
  style?: any;
  text?: string;
  className?: string;
  rest?: ReactNode[];
}

export default function Container2({
  text,
  className,
  ...rest
}: propsType): JSX.Element {
  return (
    <div className={"inline-block m-2" + " " + className} {...rest}>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 523 729"
        width="90"
        height="130"
      >
        <style>{`.a{fill:#3de0e0}.b{opacity:.15;fill:#374151 }`}</style>
        {/*original #3de0e0 */}
        <path
          className="a"
          d="m522.5 354.6v348.9h-78.7v-7.5h71.2v-338.6l-49.5-58.3v-195l-51.2-66.9h-406.1v448.8l37.1 49.5v160.5h244.8v7.5h-252.3v-165.5l-37.2-49.5v-458.8h417.4l55 71.9v194.7z"
        />
        <path className="a" d="m518.7 297.1v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 266.7v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 236.3v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 206v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 175.6v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m329.6 696h5l-6 6.1h-5.1z" />
        <path className="a" d="m322.5 696h5.1l-6.1 6.1h-5z" />
        <path className="a" d="m315.4 696h5.1l-6.1 6.1h-5z" />
        <path className="a" d="m308.4 696h5l-6.1 6.1h-5z" />
        <path className="a" d="m301.3 696h5l-6 6.1h-5.1z" />
        <path className="a" d="m28 550.6v149.2l-16.7-26.3v-149.1z" />
        <path className="a" d="m133.7 713.1v7.5h-117.8v-57h7.5v49.5z" />
        <path
          className="a"
          d="m135 705c6.6 0 11.9 5.3 11.9 11.9 0 6.6-5.3 11.9-11.9 11.9-6.6 0-11.9-5.3-11.9-11.9 0-6.6 5.3-11.9 11.9-11.9z"
        />
        <path
          className="a"
          d="m324.5 0.4c6.6 0 12 5.3 12 11.9 0 6.6-5.4 11.9-12 11.9-6.5 0-11.9-5.3-11.9-11.9 0-6.6 5.4-11.9 11.9-11.9z"
        />
        <path
          className="a"
          d="m509.4 109.5v60.9h-7.6v-58.3l-76-96h-101.3v-7.6h105z"
        />
        <path className="a" d="m518.7 297.1v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 266.7v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 236.3v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 206v21.6l-26.2-26v-21.6z" />
        <path className="a" d="m518.7 175.6v21.6l-26.2-26v-21.6z" />
        <path
          className="a"
          d="m324.5 0.4c6.6 0 12 5.3 12 11.9 0 6.6-5.4 11.9-12 11.9-6.5 0-11.9-5.3-11.9-11.9 0-6.6 5.4-11.9 11.9-11.9z"
        />
        <path
          className="a"
          d="m509.4 109.5v60.9h-7.6v-58.3l-76-96h-101.3v-7.6h105z"
        />
        <path className="a" d="m440.3 688.7l-7.3 29h-89.2l-7.3-29z" />
        <path
          className="b"
          d="m502.7 663.6h-443.5v-139.2l-46.4-67.8v-401.3h388l45.8 62v209.3l55.4 55.4z"
        />
      </svg>
    </div>
  );
}
