const fs = require('fs-extra');
const path = require('path');

const fileUtils = {
  copyTemplate: async (source, destination) => {
    try {
      await fs.copy(source, destination);
      return true;
    } catch (error) {
      throw new Error(`Error copying template: ${error.message}`);
    }
  },
  
  createDirectory: async (dirPath) => {
    try {
      await fs.ensureDir(dirPath);
      return true;
    } catch (error) {
      throw new Error(`Error creating directory: ${error.message}`);
    }
  }
};

module.exports = fileUtils; 