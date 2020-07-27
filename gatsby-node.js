const { generateSocialImage } = require('./src/utils/generateSocialImage');

exports.onCreatePage = ({ page, actions }) => {
  console.log(page.componentPath.split('pages/')[1].split('.')[0]);
  let title = page.componentPath.split('pages/')[1].split('.')[0];

  title = (title.charAt(0).toUpperCase() + title.slice(1)).replace(/-/g, ' ');
  // You can access the variable "house" in your page queries now

  generateSocialImage({
    title,
    imagePath: `${page.componentPath.split('pages/')[1].split('.')[0]}`,
  });
};
