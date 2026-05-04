import type React from 'react'

import {
  SiReact, SiTypescript, SiLaravel, SiMysql,
  SiPostgresql, SiDocker, SiDjango, SiBootstrap,
  SiGooglegemini, SiPhp, SiTailwindcss, SiPython,
  SiSqlite, SiNodedotjs, SiJavascript, SiClaude,
  SiN8N, SiGithubactions, SiHtml5, SiCss,
  SiSqlalchemy, SiFastapi, SiGithub
} from 'react-icons/si'

import { HiDatabase } from "react-icons/hi";
import { FaMobileScreen } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

export const techIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'React': SiReact,
  'TypeScript': SiTypescript,
  'Laravel': SiLaravel,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Docker': SiDocker,
  'Typescript':SiTypescript,
  'Django': SiDjango,
  'Bootstrap': SiBootstrap,
  'Gemini': SiGooglegemini,
  'PHP': SiPhp,
  'Tailwind':SiTailwindcss,
  'Python':SiPython,
  'Sqlite':SiSqlite,
  'Js':SiJavascript,
  'Node':SiNodedotjs,
  'Claude':SiClaude,
  'n8n':SiN8N,
  'GithubActions':SiGithubactions,
  'HTML':SiHtml5,
  'CSS':SiCss,
  'ALCHSQL':SiSqlalchemy,
  'FastApi':SiFastapi,
  'Github':SiGithub,
  'Back-End':FaServer,
  'Front-End':FaMobileScreen,
  'DevOps':GrDeploy,
  'Database':HiDatabase,
}
