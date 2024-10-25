import { DefaultButton, FormInput } from "../atomic_components";
import { ReadOnlyInput } from "../atomic_components";
import { getCookie } from "../utils";
export function SignUp() {

    let signUpHandler = async () => {
        let server = document.getElementById("server").value;
        let port = document.getElementById("port").value;

        if (server === "" || port === "") {
            alert("Заполните данные сервера");
            return;
        }

        let name_value = document.getElementById("firstName").value;
        let surname_value = document.getElementById("lastName").value;
        let email_value = document.getElementById("email").value
        let role_value = document.getElementById("roles_select").value

        if (name_value === "" || surname_value === "" || email_value === "") {
            alert("Заполните поля личных данных");
            return;
        }

        let roles_list = getCookie('roles');
        let roles_arr = roles_list.split(',');

        let role_count = 0;

        if (roles_arr.length === 1){
            alert("Список ролей не найден, используйте сперва предыдущий метод.");
            return;
        } else {
            for (let i = 0; i < roles_arr.length; i++){
                if (role_value === "") {
                    alert("Введите роль");
                    role_count = 0;
                    return;
                }  else if (role_count === (roles_arr.length - 1)) {
                    alert("Такой роли не существует. Сверьтесь с результатом предыдущего метода");
                    role_count = 0;
                    return;
                } else if (role_value !== roles_arr[i]) {
                    role_count++;
                }
            }
        }

        let new_user = {
          "last_name": surname_value,
          "first_name": name_value,
          "email": email_value,
          "role": role_value
        };

        let json = undefined;
        try {
            let url = "http://" + server + ":" + port + "/api/sign-up";
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(new_user)
            });
            json = await response.json();
            document.getElementById("signUp_response").value = json;
            document.cookie = encodeURIComponent("email") + "=" + encodeURIComponent(email_value);
        } catch (err) {
            console.log("Error: " + err);
            alert("Произошла ошибка - проверьте правильность введенных данных");
            return;
        }

    }

    return (
        <div className="column-wrapper">
            <h3>Запись в таблицу кандидатов</h3>
                <FormInput id="firstName" placeholder="Имя" />
                <FormInput id="lastName" placeholder="Фамилия" />
                <FormInput className="email" id="email" placeholder="e-mail" />
                <FormInput id="roles_select" placeholder="Введите роль" />
            <DefaultButton text="Записаться" onClickHandler={signUpHandler} />
            <ReadOnlyInput id="signUp_response" />
        </div>
    );
}
