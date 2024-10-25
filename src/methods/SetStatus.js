import { DefaultButton, FormInput } from "../atomic_components";
import { ReadOnlyInput } from "../atomic_components";
import { getCookie } from "../utils";
import { stringToMask } from "../utils";

export function SetStatus() {
let token = getCookie('token')
let masked_token = stringToMask(token);

    let setStatusHandler = async () => {
        let server = document.getElementById("server").value;
        let port = document.getElementById("port").value;
        let status = document.getElementById("status").value;

        if (server === "" || port === "") {
            alert("Заполните данные сервера");
            return;
        }

        if (status === "") {
            alert("Введите статус");
            return;
        }

        let status_body = {
              "token": token,
              "status": status
        };

        let json = undefined;
            try {
                let url = "http://" + server + ":" + port + "/api/set-status";
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(status_body)
                });
                json = await response.json();
                document.getElementById("status_response").value = json;
            } catch (err) {
                console.log("Error: " + err);
                alert("Произошла ошибка - проверьте правильность введенных данных");
                return;
            }
    }

    return (
        <div className="column-wrapper">
            <h3>Установление статуса записи</h3>
                <FormInput id="status" defaultValue={"increased"} />
                <FormInput id="token" defaultValue={masked_token} />
                <DefaultButton text="Установить статус" onClickHandler={setStatusHandler} />
                <ReadOnlyInput id="status_response" />
        </div>
    );
}