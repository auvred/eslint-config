export const GLOB_JSTS_EXT = "?([cm])[jt]s?(x)";
export const GLOB_JSTS = `**/*.${GLOB_JSTS_EXT}`;
export const GLOB_TS = "**/*.?([cm])ts";
export const GLOB_TSX = "**/*.?([cm])tsx";
export const GLOB_VUE = "**/*.vue";

export const GLOB_JSON = "**/*.json?(5|c)";
export const GLOB_YAML = "**/*.y?(a)ml";
export const GLOB_MD = "**/*.md";

export const GLOB_HTML = "**/*.html";

export const GLOB_STYLE = "**/*.{c,le,sc}ss";
export const GLOB_POSTCSS = "**/*.{p,post}css";

export const GLOB_GRAPHQL = "**/*.g{raphql,ql,raphqls}";

export const GLOB_PACKAGEJSON = "**/package.json";
export const GLOB_TSCONFIG = ["**/tsconfig.json", "**/tsconfig.*.json"];
