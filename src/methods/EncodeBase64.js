import { DefaultButton, FormInput } from "../atomic_components";
import { ReadOnlyInput } from "../atomic_components";
import { getCookie } from "../utils";
import { stringToMask } from "../utils";
import { encodeBase64 } from "../utils";

export function EncodeBase64() {
    let code = getCookie('code');
    let masked_code = stringToMask(code);

    let encode64Handler = async () => {
        let server = document.getElementById("server").value;
        let port = document.getElementById("port").value;
        let email = document.getElementById("email_base64").value;
        let masked_code_input = document.getElementById("masked_code").value;

        if (server === "" || port === "") {
            alert("Заполните данные сервера");
            return;
        }

        if (email === "") {
            alert("Введите почту");
            return;
        }

        if (masked_code_input === "") {
            alert("Вернитесь к предыдущему методу и получите токен");
            return;
        }

        let token = encodeBase64(email, code);
        let masked_token = stringToMask(token)
        document.getElementById("encode_response").value = masked_token;
        document.cookie = encodeURIComponent("token") + "=" + encodeURIComponent(token) + "; secure";
    }

    return (
        <div className="column-wrapper">
            <h3>Получение токена</h3>
            <FormInput id="email_base64" placeholder="e-mail" defaultValue={getCookie('email')} />
            <FormInput id="masked_code" defaultValue={masked_code} />
            <DefaultButton text="Получить токен" onClickHandler={encode64Handler} />
            <ReadOnlyInput id="encode_response" />
        </div>
    );
}