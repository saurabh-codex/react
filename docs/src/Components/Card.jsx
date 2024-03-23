import React from "react";
import PropTypes from "prop-types";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

const cardStyles = {
  container: "relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden",
  fileInfo: "flex items-center justify-between px-8 py-3 mb-3",
  closeBtn: "w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center",
  tag: "tag w-full py-4 bg-green-600 flex items-center justify-center",
};

function Card({ desc, filesize, close, tag }) {
  return (
    <div className={cardStyles.container}>
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{desc}</p>
      <div className="absolute bottom-0 w-full  left-0">
        <div className={cardStyles.fileInfo}>
          <h5>{filesize}</h5>
          <span className={cardStyles.closeBtn}>
            {close ? <IoCloseSharp /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {tag.isOpen && (
          <div className={cardStyles.tag}>
            <h3 className="text-sm font-semibold">{tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  desc: PropTypes.string.isRequired,
  filesize: PropTypes.string.isRequired,
  close: PropTypes.bool.isRequired,
  tag: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    tagTitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;

