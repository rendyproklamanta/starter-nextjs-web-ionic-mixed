module.exports = {
    apps: [{
        name: "nextjs",
        script: "./server.js",
        instances: 4,
        exec_mode: "cluster",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
};