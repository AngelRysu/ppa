import { Model, DataTypes, Sequelize } from "sequelize";

const PLAN_TABLE = 'Planes';

const Planeschema = {
    idPlan: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    idPrograma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Programas',
            key: 'idPrograma',
        },
        field: 'idPrograma',
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaTermino: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    credMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    credMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    estado: {
        type: DataTypes.ENUM('Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado'),
        allowNull: false,
        defaultValue: 'Elaborado',
    },
};

class Planes extends Model {
    static associate(models:any) {
        this.belongsTo(models.Programas, { foreignKey: 'idPrograma', as: 'programa' });
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: PLAN_TABLE,
            modelName: 'Planes',
        };
    }
}

export { PLANES_TABLE, Planeschema, Planes };
