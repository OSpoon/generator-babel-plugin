/**
 * Babel v7+ TypeScript 推荐使用，目前官方仓库的编写风格
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */
 import { BabelAPI, declare } from "@babel/helper-plugin-utils";
 import { BabelFile, NodePath, PluginObj, PluginPass, types as t } from "@babel/core";
 
 export default declare((api: BabelAPI, options: Record<string, any>, dirname: string) => {
   api.assertVersion(7);
 
   return {
     name: "<%= name %>",
     pre(this: PluginPass, file: BabelFile) {
       // TODO eg：Initialize data usage before conversion
     },
     visitor: {
       /**
        * # Example
        * 
        *  ExportNamedDeclaration(path: NodePath<t.ExportNamedDeclaration>, state: PluginPass) {
        *   
        *  }
        */
     },
     post(this: PluginPass, file: BabelFile) {
       // TODO eg：Use of output data after conversion
     },
   } as PluginObj<PluginPass>;
 });