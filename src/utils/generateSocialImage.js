const fs = require('fs');
const { registerFont, createCanvas } = require('canvas');
const request = require('request');
const mkdirp = require('mkdirp');
const path = require('path');
// import something from '../images';

// FUNCTION TO DOWNLOAD IMAGE TO DIRECTORY
const download = function (uri, filename, callback) {
  request.head(uri, (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

// FUNCTION TO CREATE DIRECTORY
const createDir = (imagePath) => {
  //   fs.mkdir(`/static/images/${imagePath}`, { recursive: true }, (err) => {
  //     if (err) throw err;
  // });
  const made = mkdirp.sync(`static/images/${imagePath}`);
};

/// expand with color, background etc.
const drawTextBG = (ctx, txt, size, x, y, height, textTop, bold) => {
  /// lets save current state as we make a lot of changes
  ctx.save();

  /// set font
  ctx.font = `${bold && 'bold'} ${size}pt Open Sans`;

  /// draw text from top - makes life easier at the moment
  ctx.textBaseline = 'top';

  /// color for background
  ctx.fillStyle = '#00000050';

  /// get width of text
  var width = ctx.measureText(txt).width;

  /// draw background rect assuming height of font
  // ctx.fillRect(x, y, width + 30, 60);
  roundRect(ctx, x, y, width + 30, height, 20, true, false);

  /// text color
  ctx.fillStyle = '#dde0e6';

  /// draw text on top
  ctx.fillText(txt, x + 15, y + textTop);

  /// restore original state
  ctx.restore();
};

function roundRect(
  ctx, //our context
  x, //start x
  y, //start y
  width, //x width
  height, //y height
  radius, //radius of corner rounding
  fill, //background
  stroke,
) {
  if (typeof stroke === 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }

  //draw a line with curved corners around our box
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height,
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();

  //fill it in
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
  context.fillStyle = '#548bdd';
  context.fillRect(250, y + lineHeight + 46, maxWidth - 500, 8);
}

exports.generateSocialImage = ({ title, imagePath }) => {
  createDir(imagePath);

  //define canvas size
  let width = 1200;
  let height = 630;

  //draw canvas
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  //Fill the background
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);

  //set the copy style
  context.font = 'bold 64pt Open Sans';
  context.textAlign = 'center';
  context.textBaseline = 'top';
  context.fillStyle = '#2c2f3b';

  var maxWidth = width;
  var lineHeight = 90;
  var x = width / 2;
  var y = 60;

  wrapText(context, title, x, y, maxWidth, lineHeight);

  const buffer = canvas.toBuffer(`image/png`);
  const imageLocation = `/images/${imagePath}/seo.png`;
  fs.writeFileSync(`static${imageLocation}`, buffer);

  return imageLocation;
};
