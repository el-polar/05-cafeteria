const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

/* 
  COMPILAR SASS
  Pasos:
    1 - Identificar archivo
    2 - Compilarla
    3 - Guardar el .css
*/
function css(done) {
  src("src/scss/app.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .on("error", function (err) {
      console.log(err.message);
    })
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("build/css"));

  done();
}

function dev() {
  watch("src/scss/**/*.scss", css);
}

exports.default = series(css, dev);

// series - Las tareas son secuenciales
// parallel - Las tareas son paralelas
