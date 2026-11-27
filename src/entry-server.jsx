import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { SiteApp } from "./App";

export function render(url) {
  return renderToString(createElement(StaticRouter, { location: url }, createElement(SiteApp)));
}
