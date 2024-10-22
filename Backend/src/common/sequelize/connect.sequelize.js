import { Sequelize } from "sequelize";

// Sequelize
const sequelize = new Sequelize(`Jira_clone_data`, `root`, `1234`, {
    host: `localhost`,
    port: `3307`,
    dialect: `mysql`,
    // logging: false
});

export default sequelize;