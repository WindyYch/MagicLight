import { debounce } from "./debounce";
import LightTip from "../compontent/lightTip/lightTip.js";
import Loading from "../compontent/loading/loading.js"
function logEmail(elementId: string): void {
  const element = document.getElementById(elementId) as HTMLInputElement;
  const elementValue = (document.getElementById(elementId) as HTMLInputElement)
    ?.value;
  const submitButton = document.getElementById("email-input-button") as HTMLElement;
  const reg: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/;
  if (elementValue && reg.test(elementValue)) {
    submitButton.loading = true
    fetch("https://ggpb3yvhrb.execute-api.us-east-1.amazonaws.com/waitlist", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"email": "${elementValue}"}`,
    }).then((res) => {
      submitButton.loading = false
      if (res.ok) {
        new LightTip("Email sent", 2000, "success");
        element.value = "";
      }else{
        new LightTip("Invalid e-mail address", 2000, "error");
      }
    });
   
  } else {
    new LightTip("Invalid e-mail address", 2000, "error");
  }
}

const debouncedLogEmail = debounce(logEmail, 500);

export { debouncedLogEmail };
