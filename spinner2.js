const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '] ;

for (let i = 0; i < spinnerArr.length; i++) {

  setTimeout(() => {
    (process.stdout.write(spinnerArr[i]));

    if (i === spinnerArr.length - 1){
      console.log("\n")
    }
    }, i * 200);
}
