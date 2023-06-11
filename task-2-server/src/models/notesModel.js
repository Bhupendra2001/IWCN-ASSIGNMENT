module.exports = (sequelize , DataTypes)=> {

    const Note = sequelize.define('note', {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        release_date : {
            type : DataTypes.DATE,
           
        }
      });    

      return Note
}