const notificationModel = (sequelize, DataTypes) => {
  return sequelize.define("notification", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    notifiableType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notifiableId: {
      type: DataTypes.INTEGER,
    },
    postId: {
      type: DataTypes.INTEGER,
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    senderUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senderProfilePicture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};

export default notificationModel;
