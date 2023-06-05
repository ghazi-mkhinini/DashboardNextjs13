interface typeStrinhg {
  text: string;
}

export default function Container({ text }: typeStrinhg): JSX.Element {
  return (
    <div
      data-before={text}
      className="inline-block w-[150px] h-[82px] before:content-[attr(data-before)] before:ml-[27px] before:mt-[20px] before:inline-block"
      style={{
        position: "relative",
        color: "white",
        maxWidth: "150",
        maxHeight: "82",
      }}
    >
      <svg
        className="top-0 left-0"
        style={{ position: "absolute", zIndex: -1 }}
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1156 624"
        width="150"
        height="82"
      >
        <style>{`.a{fill:"#3de0e0"} .b{opacity:.15;fill:#374151 }`}</style>
        <g>
          <path
            className="b"
            d="m892.3 43.4h176.6l41.8 39.7v426.4l-62.7 79.5h-238l-15.7-28.3h-200.6l-10.2 28.3h-457.2l-77.4-102.4v-393l46-50.2h262.8"
          />
        </g>
        <path
          className="a"
          d="m1052.5 598.2h-248l-15.6-28.3h-188.7l-10.2 28.3h-468.4l-81.9-108.5v-399.7l51.1-55.8h266.9v18.5h-258.7l-40.8 44.5v386.3l72.7 96.2h446.1l10.2-28.3h212.6l15.7 28.3h228l58-73.4v-419.2l-36.3-34.4h-172.9v-18.5h180.3l47.4 45v433.6z"
        />
        <path className="a" d="" />
        <path className="a" d="" />
        <path
          className="a"
          d="m857.2 66.6h-465.4l-20.2-27.2 20.2-27.3h465.4l20.2 27.3z"
        />
        <path
          className="a"
          d="m1151.2 118.9h-14.8v-59.5l-37.4-35.5h-78.9v-14.8h84.8l46.3 44z"
        />
        <path className="a" d="m1142.8 53.3l-41.8-39.8 12.8-13.4 41.8 39.7z" />
        <path
          className="a"
          d="m150.1 618.3h-52.9l-81-111.6v-60.4h14.8v55.6l73.7 101.6h45.4z"
        />
        <path className="a" d="m86.6 623.8l-77.4-106.5 16.8-12.2 77.4 106.6z" />
        <path className="a" d="m1138.4 467.7l-27.7 16.5v-250.8l27.7 16.4z" />
        <path className="a" d="m1155.1 431.4l-23 12.3v-169.8l23 12.3z" />
        <path className="a" d="m17.6 335l27.7 16.5v-250.8l-27.7 16.4z" />
        <path className="a" d="m0.9 298.7l23 12.3v-169.8l-23 12.2z" />
      </svg>
    </div>
  );
}
