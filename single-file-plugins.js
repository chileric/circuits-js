/**
 * Created with JetBrains WebStorm.
 * User: kevin.convy
 * Date: 1/28/13
 * Time: 3:20 PM
 * Build profile for RequireJs' optimizer.
 */
({
    baseUrl: "./src/main",
    paths: {
        circuits: ".",
        dojo: "empty:",
        dijit: "empty:",
        dojox: "empty:"
    },
    name: "circuits/pluginpack",
    out: "circuits-plugins-1.0.0-min.js"
})