import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18next";

export default function Description(props) {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="my-4">
      <p>{props.description}</p>
 
    </div>
  );
}
