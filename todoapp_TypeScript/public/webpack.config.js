module.exports = {
    mode: "development",
    // mode: 'production',
    entry: "./app/task-app-imports.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" },
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'ng-annotate-loader',
            //             options: {
            //                 ngAnnotate: 'ng-annotate-patched',
            //                 // sourcemap: !isProd,
            //             },
            //         },
            //         {
            //             loader: 'ts-loader',
            //             options: {
            //                 configFile: sourcePath + '/tsconfig.app.json',
            //                 // disable type checker - we will use it in fork plugin
            //                 transpileOnly: true,
            //             }
            //         }
            //     ]
            // },
        ]
}
};
