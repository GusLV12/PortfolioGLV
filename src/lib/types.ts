export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export interface Project {
  name: string;
  img: string;
  website?: string;
  repositorio: string;
  description: string;
}

export interface Logo {
  logo: string;
}