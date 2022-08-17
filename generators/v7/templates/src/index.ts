/**
 * Babel v7+ 推荐使用，目前官方仓库的编写风格
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */
import { declare } from "@babel/helper-plugin-utils";
import { types as t } from "@babel/core";
export default declare(api => {
  api.assertVersion(7);

  return {
    name: "<%= name %>",
    visitor: {
    },
  };
});