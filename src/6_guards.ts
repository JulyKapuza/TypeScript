function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponse {
  header = "response header";
  result = "responsse result";
}

class MyError {
  header = "error header";
  message = "error result";
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return res.header + res.message;
  }
}

//===============================//

type AlertType = "success" | "warning" | "dander";

function setAlertType(type: AlertType) {
  if (type === "success") {
    console.log("Congratulation");
  }
}

setAlertType("success");
// setAlertType('default') // error
