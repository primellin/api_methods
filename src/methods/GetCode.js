import { DefaultButton, FormInput } from "../atomic_components";
import { ReadOnlyInput } from "../atomic_components";
import { getCookie } from "../utils";
import { stringToMask } from "../utils";

export function GetCode() {

    let getCodeHandler = async () => {
        let server = document.getElementById("server").value;
        let port = document.getElementById("port").value;
        let email = document.getElementById("email_getcode").value;

        if (server === "" || port === "") {
            alert("Заполните данные сервера");
            return;
        }

         if (email === "") {
            alert("Введите почту");
            return;
         }

            let json = undefined;
            try {
                let url = "http://" + server + ":" + port + "/api/get-code?email=" + email;
                const response = await fetch(url);
                json = await response.json();
                document.getElementById("code_response").value = json;
            } catch (err) {
                console.log("Error: " + err);
                alert("Произошла ошибка - проверьте правильность введенных данных");
                return;
            }

            document.getElementById("code_response").value = stringToMask(json);
            document.cookie = encodeURIComponent("code") + "=" + encodeURIComponent(json)  + "; secure";
    }

    return (
        <div className="column-wrapper">
            <h3>Получение кода</h3>
                <FormInput id="email_getcode" placeholder="e-mail" defaultValue={getCookie('email')} />
                <DefaultButton text="Получить код" onClickHandler={getCodeHandler} />
                <ReadOnlyInput id="code_response" />
        </div>
    );
}
