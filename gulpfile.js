const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

/* 
  COMPILAR SASS
  Pasos:
    1 - Identificar archivo
    2 - Compilarla
    3 - Guardar el .css
*/
function css(done) {
  src("src/scss/app.scss").pipe(sass()).pipe(dest("build/css"));

  done();
}

function dev() {
  watch("src/scss/app.scss", css);
}
exports.dev = dev;
