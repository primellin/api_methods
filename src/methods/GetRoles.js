import { DefaultButton } from "../atomic_components";
import { ReadOnlyInput } from "../atomic_components";

export function GetRoles() {
    let getRolesHandler = async () => {
        let server = document.getElementById("server").value;
        let port = document.getElementById("port").value;

        if (server === "" || port === "") {
            alert("Заполните данные сервера");
            return;
        }

        let json = undefined;
        try {
            let url = "http://" + server + ":" + port + "/api/get-roles";
            const response = await fetch(url);
            json = await response.json();
        } catch (err) {
            console.log("Error: " + err);
            alert("Произошла ошибка - проверьте правильность введенных данных");
            return;
        }

        document.cookie = encodeURIComponent("roles") + "=";
        document.getElementById("roles_response").innerHTML = json.roles.join('\n');
        document.cookie = encodeURIComponent("roles") + "=" + encodeURIComponent(json.roles);
    }

    return (
        <div className="column-wrapper">
            <h3>Получение перечня ролей</h3>
            <DefaultButton text="Запросить перечень" onClickHandler={getRolesHandler} />
            <ReadOnlyInput id="roles_response" />
        </div>
    );
}