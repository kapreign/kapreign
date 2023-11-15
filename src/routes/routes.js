/* eslint-disable import/prefer-default-export */
import * as React from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import CaseStudy from "../pages/CaseStudy/CaseStudy";
import CaseStudyDetailed from "../pages/CaseStudyDetails/CaseStudyDetails";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";

const ROUTES = {
  Home: {
    path: "/home",
    key: "Home",
    name: "Home",
    exact: true,
    isSecured: false,
    hasMainNav: false,
    hasSideNav: false,
    listInSideNav: false,
    hasTopNav: false,
    UserType: true,
    Component: Home,
    params: {},
  },
  About: {
    path: "/about",
    key: "About",
    name: "About",
    exact: true,
    isSecured: false,
    hasMainNav: false,
    hasSideNav: false,
    listInSideNav: false,
    hasTopNav: false,
    UserType: true,
    Component: About,
    params: {},
  },
  CaseStudy: {
    path: "/caseStudy",
    key: "CaseStudy",
    name: "CaseStudy",
    exact: true,
    isSecured: false,
    hasMainNav: false,
    hasSideNav: false,
    listInSideNav: false,
    hasTopNav: false,
    UserType: true,
    Component: CaseStudy,
    params: {},
  },
  CaseStudyDetailed: {
    path: "/caseStudyView",
    key: "CaseStudyview",
    name: "CaseStudyview",
    exact: true,
    isSecured: false,
    hasMainNav: false,
    hasSideNav: false,
    listInSideNav: false,
    hasTopNav: false,
    UserType: true,
    Component: CaseStudyDetailed,
    params: {},
  },
  Services: {
    path: "/services",
    key: "Services",
    name: "Services",
    exact: true,
    isSecured: false,
    hasMainNav: false,
    hasSideNav: false,
    listInSideNav: false,
    hasTopNav: false,
    UserType: true,
    Component: Services,
    params: {},
  },
  Blog: {
    path: "/blog",
    key: "Blog",
    name: "Blog",
    exact: true,
    isSecured: false,
    hasMainNav: false,
    hasSideNav: false,
    listInSideNav: false,
    hasTopNav: false,
    UserType: true,
    Component: Blog,
    params: {},
  },
};

export default ROUTES;
