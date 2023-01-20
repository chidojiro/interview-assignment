import React from "react";
import Icon from "@components/Icon";

interface NoticeProps {
  children: string | JSX.Element;
  type: NoticeType;
  icon?: string;
}

type NoticeType = "negative" | "informative" | "positive" | "warning" | "subtle";

function Notice({ children, type = "informative", icon }: NoticeProps) {
  let noticeIcon;

  switch (type) {
    case "negative":
      noticeIcon = "warning";
      break;
    case "informative":
      noticeIcon = "info";
      break;
    case "positive":
      noticeIcon = "check";
      break;
    case "warning":
      noticeIcon = "warning";
      break;
    case "subtle":
      noticeIcon = "face-sad";
  }

  return (
    <div className={`notice-in-page notice-in-page--${type}`}>
      <Icon className="icon icon--inline icon--static" type={icon || noticeIcon || "info"} />
      <span className="notice-in-page__body-copy body-copy">{children}</span>
    </div>
  );
}

export default Notice;
