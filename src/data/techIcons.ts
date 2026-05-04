import type React from 'react'

import {
  SiReact, SiTypescript, SiLaravel, SiMysql,
  SiPostgresql, SiDocker, SiDjango, SiBootstrap,
  SiGooglegemini, SiPhp, SiTailwindcss, SiPython,
  SiSqlite, SiNodedotjs, SiJavascript, SiClaude,
  SiN8N, SiGithubactions, SiHtml5, SiCss, SiNuxt,
  SiSqlalchemy, SiFastapi, SiGithub, SiMongodb,
  SiFirebase, SiOpenai
} from 'react-icons/si'

import { HiDatabase } from "react-icons/hi";
import { FaMobileScreen } from "react-icons/fa6";
import { FaVuejs, FaServer, FaUikit, FaLinux, FaBitbucket } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { VscRemoteExplorer } from "react-icons/vsc";
import { IoLogoBitbucket } from "react-icons/io";
import { GoWorkflow } from "react-icons/go";

export const techIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  // Front-end
  'Front-End':FaMobileScreen,
  'HTML':SiHtml5,
  'CSS':SiCss,
  'Javascript':SiJavascript,
  'Typescript':SiTypescript,
  'React':SiReact,
  'NextJS':RiNextjsFill,
  'Vue':FaVuejs,
  'NuxtJS':SiNuxt,
  'Tailwind':SiTailwindcss,
  'Bootstrap':SiBootstrap,

  // Back-End
  'Back-End':FaServer,
  'PHP':SiPhp,
  'Laravel':SiLaravel,
  'Python':SiPython,
  'Django':SiDjango,
  'FastApi':SiFastapi,
  'NodeJS':SiNodedotjs,

  // DevOps
  'DevOps':GrDeploy,
  'GithubActions':SiGithubactions,
  'BitbucketPipelines':IoLogoBitbucket,
  'Docker':SiDocker,
  'Linux':FaLinux,
  'CI/CD':GoWorkflow,

  // Repositories
  'Repositories':VscRemoteExplorer,
  'Github':SiGithub,
  'Bitbucket':FaBitbucket,

  // Messaging
  'n8n':SiN8N,

  // Database
  'Database':HiDatabase,
  'MySQL':SiMysql,
  'PostgreSQL':SiPostgresql,
  'Sqlite':SiSqlite,
  'MongoDB':SiMongodb,
  'Firebase':SiFirebase,
  'Supabase':RiSupabaseFill,

  // ORM's
  'ORM':FaUikit,
  'ALCHSQL':SiSqlalchemy,

  // IA
  'Gemini':SiGooglegemini,
  'Claude':SiClaude,
  'GPT':SiOpenai
}
