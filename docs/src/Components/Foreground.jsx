import React from "react";
import Card from "./card";

function Foreground() {
  const data = [
    {
      id: 1,
      desc: "this color will be shown in the card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
  ];

  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap p-5 gap-5 md:gap-10">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Foreground;

