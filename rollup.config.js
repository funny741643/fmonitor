import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const config = {
  input: "./src/index.ts",
  output: {
    file: './dist/index.umd.js',
    format: 'iife',
    name: "fmonitor",
    sourcemap: true,
  },
  external: [],
  plugins: [
    typescript({
      tsconfig:
        process.env.NODE_ENV === "production"
          ? "tsconfig.prod.json"
          : "tsconfig.json"
    }),
    json(),
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    resolve(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;

