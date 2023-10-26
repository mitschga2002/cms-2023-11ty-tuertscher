const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const { exec } = require("child_process");

function build(done) {
  exec("./clean-build.sh", (err, stdout, stderr) => {
    if (err) {
      console.error(`Fehler beim Ausführen des build.sh-Skripts: ${err}`);
    } else {
      console.log(stdout);
      console.error(stderr);
    }
    browserSync.reload();
    console.log("Build fertig.");
    done();
  });
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch("./src/**/*", build);
  gulp.watch("./dist/**/*").on("change", browserSync.reload);
}

exports.default = gulp.series(build, serve);
